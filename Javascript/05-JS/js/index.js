function addition(){
    var res = 5+6;
    alert(res);
}

document.querySelector("h1").addEventListener("click", callAction);

function callAction(){
    document.getElementsByTagName("h1")[0].innerHTML = "Goodbye pals";

    var specials = document.getElementsByClassName("special");
    for(i=0; i<specials.length; i++)
        specials[i].innerHTML= "<b>Have a day</b>";
    document.getElementById("first").innerHTML = "Its me";

    var liELements = document.querySelectorAll(".list li");
    for(i=0; i<liELements.length; i++)
    liELements[i].style.color = "purple";

    document.querySelector(".list #first").classList.toggle("highlight");
    document.querySelector("a").setAttribute("href","https://google.com");
 }