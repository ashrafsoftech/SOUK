let slideIndexOne = 0;
showSlidesOne(slideIndexOne);

// Next/previous controls
function plusSlides(n) {
  showSlidesOne(slideIndexOne += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlidesOne(slideIndexOne = n);
}

function showSlidesOne(n) {
  let i;
  let slidesOne = document.getElementsByClassName("flashSale_thumbs");
  let dotsOne = document.getElementsByClassName("dotOne");
  if (n > slidesOne.length) {slideIndexOne = 1} 
  if (n < 1) {slideIndexOne = slidesOne.length}
  for (i = 0; i < slidesOne.length; i++) {
    slidesOne[i].style.display = ""; 
  }
  for (i = 0; i < dotsOne.length; i++) {
    dotsOne[i].className = dotsOne[i].className.replace(" active", "");
  }
  slidesOne[slideIndexOne-1].style.display = "block"; 
  dotsOne[slideIndexOne-1].className += " active";
}