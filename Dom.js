let slideIndex = 1;
var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display="block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
 
} 
function incrementBtn(){
    var e1=document.getElementById("id1");
    value=e1.innerHTML;
    value;
    value++;
    document.getElementById("id1").innerHTML=value;
    
}
function decrementBtn(){
    var e1=document.getElementById("id1");
    value=e1.innerHTML;
    if(value>1){
        value--;
    }
    document.getElementById("id1").innerHTML=value;
    
}
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 9000); // Change image every 2 seconds
}
function myFunction() {
  var element = document.nav;
  element.classList.toggle("Nova");
  var element = document.getElementsByClassName("navbarr");
  element.classList.toggle("Novabarr");
  var element = getElementsByClassName("ndropdownn-content");
  element.classList.toggle("dropdownn-content2");
  var element = document.article;
  element.classList.toggle("DarkA");
  var element = document.footer;
  element.classList.toggle("DarkF");
} 
