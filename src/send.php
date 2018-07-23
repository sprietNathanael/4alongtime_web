<?php
$nom=$HTTP_POST_VARS['nom'];
$mail=$HTTP_POST_VARS['mail'];
$objet=$HTTP_POST_VARS['objet'];
$message=$HTTP_POST_VARS['message'];

//version Mine
$headers = "MIME-Version: 1.0\r\n";

//on détermine le mail en format text
$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";

//on détermine l'expediteur et l'adresse de réponse
$headers .= "From: $nom <$mail>\r\nReply-to : $nom <$mail>\nX-Mailer:PHP";

$subject="$objet";
$destinataire="tom-mollaret@orange.fr";

$body="$message";
if (mail($destinataire,$subject,$body,$headers)) {
echo "Votre mail a été envoyé<br>";
} else {
echo "Une erreur s'est produite";
}
