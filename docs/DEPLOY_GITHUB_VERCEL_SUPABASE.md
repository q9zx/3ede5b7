# Guia de implementacion

## GitHub

1. Crear repositorio `metri-immo`.
2. Subir todos los archivos de este paquete.
3. Confirmar que `.env.local` no esta incluido.

## Supabase

1. Crear proyecto.
2. Abrir SQL Editor.
3. Ejecutar `supabase/migrations/0001_initial_schema.sql`.
4. Crear bucket de Storage para imagenes, por ejemplo `property-images`.
5. Configurar Auth.

## Vercel

1. Importar repositorio desde GitHub.
2. Agregar variables de entorno.
3. Deploy.

## Cloudflare

1. Agregar dominio.
2. Configurar DNS hacia Vercel.
3. Activar SSL.
4. Activar WAF y Bot Fight Mode.
5. Agregar Turnstile para formularios cuando se implemente.
