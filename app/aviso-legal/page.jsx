import Link from 'next/link';

export const metadata = { title: 'Aviso Legal — ACID' };

// ⚠️ PLANTILLA: sustituye los campos entre [CORCHETES] con los datos reales
// de tu razón social y revísala con tu asesor antes de publicar.

export default function AvisoLegal() {
  return (
    <main className="legal">
      <Link href="/" className="legal-back">← ACID</Link>
      <h1>Aviso Legal</h1>
      <p className="legal-date">Última actualización: [FECHA]</p>

      <h2>Titular del sitio</h2>
      <p>
        Este sitio es operado por [RAZÓN SOCIAL], con domicilio en [DOMICILIO COMPLETO,
        CIUDAD, ESTADO, MÉXICO] y correo de contacto [CORREO DE CONTACTO].
      </p>

      <h2>Propiedad intelectual</h2>
      <p>
        La marca ACID®, su isotipo, así como el diseño, textos y elementos gráficos de este
        sitio son propiedad de su titular y están protegidos por la legislación mexicana de
        propiedad intelectual. Queda prohibida su reproducción total o parcial sin
        autorización previa y por escrito.
      </p>

      <h2>Trabajos y marcas de terceros</h2>
      <p>
        Las piezas audiovisuales mostradas en el portafolio fueron producidas por ACID para
        sus respectivos clientes. Las marcas, logotipos y nombres comerciales de terceros que
        aparecen en este sitio pertenecen a sus respectivos titulares y se muestran
        únicamente con fines de referencia profesional del trabajo realizado.
      </p>

      <h2>Uso del sitio</h2>
      <p>
        La información de este sitio tiene fines informativos y comerciales; no constituye
        una oferta vinculante. Los alcances, tiempos y costos de cada proyecto se pactan por
        escrito en la propuesta y contrato correspondientes.
      </p>

      <h2>Asistente conversacional</h2>
      <p>
        El asistente de informes de este sitio utiliza inteligencia artificial y puede
        cometer imprecisiones. La información contractualmente válida es únicamente la
        confirmada por el equipo de ACID por escrito.
      </p>

      <h2>Legislación aplicable</h2>
      <p>
        Este aviso se rige por las leyes de los Estados Unidos Mexicanos. Para cualquier
        controversia, las partes se someten a los tribunales competentes de [CIUDAD, ESTADO].
      </p>
    </main>
  );
}
