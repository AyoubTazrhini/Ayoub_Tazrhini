document.addEventListener('DOMContentLoaded', () => {
    // Hover-effect voor inzoomen op afbeeldingen
    const projectImages = document.querySelectorAll('.project-section img');

    projectImages.forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'transform 0.3s ease';
        });

        image.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
        });
    });

    console.log('Hover-effect toegevoegd aan afbeeldingen.');
});
