const paginationEl = document.querySelector('.pagination');
const imageCard1El = document.querySelector('.image-card1-open');
const imageCard2El = document.querySelector('.image-card2-close');
const navContainer = document.querySelector('.nav-container');
const humnavbarsCont = document.querySelector('.hum-navbars');
const closeSign = document.querySelector('.close-sign');
const navCont = document.querySelector('.nav-cont');
const homeEl = document.querySelector('.home');
const aboutEL = document.querySelector('.about');
const menuEL = document.querySelector('.menu');
const servicesEl = document.querySelector('.service');
const dropdownEl = document.querySelector('.dropdown');
const whoWeAreEl = document.querySelector('.who-we-are');
const whatWeDoEl = document.querySelector('.what-we-do');
const pagBtn1 = document.querySelector('#pag-btn1');
const pagBtn2 = document.querySelector('#pag-btn2');
const prevBtn1 = document.querySelector('#prev-btn1');
const nextBtn2 = document.querySelector('#next-btn2');
const item = document.querySelector('.item');
const item1 = document.querySelector('.item-1');
const item2 = document.querySelector('.item-2');
const item3 = document.querySelector('.item-3');
const item4 = document.querySelector('.item-4');
const item5 = document.querySelector('.item-5');
const item6 = document.querySelector('.item-6');
const item7 = document.querySelector('.item-7');
const item8 = document.querySelector('.item-8');


console.log(item);
// console.log(item2);
// console.log(item3);
// console.log(item4);
// console.log(item5);
// console.log(item6);
// console.log(item7);
// console.log(item8);

//console.log(nextBtn2);
// console.log(servicesEl);


                //DESKTOP PAGINATION
            // *********************
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

// aboutEL.addEventListener('click', () => {
//     navCont.classList.remove('nav-cont-open');   
//     closeSign.classList.remove('close-sign-open');
//     humnavbarsCont.classList.remove('hum-navbars-close');
// });
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


                // MOBILE PAGINATION
            //******************** 
nextBtn2.addEventListener('click', () => {
    item2.classList.add('item-2-open');
})