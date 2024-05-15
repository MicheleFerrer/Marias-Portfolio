/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*initializing swiper js*/ 

const swiperHome = new Swiper('.home__swiper', {
    loop: true,
    speed: 800,
    parallax: true,
    effect: 'fade',
  
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',

      formatFractionCurrent: (number) => { return '0' + number },
      formatFractionTotal: (number) => { return '0' + number }

    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
=======
navLink.forEach(n => n.addEventListener('click', linkAction))

