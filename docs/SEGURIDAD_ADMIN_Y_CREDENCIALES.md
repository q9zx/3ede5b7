# Seguridad del panel privado

## Principio

El panel `/admin` debe considerarse zona privada desde el primer despliegue.

## MVP

- Crear usuario administrador en Supabase Auth.
- Asignar rol `superadmin` o `admin` en `profiles`.
- Proteger rutas `/admin/*`.
- Usar RLS para impedir escrituras no autorizadas.
- No guardar contrasenas, tokens ni claves reales en GitHub.

## Variables sensibles

Estas variables se configuran en `.env.local` y Vercel:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

La clave `SUPABASE_SERVICE_ROLE_KEY` nunca debe usarse en componentes del navegador.

## Dongle

El Dongle debe estar disponible solo para admin/superadmin porque genera URLs de distribucion comercial.

## Futuro recomendado

- 2FA para administradores.
- Auditoria de acciones.
- Rate limiting.
- Cloudflare Turnstile en formularios sensibles.
- Alertas por actividad inusual.
