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

let asideIndex = 0;
asideShow();

function asideShow() {
  let i;
  let asideArray = [];
  asideArray = $("#jumboCallouts>aside");
  for (i = 0; i < asideArray.length; i++) {
    asideArray[i].classList.add("d-none");
  };
  asideIndex++;
  if (asideIndex > asideArray.length) {asideIndex = 1}
  asideArray[asideIndex-1].classList.remove("d-none");
  setTimeout(asideShow, 5000);
}
