export default function initSmoothScroll() {
  const innerLinks = document.querySelectorAll('[data-menu="suave"]');
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topSection = section.offsetTop;
    window.scrollTo({
      top: topSection,
      behavior: "smooth"
    });
  };
  innerLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
};