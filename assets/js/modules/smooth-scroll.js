export default class SmoothScroll {
  constructor (links, options) {
    this.innerLinks = document.querySelectorAll(links);
    if (this.options === undefined) {
      this.options = { behavior: "smooth", block: 'start' }
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }
  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  } 
  addLinkEvent() {
    this.innerLinks.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }
  init() {
    if (this.innerLinks.length) {
      this.addLinkEvent();
    }
    return this;
  }
};