// ===================================
// ERON DROID PORTFOLIO - JAVASCRIPT
// ===================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== SMOOTH SCROLLING =====
    const smoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };
    
    // ===== SCROLL ANIMATIONS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        observer.observe(el);
    });
    
    // ===== MOBILE MENU =====
    const mobileMenu = () => {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        if (mobileMenuBtn && navLinks) {
            let menuOpen = false;
            
            mobileMenuBtn.addEventListener('click', () => {
                if (menuOpen) {
                    navLinks.style.display = 'none';
                    menuOpen = false;
                } else {
                    navLinks.style.display = 'flex';
                    navLinks.style.position = 'absolute';
                    navLinks.style.top = '100%';
                    navLinks.style.left = '0';
                    navLinks.style.right = '0';
                    navLinks.style.background = 'rgba(5, 11, 20, 0.98)';
                    navLinks.style.flexDirection = 'column';
                    navLinks.style.padding = '2rem';
                    navLinks.style.gap = '1.5rem';
                    navLinks.style.borderTop = '2px solid #FFD700';
                    navLinks.style.zIndex = '999';
                    menuOpen = true;
                }
            });
            
            // Close menu when clicking a link
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 968) {
                        navLinks.style.display = 'none';
                        menuOpen = false;
                    }
                });
            });
        }
    };
    
    // ===== PARALLAX EFFECT =====
    const parallaxEffect = () => {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero-visual');
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        });
    };
    
    // ===== NAVIGATION BACKGROUND ON SCROLL =====
    const navScrollEffect = () => {
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(5, 11, 20, 0.98)';
            } else {
                nav.style.background = 'rgba(5, 11, 20, 0.9)';
            }
        });
    };
    
    // Initialize all functions
    smoothScroll();
    mobileMenu();
    parallaxEffect();
    navScrollEffect();
    
    // Log to confirm script loaded
    console.log('ERON DROID Portfolio loaded successfully! 🚀');
});
