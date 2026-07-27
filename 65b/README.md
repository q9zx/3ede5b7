# METRI.IMMO LINK FRAMEWORK — BETA 1

Publicación inmobiliaria estática `65b`, generada el 26 de julio de 2026 por OpenAI Codex.

## Estructura

La carpeta debe contener:

- `index.html`
- `styles.css`
- `script.js`
- `favicon.png`
- las imágenes de la publicación (`65ba.png` a `65bp.png`, conservando `65be.jpg`)

No necesita instalación, Node, npm, compilación, base de datos ni servidor.

## Crear una nueva propiedad

1. Duplica la carpeta completa.
2. Cambia el nombre de la carpeta por el nuevo código.
3. Sustituye las fotografías sin modificar el orden definido en `script.js`.
4. Actualiza el contenido y los metadatos de `index.html`.
5. Mantén `styles.css` sin cambios para conservar la identidad visual.

## Cambiar imágenes

Edita el arreglo `propertyImages` de `script.js`. Cada elemento requiere:

- `src`: ruta local relativa.
- `alt`: descripción breve y verificable.

La primera imagen del arreglo será la imagen principal.

## Modificar SEO y Open Graph

En el `<head>` de `index.html`, actualiza:

- `<title>`
- `meta name="description"`
- canonical
- etiquetas Open Graph
- etiquetas Twitter
- bloque JSON-LD

Las imágenes Open Graph deben usar una URL pública absoluta.

## Cambiar el mapa

Sustituye únicamente el `src` del iframe de Google Maps y actualiza su atributo `title`.

## Cambiar la descripción

Actualiza el hero, el resumen, la ficha rápida y las secciones de contenido en `index.html`. No agregues información no confirmada.

## Publicar en GitHub Pages

1. Sube la carpeta completa al repositorio.
2. Conserva todas las rutas relativas.
3. No modifiques `CNAME` ni otras publicaciones.
4. Verifica la URL pública y la tarjeta Open Graph después de la propagación.
