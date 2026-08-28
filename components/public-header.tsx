import Link from "next/link";

const links = [
  { href: "/propiedades", label: "Propiedades" },
  { href: "/ayuda", label: "Ayuda" },
  { href: "/admin", label: "Admin" }
];

export function PublicHeader() {
  return (
    <header className="border-b border-metri-line bg-white/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link className="text-xl font-semibold text-metri-green" href="/">
          Metri.immo
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-metri-ink/72">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
