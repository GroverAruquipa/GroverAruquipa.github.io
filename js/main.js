/* ========================================
   GROVER ARUQUIPA - PORTFOLIO SCRIPTS
   Minimal & Clean
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {

    // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
        '.pillar-card, .publication-item, .prototype-card, .news-item, .award-item, .mentor-card, .journey-item, .service-item'
    );

    animatedElements.forEach((el, index) => {
        el.classList.add('fade-in-element');
        el.style.transitionDelay = `${(index % 6) * 0.07}s`;
        fadeInObserver.observe(el);
    });

    // ========== LIGHTBOX FOR THUMBNAILS ==========
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');

    document.querySelectorAll('.pub-thumb, .prototype-image').forEach(thumb => {
        thumb.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img && img.src) {
                lightboxImg.src = img.src;
                lightbox.classList.add('active');
            }
        });
    });

    if (lightbox) {
        lightbox.addEventListener('click', function() {
            this.classList.remove('active');
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox) {
            lightbox.classList.remove('active');
        }
    });

    // ========== CONSOLE ==========
    console.log('%cGrover Aruquipa - Robotics Researcher', 'color: #111; font-size: 14px; font-weight: 600;');
    console.log('%cParallel Robots | Unlimited Rotation | Integrated Grasping', 'color: #777; font-size: 11px;');
});
