$('#order-form').on('submit', submitForm);

function createOverlayForm(message) {
  // создадим новый div с классом .form-overlay
  const overlayFormElement = document.createElement('div');
  overlayFormElement.classList.add('form-overlay');

  // получим шаблон для всплывающего окна
  const template = document.querySelector('#formTemplate');
  overlayFormElement.innerHTML = template.innerHTML;

  // На кнопку "Закрыть" удалим созданные элемент
  const closeOverlayElement = overlayFormElement.querySelector('.form-popup__close');
  closeOverlayElement.addEventListener('click', function(e) {

    e.preventDefault();

    document.body.removeChild(overlayFormElement);
  });

  // Вставим содержимое (сообщение)
  const messageElement = overlayFormElement.querySelector('.form-popup__message');
  messageElement.innerHTML = message;

  return overlayFormElement;
}  

function submitForm (e) {
    e.preventDefault();
    
    var form = $(e.target),
        data = form.serialize(),
        url = form.attr('action'),
        type = form.attr('method');

    ajaxForm(form).done(function(msg) {
        var mes = msg.mes;
        
        // Создадим всплывающее окно
        const formOverlay = createOverlayForm(mes);
  
        // добавим данное окно в тело документа
        document.body.appendChild(formOverlay);

    }).fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

};

// Универсальная функция для работы с формами
var ajaxForm = function (form) {
    var data = form.serialize(),
        url = form.attr('action');
    
    return $.ajax({
        type: 'POST',
        url: url,
        dataType : 'JSON',
        data: data
    })
};