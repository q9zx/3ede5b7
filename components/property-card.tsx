import Link from "next/link";
import { BedDouble, Car, ShowerHead } from "lucide-react";
import type { Property } from "@/types/property";
import { formatPrice } from "@/lib/utils/format";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="rounded-md border border-metri-line bg-white shadow-soft">
      <div className="aspect-[4/3] rounded-t-md bg-metri-mint" />
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-metri-green">{formatPrice(property.price, property.currency)}</p>
            <h2 className="mt-1 line-clamp-2 text-lg font-semibold">{property.title}</h2>
          </div>
          <span className="rounded bg-metri-mist px-2 py-1 text-xs font-semibold uppercase text-metri-ink/65">
            {property.code}
          </span>
        </div>
        <p className="mt-2 text-sm text-metri-ink/65">
          {[property.urbanization, property.municipality, property.city].filter(Boolean).join(", ")}
        </p>
        <div className="mt-4 flex gap-4 text-sm text-metri-ink/70">
          <span className="flex items-center gap-1"><BedDouble className="h-4 w-4" />{property.bedrooms ?? "-"}</span>
          <span className="flex items-center gap-1"><ShowerHead className="h-4 w-4" />{property.bathrooms ?? "-"}</span>
          <span className="flex items-center gap-1"><Car className="h-4 w-4" />{property.parking_spaces ?? "-"}</span>
        </div>
        <Link className="mt-5 inline-flex rounded-md bg-metri-green px-4 py-2 text-sm font-semibold text-white" href={`/propiedad/${property.slug}-${property.code}`}>
          Ver detalle
        </Link>
      </div>
    </article>
  );
}
