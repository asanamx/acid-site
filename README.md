# ACID — Sitio oficial

One-page de la productora, construido en **Next.js 14 (App Router)** y listo para **Vercel**.

## Arranque

```bash
npm install
npm run dev      # http://localhost:3000
```

## Deploy en Vercel

1. Sube este folder a un repo de GitHub.
2. En Vercel: **Add New Project → Import** el repo. Detecta Next.js solo; no requiere configuración.
3. Cada `git push` publica automáticamente.

El proyecto usa `output: 'export'` (sitio estático puro). Si algún día necesitas rutas dinámicas o API routes, elimina esa línea de `next.config.mjs`.

## Dónde se edita todo

| Qué                                   | Dónde                                  |
|---------------------------------------|----------------------------------------|
| Textos, proyectos, marcas, servicios  | `data/content.js` (ES y EN juntos)     |
| Correo de contacto                    | `UI.contactEmail` en `data/content.js` |
| Estilos y paleta                      | `app/globals.css` (variables en `:root`)|
| Estructura de secciones               | `app/page.jsx`                         |
| Logos ACID (vectores oficiales)       | `components/Brand.jsx` — no tocar      |

## Logotipos de marcas (marquee)

Coloca los logos oficiales de tus clientes en `public/logos/` con estos nombres:

```
landrover.svg  mtv.svg  bbva.svg  tec.svg  pachuca.svg
tajin.svg  bamx.svg  hlb.svg  catal.svg  zoebisch.svg
```

- Formato ideal: **SVG monocromo** (o PNG con fondo transparente).
- El CSS los pinta de blanco automáticamente (`filter`), así que sirve cualquier versión de un solo color.
- Si un archivo no existe, el sitio muestra el nombre en texto — nada se rompe.

## Videos del portafolio

Los masters pesan gigas: **no van al repo**. Sube cada pieza a Vimeo (o un CDN)
y pega el link mp4/HLS en el campo `video` de cada proyecto en `data/content.js`:

```js
{ key: 'defender', video: 'https://player.vimeo.com/progressive/...' , ... }
```

Mientras el campo esté vacío, el lightbox muestra un aviso elegante en vez de error.

## Identidad

Paleta oficial en `globals.css`: Noche `#1A1A1A`, Carbón `#2E2E2E`, Neblina `#B8BFC7`,
Amanecer `#ECEEF0`, Rojo ACiD `#BC0000`. Wordmark e isotipo son los vectores exactos
extraídos de `LOGOS.ai`.

## Formulario de contacto

Sin configurar nada, el botón **Enviar** abre el correo del visitante con los datos
precargados (mailto). Para recibir los envíos directo en tu bandeja sin que el visitante
abra su correo: crea una cuenta gratis en [Formspree](https://formspree.io), copia la URL
de tu form y pégala en `FORM.endpoint` dentro de `data/content.js`.

## Agente de informes (IA)

El sitio incluye un chat flotante conectado a `/api/chat` (función serverless).

1. En Vercel: **Settings → Environment Variables** → agrega `ANTHROPIC_API_KEY`
   (la obtienes en console.anthropic.com).
2. Redeploy. Listo: el asistente responde con contexto de ACID (servicios, marcas, método)
   y dirige a los visitantes al formulario.

Sin llave configurada, el chat responde con un mensaje de cortesía que remite al correo —
nada se rompe. El conocimiento del agente se edita en `app/api/chat/route.js` (constante
`SYSTEM`).

## Páginas legales

`/aviso-de-privacidad` (LFPDPPP) y `/aviso-legal` están enlazadas desde el footer.
**Son plantillas**: sustituye los campos entre [CORCHETES] (razón social, domicilio,
correo, fecha) y revísalas con tu asesor antes de publicar.
