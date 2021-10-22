export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-set="accordion"] dt');
  function activeAccordion(e) {
    e.currentTarget.classList.toggle('ativo');
    e.currentTarget.nextElementSibling.classList.toggle('ativo');
  };
  if (accordionList.length) {
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  };
};