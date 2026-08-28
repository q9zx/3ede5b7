export default function AdminLoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-metri-mist px-6">
      <section className="w-full max-w-md rounded-md border border-metri-line bg-white p-6 shadow-soft">
        <p className="text-sm font-semibold uppercase text-metri-green">Acceso privado</p>
        <h1 className="mt-2 text-3xl font-semibold">Ingresar a Metri.immo</h1>
        <p className="mt-3 text-sm leading-6 text-metri-ink/68">
          Esta pantalla queda preparada para conectarse con Supabase Auth. No coloques credenciales reales en el codigo.
        </p>
        <form className="mt-6 grid gap-3">
          <input className="rounded-md border border-metri-line px-3 py-2" name="email" placeholder="Email" type="email" />
          <input className="rounded-md border border-metri-line px-3 py-2" name="password" placeholder="Contrasena" type="password" />
          <button className="rounded-md bg-metri-green px-4 py-2 font-semibold text-white" type="submit">
            Entrar
          </button>
        </form>
      </section>
    </main>
  );
}
