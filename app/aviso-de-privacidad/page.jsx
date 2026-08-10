import Link from 'next/link';

export const metadata = { title: 'Aviso de Privacidad — ACID' };

// ⚠️ PLANTILLA: sustituye los campos entre [CORCHETES] con los datos reales
// de tu razón social y revísala con tu asesor antes de publicar.

export default function AvisoPrivacidad() {
  return (
    <main className="legal">
      <Link href="/" className="legal-back">← ACID</Link>
      <h1>Aviso de Privacidad</h1>
      <p className="legal-date">Última actualización: [FECHA]</p>

      <p>
        [RAZÓN SOCIAL], (en adelante «ACID»), con domicilio en [DOMICILIO COMPLETO,
        CIUDAD, ESTADO, MÉXICO], es responsable del tratamiento de sus datos personales
        conforme a la Ley Federal de Protección de Datos Personales en Posesión de los
        Particulares (LFPDPPP), su Reglamento y demás normativa aplicable.
      </p>

      <h2>Datos que recabamos</h2>
      <p>
        A través del formulario de contacto y del asistente de este sitio podemos recabar:
        nombre, correo electrónico, empresa o marca que representa, tipo de proyecto y la
        información que usted decida compartir en su mensaje. No recabamos datos personales
        sensibles.
      </p>

      <h2>Finalidades del tratamiento</h2>
      <p>
        Sus datos se utilizan para: (i) atender su solicitud de informes y dar seguimiento
        comercial; (ii) elaborar propuestas y cotizaciones; (iii) en su caso, formalizar la
        relación contractual; y (iv) con su consentimiento, enviarle comunicación sobre
        servicios de ACID. No compartimos sus datos con terceros ajenos a estas finalidades,
        salvo obligación legal.
      </p>

      <h2>Derechos ARCO</h2>
      <p>
        Usted puede ejercer en todo momento sus derechos de Acceso, Rectificación,
        Cancelación y Oposición, así como revocar su consentimiento, escribiendo a
        [CORREO DE CONTACTO] con el asunto «Derechos ARCO», indicando su nombre completo,
        el derecho que desea ejercer y los datos de contacto para responderle. Le
        contestaremos en los plazos que marca la LFPDPPP.
      </p>

      <h2>Transferencias y encargados</h2>
      <p>
        Para operar este sitio utilizamos proveedores de infraestructura tecnológica
        (alojamiento web, procesamiento de formularios y asistente conversacional) que
        actúan como encargados del tratamiento y no utilizan sus datos para fines propios.
      </p>

      <h2>Uso de cookies</h2>
      <p>
        Este sitio no utiliza cookies de rastreo publicitario. Los registros técnicos del
        servidor (dirección IP, navegador) se emplean únicamente con fines de seguridad y
        estadística agregada.
      </p>

      <h2>Cambios al aviso</h2>
      <p>
        Cualquier modificación a este aviso se publicará en esta misma página. Le
        recomendamos revisarla periódicamente.
      </p>
    </main>
  );
}
