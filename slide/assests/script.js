let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
document.getElementById("pre").onclick = function () {
  showSlides(slideIndex -= 1);
}

document.getElementById("next").onclick = function () {
  showSlides(slideIndex += 1);
}

// Thumbnail image controls
document.getElementsByClassName("dot")[0].onclick = function () {
  showSlides(slideIndex = 1);
}

document.getElementsByClassName("dot")[1].onclick = function () {
  showSlides(slideIndex = 2);
}

document.getElementsByClassName("dot")[2].onclick = function () {
  showSlides(slideIndex = 3);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}