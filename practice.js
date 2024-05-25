const abutton= document.getElementById('event-listener')



abutton.addEventListener('click',redirect);

const adiv =document.getElementById('hovering-div')
adiv.addEventListener('click',redirect)

function redirect(){
  window.location.href='home.html'
}