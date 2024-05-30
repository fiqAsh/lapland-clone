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


let currentslide = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.box2');
    const totalSlides = document.querySelectorAll('.box3').length;

    currentslide = (currentslide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentslide * 100}%)`;
}

// Optionally, you can add auto-slide functionality
setInterval(() => {
    changeSlide(1);
}, 3000);




// let crntslid = 0;

// function changeslide(direction) {
//     const slides = document.querySelector('.image-gallery');
//     const totalSlides = document.querySelectorAll('.b').length;

//     crntslid = (crntslid + direction + totalSlides) % totalSlides;
//     slides.style.transform = `translateX(-${crntslid * 100}%)`;
// }

// // Optionally, you can add auto-slide functionality
// setInterval(() => {
//     changeslide(1);
// }, 500);

