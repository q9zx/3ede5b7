import Link from "next/link";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/propiedades", label: "Propiedades" },
  { href: "/admin/propiedades/nueva", label: "Nueva propiedad" },
  { href: "/admin/leads", label: "Leads" },
  { href: "/admin/dongle", label: "Dongle URLs" },
  { href: "/admin/configuracion", label: "Configuracion" }
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-metri-mist">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-metri-line bg-white p-5 md:block">
        <Link className="text-xl font-semibold text-metri-green" href="/">
          Metri.immo
        </Link>
        <nav className="mt-8 grid gap-2 text-sm font-medium">
          {links.map((link) => (
            <Link className="rounded-md px-3 py-2 hover:bg-metri-mint" key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="md:pl-64">
        <div className="mx-auto max-w-6xl px-6 py-8">{children}</div>
      </main>
    </div>
  );
}
