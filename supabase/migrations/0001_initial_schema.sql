create extension if not exists pgcrypto;

create type public.user_role as enum ('superadmin', 'admin', 'advisor', 'viewer');
create type public.property_status as enum ('draft', 'published', 'hidden', 'sold', 'rented');
create type public.operation_type as enum ('sale', 'rent', 'vacation_rent');
create type public.lead_status as enum ('new', 'contacted', 'closed', 'discarded');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role public.user_role not null default 'viewer',
  full_name text,
  phone text,
  email text,
  company_name text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.properties (
  id uuid primary key default gen_random_uuid(),
  code char(6) not null unique check (code ~ '^[0-9a-f]{6}$'),
  slug text not null,
  title text not null,
  operation_type public.operation_type not null,
  property_type text not null,
  price numeric(14,2),
  currency char(3) not null default 'USD',
  country text not null default 'Venezuela',
  state text,
  city text,
  municipality text,
  urbanization text,
  address_reference text,
  area_land numeric(10,2),
  area_built numeric(10,2),
  bedrooms smallint,
  bathrooms numeric(4,1),
  parking_spaces smallint,
  storage_rooms smallint,
  floor smallint,
  age_years smallint,
  condition text,
  description text,
  youtube_url text,
  panoee_url text,
  show_virtual_tour boolean not null default false,
  status public.property_status not null default 'draft',
  featured_level smallint not null default 0 check (featured_level between 0 and 3),
  created_by uuid references public.profiles(id),
  captor_id uuid references public.profiles(id),
  closer_id uuid references public.profiles(id),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.property_images (
  id uuid primary key default gen_random_uuid(),
  property_id uuid not null references public.properties(id) on delete cascade,
  storage_path text not null,
  alt_text text,
  sort_order smallint not null default 0,
  is_cover boolean not null default false,
  width integer,
  height integer,
  size_bytes integer,
  created_at timestamptz not null default now(),
  unique (property_id, sort_order)
);

create table public.property_features (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  category text,
  created_at timestamptz not null default now()
);

create table public.property_feature_links (
  property_id uuid not null references public.properties(id) on delete cascade,
  feature_id uuid not null references public.property_features(id) on delete cascade,
  primary key (property_id, feature_id)
);

create table public.leads (
  id uuid primary key default gen_random_uuid(),
  property_id uuid references public.properties(id) on delete set null,
  source text not null default 'site',
  name text not null,
  email text,
  phone text,
  message text,
  status public.lead_status not null default 'new',
  consent_privacy boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.share_links (
  id uuid primary key default gen_random_uuid(),
  property_id uuid not null references public.properties(id) on delete cascade,
  code char(6) not null,
  mode text not null default 'no_contact',
  source text not null default 'admin_dongle',
  url_path text not null,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create table public.settings (
  key text primary key,
  value jsonb not null,
  updated_by uuid references public.profiles(id),
  updated_at timestamptz not null default now()
);

create index properties_code_idx on public.properties(code);
create index properties_status_idx on public.properties(status);
create index properties_location_idx on public.properties(state, city, municipality, urbanization);
create index properties_search_idx on public.properties using gin (to_tsvector('spanish', coalesce(title, '') || ' ' || coalesce(description, '')));
create index property_images_property_sort_idx on public.property_images(property_id, sort_order);
create index leads_property_created_idx on public.leads(property_id, created_at desc);
create index share_links_code_idx on public.share_links(code);

alter table public.profiles enable row level security;
alter table public.properties enable row level security;
alter table public.property_images enable row level security;
alter table public.property_features enable row level security;
alter table public.property_feature_links enable row level security;
alter table public.leads enable row level security;
alter table public.share_links enable row level security;
alter table public.settings enable row level security;

create policy "published properties are public"
on public.properties for select
using (status = 'published');

create policy "property images for published properties are public"
on public.property_images for select
using (
  exists (
    select 1 from public.properties p
    where p.id = property_images.property_id
    and p.status = 'published'
  )
);

create policy "features are public"
on public.property_features for select
using (true);

create policy "feature links are public for published properties"
on public.property_feature_links for select
using (
  exists (
    select 1 from public.properties p
    where p.id = property_feature_links.property_id
    and p.status = 'published'
  )
);

create policy "anyone can create leads"
on public.leads for insert
with check (consent_privacy = true);

create policy "admins manage all properties"
on public.properties for all
using (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid()
    and p.role in ('superadmin', 'admin')
    and p.is_active
  )
)
with check (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid()
    and p.role in ('superadmin', 'admin')
    and p.is_active
  )
);

create policy "admins manage share links"
on public.share_links for all
using (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid()
    and p.role in ('superadmin', 'admin')
    and p.is_active
  )
)
with check (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid()
    and p.role in ('superadmin', 'admin')
    and p.is_active
  )
);
