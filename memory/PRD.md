# ACID — Sitio oficial (productora multimedia)

## Problem statement (original)
Sitio oficial one-page de ACID, productora multimedia. Ya construido y funcionando.
NO regenerar, NO cambiar de framework, NO rediseñar. Solo cambios quirúrgicos sobre lo existente.

## Stack fijo (no negociable)
- Next.js 14 (App Router), JavaScript (sin TypeScript).
- CSS plano en `app/globals.css` (sin Tailwind / styled-components / librerías UI).
- Bilingüe ES/EN con toggle. Deploy en Vercel.
- Chat de informes: `app/api/chat/route.js` (Anthropic API vía `ANTHROPIC_API_KEY`).
- **La app vive en la RAÍZ `/app`** (no en `/app/frontend`).

## Arquitectura
- `data/content.js`: TODO el contenido editable (textos {es,en}, proyectos, marcas, servicios, formulario, footer, agente).
- `app/page.jsx`: one-page (hero+video, marquee, trabajo, estudio, servicios, método, arsenal, contacto, footer, lightbox, chat).
- `components/Brand.jsx`: vectores oficiales del logo — PROHIBIDO modificar.
- `/aviso-de-privacidad` y `/aviso-legal`: páginas legales (solo editar datos, no estructura).
- Paleta en `:root`: Noche #1A1A1A, Carbón #2E2E2E, Neblina #B8BFC7, Amanecer #ECEEF0, Rojo ACiD #BC0000.

## Historial de cambios
- **2026-06-10 — QA (solo revisión, sin cambios de código):** build compila limpio (exit 0);
  anclas del nav (#work/#services/#studio/#contact) funcionan; responsive OK a 375/768/1440 sin overflow;
  legales cargan (200). Hallazgos: nav sin menú móvil en <=820px (por diseño); hint "VER TRABAJO"
  roza el FAB del chat en desktop; logos/videos/legales con placeholders pendientes de datos reales.
- **2026-06-10 — FIX preview en blanco (infra, sin tocar el repo):** supervisor `frontend`
  apuntaba a `/app/frontend` (inexistente) → app nunca arrancaba en :3000. Config corregida a
  `directory=/app` + `command=yarn dev` en PORT=3000. Verificado por testing_agent: 100% frontend,
  home + ambas legales renderizan, anclas y toggle ES/EN OK.

- **2026-06-12 — Nitidez / pixelado (cambios quirúrgicos, verificado 100%):**
  Causa raíz del "todo pixeleado" en monitor 1x = overlay `.grain` a pantalla completa (op .05).
  (1) `.grain` opacidad .05 → .02 (textura fílmica sutil, quita percepción de pixeleo sobre texto/UI).
  (2) Asterisco eliminado del logo del header (queda solo wordmark "ACID"); se mantiene en footer,
  contacto y FAB del chat. (3) Correo → `contacto@acidstudio.mx` (dominio confirmado acidstudio.mx).
  Logo/wordmark/asterisco son SVG vectoriales → nítidos a cualquier resolución. Pixelado restante de
  thumbnails = limitación del archivo fuente (JPG 1000×562 muy comprimidos, algunos con texto quemado).

## Pendiente (a la espera de datos del usuario, en un solo mensaje)
- Correo definitivo (`UI.contactEmail`).
- Redes sociales reales (`FOOTER.social[].url`).
- Endpoint del formulario (`FORM.endpoint`, Formspree u otro) — vacío usa mailto.
- URLs de video de proyectos (`PROJECTS[].video`).
- Datos reales de las páginas legales (`[CORCHETES]` / `[FECHA]`).
- Logos de marca en `/public/logos/*.svg` (mientras faltan, se muestra el nombre en texto — por diseño).

- **2026-06-12b — Logo aliaseado en header (fix quirúrgico, verificado 100%):**
  Causa raíz: `nav` tenía `backdrop-filter:blur(14px)` → su hijo (logo SVG) se rasterizaba en la capa
  filtrada y perdía anti-aliasing (bordes escalonados). Fix: mover `backdrop-filter` + fondo translúcido
  a `nav::before` (z-index:-1) + `isolation:isolate` en `nav`. Mismo efecto glass, logo/links crisp y
  clickeables. El logo del footer está en capa limpia (sin filtros) → ya es vectorial nítido; único
  residuo posible es el grano global a .02 (intencional). Videos 1080p del usuario AÚN sin sincronizar
  al workspace (siguen 1.4MB/1.1MB) — pendiente "Pull from GitHub".

## ⛔ REGLA PERMANENTE — Assets binarios (NO NEGOCIABLE)
- Las carpetas `public/media/` y `public/logos/` contienen assets binarios que se administran
  subiéndolos DIRECTO a GitHub, FUERA del flujo del agente.
- NUNCA generar, modificar ni eliminar archivos dentro de `public/media/` ni `public/logos/`.
- ANTES de cada "Save to GitHub", hacer PULL del repo para incorporar cambios externos y no
  sobreescribir esos binarios.

## Notas
- `ANTHROPIC_API_KEY` se configura en Vercel; sin llave el chat responde en modo offline (cortesía).
- No hay backend separado: `/api/chat` es ruta serverless de Next.
