const nav = document.getElementsByTagName('nav')[0];
const menuToggle = document.getElementById('menuToggle');

// Toggle Menu (Open/Close with one button)
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});
