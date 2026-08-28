"use client";

import { useMemo, useState } from "react";
import { buildDongleUrl, isValidHexCode } from "@/lib/dongle";

export default function DonglePage() {
  const [code, setCode] = useState("");
  const [source, setSource] = useState("whatsapp");
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.metri.immo";
  const isValid = isValidHexCode(code);
  const generatedUrl = useMemo(
    () => (isValid ? buildDongleUrl({ siteUrl, code, source, mode: "no_contact" }) : ""),
    [code, isValid, siteUrl, source]
  );

  return (
    <section>
      <p className="text-sm font-semibold uppercase text-metri-green">Aplicacion Dongle</p>
      <h1 className="mt-2 text-3xl font-semibold">Generador de URLs sin datos de contacto</h1>
      <p className="mt-3 max-w-3xl leading-7 text-metri-ink/70">
        Crea enlaces cortos para compartir propiedades por WhatsApp o redes. El enlace dirige a una vista publica limpia,
        sin datos directos del asesor o captador, y canaliza el interes mediante Metri.immo.
      </p>

      <div className="mt-6 grid gap-4 rounded-md border border-metri-line bg-white p-5">
        <label className="grid gap-2">
          <span className="text-sm font-semibold">Codigo hexadecimal de 6 digitos</span>
          <input
            className="rounded-md border border-metri-line px-3 py-2"
            maxLength={6}
            onChange={(event) => setCode(event.target.value)}
            placeholder="1a2b3c"
            value={code}
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-semibold">Fuente de uso</span>
          <select className="rounded-md border border-metri-line px-3 py-2" onChange={(event) => setSource(event.target.value)} value={source}>
            <option value="whatsapp">WhatsApp</option>
            <option value="instagram">Instagram</option>
            <option value="email">Email</option>
            <option value="admin_dongle">Admin Dongle</option>
          </select>
        </label>
        <div className="rounded-md bg-metri-mist p-4">
          <p className="text-sm font-semibold">URL generada</p>
          <p className="mt-2 break-all text-sm text-metri-ink/75">{generatedUrl || "Ingresa un codigo valido."}</p>
        </div>
        <button
          className="w-fit rounded-md bg-metri-green px-4 py-2 font-semibold text-white disabled:opacity-45"
          disabled={!generatedUrl}
          onClick={() => navigator.clipboard.writeText(generatedUrl)}
          type="button"
        >
          Copiar URL
        </button>
      </div>
    </section>
  );
}
