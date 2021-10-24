export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindowHeight = window.innerHeight * 0.6;

    this.animaScroll = this.animaScroll.bind(this);
  }
  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - this.halfWindowHeight;
      if (sectionTop < 0) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      };
    });
  };

  init() {
    this.animaScroll();
    window.addEventListener('scroll', this.animaScroll);
  }
};