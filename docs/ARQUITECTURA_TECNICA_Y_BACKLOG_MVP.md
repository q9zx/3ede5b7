# METRI.IMMO - Arquitectura Tecnica y Backlog MVP v1.0

## Proposito

Traducir la vision empresarial de Metri.immo a piezas tecnicas construibles: base de datos, rutas, pantallas, reglas de negocio, seguridad y backlog.

## Arquitectura

- GitHub: repositorio de codigo.
- Vercel: hosting de Next.js.
- Supabase: PostgreSQL, Auth, Storage y politicas RLS.
- Cloudflare: DNS, SSL, WAF, Turnstile y proteccion.

## Modelo de datos MVP

- `profiles`: usuarios internos y futuros asesores.
- `properties`: propiedades.
- `property_images`: fotos.
- `property_features`: catalogo de caracteristicas.
- `property_feature_links`: relacion propiedad-caracteristica.
- `leads`: solicitudes de contacto.
- `share_links`: auditoria de URLs generadas por Dongle.
- `settings`: interruptores globales.

## Pantallas publicas

- Inicio.
- Listado y busqueda de propiedades.
- Detalle SEO.
- Vista corta `/v/[code]` sin datos directos de contacto.
- Ayuda y contacto.

## Pantallas privadas

- Login admin.
- Dashboard.
- Listado de propiedades.
- Crear propiedad.
- Editar propiedad.
- Carga y orden manual de imagenes.
- Leads.
- Configuracion.
- Dongle de URLs.

## Reglas de negocio MVP

- Toda propiedad debe tener codigo hex unico de 6 digitos.
- Una propiedad publicada debe tener titulo, tipo, operacion, ubicacion, precio o indicacion de consulta, descripcion y al menos una imagen.
- El tour virtual solo aparece si `show_virtual_tour = true` y existe `panoee_url`.
- La ruta `/v/[code]` no debe mostrar datos privados del asesor ni captador.
- La ruta `/v/[code]` debe canalizar contacto por formulario o WhatsApp general.
- Solo admin o superadmin puede crear enlaces Dongle.
- No se guardan credenciales reales en el repositorio.
- En produccion, `/admin/*` debe estar protegido por Supabase Auth y politicas RLS.

## Backlog por sprints

### Sprint 1: Base tecnica

- Crear proyecto Next.js.
- Configurar Tailwind.
- Crear layout publico.
- Crear navegacion.
- Crear tipos TypeScript.
- Crear `.env.example`.

### Sprint 2: Supabase

- Crear migracion inicial.
- Crear tablas.
- Crear indices.
- Activar RLS.
- Crear politicas basicas.
- Configurar clientes Supabase.

### Sprint 3: Portal publico

- Crear listado.
- Crear filtros.
- Crear tarjeta de propiedad.
- Crear detalle SEO.
- Crear vista `/v/[code]`.
- Crear formulario de lead.

### Sprint 4: Admin

- Crear dashboard.
- Crear listado privado de propiedades.
- Crear formulario de propiedad.
- Crear carga de imagenes.
- Crear toggle de Panoee.
- Crear estados de publicacion.

### Sprint 5: Dongle y confianza

- Crear modulo `/admin/dongle`.
- Generar URLs automaticas.
- Registrar enlaces en `share_links`.
- Crear vista publica sin contacto directo.
- Documentar reglas de privacidad.

### Sprint 6: Deploy

- Subir a GitHub.
- Crear proyecto Vercel.
- Crear proyecto Supabase.
- Ejecutar migraciones.
- Configurar variables de entorno.
- Conectar dominio con Cloudflare.
