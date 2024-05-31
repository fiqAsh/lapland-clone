let currentpath = window.location.pathname;
console.log('Pathname:', currentpath);

if (currentpath === `/home.html`){
  
  document.querySelector('.top-home .command-text').classList.add('active');
} else if (currentpath === `/about-us.html`){
  
  document.querySelector('.top-about-us .command-text').classList.add('active');
} else if (currentpath === `/our-business.html`){
  
  document.querySelector('.top-our-business .command-text').classList.add('active');
}else if (currentpath === `/supply-chain.html`){
  
  document.querySelector('.top-supply-chain .command-text').classList.add('active');
}else if (currentpath === `/social-ethics.html`){
  
  document.querySelector('.top-social-ethics .command-text').classList.add('active');
}else if (currentpath === `/contact-us.html`){
  
  document.querySelector('.top-contact-us .command-text').classList.add('active');
}
