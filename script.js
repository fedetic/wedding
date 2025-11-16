// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Animated Messages in Hero Section
    const messageElements = [
        document.getElementById('message1'),
        document.getElementById('message2'),
        document.getElementById('message3'),
        document.getElementById('message4'),
        document.getElementById('message5')
    ];

    // Show messages one by one with delays
    function showMessagesSequentially() {
        messageElements.forEach((element, index) => {
            if (element) {
                setTimeout(() => {
                    element.classList.add('show');
                }, index * 1500); // 1.5 second delay between each message
            }
        });
    }

    // Start the animation sequence
    if (messageElements[0]) {
        showMessagesSequentially();
    }

    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlighting
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const scrollPosition = window.scrollY + navHeight + 50;

        let activeSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                activeSection = section.getAttribute('id');
            }
        });

        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${activeSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Navbar background on scroll
    function updateNavbar() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(234, 228, 204, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(109, 83, 42, 0.1)';
        } else {
            navbar.style.background = 'rgba(234, 228, 204, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }

    // Scroll event listeners
    window.addEventListener('scroll', function() {
        updateActiveNav();
        updateNavbar();
    });

    // Add CSS animations for navigation
    const style = document.createElement('style');
    style.textContent = `
        .nav-links a.active {
            color: var(--secondary-brown);
        }

        .nav-links a.active::after {
            width: 100%;
        }
    `;
    document.head.appendChild(style);

    // Animate elements on scroll (simple fade in)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.detail-item, .faq-item, .timeline-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });

    // Special animation for the title
    const animatedTitle = document.querySelector('.animated-title');
    if (animatedTitle) {
        const titleObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, observerOptions);

        titleObserver.observe(animatedTitle);
    }

    // Photo Slideshow Functionality
    const photoSlideshow = {
        slideshow: document.getElementById('photoSlideshow'),
        track: document.getElementById('slideshowTrack'),
        slides: document.querySelectorAll('.photo-slide'),
        indicatorsContainer: document.getElementById('slideshowIndicators'),
        prevButton: document.getElementById('prevButton'),
        nextButton: document.getElementById('nextButton'),
        currentIndex: 0,
        autoAdvanceTimer: null,
        autoAdvanceDelay: 2500,

        init() {
            if (!this.slideshow || this.slides.length === 0) return;

            this.createIndicators();
            this.setupEventListeners();

            // Set initial position without resetting timer
            this.currentIndex = 0;
            this.updateSlidePosition();
            this.updateIndicators();

            // Start auto-advance only once
            this.startAutoAdvance();
        },

        createIndicators() {
            this.slides.forEach((_, index) => {
                const indicator = document.createElement('div');
                indicator.className = `slideshow-indicator ${index === 0 ? 'active' : ''}`;
                indicator.addEventListener('click', () => this.goToSlide(index));
                this.indicatorsContainer.appendChild(indicator);
            });
        },

        setupEventListeners() {
            this.prevButton.addEventListener('click', () => this.previousSlide());
            this.nextButton.addEventListener('click', () => this.nextSlide());

            // Pause auto-advance on hover
            this.slideshow.addEventListener('mouseenter', () => this.stopAutoAdvance());
            this.slideshow.addEventListener('mouseleave', () => this.startAutoAdvance());

            // Handle window resize
            window.addEventListener('resize', () => this.updateSlidePosition());
        },

        goToSlide(index) {
            this.currentIndex = index;
            this.updateSlidePosition();
            this.updateIndicators();
            this.resetAutoAdvance();
        },

        updateSlidePosition() {
            const viewportWidth = this.slideshow.querySelector('.slideshow-viewport').offsetWidth;
            const translateX = -this.currentIndex * viewportWidth;
            this.track.style.transform = `translateX(${translateX}px)`;
        },

        updateIndicators() {
            const indicators = this.indicatorsContainer.querySelectorAll('.slideshow-indicator');
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === this.currentIndex);
            });
        },

        nextSlide() {
            const nextIndex = (this.currentIndex + 1) % this.slides.length;
            this.goToSlide(nextIndex);
        },

        previousSlide() {
            const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
            this.goToSlide(prevIndex);
        },

        startAutoAdvance() {
            this.stopAutoAdvance();
            console.log('Starting auto-advance with', this.autoAdvanceDelay, 'ms delay');
            this.autoAdvanceTimer = setInterval(() => {
                console.log('Auto-advancing to next slide');
                this.nextSlide();
            }, this.autoAdvanceDelay);
        },

        stopAutoAdvance() {
            if (this.autoAdvanceTimer) {
                clearInterval(this.autoAdvanceTimer);
                this.autoAdvanceTimer = null;
            }
        },

        resetAutoAdvance() {
            this.stopAutoAdvance();
            this.startAutoAdvance();
        }
    };

    // Initialize photo slideshow
    photoSlideshow.init();

    // Add fade in animation CSS
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(animationStyle);

});