<?php

$to = "contato@rapia.com.br";
$nome = $_POST["nome"];
$email = $_POST["email"];
$telefone = $_POST["telefone"];
$nomedaempresa = $_POST["nomedaempresa"];
$cargo = $_POST["cargo"];
$subject = "Contato - Rapia Site";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "From: contato@rapia.com.br" . "\r\n";
$headers .= "Reply-To:". $email . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8" . "\r\n";

$message = $nome. "<br>\r\n".
"Email: ".$email . "<br>\r\n".
"Telefone: ".$telefone."<br>\r\n".
"Nome da Empresa: ".$nomedaempresa."<br>\r\n".
"Cargo: ".$cargo;

if (@mail($to, $email, $message, $headers))
{
	$statusmensagemcontato = "1";
	//sucesso
}else{
	$statusmensagemcontato = "0";
	//erro
}
header("Location: index.php?stsmsg=$statusmensagemcontato#contato");

?>