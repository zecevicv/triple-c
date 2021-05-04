/* #Hamburger Menu
  ======================================================= */
const headerMenu = document.querySelector('.header-menu');
const hamburgerBtn = document.querySelector('.header .hamburger');
const body = document.querySelector('body');
const headerLinks = document.querySelector('.header-links');

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (e) => {
    hamburgerBtn.classList.toggle('is-active');
    headerMenu.classList.toggle('show-menu');
    body.classList.toggle('no-scroll');
  });
}

/* #Hamburger Menu Level 2
  ======================================================= */
const headerDropdownTogglers2 = document.querySelectorAll('.header-dropdown-toggler-2');

headerDropdownTogglers2.forEach((toggler) => {
  toggler.addEventListener('click', (e) => {
    e.target.closest('ul').classList.toggle('show');
  });
});

/* #Mega Menu
  ======================================================= */
const headerDropdownTogglers = document.querySelectorAll('.header-dropdown-toggler');

headerDropdownTogglers.forEach((toggler1, index1) => {
  toggler1.addEventListener('click', (e) => {
    headerDropdownTogglers.forEach((toggler2, index2) => {
      if (index1 != index2) {
        toggler2.closest('li').classList.remove('show');
      }
    });
    e.target.closest('li').classList.toggle('show');
  });
});

/* #Footer Collapse
  ======================================================= */
const footerCollapsibles = document.querySelectorAll('.footer .collapsible');

footerCollapsibles.forEach((collapsible) => {
  collapsible.addEventListener('click', (e) => {
    if (e.target.closest('.collapse-toggler')) {
      collapsible.classList.toggle('show');
    }
  });
});