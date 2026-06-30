// ===== Landing Page Candidato Cetre =====

document.addEventListener("DOMContentLoaded", () => {
  const btnVotar = document.getElementById("btn");
  const btnApoyo = document.getElementById("sp");

  // Botón "¡Votar ahora!"
  if (btnVotar) {
    btnVotar.addEventListener("click", () => {
      alert("¡Gracias por tu intención de voto! Juntos construimos el cambio.");
    });
  }

  // Botón "¡Apoyo!"
  if (btnApoyo) {
    btnApoyo.addEventListener("click", () => {
      btnApoyo.textContent = "¡Apoyo registrado!";
      btnApoyo.disabled = true;
      btnApoyo.style.opacity = "0.6";
      btnApoyo.style.cursor = "not-allowed";
    });
  }

  // Resalta la sección de propuestas al hacer scroll hasta ella
  const propuestas = document.getElementById("propuestas");
  if (propuestas && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transition = "box-shadow 0.4s ease";
            entry.target.style.boxShadow = "0 4px 14px rgba(230, 57, 70, 0.3)";
          }
        });
      },
      { threshold: 0.3 },
    );
    observer.observe(propuestas);
  }
});
