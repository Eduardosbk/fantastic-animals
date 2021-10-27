import debounce from './debounce.js';

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindowHeight = window.innerHeight * 0.6;
    this.active = 'ativo';

    this.checkDistance = debounce(this.checkDistance.bind(this), 200);
  }
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor((offset + 150) - this.halfWindowHeight)
        }
    });
  }
  checkDistance() {
    this.distance.forEach((item) => {
      if(window.pageYOffset > item.offset) {
        item.element.classList.add(this.active);
      } else if (item.element.classList.contains(this.active)) {
        item.element.classList.remove(this.active);
      };
    }
    );
  }
  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }
  killAnimation() {
    window.removeEventListener('scroll', this.checkDistance);
  }
};