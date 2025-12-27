(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();function d(){return`
    <nav class="navbar">
      <h1>Cyber Awareness Lab</h1>
      <ul>
        <li><a href="#/">Inicio</a></li>
        <li><a href="#/labs">Labs</a></li>
        <li><a href="#/history">Historia</a></li>
        <li><a href="#/about">Sobre mí</a></li>
      </ul>
    </nav>
  `}function s(){return`
    <section>
      <h2>Concientización en Ciberseguridad</h2>
      <p>
        Este sitio fue creado con fines educativos para mostrar cómo funcionan
        ataques reales usados en la red, de manera segura, ética y responsable.
      </p>
    </section>
  `}function u(){return`
    <section>
      <h2>Sobre mí</h2>

      <p>
        Mi nombre es Cristhian Zaragoza. Este proyecto nace de mi interés
        por la informática, la ciberseguridad y la necesidad de generar
        conciencia sobre los riesgos reales de navegar en internet.
      </p>

      <p>
        Cursé la carrera de Licenciatura en Sistemas durante dos años,
        complementando mi formación con estudio autodidacta, análisis
        de casos reales y contenido educativo sobre seguridad informática.
      </p>

      <p>
        Cyber Awareness Lab tiene fines exclusivamente educativos.
        No promueve actividades ilegales ni prácticas maliciosas.
        Todo el contenido busca informar, prevenir y formar criterio
        en usuarios, estudiantes y docentes.
      </p>

      <p>
        Creo que comprender cómo funcionan los ataques es una de las
        mejores formas de aprender a defenderse de ellos.
      </p>
    </section>
  `}function l(){return`
    <section>
      <h2>Laboratorios educativos</h2>
      <p>
        Aquí se muestran ejemplos controlados de phishing,
        ingeniería social y malware inofensivo con fines educativos.
      </p>
    </section>
  `}function f(){return`
    <section>
      <h2>Historia del hacking y la red</h2>
      <p>
        En esta sección se analiza la historia real de la darknet,
        Silk Road, AlphaBay, y casos relevantes como Edward Snowden,
        siempre desde una mirada educativa y ética.
      </p>
    </section>
  `}const p={"/":s,"/labs":l,"/about":u,"/history":f};function t(){const i=location.hash.replace("#","")||"/",a=p[i]||s;document.querySelector("#app").innerHTML=`
    ${d()}
    ${a()}
  `}window.addEventListener("hashchange",t);window.addEventListener("load",t);
