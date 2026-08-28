import { LeadForm } from "@/components/lead-form";
import { PublicFooter } from "@/components/public-footer";
import { PublicHeader } from "@/components/public-header";

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const code = slug.slice(-6);

  return (
    <>
      <PublicHeader />
      <main className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1fr_360px]">
        <section>
          <div className="aspect-[16/9] rounded-md bg-metri-mint" />
          <div className="mt-6 rounded-md border border-metri-line bg-white p-6">
            <p className="text-sm font-semibold uppercase text-metri-green">Codigo {code}</p>
            <h1 className="mt-2 text-3xl font-semibold">Detalle de propiedad</h1>
            <p className="mt-4 leading-7 text-metri-ink/72">
              Esta pagina queda preparada para cargar datos reales desde Supabase usando el slug SEO y el codigo hex de 6 digitos.
            </p>
          </div>
        </section>
        <aside>
          <LeadForm propertyCode={code} />
        </aside>
      </main>
      <PublicFooter />
    </>
  );
}
