import { normalizeCode } from "@/lib/utils/format";

export type DongleShareMode = "no_contact" | "lead_form" | "whatsapp_general";

export function buildDongleUrl(params: {
  siteUrl: string;
  code: string;
  mode?: DongleShareMode;
  source?: string;
}) {
  const url = new URL(`/v/${normalizeCode(params.code)}`, params.siteUrl);
  url.searchParams.set("mode", params.mode ?? "no_contact");
  url.searchParams.set("src", params.source ?? "admin_dongle");
  return url.toString();
}

export function isValidHexCode(code: string) {
  return /^[0-9a-fA-F]{6}$/.test(code.trim());
}
