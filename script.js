// Contact form validation and submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    const message = document.getElementById('message').value.trim();
    if (message === "") {
        const confirmProceed = confirm("You did not enter a message. Do you want to proceed without one?");
        if (!confirmedProceed) {
            e.preventDefault();
            return;
        }
    }
});

// Form submission feedback
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value.trim();
    if (message) {
        alert(`Thank you, ${firstName}!\n\nYour message has been received. We will respond to you at ${email} soon.`);
    } else {
        alert(`Thank you, ${firstName}!\n\nWe will still contact you at ${email} soon.`);
    }
});

// Change portfolio section background color randomly
let currentBackground = 0;
function changeBackground() {
    const portfolioSection = document.querySelector('.portfolio-section');

    const hue = Math.floor(Math.random() * 360); // random hue
    const pastelColor = `hsl(${hue}, 70%, 85%)`; // HSL pastel tone

    portfolioSection.style.backgroundColor = pastelColor;

    const projectTitle = event.target; // animation to clicked project title
    projectTitle.style.transform = 'scale(1.1)';
    setTimeout(() => {
        projectTitle.style.transform = 'scale(1.05)';
    }, 200);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
    });
});

// Navbar effect on scrolll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'linear-gradient(135deg, rgba(37, 99, 235, 0.95), rgba(30, 64, 175, 0.95))';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, var(--primary-blue), var(--secondary-blue))';
        navbar.style.backdropFilter = 'none';
    }
});

// Animate project cards when they come into view
const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.style.animation = 'fadeInUp 0.6s ease forwards' }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

document.querySelectorAll('.project-card').forEach(card => { observer.observe(card) });