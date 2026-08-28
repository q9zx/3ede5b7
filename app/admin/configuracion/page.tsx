export default function AdminSettingsPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold">Configuracion</h1>
      <div className="mt-6 grid gap-4 rounded-md border border-metri-line bg-white p-5">
        <label className="flex items-center gap-3 text-sm font-medium">
          <input name="global_virtual_tours_enabled" type="checkbox" />
          Activar visualizacion publica de Tours Virtuales 360
        </label>
        <label className="flex items-center gap-3 text-sm font-medium">
          <input name="dongle_enabled" type="checkbox" defaultChecked />
          Activar generador Dongle de URLs sin contacto
        </label>
        <button className="w-fit rounded-md bg-metri-green px-4 py-2 font-semibold text-white" type="submit">
          Guardar configuracion
        </button>
      </div>
    </section>
  );
}
