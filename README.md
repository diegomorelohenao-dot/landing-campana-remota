![CI Status](https://github.com/diegomorelohenao-dot/landing-campana-remota/actions/workflows/ci.yml/badge.svg)

# Landing Campaña Política

> "Cetre: El futuro es hoy. Liderazgo, innovación y progreso para nuestra comunidad."

Landing page desarrollada para la campaña política del candidato Cetre, con el objetivo de comunicar su propuesta, biografía y llamado a la acción a los votantes.

## Tecnologías utilizadas

- **HTML5** — estructura semántica de la página
- **CSS3** — estilos, diseño responsivo y paleta de marca
- **JavaScript** — interactividad de botones y efectos de scroll
- **Git / GitHub** — control de versiones
- **GitHub Actions** — integración continua (CI)

## Estructura del proyecto

landing-campana-remota/
├── .github/
│ └── workflows/
│ └── ci.yml
├── index.html
├── README.md
├── css/
│ └── style.css
└── js/
└── script.js

## Secciones de la página

- **Header** — nombre del candidato y eslogan de campaña
- **Hero** — mensaje principal "Todos por el cambio"
- **Sobre mí** — biografía y trayectoria del candidato
- **Propuestas** — listado de ejes de gobierno
- **Llamado a la acción** — botones de votación y apoyo
- **Footer** — derechos de autor

## Integración Continua (CI)

Este repositorio cuenta con un workflow de **GitHub Actions** (`.github/workflows/ci.yml`) que se ejecuta automáticamente en cada `push` y `pull request` hacia la rama `main`.

El workflow valida:

- Existencia de `index.html`
- Existencia de `css/style.css`
- Existencia de `js/script.js`
- Existencia de `README.md`
- Que ninguno de los archivos anteriores esté vacío
- Que `index.html` tenga una declaración `DOCTYPE` válida

Si alguna validación falla, el pipeline se marca en rojo y detiene la ejecución, evitando que código incompleto o mal estructurado se integre a la rama principal.

## Cómo ejecutar el proyecto localmente

1. Clonar el repositorio:

```bash
   git clone https://github.com/diegomorelohenao-dot/landing-campana-remota.git
```

2. Entrar a la carpeta del proyecto:

```bash
   cd landing-campana-remota
```

3. Abrir `index.html` en el navegador.

## Autor

Diego Andres Morelo Henao
Aprendiz — Tecnología y Manufactura Avanzada
ADSO
