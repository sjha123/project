<?php
$name = $_POST['full-name'];
$email = $_POST['E-mail'];
$message = $_POST['message'];

$email_form = 'shubham.jha930560@gmail.com';

$email_subject = "New Form Submission";

$email_body = "User Name : $name.\n".
               "User Email: $email.\n".
              "User Message = $message.\n";
$to = "vjha770@gmail.com";

$headers= "Form : $email_form \r\n";
$headers .= "Reply-To : $email_form \r\n";
mail($to , $email_subject, $email_body ,$headers);
header ("Location: index.html");
?>
    