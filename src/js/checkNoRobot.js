function checkNotRobot(response) {
    var email = document.getElementById('email').value,
        object = document.getElementById('object').value,
        message = document.getElementById('message').value;
    if (email.length <= 0 || object.length <= 0 || message.length <= 0) {
        document.getElementById("error_robot").innerHTML = "Merci de remplir tous les champs du formulaire.";
        return false;
    } else if (response == null || response.length <= 0) {
        document.getElementById("error_robot").innerHTML = "Merci de cocher la case 'Je ne suis pas un robot'";
        return false;
    } else {
        document.getElementById("error_robot").innerHTML = "";
        document.getElementById("form_contact").submit();
    }
}
