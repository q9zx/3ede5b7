import { LeadForm } from "@/components/lead-form";
import { PublicFooter } from "@/components/public-footer";
import { PublicHeader } from "@/components/public-header";

export default async function ShortPropertyPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;

  return (
    <>
      <PublicHeader />
      <main className="mx-auto max-w-5xl px-6 py-10">
        <section className="rounded-md border border-metri-line bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase text-metri-green">Enlace privado sin contacto directo</p>
          <h1 className="mt-2 text-3xl font-semibold">Propiedad {code}</h1>
          <p className="mt-4 max-w-3xl leading-7 text-metri-ink/72">
            Esta vista esta disenada para compartir por WhatsApp o redes sin exponer datos directos del asesor o captador.
            La solicitud se canaliza por Metri.immo.
          </p>
        </section>
        <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="aspect-[16/10] rounded-md bg-metri-mint" />
          <LeadForm propertyCode={code} />
        </section>
      </main>
      <PublicFooter />
    </>
  );
}
