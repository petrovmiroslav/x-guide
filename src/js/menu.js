let menuIsOpen = false;
const Buttons = document.querySelectorAll('.js-menu-button');

export default function Menu () {
  Buttons.forEach(button => {
    button.addEventListener('click', toggleMenu);
  });

  window.addEventListener('resize', resizeHandler);
}

function toggleMenu () {
  menuIsOpen = !menuIsOpen;

  document.documentElement.classList.toggle('menu-open');
  document.documentElement.classList.toggle('no-scroll-with-scrollbar');
}

function resizeHandler () {
  if (!menuIsOpen) return;

  if (window.matchMedia('(min-width: 768px)').matches) {
    toggleMenu();
  }
}