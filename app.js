// select items
const navHeader = document.querySelector('.nav-header .show-na');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');

hamburger.addEventListener('click', function () {
    navHeader.classList.add('show-nav')
    
});

close.addEventListener('click', function () {
    navHeader.classList.remove('show-nav')
});

