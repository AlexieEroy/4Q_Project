var object1, object2, move, scale, id;

function toProfile ()
{
    window.location.href = 'profile.html';
}

function setProfile ()
{
    var bg = document.getElementById("main2");
    var container = document.getElementById("container");
    container.style.opacity = 1;
    bg.style.backgroundImage = "none";
}

function output ()
{
    var fullname = localStorage.getItem("fname") + " " + localStorage.getItem("lname");
    var mail = localStorage.getItem("mail");
    var sex = localStorage.getItem("sex");
    var num = localStorage.getItem("num");
    var text = localStorage.getItem("text");
    object2 = document.getElementById("picture");

    if (sex == "Male")
    {
        object2.style.backgroundImage = "url(images/boy.jpg)";
    }
    else if (sex == "Female")
    {
        object2.style.backgroundImage = "url(images/girl.jpg)";
    }
    else if (sex == "Prefer not to say")
    {
        object2.style.backgroundImage = "url(images/neutral.jpg)";
    }

    document.getElementById("fullname").innerHTML = (fullname);
    document.getElementById("address").innerHTML = (mail);
    document.getElementById("num").innerHTML = (num);
    document.getElementById("text").innerHTML = (text);
}

function input ()
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

    toProfile();
    return false;
}

function frame1 ()
{
    if (scale == 200)
    {
        object1.style.opacity = 0;
        setProfile();
        clearInterval(id);
    }
    else
    {
        scale += 2;
        object1.style.transform = 'scale(' + scale + ')';
    }
}

async function animation1()
{
    object1 = document.getElementById("object1");
    scale = 0;
    clearInterval (id);
    id = setInterval (frame1, 1);
    await delay (750);
    object1.style.transform = 'scale(0)';
    id = null;
}

function start ()
{
    output();
    animation1();
}