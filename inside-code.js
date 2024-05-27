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

const path = window.location.pathname;
console.log('Pathname:', path);

if (path === `/home.html`){
  document.querySelector('.command-text').classList.add('active')
}

// document.addEventListener('DOMContentLoaded', function() {
//   // Function to set active class
//   function setActiveLink() {
//       const currentPath = window.location.pathname.split('/').pop().split('.')[0]; // Extracts the last part of the path without extension
//       const links = {
//           'home': 'top-home-link',
//           'about-us': 'top-about-us-link',
//           'our-business': 'top-our-business-link',
//           'supply-chain': 'top-supply-chain-link',
//           'social-ethics': 'top-social-ethics-link',
//           'contact-us': 'top-contact-us-link'
//       };

//       for (const path in links) {
//           const elements = document.getElementsByClassName(links[path]);
//           for (let element of elements) {
//               if (currentPath === path) {
//                   element.querySelector('.command-text').classList.add('active');
//               } else {
//                   element.querySelector('.command-text').classList.remove('active');
//               }
//           }
//       }
//   }

//   setActiveLink();
// });
