import Link from "next/link";
import { Building2, ShieldCheck, Search, Video } from "lucide-react";
import { PublicHeader } from "@/components/public-header";
import { PublicFooter } from "@/components/public-footer";

const pillars = [
  {
    icon: Search,
    title: "Busqueda precisa",
    text: "Filtros por operacion, tipo de inmueble, ubicacion, precio y caracteristicas clave."
  },
  {
    icon: ShieldCheck,
    title: "Confianza digital",
    text: "Base preparada para verificacion, trazabilidad y mejores practicas de privacidad."
  },
  {
    icon: Video,
    title: "Experiencia visual",
    text: "Fotos optimizadas, videos y tours virtuales 360 cuando la propiedad lo permita."
  }
];

export default function HomePage() {
  return (
    <>
      <PublicHeader />
      <main>
        <section className="mx-auto grid min-h-[72vh] max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-metri-green">
              Tecnologia, confianza y precision inmobiliaria
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-metri-ink md:text-6xl">
              Metri.immo
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-metri-ink/72">
              Un portal inmobiliario para Venezuela disenado desde el inicio como una plataforma seria:
              propiedades mejor presentadas, datos ordenados, enlaces compartibles y herramientas para asesores.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="rounded-md bg-metri-green px-5 py-3 text-sm font-semibold text-white" href="/propiedades">
                Ver propiedades
              </Link>
              <Link className="rounded-md border border-metri-line px-5 py-3 text-sm font-semibold" href="/ayuda">
                Contacto y ayuda
              </Link>
            </div>
          </div>
          <div className="rounded-md border border-metri-line bg-white p-6 shadow-soft">
            <div className="flex items-center gap-3 border-b border-metri-line pb-5">
              <Building2 className="h-8 w-8 text-metri-green" />
              <div>
                <p className="text-sm text-metri-ink/60">MVP operativo</p>
                <h2 className="text-xl font-semibold">Portal + Admin + Dongle</h2>
              </div>
            </div>
            <div className="grid gap-4 pt-5">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article key={pillar.title} className="flex gap-4">
                    <Icon className="mt-1 h-5 w-5 shrink-0 text-metri-gold" />
                    <div>
                      <h3 className="font-semibold">{pillar.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-metri-ink/70">{pillar.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  );
}
