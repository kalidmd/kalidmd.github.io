const paginationEl = document.querySelector('.pagination');
const imageCard1El = document.querySelector('.image-card1-open');
const imageCard2El = document.querySelector('.image-card2-close');
const navContainer = document.querySelector('.nav-container');
const humnavbarsCont = document.querySelector('.hum-navbars');
const closeSign = document.querySelector('.close-sign');
const navCont = document.querySelector('.nav-cont');
const homeEl = document.querySelector('.home');
const aboutEL = document.querySelector('.about');
const servicesEl = document.querySelector('.service');

console.log(homeEl);
console.log(aboutEL);
console.log(servicesEl);


const pagBtn1 = document.querySelector('#pag-btn1');
const pagBtn2 = document.querySelector('#pag-btn2');

pagBtn1.addEventListener('click', () => {
    pagBtn1.classList.add('active');
    pagBtn2.classList.remove('active');
    imageCard1El.classList.replace('section1-close', 'image-card1-open');
    imageCard2El.classList.replace('image-card2-open', 'image-card2-close');

});

pagBtn2.addEventListener('click', () => { 
    pagBtn1.classList.remove('active');
    pagBtn2.classList.add('active');
    imageCard1El.classList.replace('image-card1-open', 'section1-close');
    imageCard2El.classList.replace('image-card2-close', 'image-card2-open');

});

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

aboutEL.addEventListener('click', () => {
    navCont.classList.remove('nav-cont-open');   
    closeSign.classList.remove('close-sign-open');
    humnavbarsCont.classList.remove('hum-navbars-close');
});

servicesEl.addEventListener('click', () => {
    navCont.classList.remove('nav-cont-open');   
    closeSign.classList.remove('close-sign-open');
    humnavbarsCont.classList.remove('hum-navbars-close');
});