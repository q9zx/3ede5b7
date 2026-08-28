import { PublicHeader } from "@/components/public-header";
import { PublicFooter } from "@/components/public-footer";
import { PropertyCard } from "@/components/property-card";
import { SearchFilters } from "@/components/search-filters";
import type { Property } from "@/types/property";

const demoProperties: Property[] = [
  {
    id: "demo-1",
    code: "1a2b3c",
    slug: "apartamento-venta-las-mercedes",
    title: "Apartamento en venta en Las Mercedes",
    operation_type: "sale",
    property_type: "Apartamento",
    price: 185000,
    currency: "USD",
    state: "Distrito Capital",
    city: "Caracas",
    municipality: "Baruta",
    urbanization: "Las Mercedes",
    bedrooms: 3,
    bathrooms: 3,
    parking_spaces: 2,
    area_built: 145,
    area_land: null,
    description: "Propiedad demostrativa para validar el layout inicial.",
    status: "published",
    youtube_url: null,
    panoee_url: null,
    show_virtual_tour: false,
    featured_level: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

export default function PropertiesPage() {
  return (
    <>
      <PublicHeader />
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold">Propiedades</h1>
          <p className="mt-2 text-metri-ink/70">Busca inmuebles publicados en Metri.immo.</p>
        </div>
        <SearchFilters />
        <section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {demoProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </section>
      </main>
      <PublicFooter />
    </>
  );
}
