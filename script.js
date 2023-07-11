'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// Add All to select all btns.(array)
const btnsOpenModal = document.querySelectorAll('.show-modal');

// use below to reduce repetition. (close modal)
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  // console.log('close');
};

// use below to reduce repetition.(open modal)
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  // console.log('open');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
  // function () {
  //   // console.log(`You clicked btn ${i + 1}`);
  //   modal.classList.remove('hidden');
  //   overlay.classList.remove('hidden');
  // });
}

// not closeModal() in below, it will call instantly. we should wait until the btn was clicked.
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//let JS to pass the event object as an argument when 'keydown'
document.addEventListener('keydown', function (e) {
  console.log(e['key']);

  // to ensure "esc" is pressed & only close when it is not hidden
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //only close when it is not hidden

    // if (!modal.classList.contains('hidden')) {
    closeModal();
    // }
  }
});
