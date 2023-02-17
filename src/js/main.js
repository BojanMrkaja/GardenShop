import Glider from 'glider-js';

const navToggler = document.querySelector('.navigation-toggler');
const bodyEl = document.querySelector('body');

const searchMobileIcon = document.querySelector('.header__search-mobile');
const searchPopup = document.querySelector('.search-popup');
const searchPopupBtn = document.querySelector('.search-popup__btn');
const searchPopupInput = document.querySelector('.search-popup__input');
const searchPopupClose = document.querySelector('.search-popup__close');

const navigation = document.querySelector('.navigation');
const navigationList = document.querySelector('.navigation__list');
const navigationItem = document.querySelectorAll('.navigation__item');

//HAMBURGER MENU ANIMATION
navToggler.addEventListener('click', function (){
    this.classList.toggle('active');

    navigation.classList.toggle('show');
});

//SEARCH MOBILE
searchMobileIcon.addEventListener('click', function (){
    bodyEl.style.overflow = 'hidden';
    searchPopup.style.opacity = '1';
    searchPopup.style.visibility = 'visible';
    searchPopupInput.classList.add('animation-1');
    searchPopupBtn.classList.add('animation-2');
});

searchPopupClose.addEventListener('click', function (){
    bodyEl.style.overflow = 'visible';
    searchPopup.style.opacity = '0';
    searchPopup.style.visibility = 'hidden';
    searchPopupInput.classList.remove('animation-1');
    searchPopupBtn.classList.remove('animation-2');
});

//NAVIGATION CLICK AND HOVER EVENTS
if (screen.width < 992){
    navigationList.addEventListener('click', function (e){
        const link = e.target.closest('[data-dropdown]');
        if (!link) return;
        link.nextElementSibling.classList.toggle('show');
    });
}

if (screen.width >= 992){
    navigationItem.forEach(navItem => {
       navItem.addEventListener('mouseenter', function (){
           if (!navItem.firstElementChild.nextElementSibling)return;
           navItem.firstElementChild.nextElementSibling.classList.add('show');
       });

        navItem.addEventListener('mouseleave', function (){
            if (!navItem.firstElementChild.nextElementSibling)return;
            navItem.firstElementChild.nextElementSibling.classList.remove('show');
        });
    });
}

new Glider(document.querySelector('.glider'), {
    arrows:{
        prev:document.querySelector('.slider__btn--left'),
        next:document.querySelector('.slider__btn--right')
    },
    draggable:false,
    responsive:[
        {
            breakpoint:600,
            settings:{
                slidesToShow:2,
                slidesToScroll:2
            }
        },

        {
            breakpoint:768,
            settings:{
                slidesToShow:3,
                slidesToScroll:3
            }
        },

        {
            breakpoint:992,
            settings:{
                slidesToShow:4,
                slidesToScroll:4
            }
        },

        {
            breakpoint:1200,
            settings:{
                slidesToShow:5,
                slidesToScroll:5
            }
        }
    ]
});


