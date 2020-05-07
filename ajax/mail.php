<?php 
    
    require_once('phpmailer/PHPMailerAutoload.php');
    $mail = new PHPMailer;
    $mail->CharSet = 'utf-8';
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    
    $resultPrice = $_POST['resultPrice'];
    $arrayMessageObject = $_POST['arrayMessageObject'];
 
    
    
    
    
    
    $mail->isSMTP();
    $mail->Host = 'smtp.mail.ru';
    $mail->SMTPAuth = true;
    $mail->Username = 's_nastena_t@mail.ru';
    $mail->Password = 's07111975';
    $mail->SMTPSecure = 'ssl'; 
    $mail->Port = 465;
    
    $mail->setFrom('s_nastena_t@mail.ru'); 
    $mail->addAddress('honey.shamonova@list.ru');
    $mail->isHTML(true);
    
    $mail->Subject = 'Заявка с тестового сайта';
    $mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ' .$email . '<br>Итог : ' .$resultPrice. '<br>Услуги: ' .$arrayMessageObject[0].$arrayMessageObject[1].$arrayMessageObject[2].$arrayMessageObject[3].$arrayMessageObject[4].$arrayMessageObject[5].$arrayMessageObject[6].$arrayMessageObject[7].$arrayMessageObject[8].$arrayMessageObject[9].$arrayMessageObject[10].$arrayMessageObject[11].$arrayMessageObject[12].$arrayMessageObject[13].$arrayMessageObject[14].$arrayMessageObject[15].$arrayMessageObject[16].$arrayMessageObject[17];
    $mail->AltBody = '';
    if(!$mail->send()) {
        
    } else {
       
    }

?>
