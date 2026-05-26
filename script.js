// PARTICLES BACKGROUND
particlesJS("particles-js", {
    particles: {
        number: { value: 90, density: { enable: true, value_area: 800 } },
        color: { value: "#00eaff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#00eaff", opacity: 0.25, width: 1 },
        move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out" }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { repulse: { distance: 120, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// COUNTER ANIMATION
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 120;

        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});

// FAQ ACCORDION
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            document.querySelectorAll('.faq-answer').forEach(item => { item.style.maxHeight = null; });
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

// SMOOTH SCROLL NAVIGATION (Calculates headers bounding height offset positions)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            const headerOffset = 90;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    });
});

// HERO BUTTON LINK SCROLL ACTIONS
const exploreBtn = document.querySelector('.secondary-btn');
if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        const target = document.querySelector('#services');
        if(target) {
            const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - 90;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    });
}

const consultBtn = document.querySelector('.primary-btn');
if (consultBtn) {
    consultBtn.addEventListener('click', () => {
        const target = document.querySelector('#contact');
        if(target) {
            const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - 90;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    });
}

// SCROLL REVEAL ANIMATION (Excludes marquee layer elements to maintain layout continuity)
const revealElements = document.querySelectorAll(
    '.service-card, .why-card, .testimonial-card, .counter-box, .faq-item, .contact-form'
);

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
});

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// CONTACT FORM SUBMISSION FOR EMAILJS
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        emailjs.send(
            "service_luewys8",
            "template_618w7fd",
            {
                name: document.getElementById("name").value,
                business: document.getElementById("business").value,
                phone: document.getElementById("phone").value,
                email: document.getElementById("email").value,
                service: document.getElementById("service").value,
                message: document.getElementById("message").value
            }
        )
        .then(function(response) {
            alert("Lead submitted successfully! Check your Gmail.");
            contactForm.reset();
        })
        .catch(function(error) {
            console.log(error);
            alert("Error: " + JSON.stringify(error));
        });
    });
}