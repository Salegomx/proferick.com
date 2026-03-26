let idiomaActual = "es";
let tiempoInicio = Date.now();

// Diccionario de textos por idioma para el bloque principal (hero).
const textos = {
    es: {
        title: 'Profe Rick',
        description: years => `Ingeniero de software con ${years} años de experiencia en la industria en puestos como desarrollador Front End, Back End y Fullstack.`
    },
    en: {
        title: 'Mr Rick',
        description: years => `Software engineer with ${years} years of industry experience working as a Front End, Back End, and Fullstack developer.`
    },
    jp: {
        title: 'プロフェ・リック',
        description: years => `フロントエンド、バックエンド、フルスタック開発者として、業界で${years}年の経験を持つソフトウェアエンジニアです。`
    }
};

function cambiarIdioma(nuevoIdioma) {
    if (!textos[nuevoIdioma] || nuevoIdioma === idiomaActual) return;

    const idiomaAnterior = idiomaActual;
    const tiempoFin = Date.now();
    const segundos = Math.max(0, Math.round((tiempoFin - tiempoInicio) / 1000));
    const yearsExperience = new Date().getFullYear() - 2015;

    const heroTitle = document.getElementById("hero-title");
    const heroDescription = document.getElementById("hero-description");

    if (heroTitle) {
        heroTitle.textContent = textos[nuevoIdioma].title;
    }

    if (heroDescription) {
        heroDescription.textContent = textos[nuevoIdioma].description(yearsExperience);
    }

    idiomaActual = nuevoIdioma;
    tiempoInicio = Date.now();

    if (typeof gtag !== 'undefined') {
        gtag('event', 'cambio_de_idioma', {
            idioma_anterior: idiomaAnterior,
            idioma_nuevo: nuevoIdioma,
            tiempo_en_idioma: segundos
        });
    }

    console.log('cambio de idioma');
}

function LayoutManager() {
    this.init = () => {
        this.initMenu();
        this.initDates();
        this.initBackToTop();
        this.initTheme();
        this.initMenuTracking();
    }

    this.initMenu = () => {
        const primaryNav = document.querySelector('.primaryNav');
        const menuButton = document.getElementById('menuButton');
        const navLinks = primaryNav.querySelectorAll('a');

        menuButton.addEventListener('click', () => {
            primaryNav.toggleAttribute('aria-expanded');
            menuButton.toggleAttribute('aria-expanded');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                primaryNav.removeAttribute('aria-expanded');
                menuButton.removeAttribute('aria-expanded');
            });
        });
    }

    this.initDates = () => {
        const currentYear = new Date().getFullYear();
        const yearsExperience =  currentYear - 2015;
        const yearsEntrepreneur = currentYear - 2021;

        const expSpans = document.querySelectorAll('.years_experience');
        const entSpans = document.querySelectorAll('.years_entrepreneur');
        const yearSpan = document.getElementById('year_current');
        
        expSpans.forEach(span => span.textContent = yearsExperience);
        entSpans.forEach(span => span.textContent = yearsEntrepreneur);
        yearSpan.textContent = currentYear;
    }
    
    this.initBackToTop = () => {
        const backToTop = document.getElementById('backToTop');

        window.addEventListener('scroll', () => {
            let scrollpos = window.scrollY;
        
            if (scrollpos >= 200) {
                backToTop.setAttribute('aria-hidden', 'false');
            } else {
                backToTop.setAttribute('aria-hidden', 'true');
            }
        });
        
        backToTop.addEventListener('click', () => {
            document.querySelector('#content').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    this.initTheme = () => {
        const theme_button = document.querySelector('.theme_button');
        theme_button.addEventListener('click', this.switchTheme);
    }

    this.setTheme = preference => {
        const body = document.body;
        body.classList.remove('theme-light');
        body.classList.remove('theme-dark');
        body.classList.add(preference);
    }

    this.switchTheme = () => {
        const body = document.body;
        body.classList.contains('theme-light') ? this.setTheme('theme-dark') : this.setTheme('theme-light');
    }

    this.initMenuTracking = () => {
        const menuLinks = document.querySelectorAll(".menu-link");

        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'click_menu_servicios', {
                        'boton': link.textContent,
                        'valor': 50
                    });
                }
             })
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const layoutManager = new LayoutManager;
    layoutManager.init();
})