export function PhishingLab() {
  const section = document.createElement('section')

  section.innerHTML = `
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
  `

  section.querySelector('#phishing-link').addEventListener('click', () => {
    section.querySelector('#result').innerHTML = `
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
    `
  })

  return section
}
