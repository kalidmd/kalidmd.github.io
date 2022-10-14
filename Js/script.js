const humnavbarsCont = document.querySelector('.hum-navbars');
const closeSign = document.querySelector('.close-sign');
const navCont = document.querySelector('.nav-cont');
const homeEl = document.querySelector('.home');
const menuEL = document.querySelector('.menu');
const servicesEl = document.querySelector('.service');
const dropdownEl = document.querySelector('.dropdown');
const whoWeAreEl = document.querySelector('.who-we-are');
const whatWeDoEl = document.querySelector('.what-we-do');
const navHeight = document.querySelector('.nav-container').offsetHeight;

let screenHeight = screen.height;
// let screenHeight = screen.width;

                // SCROLL PADDING
document.documentElement.style.setProperty('--scroll-padding', navHeight + 'px');

                // SCREEN HEIGHT
document.documentElement.style.setProperty('--screen-height', screenHeight + 'px');


humnavbarsCont.addEventListener('click', () => {
    humnavbarsCont.classList.add('hum-navbars-close');
    closeSign.classList.add('close-sign-open');
    navCont.classList.add('nav-cont-open');
});

closeSign.addEventListener('click', () => {
    humnavbarsCont.classList.remove('hum-navbars-close');
    closeSign.classList.remove('close-sign-open');
    navCont.classList.remove('nav-cont-open');    
});

homeEl.addEventListener('click', () => {
    navCont.classList.remove('nav-cont-open');   
    closeSign.classList.remove('close-sign-open');
    humnavbarsCont.classList.remove('hum-navbars-close');

});

whoWeAreEl.addEventListener('click', () => {
    navCont.classList.remove('nav-cont-open');   
    closeSign.classList.remove('close-sign-open');
    humnavbarsCont.classList.remove('hum-navbars-close');
});

whatWeDoEl.addEventListener('click', () => {
    navCont.classList.remove('nav-cont-open');   
    closeSign.classList.remove('close-sign-open');
    humnavbarsCont.classList.remove('hum-navbars-close');
});

servicesEl.addEventListener('click', () => {
    navCont.classList.remove('nav-cont-open');   
    closeSign.classList.remove('close-sign-open');
    humnavbarsCont.classList.remove('hum-navbars-close');
});
                        //MOBILE DROPDOWN
                        //******************
dropdownEl.addEventListener('click', () => {
    menuEL.classList.toggle('menu-open');
});

           //SWIPER 
          //********
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});
