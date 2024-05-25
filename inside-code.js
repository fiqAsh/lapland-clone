const homediv=document.getElementById('home')
homediv.addEventListener('click',redirect_to_home)

const abtusdiv=document.getElementById('about-us')
abtusdiv.addEventListener('click',redirect_to_about_us)

const ourbusnesdiv=document.getElementById('our-business')
ourbusnesdiv.addEventListener('click',redirect_to_our_business)

const supchaindiv=document.getElementById('supply-chain')
supchaindiv.addEventListener('click',redirect_to_supply_chain)

const socethdiv=document.getElementById('social-ethics')
socethdiv.addEventListener('click',redirect_to_social_ethics)

const conusdiv=document.getElementById('contact-us')
conusdiv.addEventListener('click',redirect_to_contact_us)

const laplandlogo =document.getElementById('lapland-logo')
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