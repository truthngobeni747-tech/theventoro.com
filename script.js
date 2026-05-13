function orderWhatsApp(product) {
    const message = `Hi Ventoro! I would like to order: ${product}. Please send me available sizes and payment details.`;
    window.open(`https://wa.me/27788797262?text=${encodeURIComponent(message)}`, '_blank');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});