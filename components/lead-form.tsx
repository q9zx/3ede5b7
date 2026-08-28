export function LeadForm({ propertyCode }: { propertyCode?: string }) {
  return (
    <form className="grid gap-3 rounded-md border border-metri-line bg-white p-5">
      <input type="hidden" name="property_code" value={propertyCode ?? ""} />
      <h2 className="text-lg font-semibold">Solicitar informacion</h2>
      <input className="rounded-md border border-metri-line px-3 py-2" name="name" placeholder="Nombre" required />
      <input className="rounded-md border border-metri-line px-3 py-2" name="phone" placeholder="Telefono o WhatsApp" required />
      <input className="rounded-md border border-metri-line px-3 py-2" name="email" placeholder="Email opcional" type="email" />
      <textarea className="min-h-28 rounded-md border border-metri-line px-3 py-2" name="message" placeholder="Mensaje" />
      <button className="rounded-md bg-metri-green px-4 py-2 font-semibold text-white" type="submit">
        Enviar solicitud
      </button>
    </form>
  );
}
