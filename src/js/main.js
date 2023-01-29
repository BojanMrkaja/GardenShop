
const navToggler = document.querySelector('.navigation-toggler');

const searchMobileIcon = document.querySelector('.header__search-mobile');
const searchPopup = document.querySelector('.search-popup');
const searchPopupBtn = document.querySelector('.search-popup__btn');
const searchPopupInput = document.querySelector('.search-popup__input');
const searchPopupClose = document.querySelector('.search-popup__close');

const navigation = document.querySelector('.navigation');
const navigationDropdownLinks = [...document.querySelectorAll('[data-dropdown]')];
const dropdown = document.querySelectorAll('.navigation__dropdown');

//Hamburger menu animation
navToggler.addEventListener('click', function (){
    this.classList.toggle('active');

    navigation.classList.toggle('show');
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
});

navigationDropdownLinks.forEach(dropdownLink => {
    dropdownLink.addEventListener('click', function (){
        this.nextElementSibling.classList.toggle('show');
    });
});

