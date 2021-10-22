export default function initAnimationScroll() {
  const sections = document.querySelectorAll('[data-anima="scroll"]');
  const halfWindowHeight = window.innerHeight * 0.6;
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - halfWindowHeight;
      if (sectionTop < 0) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      };
    });
  };
  if (sections.length) {
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  };
};