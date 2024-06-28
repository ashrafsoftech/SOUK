


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}






/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// let slideIndexOne = 1;
// showSlidesOne(slideIndexOne);

// // Next/previous controls
// function plusSlides(n) {
//   showSlidesOne(slideIndexOne += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlidesOne(slideIndexOne = n);
// }

// function showSlidesOne(n) {
//   let i;
//   let slidesOne = document.getElementsByClassName("flashSale_thumbs2");
//   let dotsOne = document.getElementsByClassName("dotOne");
//   if (n > slidesOne.length) {slideIndexOne = 1} 
//   if (n < 1) {slideIndexOne = slidesOne.length}
//   for (i = 0; i < slidesOne.length; i++) {
//     slidesOne[i].style.display = "none"; 
//   }
//   for (i = 0; i < dotsOne.length; i++) {
//     dotsOne[i].className = dotsOne[i].className.replace(" active", "");
//   }
//   slidesOne[slideIndexOne-1].style.display = "block"; 
//   dotsOne[slideIndexOne-1].className += " active";
// }