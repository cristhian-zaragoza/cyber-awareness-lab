export function History() {
  const section = document.createElement('section')
  section.className = 'history'

  section.innerHTML = `
    <h1>Historia del Malware</h1>

    <p>
      El malware no nació como una herramienta criminal. Sus orígenes se remontan
      a experimentos académicos y pruebas de concepto que buscaban entender cómo
      se propagaba el software en sistemas interconectados.
    </p>

    <p>
      Con el paso del tiempo, estas técnicas fueron adoptadas con fines maliciosos,
      dando lugar a virus, gusanos, troyanos y otras formas de software diseñado
      para dañar, espiar o controlar sistemas sin el consentimiento del usuario.
    </p>

    <p>
      Este laboratorio tiene como objetivo analizar esa evolución desde una
      perspectiva educativa, ética y técnica.
    </p>

    <hr />

    <!-- ================= SILK ROAD ================= -->

    <h2>Silk Road</h2>
    <h3>El nacimiento de un mercado en la dark web</h3>

    <p>
      Silk Road fue un mercado en línea que operó entre 2011 y 2013, accesible
      únicamente a través de la red Tor. Su creador, Ross Ulbricht, utilizó el
      seudónimo “Dread Pirate Roberts” y presentó la plataforma como un
      experimento ideológico basado en el libertarismo.
    </p>

    <p>
      El sitio utilizaba Tor para preservar el anonimato y Bitcoin como medio
      de pago, convirtiéndose en uno de los primeros ejemplos visibles del uso
      de tecnologías de privacidad tanto para fines legítimos como ilegales.
    </p>

    <h3>Funcionamiento técnico básico</h3>

    <p>
      Desde el punto de vista técnico, Silk Road funcionaba de manera similar
      a un comercio electrónico tradicional:
    </p>

    <ul>
      <li>Cuentas de usuario</li>
      <li>Listados de productos</li>
      <li>Sistema de reputación</li>
      <li>Pagos con custodia (escrow)</li>
    </ul>

    <p>
      La diferencia clave estaba en la infraestructura de anonimato.
      Tor ocultaba las direcciones IP y Bitcoin dificultaba el rastreo
      financiero directo, aunque no lo hacía imposible.
    </p>

    <h3>Errores humanos y rastreo</h3>

    <p>
      A pesar de su aparente sofisticación técnica, Silk Road cayó
      principalmente por errores humanos y operativos.
    </p>

    <ul>
      <li>Uso temprano de correos electrónicos personales</li>
      <li>Publicaciones públicas buscando desarrolladores</li>
      <li>Reutilización de alias digitales</li>
      <li>Falta de separación entre identidad real y digital</li>
    </ul>

    <h3>Cierre y consecuencias</h3>

    <p>
      En octubre de 2013, el FBI cerró Silk Road y arrestó a Ross Ulbricht.
      El caso marcó un antes y un después en la percepción pública de la
      dark web y en las investigaciones de delitos digitales.
    </p>

    <h3>Impacto en la ciberseguridad</h3>

    <ul>
      <li>La tecnología es neutral: su impacto depende del uso</li>
      <li>El anonimato requiere disciplina y conocimiento</li>
      <li>El error humano es un punto crítico de falla</li>
      <li>La investigación digital combina análisis técnico y social</li>
    </ul>

    <blockquote>
      El análisis de Silk Road se realiza con fines educativos y de
      concientización en seguridad informática.
    </blockquote>

    <hr />

    <!-- ================= ALPHABAY ================= -->

    <h2>AlphaBay</h2>
    <h3>La evolución de los mercados clandestinos</h3>

    <p>
      AlphaBay fue uno de los mercados más grandes de la dark web, operativo
      entre 2014 y 2017. Surgió tras el cierre de Silk Road y buscó mejorar
      sus debilidades, tanto técnicas como operativas.
    </p>

    <p>
      A diferencia de su predecesor, AlphaBay adoptó desde el inicio
      prácticas de seguridad más estrictas y una infraestructura más
      distribuida.
    </p>

    <h3>Mejoras técnicas</h3>

    <ul>
      <li>Soporte para múltiples criptomonedas</li>
      <li>Cifrado PGP obligatorio en comunicaciones</li>
      <li>Infraestructura más descentralizada</li>
      <li>Mayor compartimentación de servicios</li>
    </ul>

    <p>
      Estas mejoras dificultaron las investigaciones durante un tiempo,
      pero también aumentaron la complejidad operativa del sistema.
    </p>

    <h3>Errores y caída</h3>

    <p>
      AlphaBay también fue derribado principalmente por errores humanos
      y mala gestión de la infraestructura crítica.
    </p>

    <ul>
      <li>Servidores mal configurados</li>
      <li>Rastreo de pagos iniciales</li>
      <li>Falta de opsec personal del administrador</li>
    </ul>

    <p>
      En 2017, una operación internacional coordinada permitió el cierre
      de AlphaBay y el decomiso de su infraestructura.
    </p>

    <h3>Lecciones aprendidas</h3>

    <ul>
      <li>La complejidad técnica aumenta la superficie de ataque</li>
      <li>La opsec es tan importante como la tecnología</li>
      <li>Las investigaciones modernas son globales</li>
    </ul>

    <blockquote>
      AlphaBay demostró que mejorar la tecnología no elimina los riesgos
      si el factor humano falla.
    </blockquote>
  `

  return section
}
