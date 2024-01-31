var burger = document.querySelector('.header__burger')
var overlay = document.querySelector('.overlay');
var mobilemodal = document.querySelector('.mobile-modal')

burger.addEventListener('click', function() {
    burger.classList.toggle('crossed');
    overlay.classList.toggle('visible')
    mobilemodal.classList.toggle('show') 
   
})