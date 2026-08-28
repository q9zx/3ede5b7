export default function NewPropertyPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold">Nueva propiedad</h1>
      <form className="mt-6 grid gap-4 rounded-md border border-metri-line bg-white p-5">
        <input className="rounded-md border border-metri-line px-3 py-2" name="title" placeholder="Titulo de la propiedad" />
        <div className="grid gap-4 md:grid-cols-3">
          <select className="rounded-md border border-metri-line px-3 py-2" name="operation_type">
            <option>Venta</option>
            <option>Alquiler</option>
            <option>Alquiler vacacional</option>
          </select>
          <input className="rounded-md border border-metri-line px-3 py-2" name="property_type" placeholder="Tipo de inmueble" />
          <input className="rounded-md border border-metri-line px-3 py-2" name="price" placeholder="Precio USD" />
        </div>
        <textarea className="min-h-32 rounded-md border border-metri-line px-3 py-2" name="description" placeholder="Descripcion" />
        <label className="flex items-center gap-3 text-sm font-medium">
          <input name="show_virtual_tour" type="checkbox" />
          Mostrar Tour Virtual 360 Panoee si existe URL valida
        </label>
        <button className="w-fit rounded-md bg-metri-green px-4 py-2 font-semibold text-white" type="submit">
          Guardar borrador
        </button>
      </form>
    </section>
  );
}
