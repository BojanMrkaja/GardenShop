
const navToggler = document.querySelector('.navigation-toggler');

const searchMobileIcon = document.querySelector('.header__search-mobile');
const searchPopup = document.querySelector('.search-popup');
const searchPopupBtn = document.querySelector('.search-popup__btn');
const searchPopupInput = document.querySelector('.search-popup__input');
const searchPopupClose = document.querySelector('.search-popup__close');

//Hamburger menu animation
navToggler.addEventListener('click', function (){
    navToggler.classList.toggle('active');
});

//Search mobile
searchMobileIcon.addEventListener('click', function (){
    searchPopup.style.opacity = '1';
    searchPopup.style.visibility = 'visible';
    searchPopupInput.classList.add('animation-1');
    searchPopupBtn.classList.add('animation-2');
});

searchPopupClose.addEventListener('click', function (){
    searchPopup.style.opacity = '0';
    searchPopup.style.visibility = 'hidden';
    searchPopupInput.classList.remove('animation-1');
    searchPopupBtn.classList.remove('animation-2');
})

