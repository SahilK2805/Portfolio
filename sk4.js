// Particle background
const particlesContainer = document.getElementById('particles');
const particlesCount = 100;

for (let i = 0; i < particlesCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
    particlesContainer.appendChild(particle);
}

// Custom cursor
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => cursor.classList.add('click'));
document.addEventListener('mouseup', () => cursor.classList.remove('click'));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing effect for the hero section
const heroText = "IT Engineering Student | Web Developer | Machine Learning Enthusiast";
const heroElement = document.querySelector('.hologram p');
let index = 0;

function typeHeroText() {
    if (index < heroText.length) {
        heroElement.textContent += heroText.charAt(index);
        index++;
        setTimeout(typeHeroText, 50);
    }
}

typeHeroText();

// Intersection Observer for fade-in animations
const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});

// 3D tilt effect for project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

// Animated skill bars
const skillBars = document.querySelectorAll('.skill-bar');

skillBars.forEach(bar => {
    const percentage = bar.getAttribute('data-percentage');
    bar.style.width = '0%';
    
    const fillBar = () => {
        let width = 0;
        const interval = setInterval(() => {
            if (width >= percentage) {
                clearInterval(interval);
            } else {
                width++;
                bar.style.width = width + '%';
            }
        }, 10);
    };

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            fillBar();
            observer.unobserve(bar);
        }
    });

    observer.observe(bar);
});

// Form submission with animation
const form = document.querySelector('.contact-form');
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitButton.classList.add('sending');
    submitButton.textContent = 'Sending...';

    // Simulate form submission
    setTimeout(() => {
        submitButton.classList.remove('sending');
        submitButton.classList.add('sent');
        submitButton.textContent = 'Sent!';

        // Reset form
        setTimeout(() => {
            form.reset();
            submitButton.classList.remove('sent');
            submitButton.textContent = 'Send Message';
        }, 3000);
    }, 2000);
});

// // Initialize Three.js background
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({ alpha: true });

// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true });
// const torus = new THREE.Mesh(geometry, material);

// scene.add(torus);
// camera.position.z = 30;

// function animate() {
//     requestAnimationFrame(animate);
//     torus.rotation.x += 0.01;
//     torus.rotation.y += 0.005;
//     renderer.render(scene, camera);
// }

// animate();

// // Resize Three.js scene on window resize
// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });

function redirectToWhatsApp() {
    // Replace with your phone number (in international format without the + sign)
    var phoneNumber = '917709732674'; 
    // Predefined message
    var message = 'Hey Sahil, I want to connect with you for'; 
    // URL encode the message
    var encodedMessage = encodeURIComponent(message);
    // Open the WhatsApp chat with the predefined message
    window.open('https://wa.me/' + phoneNumber + '?text=' + encodedMessage, '_blank');
  }










 










