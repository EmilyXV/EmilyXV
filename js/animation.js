window.addEventListener('scroll', function() {
    const title = document.getElementById('footer-title');
    const rect = title.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        title.style.opacity = '1'; // Hacer visible
        title.style.transform = 'scale(1)'; // Ampliar a tamaño original
    }
});