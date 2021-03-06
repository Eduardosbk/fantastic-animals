import outsideClick from './outsideclick.js'

export default class MenuMobile {
  constructor(button, list, events) {
    this.menuButton = document.querySelector(button);
    this.menuList = document.querySelector(list);

    if(events === undefined) this.events = ['click', 'touchend'];
    else this.events = events;

    this.activeClass = 'active';

    this.openMenu = this.openMenu.bind(this);
  }
  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    }
  )};

  addMenuMobileEvents() {
    this.events.forEach((event) => {
      this.menuButton.addEventListener(event, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
};