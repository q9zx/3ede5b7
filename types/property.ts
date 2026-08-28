export type PropertyStatus = "draft" | "published" | "hidden" | "sold" | "rented";
export type OperationType = "sale" | "rent" | "vacation_rent";

export type Property = {
  id: string;
  code: string;
  slug: string;
  title: string;
  operation_type: OperationType;
  property_type: string;
  price: number | null;
  currency: string;
  state: string | null;
  city: string | null;
  municipality: string | null;
  urbanization: string | null;
  bedrooms: number | null;
  bathrooms: number | null;
  parking_spaces: number | null;
  area_built: number | null;
  area_land: number | null;
  description: string | null;
  status: PropertyStatus;
  youtube_url: string | null;
  panoee_url: string | null;
  show_virtual_tour: boolean;
  featured_level: number;
  created_at: string;
  updated_at: string;
};

export type PropertyImage = {
  id: string;
  property_id: string;
  storage_path: string;
  alt_text: string | null;
  sort_order: number;
  is_cover: boolean;
};
