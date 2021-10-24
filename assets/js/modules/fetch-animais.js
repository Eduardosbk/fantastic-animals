import AnimaNumbers from './anima-numbers.js';

export default function fetchAnimals(url, target) {
  // create a div with total animals data
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('number-animal');
    div.innerHTML = `
      <h3>${animal.specie}</h3>
      <span data-number>${animal.total}</span>
    `;
    return div;
  };
  const numbersGrid = document.querySelector(target);
  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal);
    numbersGrid.appendChild(divAnimal);
  }
  function animaNumbersanimals() {
    const animaNumbers = new AnimaNumbers('[data-number]', '.numbers', 'ativo');
    animaNumbers.init();
  }
  // bring the data animals throught a json file
  async function createAnimals() {
    try {
      // fetch wait a response
      const animaisResponse = await fetch(url);
      // turn the json into a response
      const animaisJSON = await animaisResponse.json();
      animaisJSON.forEach((animal) => fillAnimals(animal));
      animaNumbersanimals();
    } catch (err) {
      console.log(err);
    }
  }
  return createAnimals();
};

