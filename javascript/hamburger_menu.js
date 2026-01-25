document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navbar ul');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuLinks = document.querySelectorAll('.navbar ul li a');

    console.log('Hamburger:', hamburger);
    console.log('Nav Menu:', navMenu);
    console.log('Menu Overlay:', menuOverlay);

    if (hamburger && navMenu && menuOverlay) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Hamburger clicked!');
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            menuOverlay.classList.toggle('active');
        });

        menuOverlay.addEventListener('click', function() {
            console.log('Overlay clicked!');
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
        });

        menuLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                console.log('Link clicked!');
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                menuOverlay.classList.remove('active');
            });
        });
    } else {
        console.error('Some elements not found!');
        console.error('Hamburger exists:', !!hamburger);
        console.error('NavMenu exists:', !!navMenu);
        console.error('MenuOverlay exists:', !!menuOverlay);
    }
});