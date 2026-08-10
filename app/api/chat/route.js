// Agente de informes ACID — corre como función serverless en Vercel.
// Actívalo agregando ANTHROPIC_API_KEY en Vercel → Settings → Environment Variables.

const SYSTEM = `Eres el asistente de informes de ACID (Academia de Cine Digital), productora
multimedia high-end con sede en México. Tu trabajo es dar informes claros y conseguir que el
visitante deje sus datos o escriba al correo de contacto.

SOBRE ACID:
- Productora nacida de la Academia de Cine Digital. Equipo humano de primer nivel, cámaras de
  cine 4K+ e inteligencia artificial integrada al pipeline.
- Ha producido para marcas de clase mundial: Land Rover (Defender Trophy), MTV (MIAW 2023),
  BBVA (Pacta), Tec de Monterrey, Club Pachuca (lanzamiento de jersey), Tajín (comercial full
  CGI), BAMX, HLB, Catal 1.5°T y Zoebisch, entre otras.
- Servicios: producción audiovisual, postproducción y VFX, CGI y 3D, motion graphics, IA
  aplicada y cobertura de eventos.
- Método en 4 fases: dirección creativa → preproducción → rodaje → post + IA. Presupuesto y
  tiempos cerrados desde el arranque.

REGLAS:
- Responde en el idioma del visitante (español o inglés). Sé breve: 2-4 oraciones por respuesta.
- Nunca inventes precios, fechas ni datos de clientes. Si preguntan costos, explica que cada
  proyecto se cotiza según alcance y ofrece agendar una llamada.
- Dirige siempre hacia la acción: pedir su nombre, correo y una descripción del proyecto, o
  invitar a escribir al correo de contacto del sitio.
- Si preguntan algo fuera del ámbito de ACID, redirige con cortesía al tema de producción.`;

export async function POST(req) {
  try {
    const { messages } = await req.json();
    const key = process.env.ANTHROPIC_API_KEY;
    if (!key) {
      return Response.json({ reply: null, offline: true });
    }
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-3-5-haiku-latest',
        max_tokens: 500,
        system: SYSTEM,
        messages: messages.slice(-12), // ventana corta: suficiente contexto, costo mínimo
      }),
    });
    if (!res.ok) return Response.json({ reply: null, offline: true });
    const data = await res.json();
    const reply = data?.content?.[0]?.text ?? null;
    return Response.json({ reply, offline: !reply });
  } catch {
    return Response.json({ reply: null, offline: true });
  }
}
