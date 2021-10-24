import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdown, events) {
    this.dropdownMenus = document.querySelectorAll(dropdown);

    if (events === undefined) this.events = ['touchstart', 'click'];
    else events = this.events;

    this.activeClass = 'active';
    this.activeDropdown = this.activeDropdown.bind(this);
  };
  activeDropdown(e) {
    e.preventDefault();
    const element = e.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  };
  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdown);
      });
    });
  }
  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
};