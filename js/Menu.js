const menuToggle = document.getElementById('menuToggle');
const navBar = document.getElementById('navBar');
const navMenu = document.getElementById('navMenu');
const navBackdrop = document.getElementById('navbarDimBackground');
const navLogo = document.querySelector('.NavLogo a');

function closeMenu() {
    navMenu.classList.remove('open');
    menuToggle.classList.remove('open');
    navBackdrop.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
    window.removeEventListener('scroll', noScroll);
}

function openMenu() {
    navMenu.classList.add('open');
    menuToggle.classList.add('open');
    navBackdrop.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close menu');
    window.addEventListener('scroll', noScroll);
}

function noScroll() {
    window.scrollTo(0, 0);
}

if (menuToggle && navMenu && navBackdrop) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.contains('open');
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    navBackdrop.addEventListener('click', closeMenu);

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    if (navLogo) {
        navLogo.addEventListener('click', closeMenu);
    }
}