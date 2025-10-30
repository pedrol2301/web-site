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

        // Close mobile menu when clicking on a link
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
    console.log('🔗 Configurando smooth scroll...');
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    console.log(`Encontrados ${anchorLinks.length} links de âncora`);

    anchorLinks.forEach((anchor, index) => {
        const href = anchor.getAttribute('href');
        console.log(`Link ${index + 1}:`, href);

        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Ignora links vazios ou só com #
            if (!href || href === '#') {
                console.log('⚠️ Link vazio, ignorando');
                return;
            }

            e.preventDefault();
            console.log('🎯 Clique detectado no link:', href);

            const target = document.querySelector(href);

            if (target) {
                const navbarElement = document.querySelector('.navbar');
                const navbarHeight = navbarElement ? navbarElement.offsetHeight : 70;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                console.log('📍 Rolando para posição:', targetPosition);

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            } else {
                console.error('❌ Seção não encontrada:', href);
            }
        });
    });

    // ============================================
    // Intersection Observer for Fade-in Animations
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate sections
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    });

    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, observerOptions);

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });

    // Animate skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'scale(0.95)';
        category.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    });

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }
        });
    }, observerOptions);

    skillCategories.forEach(category => {
        skillObserver.observe(category);
    });

    // Animate stats
    const stats = document.querySelectorAll('.stat');
    stats.forEach((stat, index) => {
        stat.style.opacity = '0';
        stat.style.transform = 'translateY(20px)';
        stat.style.transition = `opacity 0.5s ease ${index * 0.15}s, transform 0.5s ease ${index * 0.15}s`;
    });

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                // Animate numbers
                const numberElement = entry.target.querySelector('.stat-number');
                if (numberElement) {
                    const finalNumber = numberElement.textContent;
                    const isPlus = finalNumber.includes('+');
                    const number = parseInt(finalNumber);

                    if (!isNaN(number)) {
                        let current = 0;
                        const increment = number / 50;
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= number) {
                                numberElement.textContent = isPlus ? `${number}+` : number;
                                clearInterval(timer);
                            } else {
                                numberElement.textContent = Math.floor(current);
                            }
                        }, 30);
                    }
                }
            }
        });
    }, observerOptions);

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Animate education cards
    const educationCards = document.querySelectorAll('.education-card');
    educationCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
    });

    const educationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    educationCards.forEach(card => {
        educationObserver.observe(card);
    });

    // Animate contact cards
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        card.style.transition = `opacity 0.5s ease ${index * 0.15}s, transform 0.5s ease ${index * 0.15}s`;
    });

    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }
        });
    }, observerOptions);

    contactCards.forEach(card => {
        contactObserver.observe(card);
    });

    // Active nav link on scroll
    if (navbar && navLinks.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            const allSections = document.querySelectorAll('section[id]');

            allSections.forEach(section => {
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

    // Console easter egg
    console.log('%c🚀 Olá! Seja bem-vindo ao meu portfólio!', 'color: #10b981; font-size: 20px; font-weight: bold;');
    console.log('%c👨‍💻 Desenvolvido por Pedro Henrique Lima', 'color: #6b7280; font-size: 14px;');
    console.log('%c💼 Procurando por um desenvolvedor backend? Entre em contato!', 'color: #10b981; font-size: 14px;');
    console.log('✅ Todos os scripts inicializados com sucesso!');
});

// Loading animation (fora do DOMContentLoaded)
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
