// Aguardar o DOM estar pronto
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM carregado, iniciando scripts...');

    // ============================================
    // Theme Toggle
    // ============================================
    const htmlElement = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            console.log('🌓 Tema alterado para:', newTheme);
        });
    }

    // ============================================
    // Mobile Menu Toggle
    // ============================================
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const spans = hamburger.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // ============================================
    // Navbar Scroll Effect
    // ============================================
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll <= 0) {
                navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            } else {
                navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            }
        });
    }

    // ============================================
    // Smooth Scroll for Anchor Links
    // ============================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const navbarElement = document.querySelector('.navbar');
                const navbarHeight = navbarElement ? navbarElement.offsetHeight : 70;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // Intersection Observer for Animations
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const simpleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = entry.target.dataset.transform || 'translateY(0)';
            }
        });
    }, observerOptions);

    // Seções gerais
    document.querySelectorAll('section:not(.hero)').forEach(section => {
        section.style.opacity = '0';
        section.dataset.transform = 'translateY(0)';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        simpleObserver.observe(section);
    });

    // Timeline, Skills, Education, Contact Cards
    const elementsToAnimate = [
        { selector: '.timeline-item', transform: 'translateX(-30px)', final: 'translateX(0)', delay: 0.1 },
        { selector: '.skill-category', transform: 'scale(0.95)', final: 'scale(1)', delay: 0.1 },
        { selector: '.education-card', transform: 'translateY(20px)', final: 'translateY(0)', delay: 0.2 },
        { selector: '.contact-card', transform: 'scale(0.95)', final: 'scale(1)', delay: 0.15 }
    ];

    elementsToAnimate.forEach(group => {
        document.querySelectorAll(group.selector).forEach((el, index) => {
            el.style.opacity = '0';
            el.dataset.transform = group.final;
            el.style.transform = group.transform;
            el.style.transition = `all 0.6s ease ${index * group.delay}s`;
            simpleObserver.observe(el);
        });
    });

    // ============================================
    // Fix: Number Counter Animation
    // ============================================
    const stats = document.querySelectorAll('.stat');
    stats.forEach((stat, index) => {
        stat.style.opacity = '0';
        stat.dataset.transform = 'translateY(0)';
        stat.style.transform = 'translateY(20px)';
        stat.style.transition = `all 0.5s ease ${index * 0.15}s`;
    });

    const statsObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                const numberElement = entry.target.querySelector('.stat-number');
                if (numberElement && !numberElement.dataset.animated) {
                    numberElement.dataset.animated = "true"; // Evita rodar duas vezes
                    const finalString = numberElement.textContent;
                    
                    if (finalString === "OCI") return; // Ignora texto estático
                    
                    const isPlus = finalString.includes('+');
                    const isPercent = finalString.includes('%');
                    const targetNumber = parseInt(finalString.replace(/\D/g, ''));

                    if (!isNaN(targetNumber)) {
                        let current = 0;
                        // Força pulos maiores para chegar rápido e não travar
                        const increment = Math.ceil(targetNumber / 30); 
                        
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= targetNumber) {
                                // Garante que o número final seja exato
                                let formatted = targetNumber;
                                if (isPlus) formatted += '+';
                                if (isPercent) formatted += '%';
                                numberElement.textContent = formatted;
                                clearInterval(timer);
                            } else {
                                numberElement.textContent = current;
                            }
                        }, 40);
                    }
                }
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    stats.forEach(stat => statsObserver.observe(stat));

    // Active nav link on scroll
    if (navbar && navLinks.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            document.querySelectorAll('section[id]').forEach(section => {
                const sectionTop = section.offsetTop;
                const navbarHeight = navbar.offsetHeight || 70;
                if (window.pageYOffset >= (sectionTop - navbarHeight - 100)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
});

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});