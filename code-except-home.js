const homediv=document.getElementsByClassName('top-home')[0]
homediv.addEventListener('click',redirect_to_home)

const abtusdiv=document.getElementsByClassName('top-about-us')[0]
abtusdiv.addEventListener('click',redirect_to_about_us)

const ourbusnesdiv=document.getElementsByClassName('top-our-business')[0]
ourbusnesdiv.addEventListener('click',redirect_to_our_business)

const supchaindiv=document.getElementsByClassName('top-supply-chain')[0]
supchaindiv.addEventListener('click',redirect_to_supply_chain)

const socethdiv=document.getElementsByClassName('top-social-ethics')[0]
socethdiv.addEventListener('click',redirect_to_social_ethics)

const conusdiv=document.getElementsByClassName('top-contact-us')[0]
conusdiv.addEventListener('click',redirect_to_contact_us)

const laplandlogo =document.getElementsByClassName('top-first-pic-logo')[0]
laplandlogo.addEventListener('click',redirect_to_home)


function redirect_to_home(){
  window.location.href= 'home.html'
}
function redirect_to_about_us(){
  window.location.href= 'about-us.html'
}
function redirect_to_our_business(){
  window.location.href= 'our-business.html'
}
function redirect_to_supply_chain(){
  window.location.href= 'supply-chain.html'
}
function redirect_to_social_ethics(){
  window.location.href= 'social-ethics.html'
}
function redirect_to_contact_us(){
  window.location.href= 'contact-us.html'
}


const path = window.location.pathname;
console.log('Pathname:', path);


document.querySelector('.command-text').classList.add('active')
