// Открытие\закрытие главного меню
(function () {
  const openTrigger = document.querySelector('.hamburger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeTrigger = document.querySelector('.mobile-menu__btn');

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
})();

// Аккордеон "Наша команда"
(function (){
  // Найдем аккордеон
  const teamMenu = document.querySelector('.team-accordeon');
  
  // Если кликнули по списку
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
})();

// Аккордеон "Бургер-меню"
(function() {
  // Найдем аккордеон
  const burgerMenu = document.querySelector('.menu__list');

  // Если кликнули по списку
  burgerMenu.addEventListener ('click', function(e) {

    e.preventDefault();
    
    // Получим ссылку
    let target = e.target;

    // Убедимся, что кликнули по ссылке, а не по внутреннему объекту
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
})();

// Слайдер 
(function () {
  // Область слайда
  const slider = document.querySelector('.burger-slider');
  // Список слайдов
  const sliderList = document.querySelector('.burger-slider__list');
  // Ширина слайда
  const sliderWidth = slider.clientWidth;
  // Количество страниц
  const pageCount = sliderList.children.length;
  // Максимальная ширина
  const maxWidth = sliderWidth * pageCount;
  // Минимальное правое положение
  const minRight = 0;
  // Количество отображаемых страниц
  const showPages = 1;
  // Максимальное правое положение
  const maxRight = sliderWidth * (pageCount-showPages);
  // Сдвиг
  const step = sliderWidth;

  let sliderPos = 0;

  // Зададим списку максимальную ширину
  sliderList.style.width = maxWidth + 'px';
  sliderList.style.right = sliderPos;

  // Получим кнопки перехода
  const leftArrow = document.querySelector('.arrow-left');
  const rightArrow = document.querySelector('.arrow-right');
  let activePage = null;

  // Если кликнули по кнопке "Влево"
  leftArrow.addEventListener('click', function(e) {

  // Получим текущую активную страницу
  activePage = sliderList.querySelector('.burger-slider__item--activ');

  e.preventDefault();
  
  // Если есть еще куда сдвигать
  if ( sliderPos > minRight ) {
    // Передвинем список на ширину слайда
    sliderPos -= step;
    sliderList.style.right = sliderPos + 'px';

    // Навесим активный класс на новую страницу
    if (activePage.previousElementSibling)
      activePage.previousElementSibling.classList.add('burger-slider__item--activ');

    // Удалим класс активности с текущей активной страницы
    activePage.classList.remove('burger-slider__item--activ');
  }
  });

  // Если кликнули по кнопке "Вправо"
  rightArrow.addEventListener('click', function(e) {

  // Получим текущую активную страницу
  activePage = sliderList.querySelector('.burger-slider__item--activ');

  e.preventDefault();

  // Если есть еще куда сдвигать
  if ( sliderPos < maxRight ) {
    // Передвинем список на ширину слайда
    sliderPos += step;
    sliderList.style.right = sliderPos + "px";
    
    // Навесим активный класс на новую страницу
    if (activePage.nextElementSibling)
      activePage.nextElementSibling.classList.add('burger-slider__item--activ');

    // Удалим класс активности с текущей активной страницы
    activePage.classList.remove('burger-slider__item--activ');    
  }

  });
})();

// Всплывающее окно
(function () {
  // Получим список отзывов
  const reviewList = document.querySelector('.reviews__list');

  // Найдем все ссылки в списке
  const reviewTarget = reviewList.querySelectorAll('.button--review');

  // Навесим на ссылки событие по клику
  for ( let i = 0; i < reviewTarget.length; i++) {
    reviewTarget[i].onclick = onReviewClick;
  };

  function onReviewClick(e) {
    
    e.preventDefault();

    // Получим родителя
    let parent = e.target.parentNode;
    
    // Найдем родителя с классом review
    while ( !parent.classList.contains('review') )
      parent = parent.parentNode;
    
    // Найдем в родителе элементы отзыва
    const title = parent.querySelector('.review__title').innerHTML;
 
    const description = parent.querySelector('.review__description').innerHTML;
  
    // Создадим всплывающее окно
    const reviewOverlay = createOverlay(title, description);
  
    // добавим данное окно в тело документа
    document.body.appendChild(reviewOverlay);
  };

  function createOverlay(title, description) {
    // создадим новый div с классом .review-overlay
    const overlayElement = document.createElement('div');
    overlayElement.classList.add('review-overlay');
  
    // получим шаблон для всплывающего окна
    const template = document.querySelector('#overlayTemplate');
    overlayElement.innerHTML = template.innerHTML;
  
    // На кнопку "Закрыть" удалим созданные элемент
    const closeElement = overlayElement.querySelector('.review-popup__close');
    closeElement.addEventListener('click', function(e) {

      e.preventDefault();

      document.body.removeChild(overlayElement);
    });
  
    // Вставим содержимое (заголовок, текст отзыва)
    const titleElement = overlayElement.querySelector('.review__title');
    titleElement.innerHTML = title;
  
    const contentElement = overlayElement.querySelector('.review__description');
    contentElement.innerHTML = description;
  
    return overlayElement;
  }  
})();

// One Page Scroll
(function () {
  // Получим элемент, который будем скроллить
  const scrollContent = document.querySelector('.maincontent');
  // текущее положение
  let topCurrent = 0;
  // количество секций 
  const sectionCount = scrollContent.querySelectorAll('section').length;
  const maxTop = 0;
  const minTop = (-1) * (sectionCount - 1) * 100;
  const stepWheel = 100;

  // Повесим событие мыши
  scrollContent.addEventListener('wheel', function(e) {
    
    e.preventDefault();

    // Узнаем на сколько прокрутили колесико
    var delta = e.wheelDeltaY;

    // Если значение отрицательное, значит прокрутили вверх
    if ( delta > 0 )
    {
      // прокрутили вверх
      if ( topCurrent < maxTop )
      {
        topCurrent += stepWheel;

        scrollContent.style.top = topCurrent + '%';
      }
    }
    else
    {
      // прокрутили вниз
      if ( topCurrent > minTop )
      {
        topCurrent -= stepWheel;    

        scrollContent.style.top = topCurrent + '%';
      }  
    }

  });

})();