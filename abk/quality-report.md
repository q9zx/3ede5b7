# Quality Report — LINK Framework Engine RC1.1

Fecha: 2026-07-18  
Estado: listo para publicación estática; pendiente la comprobación remota posterior al despliegue.

| Control | Resultado | Evidencia |
|---|---|---|
| HTML5 | Aprobado | Estructura semántica, un único `h1`, diálogos y atributos requeridos revisados. |
| CSS3 | Aprobado | Diseño responsive, contraste de superficies y reducción de movimiento incluidos. |
| JavaScript | Aprobado | Carga diferida, carrusel, lightbox, teclado, diálogos y foco gestionados sin dependencias. |
| Identidad corporativa | Aprobado | Marca visible METRI.IMMO y paleta navy–oro restauradas sin cambiar la composición de escritorio. |
| Responsive | Aprobado | Mobile Premium Shell limitado a `max-width: 820px`, con safe areas, controles de 44 px y prevención de desbordamiento horizontal. |
| Accesibilidad | Aprobado | Skip link, textos alternativos, botones etiquetados, foco visible y navegación por teclado. |
| Performance | Aprobado | Imagen hero priorizada, galería diferida, `decoding="async"` y mapa lazy. |
| SEO | Aprobado | Title, description, canonical de METRI.IMMO, robots, Open Graph, Twitter Cards y JSON-LD presentes. |
| Vista previa social | Aprobado estático | Imagen Hero local con URL pública METRI.IMMO, título, descripción y URL canónica; sin la palabra restringida. |
| Hero y carrusel | Aprobado | Se revisaron las 12 fotografías: la fachada se seleccionó para HERO y el carrusel se ordena por recorrido de propiedad, con controles y lightbox. |
| Favicon | Aprobado estático | Referencias normal, shortcut y Apple touch a `favicon.png` local. |
| Google Maps | Aprobado | Iframe exacto, lazy loading y política de referencia solicitada. |
| Enlaces internos | Aprobado | Anclas, recursos relativos y rutas GitHub Pages revisadas. |
| Integridad de contenido | Aprobado | Eliminados campos de habitaciones, baños y ubicación administrativa no proporcionados. |

## Recursos verificados

- `favicon.png` existe localmente en `abk`.
- Las 12 fotografías indicadas están incluidas localmente en `abk`; la fachada (`abka.jpg`) se mantiene como Hero por su encuadre comercial y legibilidad.

## Verificación posterior al despliegue

- Abrir `https://www.metri.immo/abk/` para comprobar disponibilidad HTTPS, favicon en Safari iOS y la tarjeta real de WhatsApp/X. Estos controles requieren que el dominio y los archivos ya estén publicados; no se marcaron como ejecutados localmente.
