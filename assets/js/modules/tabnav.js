export default class initTabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'active';
  }
  // active tab as soon the index
  activeTab(index) {
    this.tabContent.forEach((element) => {
      element.classList.remove(this.activeClass);
    });
    const direction = this.tabContent[index].dataset.anima;
    this.tabContent[index].classList.add(this.activeClass, direction);
  };
  // add the events to tabs
  addEventTabNav() {
    this.tabMenu.forEach((itemMenu, indexMenu) => {
      itemMenu.addEventListener('click', () => this.activeTab(indexMenu));
    });
  }

  init() {
    if(this.tabMenu.length && this.tabContent.length){
      // active first item
      this.activeTab(0);
      this.addEventTabNav();
    }
  }
};