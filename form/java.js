function validateForm() 
{
  var x = document.forms.fname.value;

   var y = document.forms.Aadhar.value;

   var z = document.forms.pass.value;

   var e = document.forms.email.value;

	if (x == "") 
	{
    	alert("Enter your name");
    
		return false;
  
	}
	else if(y == "") 
	{
    	alert("Enter the Aadhar number");
    
		return false;
  
	}
    else if(z == "")
    {
        alert("Enter the password");

        return false;

    }
    else if(e == "")
    {
		alert("Enter the email");
	        return false;
	}
	else {
		return true;
	}

}
