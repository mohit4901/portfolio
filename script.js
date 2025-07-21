document.addEventListener('DOMContentLoaded', () => {

    // Split text into characters for a typewriter-like effect
    const heroHeadlines = document.querySelectorAll('.hero__headline');
    heroHeadlines.forEach(headline => {
        headline.innerHTML = headline.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    });

    const heroDescriptions = document.querySelectorAll('.hero__description');
    heroDescriptions.forEach(description => {
        description.innerHTML = description.textContent.replace(/(\S+\s*)/g, "<span class='word'>$&</span>");
    });
    
    // Select all elements for the animation
    const heroImage = document.querySelector('.hero__image');
    const designerSection = document.querySelector('.hero__content:first-of-type');
    const coderSection = document.querySelector('.hero__content:last-of-type');
    const designerWords = designerSection.querySelectorAll('.word');
    const coderWords = coderSection.querySelectorAll('.word');
    
    // Create a timeline for the hero section to control the sequence
    anime.timeline({
        easing: 'easeOutQuad',
        duration: 1200
    })
    .add({
        targets: heroImage,
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 1500,
        delay: 500,
        easing: 'spring(1, 80, 10, 0)' // Use a spring easing for a more natural bounce
    })
    .add({
        targets: designerSection.querySelector('.letter'),
        scale: [0, 1],
        opacity: [0, 1],
        translateY: ['-20px', '0px'],
        rotateZ: ['90deg', '0deg'],
        duration: 1000,
        delay: anime.stagger(50, { start: 0 }),
        easing: 'easeOutQuint'
    }, '-=1000') // Overlap with the previous animation
    .add({
        targets: designerWords,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        delay: anime.stagger(50),
        easing: 'easeOutQuad'
    }, '-=500') // Start the description after the headline has begun
    .add({
        targets: coderSection.querySelector('.letter'),
        scale: [0, 1],
        opacity: [0, 1],
        translateY: ['-20px', '0px'],
        rotateZ: ['-90deg', '0deg'],
        duration: 1000,
        delay: anime.stagger(50, { start: 0 }),
        easing: 'easeOutQuint'
    }, '-=1000') // Overlap with the previous animation
    .add({
        targets: coderWords,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        delay: anime.stagger(50),
        easing: 'easeOutQuad'
    }, '-=500'); // Start the description after the headline has begun

    // Scroll-Triggered Animations for all other sections
    const sectionsToAnimate = document.querySelectorAll('.section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                
                // Animate the main section title and subtitle
                anime({
                    targets: section.querySelector('.section__title, .section__subtitle'),
                    translateY: [20, 0],
                    opacity: [0, 1],
                    duration: 1000,
                    easing: 'easeOutQuad',
                });

                // Apply unique animations based on the section ID
                switch (section.id) {
                    case 'projects':
                        anime({
                            targets: section.querySelectorAll('.project-card'),
                            translateY: [50, 0],
                            opacity: [0, 1],
                            rotateZ: ['2deg', '0deg'],
                            duration: 1200,
                            easing: 'easeOutQuad',
                            delay: anime.stagger(150, { start: 500 })
                        });
                        break;
                    
                    case 'about':
                        anime({
                            targets: section.querySelectorAll('.about__bio, .about__skills-overview'),
                            translateY: [40, 0],
                            opacity: [0, 1],
                            duration: 1000,
                            easing: 'easeOutQuad',
                            delay: anime.stagger(200, { start: 500 })
                        });
                        anime({
                            targets: section.querySelectorAll('.skill-item'),
                            scale: [0, 1],
                            opacity: [0, 1],
                            duration: 800,
                            easing: 'spring(1, 80, 10, 0)',
                            delay: anime.stagger(100, { start: 1000 })
                        });
                        break;
                    
                    case 'experience':
                        anime({
                            targets: section.querySelectorAll('.timeline-item'),
                            translateX: [-100, 0],
                            opacity: [0, 1],
                            duration: 1200,
                            easing: 'easeOutQuad',
                            delay: anime.stagger(200, { start: 500 })
                        });
                        break;

                    case 'testimonials':
                        anime({
                            targets: section.querySelectorAll('.testimonial-card'),
                            translateY: [50, 0],
                            opacity: [0, 1],
                            duration: 1200,
                            easing: 'easeOutQuad',
                            delay: anime.stagger(150, { start: 500 })
                        });
                        break;

                    case 'contact':
                        anime({
                            targets: section.querySelectorAll('.contact-form, .contact-info'),
                            translateY: [40, 0],
                            opacity: [0, 1],
                            duration: 1000,
                            easing: 'easeOutQuad',
                            delay: anime.stagger(250, { start: 500 })
                        });
                        break;
                    
                    default:
                        // Fallback for any other section
                        const otherElements = section.querySelectorAll('p, h3, h4, .cta-button, .social-icon, li');
                        if (otherElements.length > 0) {
                            anime({
                                targets: otherElements,
                                translateY: [40, 0],
                                opacity: [0, 1],
                                duration: 1000,
                                easing: 'easeOutQuad',
                                delay: anime.stagger(100, { start: 500 }),
                            });
                        }
                        break;
                }

                // Stop observing after the animation has run
                observer.unobserve(section);
            }
        });
    }, observerOptions);

    sectionsToAnimate.forEach(section => {
        // Exclude the hero section from the scroll-in animation
        if (section.id !== 'hero') {
            sectionObserver.observe(section);
        }
    });

    // Dynamic Year in Footer
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
});