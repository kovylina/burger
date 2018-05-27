<?php

    $name     =   $_POST['user-name'];
    $phone    =   $_POST['user-phone'];
    $street   =   $_POST['address-street'];
    $building =   $_POST['address-building'];
    $housing  =   $_POST['address-housing'];
    $apt      =   $_POST['address-apt'];
    $floor    =   $_POST['address-floor'];                    
    $comment  =   $_POST['order-comment'];
    $change   =   $_POST['short-change']; // 1 или null
    $card     =   $_POST['credit-card']; // 1 или null
    $disturb  =   $_POST['dont-disturb']; // 1 или null
   
    $change  =   isset($change) ? 'НЕТ' : 'ДА';
    $card  =   isset($card) ? 'Наличные' : 'Карта';
    $disturb  =   isset($disturb) ? 'НЕТ' : 'ДА';

    $mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Телефон:' . $phone . '</li>
            <li>Адрес: ул. ' . $street . ', д. '. $building . ' корп. ' . $housing . ', кв. ' . $apt . ', этаж ' . $floor .' </li>
            <li>Потребуется сдача: ' . $change . '</li>
            <li>Способ оплаты: ' . $card . '</li>
            <li>Комментарий к заказу: ' . $comment . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
        </ul>
    </body>
    </html>';

    $headers = "From: Администратор сайта <admin@burger.com>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('kovylina.t@yandex.ru', 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['mes'] = "Сообщение отправлено";
    }else{
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);

?>