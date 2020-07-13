let slideIndex = 0;
slideShow();

function slideShow() {
  let i;
  let slideArray = [];
  slideArray = document.getElementsByClassName("jumboTickerSlides");
  for (i = 0; i < slideArray.length; i++) {
    slideArray[i].classList.add("d-none");
  };
  slideIndex++;
  if (slideIndex > slideArray.length) {slideIndex = 1}
  slideArray[slideIndex-1].classList.remove("d-none");
  setTimeout(slideShow, 5000);
}
