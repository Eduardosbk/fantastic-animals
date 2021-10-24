export default class AnimaNumbers {
  constructor(numbers, oberverTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.oberverTarget = document.querySelector(oberverTarget);
    this.observerClass = observerClass;

    this.handleMutation = this.handleMutation.bind(this);
  }
// get dom element with number at the text
  static incrementNumber(number) {
    const total = +number.innerText;
    const increment = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start =+ increment;
      number.innerText = start;
      if (start > total) {
        number.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }
  // active number increment for each number
  animaNumbers() {
    this.numbers.forEach((number) => this.constructor.incrementNumber(number));  
  }
  handleMutation(mutation) {
    if(mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumbers();
    }
  }
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.oberverTarget, { attributes: true });
  }
  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
};
