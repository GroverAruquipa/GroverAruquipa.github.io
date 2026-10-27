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
        '.pillar-card, .publication-item, .prototype-card, .robot-card, .vtile, .glance-item, .teaching-item, .news-item, .award-item, .mentor-card, .journey-item, .service-item'
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
        lightbox.classList.remove('is-video', 'is-yt');
        lightboxImg.src = src;
        lightbox.classList.add('active');
    }

    function openVideo(src) {
        lightbox.classList.remove('is-yt');
        lightbox.classList.add('is-video');
        lightboxVideo.src = src;
        lightbox.classList.add('active');
        lightboxVideo.play().catch(function() {});
    }

    var lightboxYt = document.getElementById('lightboxYt');

    function openYouTube(id) {
        lightbox.classList.remove('is-video');
        lightbox.classList.add('is-yt');
        lightboxYt.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id +
            '?autoplay=1&rel=0" title="YouTube video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
        lightbox.classList.add('active');
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.classList.remove('is-yt');
        lightboxYt.innerHTML = '';
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

    document.querySelectorAll('.yt-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            openYouTube(this.getAttribute('data-youtube'));
        });
    });

    // ========== VIDEO GALLERY ==========
    document.querySelectorAll('.vtile').forEach(function(tile) {
        tile.addEventListener('click', function() {
            var yt = this.getAttribute('data-youtube');
            if (yt) {
                openYouTube(yt);
            } else {
                openVideo(this.getAttribute('data-video'));
            }
        });
    });

    document.querySelectorAll('.vfilter-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var filter = this.getAttribute('data-filter');
            document.querySelectorAll('.vfilter-btn').forEach(function(b) {
                b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
            });
            document.querySelectorAll('.vtile').forEach(function(tile) {
                tile.hidden = filter !== 'all' && tile.getAttribute('data-kind') !== filter;
            });
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
            if (e.target !== lightboxVideo && !lightboxYt.contains(e.target)) closeLightbox();
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
