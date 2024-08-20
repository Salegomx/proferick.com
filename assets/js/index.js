const menuButton = document.getElementById('menuButton');
const primaryNav = document.querySelector('.primaryNav');
const year = document.getElementById('year');
const backToTop = document.getElementById('backToTop');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('menuOpen');
    primaryNav.classList.toggle('menuOpen');
});

year.innerText = new Date().getFullYear();

window.addEventListener('scroll', () => { 
    scrollpos = window.scrollY;

    if (scrollpos >= 100) { 
        backToTop.classList.remove('invisible');
    } else {
        backToTop.classList.add('invisible');
    }

    console.log(scrollpos)
  })

backToTop.addEventListener('click', () => {
    document.querySelector('#content').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});