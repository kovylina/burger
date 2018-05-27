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
  const teamTrigger = teamMenu.querySelectorAll('.team-accordeon__trigger');
  
  for ( let i = 0; i < teamTrigger.length; i++ ) {
    teamTrigger[i].onclick = onTeamClick;
  };

  function onTeamClick (e) {
    
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
  };

})();

// Аккордеон "Бургер-меню"
(function() {
  // Найдем аккордеон
  const burgerMenu = document.querySelector('.menu__list');

  const burgerMenuTarget = burgerMenu.querySelectorAll('.menu__trigger');

  for (let i = 0; i < burgerMenuTarget.length; i++ ) {
    burgerMenuTarget[i].onclick = onItemClick;
  }

  function onItemClick (e) {
    e.preventDefault();

    // Получим ссылку
    let target = e.target;
    
    while ( target.tagName != 'A'  )
      target = target.parentNode;

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
  };
  
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

  // Получим список секций
  const sectionList = scrollContent.querySelectorAll('section');

  // Флаг скрола
  let isScroll = false;

  // количество секций 
  const sectionCount = sectionList.length;

  function setActiveMenuItem (itemEq) {

    const fixedMenu = document.querySelector('.nav-sidebar__list');
    const fixedMenuItems = fixedMenu.children;

    for ( let i = 0; i < fixedMenuItems.length; i++ ) {
      if ( i == itemEq ) {
        fixedMenuItems[i].firstElementChild.classList.add('nav-sidebar__link--active');
      }
      else
      if ( fixedMenuItems[i].firstElementChild.classList.contains('nav-sidebar__link--active') ) 
        fixedMenuItems[i].firstElementChild.classList.remove('nav-sidebar__link--active');  
    }   
  };

  function performTransition(sectionEq) {

    const position = sectionEq * -100;

    if (isScroll) return;

    isScroll = true;

    // Удалим\установим активный класс
    for (let i = 0; i < sectionList.length; i++) {
      if ( i != sectionEq) {
        if ( sectionList[i].classList.contains('section--active') )
          sectionList[i].classList.remove('section--active'); 
      } 
      else {
        sectionList[i].classList.add('section--active');
      }
    };
    
    const transformStyle = 'translateY(' + position + '%)';
    scrollContent.style.MozTransform = transformStyle;
    scrollContent.style.WebkitTransform = transformStyle;
    scrollContent.style.OTransform = transformStyle;
    scrollContent.style.MsTransform = transformStyle;
    scrollContent.style.Transform = transformStyle;


    setTimeout(() => {
      isScroll = false;
      setActiveMenuItem(sectionEq);
    }, 1100); // продолжительность анимации + 300ms - потому что закончится инерция    
  };

  function scrollToSection(direction) {

    if (isScroll) return;

    // Определим активную секцию
    let activeIndex = 0;
    let index = 0;
    let found = false;

    while ( !found && index < sectionCount ) {
      if ( sectionList[index].classList.contains('section--active') ) 
      {
        activeIndex = index;
        found = true;
      }   
      index++;
    }

    const activeSection = sectionList[activeIndex];
    const nextSection = activeSection.nextElementSibling;
    const prevSection = activeSection.previousElementSibling;

    if (direction == 'up' && prevSection){
      performTransition( --activeIndex );  
    }

    if (direction == "down" && nextSection) {
      performTransition( ++activeIndex );   
    }

  };

  // Повесим событие мыши
  scrollContent.addEventListener('wheel', function(e) {
    
    e.preventDefault();

    // Узнаем на сколько прокрутили колесико
    var delta = e.wheelDeltaY;

    const direction = delta < 0 ? "down" : "up";

    scrollToSection(direction);

  });

   // Повесим событие клавиатуры
   document.addEventListener('keydown', function(e) {
    
    e.preventDefault();

    switch ( e.keyCode ) {
      case 40:
        scrollToSection("down");
        break;

      case 38:
        scrollToSection("up");
        break;
    }   
  });

  // Переход на секцию по клику на sidebar
  const sidebarList = document.querySelector('.nav-sidebar__list');

  // Найдем все ссылки в списке
  const sidebarTarget = sidebarList.querySelectorAll('.nav-sidebar__link');

  // Навесим на ссылки событие по клику
  for ( let i = 0; i < sidebarTarget.length; i++) {
    sidebarTarget[i].onclick = onMenuClick;
  };
  
  // Если кликнули по списку
  function onMenuClick (e) {

    e.preventDefault();
      
    let target = e.target;
    let parent = target.parentNode;

    // Проверим, активно ли мобильное меню, если да, 
    // то закроем его
    let mMenu = document.querySelector('.mobile-menu');
    if ( mMenu.classList.contains('mobile-menu--active') )
      mMenu.classList.remove('mobile-menu--active');

    // Получим номер секции, на которую необходимо перейти
    let sectionNumber = parent.getAttribute('data-section');
    sectionNumber = parseInt(sectionNumber);
    
    // Перейдем к нужной секции
    performTransition( sectionNumber ); 
    
  };

  // Переход по кнопке "Заказать"
  const buttonsOrder = document.querySelectorAll('.button-order');

  // Навесим на кнопки событие по клику
  for ( let i = 0; i < buttonsOrder.length; i++) {
    buttonsOrder[i].onclick = onButtonClick;
  };

  // Если кликнули по кнопке
  function onButtonClick (e) {

    e.preventDefault();
      
    let target = e.target;

    // Получим номер секции, на которую необходимо перейти
    let sectionNumber = target.getAttribute('data-section');
    sectionNumber = parseInt(sectionNumber);
    
    // Перейдем к нужной секции
    performTransition( sectionNumber ); 
    
  };

  // Переход на секцию из меню
  const mainMenu = document.querySelectorAll('.nav__list');

  for ( let i = 0; i < mainMenu.length; i++ )
  {
    const mainTarget = mainMenu[i].querySelectorAll('.nav__link'); 

    // Навесим на ссылки событие по клику
    for ( let j = 0; j < mainTarget.length; j++) {
      mainTarget[j].onclick = onMenuClick;
    };
  };
  

  // клик по стрелке вниз 
  const downArrow = document.querySelector('.arrow');
  
  // Повесим событие клавиатуры
  downArrow.addEventListener('click', function(e) {
    
    e.preventDefault();

    scrollToSection("down");
  }); 

})();

// Закрытие пункта меню в мобильной версии
( function () {
  const closeItemTrigger = document.querySelectorAll('.menu__btn');

  for ( let i = 0; i < closeItemTrigger.length; i++) {
    closeItemTrigger[i].onclick = onItemCloseClick;  
  }

  function onItemCloseClick(e) {
    
    e.preventDefault();

    let target = e.target;

    while ( !target.classList.contains('menu__item') ){
      target = target.parentNode;
    }

    if ( target.classList.contains('menu__item--active') )
      target.classList.remove('menu__item--active');
  };
})();