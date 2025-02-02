
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

const cursor = document.getElementById('cursor');
const trailContainer = document.getElementById('trail-container');


document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX - cursor.offsetWidth / 2}px, ${e.clientY - cursor.offsetHeight / 2}px)`;

  
  const trail = document.createElement('div');
  trail.className = 'trail';
  trail.style.left = `${e.clientX - 5}px`; 
  trail.style.top = `${e.clientY - 5}px`;

  
  trailContainer.appendChild(trail);
  setTimeout(() => {
    trail.remove();
  }, 800); 
});


document.addEventListener('mousedown', () => {
  cursor.classList.add('click');
});
document.addEventListener('mouseup', () => {
  cursor.classList.remove('click');
});




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


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


const form = document.querySelector('.contact-form');
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitButton.classList.add('sending');
    submitButton.textContent = 'Sending...';

    setTimeout(() => {
        submitButton.classList.remove('sending');
        submitButton.classList.add('sent');
        submitButton.textContent = 'Sent!';

        setTimeout(() => {
            form.reset();
            submitButton.classList.remove('sent');
            submitButton.textContent = 'Send Message';
        }, 3000);
    }, 2000);
});



function redirectToWhatsApp() {
    var phoneNumber = '917709732674'; 
    var message = 'Hey Sahil, I want to connect with you for'; 
    var encodedMessage = encodeURIComponent(message);
    window.open('https://wa.me/' + phoneNumber + '?text=' + encodedMessage, '_blank');
  }

