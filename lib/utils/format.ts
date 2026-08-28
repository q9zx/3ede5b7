export function formatPrice(price: number | null, currency = "USD") {
  if (price === null) return "Consultar precio";

  return new Intl.NumberFormat("es-VE", {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(price);
}

export function normalizeCode(code: string) {
  return code.trim().toLowerCase();
}
