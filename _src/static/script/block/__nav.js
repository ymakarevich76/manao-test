if (document.querySelector('.header__burger')) {
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');

  burger.addEventListener('click', () => {
    nav.classList.add('active');
    document.body.style.overflow = 'hidden';

  })

  document.addEventListener('click', (e) => {
    if (e.target == nav || e.target == burger) {
    } else {
      nav.classList.remove('active');
      document.body.style.overflow = '';
    }
  })

}
