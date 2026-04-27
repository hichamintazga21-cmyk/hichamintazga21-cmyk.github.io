document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor Glow
    const cursor = document.querySelector('.cursor-glow');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Scroll Header Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Scroll Reveal Animation
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

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Toggle (Simple placeholder)
    const menuToggle = document.getElementById('mobile-menu');
    const navUl = document.querySelector('nav ul');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            // This would need more CSS for a full mobile menu, 
            // but adding the logic for completeness
            navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
            if (navUl.style.display === 'flex') {
                navUl.style.position = 'absolute';
                navUl.style.top = '100%';
                navUl.style.left = '0';
                navUl.style.width = '100%';
                navUl.style.flexDirection = 'column';
                navUl.style.background = 'rgba(10, 12, 16, 0.95)';
                navUl.style.padding = '2rem';
                navUl.style.borderBottom = '1px solid var(--glass-border)';
            }
        });
    }
});
