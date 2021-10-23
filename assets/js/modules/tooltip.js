export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind of objects
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }
  // move tooltip withou cut it
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 10}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 175}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 10}px`;
    }
  }

  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }
// create tooltipbox inside body
  createTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerHTML = text;
    document.body.appendChild(tooltipBox)
    this.tooltipBox =  tooltipBox;
  }

  onMouseOver({ currentTarget }) {
    // create tooltipbox and inner to a prop
    this.createTooltipBox(currentTarget);

    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver)
    })
  }

  init() {
    if(this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
};


