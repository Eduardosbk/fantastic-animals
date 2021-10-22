export default function initModal() {
  const openButton = document.querySelector('[data-modal="active"]');
  const closeButton = document.querySelector('[data-modal="close"]');
  const containerModal = document.querySelector('.modal-container');
  function toggleModal(e) {
    e.preventDefault();
    containerModal.classList.toggle('ativo');
  };
  function clickOutModal(event) {
    if(event.target === this){
      toggleModal(event);
    };
  };
  if(openButton && closeButton && containerModal) {
    openButton.addEventListener('click', toggleModal);
    closeButton.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', clickOutModal);
  };
};

