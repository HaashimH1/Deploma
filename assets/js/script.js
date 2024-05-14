document.getElementById('nav-toggle').addEventListener('click', function() {
    var content = document.getElementById('nav-dropdown');
    if (content.style.display === 'flex') {
        content.style.display = 'none';
    } else {
        content.style.display = 'flex';
    }
});