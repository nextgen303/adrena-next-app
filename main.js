// Sticky Navbar
const navbar = document.getElementById('navbar');

const changeBackground = () => {
    if (window.scrollY >= 100) {
        navbar.classList.add('sticky-nav');
    } else {
        navbar.classList.remove('sticky-nav');
    }
};

// Listen for the scroll event
window.addEventListener('scroll', changeBackground);