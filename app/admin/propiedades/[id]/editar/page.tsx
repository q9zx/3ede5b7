export default async function EditPropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <section>
      <p className="text-sm font-semibold uppercase text-metri-green">Propiedad {id}</p>
      <h1 className="mt-2 text-3xl font-semibold">Editar propiedad</h1>
      <form className="mt-6 grid gap-4 rounded-md border border-metri-line bg-white p-5">
        <input className="rounded-md border border-metri-line px-3 py-2" name="title" placeholder="Titulo de la propiedad" />
        <textarea className="min-h-32 rounded-md border border-metri-line px-3 py-2" name="description" placeholder="Descripcion" />
        <div className="grid gap-4 md:grid-cols-3">
          <input className="rounded-md border border-metri-line px-3 py-2" name="youtube_url" placeholder="URL YouTube" />
          <input className="rounded-md border border-metri-line px-3 py-2" name="panoee_url" placeholder="URL Panoee" />
          <select className="rounded-md border border-metri-line px-3 py-2" name="status">
            <option value="draft">Borrador</option>
            <option value="published">Publicada</option>
            <option value="hidden">Oculta</option>
            <option value="sold">Vendida</option>
            <option value="rented">Alquilada</option>
          </select>
        </div>
        <label className="flex items-center gap-3 text-sm font-medium">
          <input name="show_virtual_tour" type="checkbox" />
          Mostrar Tour Virtual 360 Panoee
        </label>
        <button className="w-fit rounded-md bg-metri-green px-4 py-2 font-semibold text-white" type="submit">
          Guardar cambios
        </button>
      </form>
    </section>
  );
}
