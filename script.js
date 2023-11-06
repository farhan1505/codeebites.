document.addEventListener('DOMContentLoaded', function() {
    var viewMenuButton = document.querySelector('.cta-button');

    viewMenuButton.addEventListener('click', function(event) {
        event.preventDefault(); // Menghentikan perilaku default tautan

        var targetSection = document.getElementById('specials-section');
        var topOffset = targetSection.getBoundingClientRect().top;

        window.scrollTo({
            top: topOffset,
            behavior: 'smooth' // Animasi gulir yang halus
        });
    });
});

