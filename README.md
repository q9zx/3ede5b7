# Metri.immo MVP v1

Starter kit tecnico para el portal inmobiliario Metri.immo.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase Auth, PostgreSQL y Storage
- Vercel para despliegue
- Cloudflare para DNS, WAF, SSL y proteccion

## Flujo recomendado

1. Subir este proyecto a GitHub.
2. Crear un proyecto en Supabase.
3. Ejecutar las migraciones en `supabase/migrations`.
4. Copiar `.env.example` como `.env.local`.
5. Configurar las variables reales.
6. Ejecutar `npm install`.
7. Ejecutar `npm run dev`.
8. Conectar GitHub con Vercel.

## Variables importantes

No subas credenciales reales a GitHub. Usa `.env.local` en local y variables de entorno en Vercel.

## Rutas principales

- `/`: inicio
- `/propiedades`: listado y busqueda
- `/propiedad/[slug]`: detalle SEO
- `/v/[code]`: enlace corto sin datos directos de contacto
- `/ayuda`: ayuda, FAQ y contacto
- `/admin`: panel privado
- `/admin/propiedades`: gestion de propiedades
- `/admin/propiedades/nueva`: crear propiedad
- `/admin/dongle`: generador automatico de URLs sin datos de contacto

## Dongle de URLs privadas

El modulo Dongle genera enlaces cortos para compartir propiedades sin exponer datos directos del asesor o captador.

Ejemplo:

```txt
https://www.metri.immo/v/1a2b3c
```

Ese enlace muestra una ficha publica limpia, con formulario de interes y WhatsApp general de Metri.immo, sin datos privados de contacto.
