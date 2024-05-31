const nav_home_div=document.getElementById('home1')
nav_home_div.addEventListener('click',home_redirect)

const nav_abtus_div=document.getElementById('abtus1')
nav_abtus_div.addEventListener('click',about_us_redirect)

const nav_ob_div=document.getElementById('ob1')
nav_ob_div.addEventListener('click',our_business_redirect)

const nav_sc_div=document.getElementById('sc1')
nav_sc_div.addEventListener('click',supply_chain_redirect)

const nav_se_div=document.getElementById('se1')
nav_se_div.addEventListener('click',social_ethics_redirect)

const nav_cu_div=document.getElementById('cu1')
nav_cu_div.addEventListener('click',contact_us_redirect)


function home_redirect(){
  window.location.href= 'home.html'
}
function about_us_redirect(){
  window.location.href= 'about-us.html'
}
function our_business_redirect(){
  window.location.href= 'our-business.html'
}
function supply_chain_redirect(){
  window.location.href= 'supply-chain.html'
}
function social_ethics_redirect(){
  window.location.href= 'social-ethics.html'
}
function contact_us_redirect(){
  window.location.href= 'contact-us.html'
}



let crntslid = 0;

function changeslide(direction) {
    const slides = document.querySelector('.second-div');
    const totalSlides = document.querySelectorAll('.third-div').length;

    crntslid = (crntslid + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${crntslid * 100}%)`;
    console.log(totalSlides)
}

// Optionally, you can add auto-slide functionality
setInterval(() => {
    changeslide(1);
}, 2000);