const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

function activateSection() {
  let currentSectionId = "";

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top;
    const sectionHeight = rect.height;
    const windowHeight = window.innerHeight;

    const isInCenter = sectionTop >= 0 && sectionTop <= windowHeight - sectionHeight / 2;

    if (isInCenter) {
      currentSectionId = section.getAttribute("id");

      // Добавляем эффект
      section.querySelectorAll("h2, p").forEach(el => {
        el.classList.add("glass-effect");
      });
    } else {
      // Удаляем эффект
      section.querySelectorAll("h2, p").forEach(el => {
        el.classList.remove("glass-effect");
      });
    }
  });

  // Подсветка меню
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", activateSection);
window.addEventListener("load", activateSection);
