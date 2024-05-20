document.getElementById('nav-toggle').addEventListener('click', function() {
    var content = document.getElementById('nav-dropdown');
    if (content.style.display === 'flex') {
        content.style.display = 'none';
    } else {
        content.style.display = 'flex';
    }
});

document.querySelectorAll('nav a, #nav-right a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = 10 * 16; // Adjust this value to set the offset

        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition - offset;

        var content = document.getElementById('nav-dropdown');
        content.style.display='none';           // removes dropdown display when link clicked on mobile

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});