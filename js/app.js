/* #Hamburger Menu
  ======================================================= */
const header = document.querySelector('.header');
const hamburgerBtn = document.querySelector('.header .hamburger');
const body = document.querySelector('body');
const headerLinks = document.querySelector('.header-links');

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (e) => {
    hamburgerBtn.classList.toggle('is-active');
    header.classList.toggle('show-menu');
    body.classList.toggle('no-scroll');
  });
}

if (window.innerWidth < 1024) {
  headerLinks.style.display = 'none';
  setTimeout(() => {
    headerLinks.style.display = 'flex';
  }, 250);
}