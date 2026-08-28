import Link from "next/link";

export default function AdminPropertiesPage() {
  return (
    <section>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">Propiedades</h1>
          <p className="mt-2 text-metri-ink/65">Gestiona borradores, publicaciones, ventas y alquileres.</p>
        </div>
        <Link className="rounded-md bg-metri-green px-4 py-2 text-sm font-semibold text-white" href="/admin/propiedades/nueva">
          Nueva propiedad
        </Link>
      </div>
      <div className="mt-6 rounded-md border border-metri-line bg-white p-5">
        <p className="text-sm text-metri-ink/65">La tabla se conectara a Supabase en la siguiente fase.</p>
      </div>
    </section>
  );
}
