export default class Operation {
  constructor(operation, activeClass) {
    this.operation = document.querySelector(operation);
    this.activeClass = activeClass;
  }

  operationData() {
    this.weekDays = this.operation.dataset.week.split(',').map(Number);
    this.scheduleWeek = this.operation.dataset.hour.split(',').map(Number);
  }
  
  dataNow() {
    this.dateNow = new Date();
    this.dayNow = this.dateNow.getDay();
    this.hourNow = this.dateNow.getUTCHours() - 3;
  }
  
  isOpen() {
    const weekOpen = this.weekDays.indexOf(this.dayNow) !== -1;
    const scheduleOpen = (this.hourNow >= this.scheduleWeek[0] && this.hourNow < this.scheduleWeek[1]);
    return weekOpen && scheduleOpen;
  }

  activeOpen() {
    if (this.isOpen()) {
      this.operation.classList.add(this.activeClass);
    }
  }
  init() {
    if(this.operation) {
      this.operationData();
      this.dataNow();
      this.activeOpen();
    }
    return this;
  }
};
