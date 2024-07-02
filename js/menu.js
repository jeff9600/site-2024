document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav ul');
    const iconBurger = burger.querySelector('.fa-bars'); // Icône burger
    const iconClose = burger.querySelector('.fa-times'); // Icône croix

    function toggleMenu() {
        nav.classList.toggle('is-active');
        if (nav.classList.contains('is-active')) {
            iconBurger.style.display = 'none';
            iconClose.style.display = 'block';
            nav.style.display = 'flex';
        } else {
            iconBurger.style.display = 'block';
            iconClose.style.display = 'none';
            nav.style.display = 'none';
        }
    }

    burger.addEventListener('click', toggleMenu);

    // Ajuste l'état du menu en fonction de la taille de l'écran
    function adjustMenuOnResize() {
        if (window.innerWidth > 768) {
            nav.style.display = 'flex'; // Affiche le menu en mode desktop
            iconBurger.style.display = 'none'; // Cache l'icône burger en desktop
            iconClose.style.display = 'none'; // Cache également l'icône croix en desktop
            nav.classList.remove('is-active'); // Enlève 'is-active' si présent
        } else {
            // En mode mobile, affiche l'icône burger par défaut et cache l'icône croix
            if (!nav.classList.contains('is-active')) {
                iconBurger.style.display = 'block';
                iconClose.style.display = 'none';
                nav.style.display = 'none';
            }
        }
    }

    // Initialisation au chargement et ajustement à chaque redimensionnement
    window.addEventListener('resize', adjustMenuOnResize);
    adjustMenuOnResize();
    });



