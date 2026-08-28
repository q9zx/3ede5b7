export function SearchFilters() {
  return (
    <form className="grid gap-3 rounded-md border border-metri-line bg-white p-4 md:grid-cols-4">
      <select className="rounded-md border border-metri-line px-3 py-2" name="operation">
        <option value="">Operacion</option>
        <option value="sale">Venta</option>
        <option value="rent">Alquiler</option>
        <option value="vacation_rent">Alquiler vacacional</option>
      </select>
      <select className="rounded-md border border-metri-line px-3 py-2" name="type">
        <option value="">Tipo</option>
        <option>Apartamento</option>
        <option>Casa</option>
        <option>Local</option>
        <option>Oficina</option>
        <option>Terreno</option>
      </select>
      <input className="rounded-md border border-metri-line px-3 py-2" name="location" placeholder="Urbanizacion o ciudad" />
      <button className="rounded-md bg-metri-green px-4 py-2 font-semibold text-white" type="submit">
        Buscar
      </button>
    </form>
  );
}
