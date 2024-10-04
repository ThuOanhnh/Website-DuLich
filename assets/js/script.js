const navbar = document.querySelector('.navbar')
const opennav =document.querySelector('.nav-open-btn');
const closenav = document.querySelector('.nav-close-btn');

opennav.addEventListener('click', function(){
    navbar.classList.add('active')
})

closenav.addEventListener('click', function(){
    navbar.classList.remove('active')
})