function addition(){
    var res = 5+6;
    alert(res);
}

$("h1").slideUp(1000).fadeIn().animate({opacity: 0.5});
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
    
    $("h1").text("This is a jquery thing");
    $(".special").addClass("highlight");
    $("a").attr("href", "https://www.bestcat.com/")
    $("li").click((e)=>{
        console.log(e); 
        console.log(e.target.innerText); 
        alert(e.target.innerText + " was clicked")})
    $(".sampler").after("<h2>Im the most awesomest ballerina ever</h2>");
    $(".sampler").slideDown(1000);
 }