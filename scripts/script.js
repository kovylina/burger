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

