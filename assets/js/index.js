const menuButton = document.getElementById('menuButton');
const primaryNav = document.querySelector('.primaryNav');
const year = document.getElementById('year');
const backToTop = document.getElementById('backToTop');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('menuOpen');
    primaryNav.classList.toggle('menuOpen');
});

year.innerText = new Date().getFullYear();

backToTop.addEventListener('click', () => {
    document.querySelector('#mainHeader').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});