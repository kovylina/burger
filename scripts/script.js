const openTrigger = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeTrigger = document.querySelector('.mobile-menu__btn')

console.log(openTrigger);

openTrigger.addEventListener ('click', function(e) {
  e.preventDefault();

  if(!mobileMenu.classList.contains('mobile-menu--active'))
    mobileMenu.classList.add('mobile-menu--active');
});

closeTrigger.addEventListener ('click', function(e) {
  e.preventDefault();

  if(mobileMenu.classList.contains('mobile-menu--active'))
    mobileMenu.classList.remove('mobile-menu--active');
});


const teamMenu = document.querySelector('.team-accordeon');

teamMenu.addEventListener ('click', function(e) {

  e.preventDefault();
  
  let target = e.target;
  let item = target.parentNode;
  let list = item.parentNode;
  let items = list.children;

  for ( let i = 0; i < items.length; i++ ) {
    if ( items[i] == item ) {
      items[i].classList.toggle('team-accordeon__item--active');
    }
    else
    if ( items[i].classList.contains('team-accordeon__item--active') ) 
      items[i].classList.remove('team-accordeon__item--active');  
  }
});


const burgerMenu = document.querySelector('.menu__list');

burgerMenu.addEventListener ('click', function(e) {

  e.preventDefault();
  
  let target = e.target;

  while (target.tagName != 'A') {
    target = target.parentNode;
  }  

  let item = target.parentNode;
  let list = item.parentNode;
  let items = list.children;

  for ( let i = 0; i < items.length; i++ ) {
    if ( items[i] == item ) {
      items[i].classList.toggle('menu__item--active');
    }
    else
    if ( items[i].classList.contains('menu__item--active') ) 
      items[i].classList.remove('menu__item--active');  
  }
});