export function Home() {
  return `
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
  `
}
