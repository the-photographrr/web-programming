function validateEmail() {
    var emailID = document.forms.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
       alert("Please enter correct email ID")
       document.forms.email.focus() ;
       return false;
    }
    return( true );