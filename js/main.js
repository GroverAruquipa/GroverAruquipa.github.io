/* ========================================
   GROVER ARUQUIPA - PORTFOLIO SCRIPTS
   Minimal & Clean
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {

    // ========== NAVBAR SHOW ON SCROLL ==========
    var navbar = document.getElementById('navbar');
    var lastScrollY = 0;
    var headerHeight = document.querySelector('.header') ? document.querySelector('.header').offsetHeight : 400;

    window.addEventListener('scroll', function() {
        var currentY = window.scrollY;
        if (currentY > headerHeight) {
            navbar.classList.add('visible');
        } else {
            navbar.classList.remove('visible');
        }
        lastScrollY = currentY;
    });

    // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========
    var observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    var fadeInObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    var animatedElements = document.querySelectorAll(
        '.pillar-card, .publication-item, .prototype-card, .robot-card, .glance-item, .teaching-item, .news-item, .award-item, .mentor-card, .journey-item, .service-item'
    );

    animatedElements.forEach(function(el, index) {
        el.classList.add('fade-in-element');
        el.style.transitionDelay = (index % 6) * 0.07 + 's';
        fadeInObserver.observe(el);
    });

    // ========== LIGHTBOX FOR IMAGES AND VIDEOS (exclude no-zoom) ==========
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightboxImg');
    var lightboxVideo = document.getElementById('lightboxVideo');

    function openImage(src) {
        lightbox.classList.remove('is-video');
        lightboxImg.src = src;
        lightbox.classList.add('active');
    }

    function openVideo(src) {
        lightbox.classList.add('is-video');
        lightboxVideo.src = src;
        lightbox.classList.add('active');
        lightboxVideo.play().catch(function() {});
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightboxVideo.pause();
        lightboxVideo.removeAttribute('src');
        lightboxVideo.load();
    }

    document.querySelectorAll('.pub-thumb:not(.no-zoom), .prototype-image:not(.no-zoom), .robot-media').forEach(function(thumb) {
        thumb.addEventListener('click', function() {
            var video = this.querySelector('video');
            var img = this.querySelector('img');
            if (video) {
                openVideo(video.getAttribute('src'));
            } else if (img && img.src) {
                openImage(img.src);
            }
        });
    });

    document.querySelectorAll('.video-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            openVideo(this.getAttribute('data-video'));
        });
    });

    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target !== lightboxVideo) closeLightbox();
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox) closeLightbox();
    });

    // ========== CARD VIDEOS PLAY ONLY WHILE VISIBLE ==========
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var cardVideos = document.querySelectorAll('.robot-media video');

    if (!reduceMotion && 'IntersectionObserver' in window) {
        var videoObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.play().catch(function() {});
                } else {
                    entry.target.pause();
                }
            });
        }, { threshold: 0.4 });
        cardVideos.forEach(function(v) { videoObserver.observe(v); });
    }

    // ========== CONSOLE ==========
    console.log('%cGrover Aruquipa - Robotics Researcher', 'color: #111; font-size: 14px; font-weight: 600;');
    console.log('%cParallel Robots | Unlimited Rotation | Integrated Grasping', 'color: #777; font-size: 11px;');
});
