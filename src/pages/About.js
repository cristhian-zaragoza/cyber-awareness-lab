export function About() {
  const section = document.createElement('section')

  section.innerHTML = `
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
  `

  // Modal / notificación
  section.querySelector('#showNotice').addEventListener('click', () => {
    alert(
      'Cyber Awareness Lab es un proyecto original y educativo.\n' +
      'Autor: Christian Zaragoza.\n' +
      'Todos los derechos reservados.\n' +
      'El contenido no promueve actividades ilegales.'
    )
  })

  return section
}
