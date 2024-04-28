const openBtn = document.querySelector('.order__submit');
const modal = document.querySelector('.modal--delivery');
const closeBtn = document.querySelector('.close');

openBtn.addEventListener('click', () => {
  modal.classList.add('modal--open');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('modal--open');
});
