(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();function d(){return`
    <nav class="navbar">
      <h1>Cyber Awareness Lab</h1>
      <ul>
        <li><a href="#/">Inicio</a></li>
        <li><a href="#/labs">Labs</a></li>
        <li><a href="#/history">Historia</a></li>
        <li><a href="#/about">Sobre mí</a></li>
      </ul>
    </nav>
  `}function l(){return`
    <section class="home feed">

      <!-- POST: HERO -->
      <article class="post hero-post">
        <section class="hero">
          <h1>Cyber Awareness Lab</h1>
          <p class="subtitle">
            Internet no es inseguro por la tecnología.<br>
            Es inseguro por cómo la usamos.
          </p>
        </section>
      </article>

      <!-- POST: INTRO -->
      <article class="post">
        <section class="intro">
          <p>
            Cyber Awareness Lab es un proyecto educativo que busca generar
            conciencia sobre los riesgos reales de navegar en internet.
            No desde el miedo, sino desde el conocimiento.
          </p>

          <p>
            No está hecho por una gran empresa ni por un experto famoso.
            Está hecho por una persona común, curiosa, interesada en la
            tecnología, la informática y la ciberseguridad, que aprende
            investigando casos reales, leyendo, observando y analizando
            cómo funcionan los ataques en la vida cotidiana.
          </p>
        </section>
      </article>

      <!-- POST: TECHNIQUES -->
      <article class="post">
        <section class="techniques">
          <h2>Técnicas más comunes</h2>

          <div class="cards">

            <div class="card">
              <h3>🎣 Phishing</h3>
              <p>
                Mensajes, correos o sitios falsos diseñados para engañar al usuario
                y obtener información sensible.
              </p>
              <a href="#/labs/phishing">Explorar laboratorio →</a>
            </div>

            <div class="card">
              <h3>🧠 Ingeniería Social</h3>
              <p>
                Manipulación psicológica que explota la confianza, el apuro
                o el desconocimiento humano.
              </p>
              <a href="#/labs/phishing">Ver ejemplos →</a>
            </div>

            <div class="card">
              <h3>💻 Malware</h3>
              <p>
                Programas diseñados para dañar sistemas, robar datos o tomar
                control sin consentimiento.
              </p>
              <a href="#/history">Contexto histórico →</a>
            </div>

            <div class="card">
              <h3>🌐 Ataques a servicios</h3>
              <p>
                Técnicas como DoS o DDoS que buscan dejar fuera de servicio
                plataformas o sistemas completos.
              </p>
              <a href="#/history">Ver evolución →</a>
            </div>

          </div>
        </section>
      </article>

      <!-- POST: QUOTE -->
      <article class="post quote-post">
        <section class="quote">
          <blockquote>
            “La mayoría de los ataques no comienzan con código,<br>
            comienzan con un mensaje.”
          </blockquote>
        </section>
      </article>

      <!-- POST: TIMELINE -->
      <article class="post">
        <section class="timeline">
          <h2>Evolución de los ataques</h2>

          <ul>
            <li><strong>2000–2005:</strong> Virus simples y ataques experimentales.</li>
            <li><strong>2006–2010:</strong> Aparición del phishing masivo y el malware por correo.</li>
            <li><strong>2011–2015:</strong> Mercados ilegales, botnets y robo de credenciales.</li>
            <li><strong>2016–2020:</strong> Ransomware y ataques dirigidos a empresas e instituciones.</li>
            <li><strong>Hoy:</strong> Ingeniería social sofisticada y ataques automatizados.</li>
          </ul>
        </section>
      </article>

      <!-- POST: IMPACT -->
      <article class="post">
        <section class="impact">
          <h2>¿Por qué importa?</h2>

          <p>
            Con el paso del tiempo, los ataques no solo crecieron en cantidad,
            sino también en efectividad. Hoy, muchas amenazas no requieren
            conocimientos técnicos avanzados por parte del atacante.
          </p>

          <p>
            Comprender cómo funcionan estos métodos es una de las mejores
            formas de reducir el riesgo, tanto a nivel personal como educativo.
          </p>
        </section>
      </article>

      <!-- POST: LINKS -->
      <article class="post">
        <section class="links">
          <h2>Explorar</h2>

          <ul>
            <li><a href="#/labs">🧪 Laboratorios prácticos</a></li>
            <li><a href="#/history">📖 Historia y casos reales</a></li>
            <li><a href="#/about">👤 Sobre el autor</a></li>
          </ul>
        </section>
      </article>

    </section>
  `}function u(){const e=document.createElement("section");return e.innerHTML=`
    <h1>Sobre mí</h1>

    <p>
      Cyber Awareness Lab nace como una inquietud personal.
      No como un producto comercial ni como una herramienta ofensiva,
      sino como un espacio educativo para entender cómo funcionan
      las amenazas digitales en la vida real.
    </p>

    <p>
      Siempre creí que internet no es peligroso por la tecnología en sí,
      sino por el desconocimiento. Muchas personas son víctimas no por
      falta de inteligencia, sino por falta de información clara,
      accesible y honesta.
    </p>

    <h2>Motivación</h2>

    <p>
      Desde chico me sentí atraído por la informática, los sistemas
      y la forma en que la tecnología puede conectar personas.
      En ese camino, figuras como Mark Zuckerberg me marcaron,
      no por la fama o el dinero, sino por la pasión temprana
      por crear, experimentar y construir algo que antes no existía.
    </p>

    <p>
      Su historia demuestra que una idea, combinada con curiosidad,
      constancia y obsesión por aprender, puede escalar y generar impacto.
      Esa filosofía es la que intento aplicar en este proyecto.
    </p>

    <h2>Postura ética</h2>

    <p>
      Este proyecto no busca enseñar a cometer delitos.
      Todo el contenido está orientado a la concientización,
      la educación y la prevención.
      Comprender cómo funcionan los ataques es una forma de defensa,
      no una invitación al abuso.
    </p>

    <p>
      Para mí, un hacker no es un criminal.
      El cibercriminal es quien utiliza el conocimiento para dañar,
      extorsionar o robar. El conocimiento, en sí mismo, no es el problema.
    </p>

    <button id="showNotice">Aviso legal y autoría</button>
  `,e.querySelector("#showNotice").addEventListener("click",()=>{alert(`Cyber Awareness Lab es un proyecto original y educativo.
Autor: Christian Zaragoza.
Todos los derechos reservados.
El contenido no promueve actividades ilegales.`)}),e}function p(){const e=document.createElement("section");return e.className="labs-page",e.innerHTML=`
    <h1>Laboratorios educativos</h1>

    <p>
      Estos laboratorios están diseñados con fines educativos y de concientización.
      Simulan situaciones reales para comprender cómo funcionan amenazas comunes
      en internet, sin ejecutar código malicioso ni promover actividades ilegales.
    </p>

    <div class="labs-grid">

      <div class="lab-category">
        <h2>🟢 Nivel básico</h2>
        <p>
          Conceptos fundamentales de seguridad informática y los ataques
          más frecuentes que afectan a usuarios y organizaciones.
        </p>

        <ul>
          <li>
            <a href="#/labs/phishing">
              Laboratorio 1 – Phishing e Ingeniería Social
            </a>
          </li>

          <li>
            <a href="#/labs/passwords">
              Laboratorio 2 – Contraseñas débiles y reutilización
            </a>
          </li>

          <li>
            <a href="#/labs/malware">
              Laboratorio 3 – Malware y consecuencias reales
            </a>
          </li>
        </ul>
      </div>

      <div class="lab-category disabled">
        <h2>🟡 Nivel intermedio</h2>
        <p>
          Análisis de ataques más complejos, errores de configuración
          y fallos humanos avanzados.
        </p>
        <p><em>Próximamente</em></p>
      </div>

      <div class="lab-category disabled">
        <h2>🔴 Nivel avanzado</h2>
        <p>
          Casos reales, infraestructura, trazabilidad y defensa activa.
        </p>
        <p><em>Próximamente</em></p>
      </div>

    </div>
  `,e}function m(){const e=document.createElement("section");return e.className="history",e.innerHTML=`
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
  `,e}function h(){const e=document.createElement("section");return e.innerHTML=`
    <h1>Laboratorio 1 – Phishing e Ingeniería Social</h1>

    <p>
      En este laboratorio vas a analizar un ejemplo de phishing.
      No se ejecuta ningún malware real.
      Todo es una simulación educativa.
    </p>

    <hr />

    <h2>📧 Correo recibido</h2>

    <div class="mail-box">
      <p><strong>De:</strong> soporte@banco-seguro.com</p>
      <p><strong>Asunto:</strong> Acción urgente requerida</p>

      <p>
        Detectamos actividad sospechosa en tu cuenta.
        Para evitar el bloqueo, verificá tu identidad
        ingresando al siguiente enlace.
      </p>

      <button id="phishing-link">
        Verificar cuenta
      </button>
    </div>

    <div id="result" style="margin-top:20px;"></div>
  `,e.querySelector("#phishing-link").addEventListener("click",()=>{e.querySelector("#result").innerHTML=`
      <h3>⚠️ Simulación completada</h3>

      <p>
        Este correo es un ejemplo clásico de phishing.
        Utiliza urgencia y miedo para forzar una acción rápida.
      </p>

      <ul>
        <li>Dominio sospechoso</li>
        <li>Mensaje alarmista</li>
        <li>Solicitud de datos personales</li>
      </ul>

      <p>
        El phishing no ataca sistemas,
        ataca decisiones humanas.
      </p>
    `}),e}function b(){const e=document.createElement("section");e.className="lab passwords",e.innerHTML=`
    <h1>Laboratorio – Contraseñas Débiles</h1>

    <p>
      Muchas brechas de seguridad no ocurren por fallas técnicas complejas,
      sino por el uso de contraseñas débiles o reutilizadas.
    </p>

    <p>
      Este laboratorio demuestra, de forma educativa, por qué una contraseña
      débil puede ser adivinada fácilmente y cómo mejorarla.
    </p>

    <h2>Probá una contraseña</h2>

    <input
      type="password"
      id="passwordInput"
      placeholder="Ingresá una contraseña"
    />

    <div id="passwordResult"></div>

    <h3>Buenas prácticas</h3>
    <ul>
      <li>No reutilizar contraseñas</li>
      <li>Usar frases largas</li>
      <li>Combinar letras, números y símbolos</li>
      <li>Usar gestores de contraseñas</li>
    </ul>

    <blockquote>
      Este laboratorio no almacena ni envía contraseñas.
      Todo se evalúa localmente en tu navegador.
    </blockquote>
  `;const i=e.querySelector("#passwordInput"),s=e.querySelector("#passwordResult");return i.addEventListener("input",()=>{const r=i.value;let a="Débil",o="red";r.length>=8&&(a="Media",o="orange"),r.length>=12&&/[A-Z]/.test(r)&&/[0-9]/.test(r)&&/[^A-Za-z0-9]/.test(r)&&(a="Fuerte",o="green"),s.innerHTML=`
      <p style="color:${o}">
        Seguridad: <strong>${a}</strong>
      </p>
    `}),e}function g(){const e=document.createElement("section");return e.className="lab malware-lab",e.innerHTML=`
    <h1>Laboratorio 3 – Malware y consecuencias reales</h1>

    <p>
      Este laboratorio presenta una <strong>simulación educativa</strong> basada
      en casos reales. No se ejecuta ningún malware ni se enseña a crear software
      dañino.
    </p>

    <hr />

    <h2>📌 Caso simulado: NovaTech Solutions</h2>

    <p>
      NovaTech Solutions es una empresa ficticia de servicios administrativos.
      Un empleado recibe un correo con el asunto:
    </p>

    <blockquote>
      "Factura pendiente – Acción requerida"
    </blockquote>

    <p>
      El archivo adjunto parece legítimo, pero al ejecutarlo, el sistema comienza
      a comportarse de forma anormal.
    </p>

    <button id="step1">¿Qué ocurrió?</button>

    <div id="result1" class="hidden">
      <p>
        El archivo simulaba un <strong>ransomware</strong>, un tipo de malware que
        cifra los archivos del sistema y exige un pago para recuperarlos.
      </p>
    </div>

    <hr />

    <h2>🧠 ¿Qué es un ransomware?</h2>

    <p>
      El ransomware es una forma de malware diseñada para bloquear el acceso a
      archivos o sistemas. Uno de los casos más conocidos fue <strong>WannaCry
      (2017)</strong>.
    </p>

    <ul>
      <li>Se propagó explotando vulnerabilidades</li>
      <li>Afectó hospitales, empresas y gobiernos</li>
      <li>Provocó pérdidas millonarias</li>
    </ul>

    <button id="step2">Impacto real</button>

    <div id="result2" class="hidden">
      <p>
        En el mundo real, ataques de este tipo dejaron hospitales sin acceso a
        historiales médicos y empresas completamente paralizadas.
      </p>
    </div>

    <hr />

    <h2>⚖️ Hacker vs Cibercriminal</h2>

    <p>
      Un <strong>hacker</strong> estudia sistemas para entenderlos y protegerlos.
      Un <strong>cibercriminal</strong> utiliza ese conocimiento para dañar,
      extorsionar o robar.
    </p>

    <p>
      El conocimiento no es el problema. El uso que se le da, sí.
    </p>

    <button id="step3">Consecuencias legales</button>

    <div id="result3" class="hidden warning">
      <p>
        Personas reales fueron arrestadas por desarrollar y distribuir malware.
        Las consecuencias incluyeron condenas de prisión y pérdidas permanentes
        de libertad.
      </p>

      <blockquote>
        Estas prácticas no llevan al éxito ni al reconocimiento.  
        Llevan a daño real y consecuencias legales irreversibles.
      </blockquote>
    </div>
  `,e.querySelector("#step1").onclick=()=>e.querySelector("#result1").classList.toggle("hidden"),e.querySelector("#step2").onclick=()=>e.querySelector("#result2").classList.toggle("hidden"),e.querySelector("#step3").onclick=()=>e.querySelector("#result3").classList.toggle("hidden"),e}const f={"/":l,"/labs":p,"/about":u,"/history":m,"/labs/phishing":h,"/labs/passwords":b,"/labs/malware":g};function t(e,i){const s=e();if(typeof s=="string"){const r=document.createElement("div");r.innerHTML=s,i.appendChild(r)}else i.appendChild(s)}function c(){const e=location.hash.replace("#","")||"/",i=f[e]||l,s=document.querySelector("#app");s.innerHTML="",t(d,s),t(i,s)}window.addEventListener("hashchange",c);window.addEventListener("load",c);
