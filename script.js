document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.querySelector('.menu-toggle');
    var menuMobile = document.querySelector('.menu-mobile');
    var menuLinks = document.querySelectorAll('.menu-mobile a');

    menuToggle.addEventListener('click', function () {
        menuMobile.classList.toggle('open');
    });

    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            menuMobile.classList.remove('open');
        });
    });

    document.addEventListener('click', function (event) {
        if (!menuMobile.contains(event.target) && !menuToggle.contains(event.target)) {
            menuMobile.classList.remove('open');
        }
    });
});
