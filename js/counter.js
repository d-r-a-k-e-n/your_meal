// добавляєм прослушку на все вікно
window.addEventListener('click', function (event) {
  // створено змінну let бо інші не видно, адже вони не глобальні
  let counter;
  //  перевірка кліку лише по кнопках plus або minus
  if (
    event.target.dataset.action === 'plus' ||
    event.target.dataset.action === 'minus'
  ) {
    //   знаходимо обгортку щотчика (.count)
    const count = event.target.closest('.count');

    // знаходимо число в обгортці
    counter = count.querySelector('[data-counter]');
  }

  if (event.target.dataset.action === 'plus') {
    counter.innerText = ++counter.innerText;
  }

  if (event.target.dataset.action === 'minus') {
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    }
    // перевірка на те що знаходиться в корзині
    else if (
      event.target.closest('.order__wrapper') &&
      parseInt(counter.innerText) === 1
    ) {
      event.target.closest('.order__item').remove();

      calcCartPrise();
    }
  }

  if (
    event.target.hasAttribute('data-action') &&
    event.target.closest('.order__wrapper')
  ) {
    calcCartPrise();
  }
});
