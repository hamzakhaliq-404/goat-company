// GSAP and ScrollTrigger initializations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animations
const heroItems = gsap.utils.toArray(".hero-anim-item");
gsap.from(heroItems, {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    ease: "power3.out"
});

const iconItems = gsap.utils.toArray(".icon-item");
gsap.from(iconItems, {
    scrollTrigger: {
        trigger: ".icon-item",
        start: "top 90%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6
});

const floatingShapes = gsap.utils.toArray(".floating-shape");
floatingShapes.forEach(shape => {
    gsap.to(shape, {
        x: "random(-50, 50)",
        y: "random(-50, 50)",
        scale: "random(0.8, 1.2)",
        duration: "random(10, 20)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
});

// Stats Section Animations
const statCards = document.querySelectorAll('.stat-card');
statCards.forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 0.5,
    });
});

const countUpElements = document.querySelectorAll('.count-up');
countUpElements.forEach(el => {
    const endVal = parseFloat(el.getAttribute('data-value'));
    const suffix = el.getAttribute('data-suffix') || '';
    const countUpAnim = new countUp.CountUp(el, endVal, {
        duration: 2.5,
        separator: ',',
        suffix: suffix,
        enableScrollSpy: true,
        scrollSpyDelay: 100,
        scrollSpyOnce: true,
    });
});

// Services Section Animations
gsap.from(".service-anim-item", {
    scrollTrigger: {
        trigger: ".service-anim-item",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 20,
    duration: 0.6
});

gsap.utils.toArray(".service-card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: i * 0.1
    });
});

// Our Brands Section Animations
gsap.from(".brand-anim-item", {
    scrollTrigger: {
        trigger: ".brand-anim-item",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 20,
    duration: 0.6
});

gsap.utils.toArray(".brand-card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        scale: 0.95,
        y: 50,
        duration: 0.6,
        delay: i * 0.2
    });
});

// Partner Section Animations
gsap.utils.toArray(".partner-anim-item").forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 0.8
    });
});

// Contact Section Animations
gsap.from(".contact-anim-item", {
    scrollTrigger: {
        trigger: ".contact-anim-item",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 20,
    duration: 0.6
});
gsap.from(".contact-info-anim", {
    scrollTrigger: {
        trigger: ".contact-info-anim",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    x: -30,
    duration: 0.6,
    delay: 0.2
});
gsap.from(".contact-form-anim", {
    scrollTrigger: {
        trigger: ".contact-form-anim",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    x: 30,
    duration: 0.6,
    delay: 0.4
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
const submitButton = document.getElementById('submit-button');
const buttonText = document.getElementById('button-text');
const buttonIcon = document.getElementById('button-icon');
const buttonSpinner = document.getElementById('button-spinner');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        submitButton.disabled = true;
        buttonText.classList.add('hidden');
        buttonIcon.classList.add('hidden');
        buttonSpinner.classList.remove('hidden');

        setTimeout(() => {
            iziToast.success({
                title: 'Message Sent!',
                message: 'Thank you for contacting us. We\'ll get back to you soon.',
                position: 'topRight'
            });

            contactForm.reset();

            submitButton.disabled = false;
            buttonText.classList.remove('hidden');
            buttonIcon.classList.remove('hidden');
            buttonSpinner.classList.add('hidden');
        }, 1500);
    });
}

// Header scroll and mobile menu
const header = document.getElementById('main-header');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

let isMobileMenuOpen = false;

const handleScroll = () => {
    if (window.scrollY > 20 || isMobileMenuOpen) {
        header.classList.add('bg-slate-900/80', 'backdrop-blur-lg', 'shadow-lg');
        header.classList.remove('bg-transparent');
    } else {
        header.classList.remove('bg-slate-900/80', 'backdrop-blur-lg', 'shadow-lg');
        header.classList.add('bg-transparent');
    }
};

const toggleMobileMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    handleScroll();
};

window.addEventListener('scroll', handleScroll);
mobileMenuButton.addEventListener('click', toggleMobileMenu);
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(isMobileMenuOpen) {
            toggleMobileMenu();
        }
    });
});
