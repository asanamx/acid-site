// ============================================================
// ACID — Contenido del sitio
// Edita este archivo para cambiar textos, proyectos y marcas.
// Cada campo con {es, en} alimenta el toggle de idioma.
// ============================================================

export const BRANDS = [
  // logo: coloca el archivo en /public/logos/ (SVG o PNG, idealmente monocromo).
  // Si el archivo no existe, el sitio muestra el nombre en texto automáticamente.
  { name: 'Land Rover',        logo: '/logos/landrover.svg' },
  { name: 'MTV',               logo: '/logos/mtv.svg' },
  { name: 'BBVA',              logo: '/logos/bbva.svg' },
  { name: 'Tec de Monterrey',  logo: '/logos/tec.svg' },
  { name: 'Club Pachuca',      logo: '/logos/pachuca.svg' },
  { name: 'Tajín',             logo: '/logos/tajin.svg' },
  { name: 'BAMX',              logo: '/logos/bamx.svg' },
  { name: 'HLB',               logo: '/logos/hlb.svg' },
  { name: 'Catal 1.5°T',       logo: '/logos/catal.svg' },
  { name: 'Zoebisch',          logo: '/logos/zoebisch.svg' },
];

export const PROJECTS = [
  // video: pon aquí el link de Vimeo/CDN (mp4 directo) cuando publiques.
  // En vacío, el lightbox muestra un aviso elegante.
  { key: 'defender', span: 6, img: '/media/defender_35.jpg', client: 'Land Rover',
    video: '',
    tag:  { es: 'Automotriz', en: 'Automotive' },
    desc: { es: 'Defender Trophy · Cobertura cinematográfica', en: 'Defender Trophy · Cinematic coverage' } },
  { key: 'mtv', span: 6, img: '/media/mtv_85.jpg', client: 'MTV',
    video: '',
    tag:  { es: 'Entretenimiento', en: 'Entertainment' },
    desc: { es: 'MIAW 2023 · Intro broadcast + VFX', en: 'MIAW 2023 · Broadcast intro + VFX' } },
  { key: 'playera', span: 4, img: '/media/playera_85.jpg', client: 'Club Pachuca',
    video: '',
    tag:  { es: 'Deporte', en: 'Sports' },
    desc: { es: 'Lanzamiento de jersey · Campaña épica', en: 'Jersey launch · Epic campaign' } },
  { key: 'tajin', span: 4, img: '/media/tajin_60.jpg', client: 'Tajín',
    video: '',
    tag:  { es: 'CGI · 3D', en: 'CGI · 3D' },
    desc: { es: 'Twist · Producto full CGI', en: 'Twist · Full-CGI product film' } },
  { key: 'bbva', span: 4, img: '/media/bbva_15.jpg', client: 'BBVA',
    video: '',
    tag:  { es: 'Animación', en: 'Animation' },
    desc: { es: 'Pacta · Motion graphics de producto', en: 'Pacta · Product motion graphics' } },
  { key: 'bamx', span: 3, img: '/media/bamx_85.jpg', client: 'BAMX',
    video: '',
    tag:  { es: 'Impacto social', en: 'Social impact' },
    desc: { es: 'Institucional · Bancos de Alimentos', en: 'Institutional film · Food Banks' } },
  { key: 'meat', span: 3, img: '/media/meat_60.jpg', client: 'HLB',
    video: '',
    tag:  { es: 'Gastronomía', en: 'Food & dining' },
    desc: { es: 'Steakhouse · Pieza de marca', en: 'Steakhouse · Brand film' } },
  { key: 'wine', span: 3, img: '/media/winespect_35.jpg', client: 'HLB',
    video: '',
    tag:  { es: 'Hospitalidad', en: 'Hospitality' },
    desc: { es: 'Wine Spectator 2025 · Celebración', en: 'Wine Spectator 2025 · Celebration film' } },
  { key: 'bakery', span: 3, img: '/media/bakery_35.jpg', client: 'HLB',
    video: '',
    tag:  { es: 'Gastronomía', en: 'Food & dining' },
    desc: { es: 'Bakery · Craft artesanal', en: 'Bakery · Artisan craft' } },
  { key: 'asfk', span: 4, img: '/media/asfk_15.jpg', client: 'ASFK',
    video: '',
    tag:  { es: 'Industrial', en: 'Industrial' },
    desc: { es: 'Institucional · Manufactura global', en: 'Institutional · Global manufacturing' } },
  { key: 'catal', span: 4, img: '/media/catalrecap_35.jpg', client: 'Catal 1.5°T',
    video: '',
    tag:  { es: 'Eventos', en: 'Events' },
    desc: { es: 'Recap · Emprendimiento climático', en: 'Recap · Climate entrepreneurship' } },
  { key: 'zoebisch', span: 4, img: '/media/zoebisch_35.jpg', client: 'Zoebisch',
    video: '',
    tag:  { es: 'Educación', en: 'Education' },
    desc: { es: 'Campaña institucional educativa', en: 'Educational brand campaign' } },
];

export const STEPS = [
  { n: '01',
    t: { es: 'Dirección creativa', en: 'Creative direction' },
    p: { es: 'Escuchamos tu objetivo comercial y lo convertimos en un concepto con intención: tratamiento visual, guion y referencias.',
         en: 'We listen to your business goal and turn it into a concept with intent: visual treatment, script and references.' } },
  { n: '02',
    t: { es: 'Preproducción', en: 'Pre-production' },
    p: { es: 'Planeación milimétrica de casting, locaciones, arte y plan de rodaje. Todo aprobado antes de encender una cámara.',
         en: 'Precise planning of casting, locations, art and shooting schedule. Everything approved before a camera turns on.' } },
  { n: '03',
    t: { es: 'Rodaje', en: 'Production' },
    p: { es: 'Equipo humano de primer nivel dirigiendo cada cuadro con estándar de cine, en set, estadio, planta o locación remota.',
         en: 'A top-tier crew directing every frame to a cinematic standard — on set, stadium, factory floor or remote location.' } },
  { n: '04',
    t: { es: 'Post + IA', en: 'Post + AI' },
    p: { es: 'Edición, color, VFX y herramientas generativas que multiplican versiones: un máster, todos los formatos y plataformas.',
         en: 'Editing, color, VFX and generative tools that multiply versions: one master, every format and platform.' } },
];

export const SERVICES = [
  { n: '/01', t: { es: 'Producción audiovisual', en: 'Film production' },
    p: { es: 'Comerciales, piezas institucionales y branded content con estándar cinematográfico, de la preproducción al máster final.',
         en: 'Commercials, institutional films and branded content at a cinematic standard, from pre-production to final master.' } },
  { n: '/02', t: { es: 'Postproducción & VFX', en: 'Post & VFX' },
    p: { es: 'Edición, color, composición y efectos visuales que elevan cada cuadro al nivel de las grandes pantallas.',
         en: 'Editing, color, compositing and visual effects that lift every frame to big-screen quality.' } },
  { n: '/03', t: { es: 'CGI & 3D', en: 'CGI & 3D' },
    p: { es: 'Producto hiperreal, entornos imposibles y animación 3D — como lo hicimos para Tajín — sin límites físicos de set.',
         en: 'Hyperreal product, impossible worlds and 3D animation — as we did for Tajín — free from physical set limits.' } },
  { n: '/04', t: { es: 'Motion graphics', en: 'Motion graphics' },
    p: { es: 'Animación 2D, identidad en movimiento y explicativos de producto para campañas digitales y broadcast.',
         en: '2D animation, identity in motion and product explainers for digital and broadcast campaigns.' } },
  { n: '/05', t: { es: 'IA aplicada', en: 'Applied AI' },
    p: { es: 'Herramientas generativas de vanguardia integradas al pipeline: más versiones, más velocidad, mismo estándar de cine.',
         en: 'Cutting-edge generative tools inside the pipeline: more versions, more speed, same cinematic standard.' } },
  { n: '/06', t: { es: 'Cobertura de eventos', en: 'Event coverage' },
    p: { es: 'Equipos ágiles para eventos de marca, deportivos y corporativos con entregables el mismo día.',
         en: 'Agile crews for brand, sports and corporate events with same-day deliverables.' } },
];

export const ARSENAL = [
  { n: '/A', t: { es: 'Cámaras de cine', en: 'Cinema cameras' },
    p: { es: 'Cuerpos de cine digital 4K+ con óptica cinematográfica para el look que las marcas globales exigen.',
         en: '4K+ digital cinema bodies with cinematic glass for the look global brands demand.' } },
  { n: '/B', t: { es: 'Movimiento y aire', en: 'Motion & air' },
    p: { es: 'Drones, estabilizadores y movimientos de cámara que convierten cualquier locación en set de película.',
         en: 'Drones, stabilizers and camera movement that turn any location into a film set.' } },
  { n: '/C', t: { es: 'Iluminación y sonido', en: 'Lighting & sound' },
    p: { es: 'Diseño de luz y captura de audio profesional en set, con crew técnico propio en cada rodaje.',
         en: 'Light design and professional audio capture on set, with our own technical crew on every shoot.' } },
  { n: '/D', t: { es: 'Suite de post', en: 'Post suite' },
    p: { es: 'Edición, corrección de color y VFX internos: control total del acabado, sin depender de terceros.',
         en: 'In-house editing, color grading and VFX: total control of the finish, no third parties.' } },
  { n: '/E', t: { es: 'CGI y 3D', en: 'CGI & 3D' },
    p: { es: 'Modelado, animación y producto hiperreal para piezas que no dependen de un set físico.',
         en: 'Modeling, animation and hyperreal product for films that need no physical set.' } },
  { n: '/F', t: { es: 'Pipeline con IA', en: 'AI pipeline' },
    p: { es: 'Herramientas generativas de vanguardia integradas al flujo: exploración visual más veloz y entregas multiplicadas.',
         en: 'Cutting-edge generative tools built into the workflow: faster visual exploration, multiplied deliverables.' } },
];

export const UI = {
  contactEmail: 'contacto@acid.mx', // ← cambia por el correo definitivo
  nav:        { work: { es: 'Trabajo', en: 'Work' }, services: { es: 'Servicios', en: 'Services' },
                studio: { es: 'Estudio', en: 'Studio' }, cta: { es: 'Hablemos', en: "Let's talk" } },
  hero: {
    kicker: { es: 'Productora · Academia de Cine Digital', en: 'Production Studio · Digital Film Academy' },
    l1: { es: 'Cine que', en: 'Film that' },
    l2: { es: 'vende.', en: 'sells.' },
    sub: { es: 'Producción multimedia high-end para marcas de clase mundial. Equipo humano de primer nivel, cámaras de cine e inteligencia artificial al servicio de tu historia.',
           en: 'High-end multimedia production for world-class brands. A top-tier human crew, cinema cameras and artificial intelligence at the service of your story.' },
    scroll: { es: 'Ver trabajo', en: 'See the work' },
  },
  work: {
    t: { es: 'Trabajo selecto', en: 'Selected work' },
    n: { es: 'Cada proyecto se produce con estándar de cine: dirección, fotografía, postproducción y entrega multiplataforma.',
         en: 'Every project is produced to a cinematic standard: direction, cinematography, post and multi-platform delivery.' },
    play: { es: '▶ Ver pieza completa', en: '▶ Watch full film' },
  },
  studio: {
    t: { es: 'El estudio', en: 'The studio' },
    p: { es: 'Nacimos como <em>Academia de Cine Digital</em>. Hoy somos la productora que las marcas buscan cuando la imagen no puede fallar: cámaras de cine, dirección de arte y <em>flujos con IA</em> que multiplican lo que un equipo humano talentoso puede lograr.',
         en: 'We were born as the <em>Digital Film Academy</em>. Today we are the studio brands call when the image cannot fail: cinema cameras, art direction and <em>AI-powered workflows</em> that multiply what a talented human crew can achieve.' },
    stats: [
      { b: '20+',  s: { es: 'Marcas de clase mundial', en: 'World-class brands' } },
      { b: '360°', s: { es: 'De la idea a la entrega final', en: 'From idea to final delivery' } },
      { b: '4K+',  s: { es: 'Pipeline de cine digital', en: 'Digital cinema pipeline' } },
      { b: 'IA',   s: { es: 'Generativa integrada a producción', en: 'Generative AI in production' } },
    ],
  },
  services: {
    t: { es: 'Lo que hacemos', en: 'What we do' },
    n: { es: 'Un solo equipo, control total del pipeline. Sin intermediarios, sin pérdida de calidad.',
         en: 'One team, full control of the pipeline. No middlemen, no loss of quality.' },
  },
  method: {
    t: { es: 'El método', en: 'The method' },
    n: { es: 'Presupuesto y tiempos cerrados desde el arranque. Sin sorpresas, sin retrabajos: cada fase aprueba antes de avanzar.',
         en: 'Budget and timeline locked from the start. No surprises, no rework: every phase is approved before moving on.' },
  },
  arsenal: {
    t: { es: 'El arsenal', en: 'The arsenal' },
    n: { es: 'La promesa creativa está respaldada por fierro y pipeline. Producción propia de principio a fin, sin rentas improvisadas.',
         en: 'The creative promise is backed by hardware and pipeline. In-house production end to end, no improvised rentals.' },
  },
  contact: {
    k: { es: '¿Tienes un proyecto?', en: 'Got a project?' },
    t: { es: 'Hablemos.', en: "Let's talk." },
    p: { es: 'Cuéntanos qué quieres lograr y te proponemos el camino de producción para conseguirlo — con presupuesto y tiempos claros desde el día uno.',
         en: "Tell us what you want to achieve and we'll propose the production path to get there — with clear budget and timelines from day one." },
    b: { es: 'Iniciar proyecto', en: 'Start a project' },
  },
  footer: {
    f1: { es: 'Academia de Cine Digital', en: 'Digital Film Academy' },
    f2: { es: 'Producción multimedia high-end · México', en: 'High-end multimedia production · Mexico' },
  },
  lightbox: {
    empty: { es: 'Esta pieza aún no tiene link de video. Agrega la URL (Vimeo o CDN) en el campo "video" de data/content.js.',
             en: 'This film has no video link yet. Add the URL (Vimeo or CDN) in the "video" field of data/content.js.' },
  },
};

// ============================================================
// Formulario de contacto
// endpoint: pega aquí tu URL de Formspree (https://formspree.io) u otro
// servicio compatible. Si lo dejas vacío, el botón abre el correo con
// los datos precargados (mailto).
// ============================================================
export const FORM = {
  endpoint: '',
  name:    { es: 'Nombre',            en: 'Name' },
  email:   { es: 'Correo',            en: 'Email' },
  company: { es: 'Empresa o marca',   en: 'Company or brand' },
  type:    { es: 'Tipo de proyecto',  en: 'Project type' },
  types: [
    { es: 'Comercial / Branded content', en: 'Commercial / Branded content' },
    { es: 'Institucional',               en: 'Institutional film' },
    { es: 'Evento / Cobertura',          en: 'Event / Coverage' },
    { es: 'CGI · 3D / Animación',        en: 'CGI · 3D / Animation' },
    { es: 'Otro',                        en: 'Other' },
  ],
  message: { es: 'Cuéntanos tu proyecto', en: 'Tell us about your project' },
  send:    { es: 'Enviar',       en: 'Send' },
  sending: { es: 'Enviando…',    en: 'Sending…' },
  ok:      { es: 'Recibido. Te contactamos en menos de 24 horas.', en: 'Received. We will get back to you within 24 hours.' },
  error:   { es: 'No se pudo enviar. Escríbenos directo al correo.', en: 'Could not send. Email us directly.' },
};

// ============================================================
// Footer tradicional
// ============================================================
export const FOOTER = {
  blurb: { es: 'Productora multimedia high-end nacida de la Academia de Cine Digital. Cámaras de cine, dirección de arte e inteligencia artificial al servicio de marcas de clase mundial.',
           en: 'High-end production studio born from the Digital Film Academy. Cinema cameras, art direction and artificial intelligence at the service of world-class brands.' },
  colNav:     { es: 'Mapa',     en: 'Map' },
  colContact: { es: 'Contacto', en: 'Contact' },
  colSocial:  { es: 'Síguenos', en: 'Follow' },
  location:   { es: 'México',   en: 'Mexico' },
  // Cambia los '#' por tus URLs reales; borra los que no uses.
  social: [
    { name: 'Instagram', url: '#' },
    { name: 'Vimeo',     url: '#' },
    { name: 'LinkedIn',  url: '#' },
    { name: 'YouTube',   url: '#' },
  ],
  legal: { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },
};

// ============================================================
// Agente de informes (chat con IA)
// Se activa configurando ANTHROPIC_API_KEY en Vercel → Settings →
// Environment Variables. Sin llave, responde con un mensaje de cortesía.
// ============================================================
export const AGENT = {
  title:  { es: 'Informes ACID', en: 'ACID Assistant' },
  hello:  { es: 'Hola — soy el asistente de ACID. Pregúntame sobre servicios, proceso o cómo arrancar tu proyecto.',
            en: "Hi — I'm ACID's assistant. Ask me about services, process or how to start your project." },
  placeholder: { es: 'Escribe tu pregunta…', en: 'Type your question…' },
  offline: { es: 'Por ahora no puedo responder en línea. Escríbenos a %EMAIL% y te damos informes el mismo día.',
             en: 'I cannot answer online right now. Email us at %EMAIL% and we will get back to you today.' },
};
