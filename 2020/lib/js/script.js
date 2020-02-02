var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

let Udisplay = false;
document.querySelector("#sideBar img").addEventListener("click", display);
function display() {
    if(Udisplay == false){
        document.querySelectorAll(".link")[0].style.display = "block";
        document.querySelectorAll(".link")[1].style.display = "block";
        document.querySelectorAll(".link")[2].style.display = "block";
        document.querySelectorAll(".link")[3].style.display = "block";
        document.querySelectorAll(".link")[4].style.display = "block";
        Udisplay = true;
    }else if(Udisplay == true){
        document.querySelectorAll(".link")[0].style.display = "none";
        document.querySelectorAll(".link")[1].style.display = "none";
        document.querySelectorAll(".link")[2].style.display = "none";
        document.querySelectorAll(".link")[3].style.display = "none";
        document.querySelectorAll(".link")[4].style.display = "none";
        Udisplay = false;
    }
}