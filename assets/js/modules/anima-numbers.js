export default function initAnimaNumbers() {
  function animaNumbers() {
    const numbers = document.querySelectorAll('[data-number]');
    numbers.forEach((number) => {
      const total = +number.innerText;
      const increment = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start =+ start + increment;
        number.innerText = start;
        if(start > total) {
          number.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });  
  }
  let observer;
  function handleMutaion(mutation) {
    if(mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumbers();
    }
  };
  const oberveTarget = document.querySelector('.numbers');
  observer = new MutationObserver(handleMutaion);
  observer.observe(oberveTarget, { attributes: true });
};

