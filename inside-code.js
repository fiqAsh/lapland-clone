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


const about_us_button =document.getElementById('about-us-button')
about_us_button.addEventListener('click',redirect_to_about_us)

const our_business_button = document.getElementById('our-business-button')
our_business_button.addEventListener('click',redirect_to_our_business)

const supply_chain_button =document.getElementById('supply-chain-button')
supply_chain_button.addEventListener('click',redirect_to_supply_chain)

const social_ethics_button =document.getElementById('social-ethics-button')
social_ethics_button.addEventListener('click',redirect_to_social_ethics)


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