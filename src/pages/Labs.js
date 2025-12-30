export function Labs() {
  const section = document.createElement('section')
  section.className = 'labs-page'

  section.innerHTML = `
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
  `

  return section
}
