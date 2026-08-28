export default function AdminPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {["Propiedades publicadas", "Leads nuevos", "Enlaces dongle"].map((item) => (
          <article className="rounded-md border border-metri-line bg-white p-5" key={item}>
            <p className="text-sm text-metri-ink/60">{item}</p>
            <p className="mt-2 text-3xl font-semibold">0</p>
          </article>
        ))}
      </div>
    </section>
  );
}
