
function ValidateEmail(InputText)
{
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(InputText.value.match(mailFormat))
    {
        alert("Valid email.!!!");
        document.form1.text1.focus();
        return true;
    }else{
        alert("Invalid email!!!!!");
        document.form1.text1.focus();
        return false;
    }
}