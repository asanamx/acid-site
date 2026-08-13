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

- **2026-06-12c — Hero en 1080p:** el usuario subió los reels por artifact URL y (excepción puntual
  autorizada) los coloqué en `public/media/`: `hero_loop.mp4` 7.79MB (1920×1080, H264 ~6Mbps, 10.3s) y
  `hero_loop.webm` 5.37MB (1920×1080, VP9 24fps). Verificado por ffprobe + screenshot: hero nítido,
  reproduce el webm (fallback mp4 para Safari/iOS presente). Fin del pixeleo del hero.

- **2026-06-12d — Menú por flow + hero cinematográfico:** (1) Nav reordenado a Trabajo·Estudio·Servicios·
  Hablemos para coincidir con el scroll real de secciones (y con el footer). (2) Hero con tratamiento cine
  CSS-only: viñeta radial, grade (brightness .66 / contrast 1.08 / saturate 1.06), grano de película
  animado scoped al hero (::before, opacity .07, mix-blend overlay, animación heroGrain) y Ken Burns
  (scale 1.06→1.14 en 30s, heroKen). Sin assets nuevos, paleta intacta. Parámetros calibrables a gusto.
- **2026-06-12e — Portafolio videos R2:** los 12 campos `video` de PROJECTS apuntan a
  https://pub-50fa636f879644e7b8c63ad00084be5b.r2.dev/<key>.mp4. OJO: al cierre, 4 devuelven 404 en R2
  (playera, tajin, wine, zoebisch) — pendientes de subir/renombrar del lado del usuario.

- **2026-06-12f — Overlap hint + FAB burbuja (verificado 100%):** (1) `.scroll-hint` ("Ver trabajo")
  ya no se encima con el `.chat-fab` (media query desktop `margin-right:78px`). (2) FAB del asistente
  restyle a burbuja de chat: `border-radius:50% 50% 6px 50%`, 56px, con el asterisco reducido a 18px.
  Chat abre/cierra OK. Asterisco restaurado en el logo del header (a pedido del usuario).

- **2026-06-12g — Menús alineados + FAB más chico + check móvil:** (1) Agregado "El método" al menú
  principal → menú y footer comparten Trabajo·Estudio·Servicios·Método en el mismo orden (Hablemos = CTA).
  (2) FAB del chat reducido a 46px con asterisco 15px (sigue forma burbuja). (3) Móvil 375px revisado:
  sin overflow horizontal, secciones apilan bien. Pendiente/opcional: menú hamburguesa en ≤820px (hoy los
  links de sección se ocultan por diseño, solo Hablemos+ES/EN).

- **2026-06-12h — Menú hamburguesa móvil (verificado 100%):** en ≤820px el nav muestra logo + botón
  hamburguesa; abre overlay full-screen con Trabajo·Estudio·Servicios·Método·Hablemos + toggle ES/EN;
  cada link navega y cierra el menú (setMenuOpen(false)); scroll-lock del body; `nav.menu-open{z-index:400}`
  cubre el chat FAB. Desktop intacto. Markup en page.jsx (state menuOpen, data-testid mobile-menu-toggle /
  mobile-menu) + CSS en globals.css. Además: `.brand-logo` afinado (30px, object-fit contain, max-width 180).
- **Logos de clientes:** creada carpeta `/public/logos/` (con README de nombres). Los logos subidos por el
  usuario a GitHub NO se sincronizan al workspace (solo README local) → no se pueden previsualizar/afinar
  hasta tenerlos aquí. Nombres esperados: landrover, mtv, bbva, tec, pachuca, tajin, bamx, hlb, catal, zoebisch (.svg).

- **2026-06-12i — Logos sincronizados (3):** descargados desde GitHub (raw) a `/public/logos/`:
  landrover.svg, bbva.svg, tec.svg. Renderizan como IMG blancas en el marquee (height 30, contain).
  Faltan 7 (mtv, pachuca, tajin, bamx, hlb, catal, zoebisch). ⚠️ RIESGO: el usuario agrega logos directo
  en GitHub pero el workspace NO se auto-sincroniza; un "Save to GitHub" desde Emergent podría BORRAR del
  repo los logos que estén en GitHub pero no en el workspace. Mitigación: pedir las URLs de cada logo nuevo
  y bajarlas al workspace ANTES de guardar.

- **2026-06-12j — Parpadeo marquee + MTV/HLB (verificado 100%):** `.track` promovido a capa GPU
  estable (`will-change:transform` + `backface-visibility:hidden`, keyframe `translate3d(-50%,0,0)`)
  para eliminar el shimmer de SVG con líneas finas (Tec, HLB) al animarse. MTV ampliado a 50px, Tajín 46px,
  Land Rover 72px. Logos activos: Land Rover, MTV, BBVA, Tec, Tajín, HLB. Nota: mtv.svg original era un
  WebP renombrado (fallaba); el usuario lo re-subió como SVG real. Faltan: pachuca, bamx, catal, zoebisch.

- **2026-06-12k — Fix logos multicolor + parpadeo HLB (verificado 100%):** el `filter:brightness(0) invert(1)`
  aplanaba a blanco los logos multicolor (Pachuca, MTV → manchas) y, en HLB (ya blanco), causaba
  re-rasterizado/parpadeo. Fix: override `filter:none` para HLB, Pachuca y MTV (muestran su color/blanco
  propio). Se mantiene el filtro blanco solo en logos de un color oscuro (Land Rover, BBVA, Tec, Tajín).
  Resultado: marquee MIXTO (color + blanco). DECISIÓN PENDIENTE del usuario: unificar todo a blanco
  (requiere versiones mono/blancas de MTV y Pachuca) vs dejar el mix. Faltan aún: bamx, catal, zoebisch.

- **2026-06-12l — Fix número "02" del método + hallazgo de paleta (verificado 100%):** `.step b`
  font-weight 800→600 para que el contorno (`-webkit-text-stroke`) de los números 01-04 se vea limpio
  (antes doble/dentado). HALLAZGO: `:root` tiene DOS rojos → `--red:#BC0000` (brand) y `--acid:#D81A0E`
  (rojo-naranja usado en acentos). El brief solo permite #BC0000; `--acid` es un rojo extra pre-existente.
  PENDIENTE: preguntar al usuario si homologar `--acid` a `#BC0000`.

- **2026-06-12m — Paleta unificada:** `--acid` cambiado de #D81A0E a **#BC0000** (= `--red`). Todo el rojo
  del sitio ahora es el Rojo ACiD del brief. Verificado: kicker/acentos = rgb(188,0,0).

- **2026-06-13a — Reveal cinematográfico del Hero (verificado por screenshots, intensidad intermedia, 1 sola vez):**
  Efecto de carga controlado por JS (`heroPlay` + `requestAnimationFrame` en useEffect) para que corra UNA
  sola vez tras la hidratación y NO se re-dispare (antes el doble render SSR/hidratación reiniciaba la
  animación). Secuencia: (1) fade-from-black vía `.hero-veil` (div negro z-3, keyframe `heroVeil` 1.45s),
  (2) rack focus del video `blur(12px)+brightness .26 → nítido+brightness .70` (keyframe `heroFocus` 1.5s,
  corre junto al `heroKen` de Ken Burns), (3) cascada tipográfica escalonada kicker→h1→hero-row (`heroRise`,
  delays .35/.52/.76s). Estado inicial (pre-`.play`) ya renderiza negro+blur+textos ocultos → sin flash.
  Respeta `prefers-reduced-motion` (todo visible, sin animación). CSS-only en globals.css + clase `hero-cine play`
  en page.jsx. Sin assets nuevos, paleta intacta. Verificado desktop y móvil.

## ⛔ REGLA PERMANENTE — Assets binarios (NO NEGOCIABLE)
- Las carpetas `public/media/` y `public/logos/` contienen assets binarios que se administran
  subiéndolos DIRECTO a GitHub, FUERA del flujo del agente.
- NUNCA generar, modificar ni eliminar archivos dentro de `public/media/` ni `public/logos/`.
- ANTES de cada "Save to GitHub", hacer PULL del repo para incorporar cambios externos y no
  sobreescribir esos binarios.

## Notas
- **2026-06-13b — Nav transparente sobre hero / sólido al scroll (verificado):** estado `scrolled`
  (window.scrollY > 50) en page.jsx. En el tope, `nav::before` = rgba(26,26,26,.14) + blur(3px) y sin
  borde → deja ver el video. Con scroll, `nav.scrolled::before` = rgba(26,26,26,.88) + blur(14px) + borde
  inferior sutil. Transición .45s en background/backdrop-filter. CSS-only en globals.css.
- `ANTHROPIC_API_KEY` se configura en Vercel; sin llave el chat responde en modo offline (cortesía).
- No hay backend separado: `/api/chat` es ruta serverless de Next.
