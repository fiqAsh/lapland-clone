const abutton= document.getElementById('event-listener')



abutton.addEventListener('click',redirect);

const adiv =document.getElementById('hovering-div')
adiv.addEventListener('click',redirect)

function redirect(){
  window.location.href='home.html'
}


let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}
