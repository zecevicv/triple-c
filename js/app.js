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

/* #Sliders
  ======================================================= */
window.addEventListener('load', () => {
  /* #Banner Slider
  ======================================================= */
  if (document.querySelector('.banner-slider .swiper-container')) {
    new Swiper('.banner-slider .swiper-container', {
      effect: 'fade',
      loop: true,
      pagination: {
        el: '.banner-slider .swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.banner-slider .swiper-button-next',
        prevEl: '.banner-slider .swiper-button-prev',
      },
    });
  }

  /* #Help Slider
  ======================================================= */
  if (document.querySelector('.help-slider .swiper-container')) {
    new Swiper('.help-slider .swiper-container', {
      loop: true,
      slidesPerView: 5,
      centeredSlides: true,
      navigation: {
        nextEl: '.help-slider .swiper-button-next',
        prevEl: '.help-slider .swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 2.6,
          centeredSlides: false,
        },
        1023: {
          slidesPerView: 5,
          centeredSlides: true,
        }
      }
    });
  }

  /* #Blog Posts Slider
  ======================================================= */
  if (document.querySelector('.blog-posts .swiper-container')) {
    new Swiper('.blog-posts .swiper-container', {
      loop: true,
      centeredSlides: true,
      pagination: {
        el: ".blog-posts .swiper-pagination",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.2,
          allowTouchMove: true
        },
        1023: {
          slidesPerView: 3,
          allowTouchMove: false
        }
      }
    });
  }

  /* #Packages Slider
  ======================================================= */
  let initialSlide = 0;
  
  if (window.innerWidth < 1024) {
    initialSlide = 1;
  }

  if (document.querySelector('.packages .swiper-container')) {
    new Swiper('.packages .swiper-container', {
      initialSlide: initialSlide,
      pagination: {
        el: ".packages .swiper-pagination",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          allowTouchMove: true
        },
        1023: {
          slidesPerView: 3,
          allowTouchMove: false
        }
      }
    });
  }

  /* #Products Slider
  ======================================================= */
  new Swiper( '.products-swiper', {
    pagination: {
      el: '.products-swiper .swiper-pagination',
    },
		effect: 'coverflow',
		loop: true,
		centeredSlides: true,
		coverflowEffect: {
			rotate: 0,
			stretch: 60,
			depth: 140,
			slideShadows : false,
		},
    breakpoints: {
      0: {
        slidesPerView: 1,
        effect: 'slide'
      },
      1024: {
        slidesPerView: 4,
        effect: 'coverflow'
      }
    }
} );
});