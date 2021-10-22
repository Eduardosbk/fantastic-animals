import initAnimaNumbers from './anima-numbers.js';

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    function createAnimal(animal) {
      const div = document.createElement('div');
      div.classList.add('number-animal');
      div.innerHTML = `
        <h3>${animal.specie}</h3>
        <span data-number>${animal.total}</span>
      `;
      return div;
    };
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numbersGrid = document.querySelector('.numbers-grid');
    
      animaisJSON.forEach( (animal) => {
        const divAnimal = createAnimal(animal);
        numbersGrid.appendChild(divAnimal)
      });
    
      initAnimaNumbers();
    } catch(err) {
      console.log(err);
    }
  }
  fetchAnimais('./animaisapi.json');
};

