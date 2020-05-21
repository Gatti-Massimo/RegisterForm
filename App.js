function Submit() {

    var name = Form.name.value;
    var password = Form.password.value;
    var confirmPassword = Form.confirmPassword.value;
    var email = Form.email.value;
    var telNumber = Form.telephone.value;

    if (name != "" && password != "" && confirmPassword != "" && email != "" && telNumber != "") 
    {
        if (password == confirmPassword) {
            document.getElementById("outBox").innerHTML = "You successfully registered!";
        } 
        else {
            document.getElementById("outBox").innerHTML = "Passwords not matching, retry!";
        }      
    }

    return false;
}