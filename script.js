// Language Translations
const translations = {
    nl: {
        nav: {
            home: 'Home',
            story: 'Onze Reis',
            details: 'Details',
            parking: 'Parkeren',
            program: 'Programma',
            rsvp: 'RSVP',
            faq: 'Veelgestelde Vragen'
        },
        hero: {
            message1: '🐾 3 huisdieren',
            message2: '🏠 4 woningen',
            message3: '✈️ 10+ vakanties',
            message4: '💕 4000+ dagen',
            message5: 'later...'
        },
        story: {
            title: 'Onze Reis'
        },
        details: {
            title: 'en nu tijd om in het huwelijksbootje stappen!',
            date: {
                label: 'Datum',
                value: 'Zaterdag 5 juni 2026'
            },
            time: {
                label: 'Tijd',
                value: '14:30 - 23:59'
            },
            venue: {
                label: 'Locatie'
            },
            address: {
                label: 'Adres',
                mapLink: 'Bekijk op kaart'
            }
        },
        parking: {
            title: 'Parkeren',
            description: 'Er is gratis parkeren voor De Volière. Als deze vol is, zijn er voldoende betaalde (voor een klein tarief) parkeerplaatsen na de slagboom.',
            easy: {
                title: 'Gemakkelijke Toegang',
                description: 'De parkeerplaats bevindt zich direct bij de locatie.'
            },
            plenty: {
                title: 'Ruim Voldoende Plaats',
                description: 'Geen zorgen over het vinden van een plek - er is ruimte voor iedereen.'
            }
        },
        program: {
            title: 'Programma',
            reception: {
                title: 'Receptie',
                description: 'Aankomst en welkomstdrankje'
            },
            ceremony: {
                title: 'Ceremonie',
                description: 'Huwelijksceremonie'
            },
            pictures: {
                title: 'Fototijd',
                description: 'Tijd voor foto\'s'
            },
            cocktails: {
                title: 'Cocktails',
                description: 'Drankjes en gezelligheid'
            },
            dinner: {
                title: 'Diner & Feest',
                description: 'Diner, dansen en feesten tot 23:59'
            }
        },
        rsvp: {
            subtitle: 'Gelieve te reageren vóór 29 maart 2026'
        },
        faq: {
            title: 'Veelgestelde Vragen',
            dresscode: {
                question: 'Wat moet ik dragen?',
                answer: 'Dresscode is zomer chic. Denk aan netjes maar comfortabel!'
            },
            plusone: {
                question: 'Mag ik iemand meenemen?',
                answer: 'Vanwege de beperkte capaciteit van de locatie kunnen we alleen formeel uitgenodigde gasten ontvangen. Bedankt voor uw begrip.'
            },
            dietary: {
                question: 'Hoe zit het met dieetwensen?',
                answer: 'Laat ons weten als u dieetwensen heeft wanneer u RSVP\'t.'
            },
            accommodation: {
                question: 'Is er accommodatie in de buurt?',
                answer: 'We hebben een lijst met aanbevolen hotels in de omgeving. Neem contact met ons op voor suggesties!'
            }
        },
        footer: {
            copyright: '© 2026 JJ Bruiloft. Gemaakt met ❤️'
        }
    },
    en: {
        nav: {
            home: 'Home',
            story: 'Our Journey',
            details: 'Details',
            parking: 'Parking',
            program: 'Program',
            rsvp: 'RSVP',
            faq: 'Q&A'
        },
        hero: {
            message1: '🐾 3 pets',
            message2: '🏠 4 homes',
            message3: '✈️ 10+ holidays',
            message4: '💕 4000+ days',
            message5: 'later...'
        },
        story: {
            title: 'Our Journey'
        },
        details: {
            title: 'and now it\'s time to tie the knot!',
            date: {
                label: 'Date',
                value: 'Saturday, June 5th, 2026'
            },
            time: {
                label: 'Time',
                value: '14:30 - 23:59'
            },
            venue: {
                label: 'Venue'
            },
            address: {
                label: 'Address',
                mapLink: 'View on Map'
            }
        },
        parking: {
            title: 'Parking',
            description: 'There is free parking in front of De Volière. If this is full, there are plenty parking spots after you pass the barrier for a small fee.',
            easy: {
                title: 'Easy Access',
                description: 'The parking area is conveniently located right at the venue.'
            },
            plenty: {
                title: 'Plenty of Space',
                description: 'No need to worry about finding a spot - there\'s room for everyone.'
            }
        },
        program: {
            title: 'Program',
            reception: {
                title: 'Reception',
                description: 'Arrival and welcome drinks'
            },
            ceremony: {
                title: 'Ceremony',
                description: 'Wedding ceremony'
            },
            pictures: {
                title: 'Picture time',
                description: 'Time to take pictures'
            },
            cocktails: {
                title: 'Cocktails',
                description: 'Drinks and mingling'
            },
            dinner: {
                title: 'Dinner & Party',
                description: 'Dinner, dancing and celebration until 23:00'
            }
        },
        rsvp: {
            subtitle: 'Please respond by March 29th, 2026'
        },
        faq: {
            title: 'Frequently Asked Questions',
            dresscode: {
                question: 'What should I wear?',
                answer: 'Dresscode is summer chic. Think dressy but comfortable!'
            },
            plusone: {
                question: 'Can I bring a plus one?',
                answer: 'Due to venue limitations, we are only able to accommodate those guests formally invited. Thank you for understanding.'
            },
            dietary: {
                question: 'What about dietary restrictions?',
                answer: 'Please let us know about any dietary restrictions when you RSVP.'
            },
            accommodation: {
                question: 'Is there accommodation nearby?',
                answer: 'We have a list of recommended hotels in the area. Contact us for suggestions!'
            }
        },
        footer: {
            copyright: '© 2026 JJ Wedding. Made with ❤️'
        }
    }
};

// Language Management
let currentLanguage = 'nl'; // Default to Dutch

// Get nested translation value
function getTranslation(key, lang) {
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
        value = value[k];
        if (!value) return key; // Fallback to key if translation not found
    }
    return value;
}

// Update page language
function updateLanguage(lang) {
    currentLanguage = lang;

    // Save to localStorage
    localStorage.setItem('preferredLanguage', lang);

    // Update all elements with data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        element.textContent = getTranslation(key, lang);
    });

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update html lang attribute
    document.documentElement.lang = lang;
}

// Initialize language on page load
function initializeLanguage() {
    // Try to get saved language, fallback to Dutch
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'nl';
    updateLanguage(savedLanguage);

    // Set up language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language system
    initializeLanguage();
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
                }, index * 1200); // 1.2 second delay between each message
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
        fastAdvanceDelay: 1000, // Faster speed for 4th photo
        fastSlideIndex: 3, // Index of slide to advance quickly (4th slide)

        init() {
            if (!this.slideshow || this.slides.length === 0) return;

            this.createIndicators();
            this.setupEventListeners();

            // Set initial position
            this.currentIndex = 0;
            this.updateSlidePosition();
            this.updateIndicators();

            // Auto-advance will be started by Intersection Observer when carousel is visible
            // This prevents issues with starting auto-advance before carousel is in viewport
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

            // Handle window resize
            window.addEventListener('resize', () => {
                this.updateSlidePosition();
                this.updateIndicators();
            });

            // Touch/swipe support
            this.setupTouchEvents();

            // Setup visibility-based auto-advance
            this.setupVisibilityObserver();
        },

        setupTouchEvents() {
            let touchStartX = 0;
            let touchEndX = 0;
            let touchStartY = 0;
            let touchEndY = 0;

            const viewport = this.slideshow.querySelector('.slideshow-viewport');

            viewport.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
                touchStartY = e.changedTouches[0].screenY;
                this.stopAutoAdvance();
            }, { passive: true });

            viewport.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                touchEndY = e.changedTouches[0].screenY;
                this.handleSwipe(touchStartX, touchEndX, touchStartY, touchEndY);
                this.startAutoAdvance();
            }, { passive: true });

            // Handle touchcancel to restart auto-advance if touch is interrupted
            viewport.addEventListener('touchcancel', () => {
                this.startAutoAdvance();
            }, { passive: true });
        },

        handleSwipe(startX, endX, startY, endY) {
            const diffX = startX - endX;
            const diffY = startY - endY;
            const threshold = 50; // Minimum distance for a swipe

            // Check if horizontal swipe is more significant than vertical
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > threshold) {
                if (diffX > 0) {
                    // Swiped left - go to next slide
                    this.nextSlide();
                } else {
                    // Swiped right - go to previous slide
                    this.previousSlide();
                }
            }
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
            const isMobile = window.innerWidth <= 768;

            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === this.currentIndex);

                // On mobile, only show previous, current, and next indicators
                if (isMobile) {
                    const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
                    const nextIndex = (this.currentIndex + 1) % this.slides.length;
                    const isVisible = index === this.currentIndex || index === prevIndex || index === nextIndex;
                    indicator.classList.toggle('visible', isVisible);
                } else {
                    indicator.classList.add('visible');
                }
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

            // Use faster delay for 4th photo (index 3), normal delay for all others
            const delay = this.currentIndex === this.fastSlideIndex
                ? this.fastAdvanceDelay
                : this.autoAdvanceDelay;

            console.log('Starting auto-advance with', delay, 'ms delay (index:', this.currentIndex, ')');
            this.autoAdvanceTimer = setInterval(() => {
                console.log('Auto-advancing to next slide');
                this.nextSlide();
            }, delay);
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
        },

        setupVisibilityObserver() {
            // Use Intersection Observer to pause/resume auto-advance based on visibility
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1 // Trigger when at least 10% of carousel is visible
            };

            const visibilityObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Carousel is visible, start auto-advance
                        this.startAutoAdvance();
                    } else {
                        // Carousel is not visible, stop auto-advance to save resources
                        this.stopAutoAdvance();
                    }
                });
            }, observerOptions);

            // Observe the slideshow container
            if (this.slideshow) {
                visibilityObserver.observe(this.slideshow);
            }
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