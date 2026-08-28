import { PublicFooter } from "@/components/public-footer";
import { PublicHeader } from "@/components/public-header";

const faqs = [
  "Como publico una propiedad?",
  "Por que se rechazo mi publicacion?",
  "Cuantas fotos puedo subir por propiedad?",
  "Como funcionan los enlaces sin datos de contacto?",
  "Como solicito soporte sobre mi cuenta?"
];

export default function HelpPage() {
  return (
    <>
      <PublicHeader />
      <main className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-3xl font-semibold">Ayuda y contacto</h1>
        <p className="mt-3 leading-7 text-metri-ink/72">
          Atencion principal en espanol. Si el usuario desea usar traduccion automatica de WhatsApp, debe considerar que la calidad depende de Meta/WhatsApp.
        </p>
        <section className="mt-8 grid gap-3">
          {faqs.map((faq) => (
            <article key={faq} className="rounded-md border border-metri-line bg-white p-4">
              <h2 className="font-semibold">{faq}</h2>
              <p className="mt-2 text-sm text-metri-ink/65">Respuesta pendiente de completar en el Operating System.</p>
            </article>
          ))}
        </section>
      </main>
      <PublicFooter />
    </>
  );
}
