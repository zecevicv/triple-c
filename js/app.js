/* #Hamburger Menu
  ======================================================= */
const headerMenu = document.querySelector('.header-menu');
const hamburgerBtn = document.querySelector('.header .hamburger');
const body = document.querySelector('body');

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (e) => {
    hamburgerBtn.classList.toggle('is-active');
    headerMenu.classList.toggle('show-menu');
    body.classList.toggle('no-scroll');

    if (headerMenu.classList.contains('show-menu')) {
      gsap.to(headerMenu, {
        height: 'calc(100vh - 21.3vw + 1px)',
        duration: .5,
        ease: 'power1.inOut'
      });
    } else {
      gsap.to(headerMenu, {
        height: '0'
      });
    }
  });
}

/* #Mega Menu
  ======================================================= */
const headerDropdownTogglers = document.querySelectorAll('.header-dropdown-toggler');
const headerBottom = document.querySelector('.header-bottom');

// Mobile
if (window.innerWidth < 1024) {
  headerDropdownTogglers.forEach((toggler) => {
    toggler.addEventListener('click', (e) => {
      const li = toggler.closest('li');
      const dropdown = li.querySelector('.header-dropdown');
  
      if (document.querySelector('.header li.show') && document.querySelector('.header li.show') != li) {
        const li2 = document.querySelector('.header li.show');
        const dropdown2 = li2.querySelector('.header-dropdown');
  
        li2.classList.remove('show');
        gsap.to(dropdown2, {
          height: '0'
        });
      } 

      if (!li.classList.contains('show')) {
        li.classList.add('show');
        gsap.to(dropdown, {
          height: 'auto',
          duration: .5,
          ease: 'power1.inOut'
        });
      } else {
        li.classList.remove('show');
        gsap.to(dropdown, {
          height: '0'
        });
      }
    }); 
  });
} 
// Desktop
else {
  headerDropdownTogglers.forEach((toggler) => {
    toggler.addEventListener('mouseover', (e) => {
      const li = toggler.closest('li');
      const dropdown = li.querySelector('.header-dropdown');
  
      if (document.querySelector('.header li.show') && document.querySelector('.header li.show') != li) {
        const li2 = document.querySelector('.header li.show');
        const dropdown2 = li2.querySelector('.header-dropdown');
  
        li2.classList.remove('show');
        gsap.to(dropdown2, {
          y: 0,
          opacity: 0
        });
      }
  
      li.classList.add('show');
      gsap.to(dropdown, {
        y: "100%",
        duration: .4,
        opacity: 1
      });
  
    }); 
  });
  
  headerBottom.addEventListener('mouseleave', (e) => {
    headerDropdownTogglers.forEach((toggler) => {
      const li = toggler.closest('li');
      const dropdown = li.querySelector('.header-dropdown');
  
      li.classList.remove('show');
      gsap.to(dropdown, {
        y: 0,
        opacity: 0
      });
    });
  });
}

/* #Accordion
================================================== */
const accordions = document.querySelectorAll('.accordion');

if (accordions) {
  accordions.forEach((accordion) => {
    const collapsibles = accordion.querySelectorAll('.collapsible');

    accordion.addEventListener('click', (e) => {
      if (e.target.closest('.collapse-toggler')) {
        e.preventDefault();
    
        const collapsible = e.target.closest('.collapsible');
        const collapse = collapsible.querySelector('.collapse');
    
        if (!accordion.classList.contains('no-close')) {
          collapsibles.forEach((coll) => {
            if (coll.classList.contains('show') && coll != collapsible) {
              collCollapse = coll.querySelector('.collapse');
      
              coll.classList.remove('show');
              gsap.to(collCollapse, {
                height: '0'
              });
            }
          });
        }
    
        collapsible.classList.toggle('show');
    
        if (collapsible.classList.contains('show')) {
          gsap.to(collapse, {
            height: 'auto',
            duration: .4,
            ease: 'power1.inOut'
          });
        } else {
          gsap.to(collapse, {
            height: '0'
          });
        }
      }
    });
  })
}

/* #Banner Video Tilt
================================================== */
if (document.querySelector('.banner-video')) {
  if (window.innerWidth < 1024) {
    $('.banner-video .video-wrapper').parallaxTilt({
      parallaxMultiple: 0.5,
      tiltMultiple: 0.5
    });
  } else {
    $('.banner-video .video').parallaxTilt({
      parallaxMultiple: 0.05,
      tiltMultiple: 0.015,
      duration: 10000,
    });
  }
}

/* #FAQs
  ======================================================= */
const faqs = document.querySelector('.faqs');

if (faqs) {
  const navBtns = faqs.querySelectorAll('.faqs-navigation li');
  const tabs = faqs.querySelectorAll('.faqs-tabs li');

  if (navBtns && tabs) {
    navBtns.forEach((btn, index) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
  
        navBtns.forEach((btn2) => {
          if (btn === btn2) {
            btn2.classList.add('active');
          } else {
            btn2.classList.remove('active');
          }
        });
  
        tabs.forEach((tab, index2) => {
          if (index == index2) {
            tab.classList.add('active');
          } else {
            tab.classList.remove('active');
          }
        });
      });
    });
  }
}
  
/* #Sliders
  ======================================================= */
window.addEventListener('load', () => {
  /* #Banner Slider
  ======================================================= */
  if (document.querySelector('.banner-slider .swiper-container')) {
    new Swiper('.banner-slider .swiper-container', {
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
  const helpSliders = document.querySelectorAll('.help-slider .swiper-container');

  if (helpSliders) {
    helpSliders.forEach((slider) => {
      new Swiper(slider, {
        loop: true,
        slidesPerView: 5,
        centeredSlides: true,
        navigation: {
          nextEl: slider.closest('.help-slider').querySelector('.swiper-button-next'),
          prevEl: slider.closest('.help-slider').querySelector('.swiper-button-prev')
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
    });
  }

  /* #Services Slider
  ======================================================= */
  if (document.querySelector('.services-slider .swiper-container')) {
    new Swiper('.services-slider .swiper-container', {
      loop: true,
      slidesPerView: 5,
      centeredSlides: true,
      pagination: {
        el: '.services-slider .swiper-pagination'
      },
      breakpoints: {
        0: {
          slidesPerView: 1.25
        },
        1023: {
          slidesPerView: 5
        }
      }
    });
  }

  /* #Reviews Slider
  ======================================================= */
  if (document.querySelector('.reviews .swiper-container')) {
    new Swiper('.reviews .swiper-container', {
      loop: true,
      slidesPerView: 3,
      centeredSlides: true,
      navigation: {
        nextEl: '.reviews .swiper-button-next',
        prevEl: '.reviews .swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1.2
        },
        1023: {
          slidesPerView: 3
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

  /* #Team Slider
  ======================================================= */
  if (document.querySelector('.team .swiper-container')) {
    new Swiper('.team .swiper-container', {
      pagination: {
        el: ".team .swiper-pagination",
      },
      slidesPerColumnFill: 'row',
      direction: 'horizontal',
      breakpoints: {
        0: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          allowTouchMove: true,
        },
        1023: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          allowTouchMove: false,
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