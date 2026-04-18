const nav = document.getElementsByTagName('nav')[0];
const menuToggle = document.getElementById('menuToggle');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});
