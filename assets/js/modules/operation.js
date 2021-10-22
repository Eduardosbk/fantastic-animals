export default function initOperation() {
  const operation = document.querySelector('[data-week]');
  const weekDays = operation.dataset.week.split(',').map(Number);
  const scheduleWeek = operation.dataset.hour.split(',').map(Number);
  const dateNow = new Date();
  const dayWeek = dateNow.getDay();
  const hourNow = dateNow.getHours();
  const weekOpen = weekDays.indexOf(dayWeek) !== -1;
  const scheduleOpen = (hourNow >= scheduleWeek[0] && hourNow < scheduleWeek[1]);
  if (weekOpen && scheduleOpen) {
    operation.classList.add('open');
  }
};
