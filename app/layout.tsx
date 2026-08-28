import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Metri.immo",
    template: "%s | Metri.immo"
  },
  description:
    "Portal inmobiliario venezolano orientado a confianza, calidad visual y tecnologia para mejores decisiones inmobiliarias.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.metri.immo")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
