const abutton= document.getElementById('event-listener')



abutton.addEventListener('click',redirect);

const adiv =document.getElementById('hovering-div')
adiv.addEventListener('click',redirect)

function redirect(){
  window.location.href='home.html'
}




// let currentSlide = 0;

// function changeSlide(direction) {
//     const slides = document.querySelector('.slides');
//     const totalSlides = document.querySelectorAll('.slide').length;

//     currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
//     slides.style.transform = `translateX(-${currentSlide * 100}%)`;
// }


// let currentslide = 0;

// function changeSlide(direction) {
//     const slides = document.querySelector('.box2');
//     const totalSlides = document.querySelectorAll('.box3').length;

//     currentslide = (currentslide + direction + totalSlides) % totalSlides;
//     slides.style.transform = `translateX(-${currentslide * 100}%)`;
// }

// // Optionally, you can add auto-slide functionality
// setInterval(() => {
//     changeSlide(1);
// }, 3000);


// script.js
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  let currentIndex = 0;

  const slideLogos = () => {
    const logoWidth = 80; // 70px width + 10px margin
    const visibleLogos = Math.floor(window.innerWidth / logoWidth);
    const totalLogos = slider.children.length;

    currentIndex = (currentIndex + 1) % (totalLogos - visibleLogos + 1);
    slider.style.transform = `translateX(-${currentIndex * logoWidth}px)`;
  };

  setInterval(slideLogos, 2000); // Change every 2 seconds
});

