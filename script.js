function output ()
{
    var firstname = document.getElementById("fName").value;
    var lastname = document.getElementById("lName").value;

    var choices = document.getElementsByName("gender");
    for (i=0; i<choices.length; i++)
    {
        if (choices[i].checked)
        {
            var gender = choices[i].value;
        }
    }

    var email = document.getElementById("Email").value;
    var password = document.getElementById("pword").value;
    var mobile_num = document.getElementById("mobile_num").value;
    var reason = document.getElementById("reason").value;

    
    if (typeof(Storage) !== "undefined")
    {
        localStorage.setItem("fname", firstname);
        localStorage.setItem("lname", lastname);
        localStorage.setItem("sex", gender);
        localStorage.setItem("mail", email);
        localStorage.setItem("pword", password);
        localStorage.setItem("num", mobile_num);
        localStorage.setItem("text", reason);
    }
    return false;
}