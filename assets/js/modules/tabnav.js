export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  function activeTab(index) {
    tabContent.forEach((element) => {
      element.classList.remove('active');
    });
    const direction = tabContent[index].dataset.anima;
    tabContent[index].classList.add('active', direction);
  };
  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('active');
    tabMenu.forEach((itemMenu, indexMenu) => {
      itemMenu.addEventListener('click', () => {
        activeTab(indexMenu);
      });
    });
  };
};