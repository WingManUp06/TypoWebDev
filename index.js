console.log("Js Is working")

const navLinks = document.querySelector(".links");

let isToggleTrue;

document.getElementById("burgerBars").addEventListener("click", () => {
    isToggleTrue = !isToggleTrue
    console.log(isToggleTrue)



    if(isToggleTrue){
        navLinks.style.display = "block";
    } else {
        navLinks.style.display = "none";
    }
})