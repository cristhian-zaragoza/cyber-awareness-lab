export function PasswordsLab() {
  const section = document.createElement('section')
  section.className = 'lab passwords'

  section.innerHTML = `
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
  `

  const input = section.querySelector('#passwordInput')
  const result = section.querySelector('#passwordResult')

  input.addEventListener('input', () => {
    const value = input.value
    let strength = 'Débil'
    let color = 'red'

    if (value.length >= 8) {
      strength = 'Media'
      color = 'orange'
    }

    if (
      value.length >= 12 &&
      /[A-Z]/.test(value) &&
      /[0-9]/.test(value) &&
      /[^A-Za-z0-9]/.test(value)
    ) {
      strength = 'Fuerte'
      color = 'green'
    }

    result.innerHTML = `
      <p style="color:${color}">
        Seguridad: <strong>${strength}</strong>
      </p>
    `
  })

  return section
}
