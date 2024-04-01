export default function createImageCarousell(ImageArray) {
  //Things that I need
  //left, right buttons
  //A way to know which image is in 'focus'

  const carousell = document.createElement("div");
  carousell.id = "carousell-div";

  const slides = document.createElement("div");
  slides.id = "carousell-slides";

  const leftButton = document.createElement("button");
  leftButton.id = "carousell-left-btn";
  leftButton.innerText = "<";
  const rightButton = document.createElement("button");
  rightButton.id = "carousell-right-btn";
  rightButton.innerHTML = ">";

  let displayedImageIndex = 0;

  leftButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("LEFT");
    prevSlide();
    console.log(displayedImageIndex);
    ImageArray.forEach((image) => {
      image.classList.remove("active-slide");
      image.classList.add("hidden-image");
    });
    displaySlide(displayedImageIndex);
  });

  rightButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("RIGHT");
    nextSlide();
    console.log(displayedImageIndex);
    ImageArray.forEach((image) => {
      image.classList.remove("active-slide");
      image.classList.add("hidden-image");
    });
    displaySlide(displayedImageIndex);
  });

  ImageArray.forEach((image) => {
    image.classList = "carousell-img";
    // console.log(typeof image);
    slides.appendChild(image);
    image.classList.add("hidden-image");
  });

  carousell.appendChild(slides);
  carousell.appendChild(leftButton);
  carousell.appendChild(rightButton);

  function displaySlide(slideIndex) {
    ImageArray[slideIndex].classList.add("active-slide");
    ImageArray[slideIndex].classList.remove("hidden-image");
    slides.style.transform = `translateX(-${displayedImageIndex * 40}vw)`;
  }

  function nextSlide() {
    displayedImageIndex += 1;
    displayedImageIndex %= ImageArray.length;
  }

  function prevSlide() {
    displayedImageIndex -= 1;
    if (displayedImageIndex < 0) {
      displayedImageIndex += ImageArray.length;
    }
  }

  displaySlide(0);

  return carousell;
}
