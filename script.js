// Advanced GSAP Animations with Timeline and Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    
    // Loading Screen Animation
    const loadingTl = gsap.timeline();
    loadingTl.to('.loading-text', {
        duration: 1,
        scale: 1.2,
        rotation: 360,
        ease: "elastic.out(1, 0.3)"
    })
    .to('.loading-screen', {
        duration: 1,
        y: '-100%',
        ease: "power4.inOut",
        delay: 0.5
    });
    
    // Main Timeline after loading
    const mainTl = gsap.timeline({ delay: 2 });
    
    // Parallax Background Animation
    gsap.to('.parallax-bg', {
        duration: 20,
        backgroundPosition: '100% 100%',
        repeat: -1,
        ease: "none"
    });
    
    // Morphing Shapes Animation
    gsap.to('.shape-1', {
        duration: 4,
        morphSVG: "M50,50 Q100,25 150,50 Q100,75 50,50",
        rotation: 360,
        scale: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
    
    gsap.to('.shape-2', {
        duration: 6,
        borderRadius: "20% 80% 50% 30%",
        rotation: -360,
        scale: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
    });
    
    gsap.to('.shape-3', {
        duration: 5,
        borderRadius: "60% 40% 80% 20%",
        rotation: 180,
        scale: 1.3,
        repeat: -1,
        yoyo: true,
        ease: "elastic.inOut(1, 0.3)"
    });
    
    // Page Load Sequence
    mainTl.from('.nav-iteam', {
        duration: 1.2,
        y: -100,
        opacity: 0,
        ease: "bounce.out"
    })
    .to('.hero-title', {
        duration: 1.5,
        opacity: 1,
        y: 0,
        rotationX: 0,
        ease: "power3.out"
    }, "-=0.5")
    .to('.hero-subtitle', {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power2.out"
    }, "-=0.8")
    .to('.cta-button', {
        duration: 0.8,
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "back.out(2)"
    }, "-=0.5")
    .to('.floating-card', {
        duration: 1.5,
        opacity: 1,
        y: 0,
        rotation: 360,
        stagger: 0.3,
        ease: "elastic.out(1, 0.5)"
    }, "-=1");
    
    // Advanced Floating Cards Animation
    gsap.to('.card-1', {
        duration: 4,
        y: -30,
        rotation: 10,
        scale: 1.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
    
    gsap.to('.card-2', {
        duration: 5,
        y: -20,
        rotation: -8,
        scale: 0.95,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1
    });
    
    gsap.to('.card-3', {
        duration: 4.5,
        y: -35,
        rotation: 5,
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2
    });
    
    // Advanced Navigation Hover
    const navItems = document.querySelectorAll('.nav-iteam ul li');
    navItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.4,
                scale: 1.15,
                y: -5,
                rotationX: 10,
                rotationY: 5,
                z: 50,
                ease: "back.out(2)"
            });
            
            // Ripple effect
            gsap.fromTo(this, {
                boxShadow: "0 0 0 0 rgba(255, 63, 108, 0.7)"
            }, {
                duration: 0.6,
                boxShadow: "0 0 0 20px rgba(255, 63, 108, 0)",
                ease: "power2.out"
            });
        });
        
        item.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.4,
                scale: 1,
                y: 0,
                rotationX: 0,
                rotationY: 0,
                z: 0,
                ease: "power2.out"
            });
        });
    });
    
    // Advanced CTA Button Animation
    gsap.to('.cta-button', {
        duration: 2,
        scale: 1.08,
        boxShadow: "0 15px 35px rgba(255, 63, 108, 0.4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
    
    // Counter Animation for Stats
    function animateCounter(element) {
        const target = parseInt(element.dataset.target);
        gsap.to(element, {
            duration: 2,
            innerHTML: target,
            ease: "power2.out",
            snap: { innerHTML: 1 },
            onUpdate: function() {
                element.innerHTML = Math.ceil(element.innerHTML).toLocaleString();
            }
        });
    }
    
    // Scroll-triggered Animations
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Products Section
        const productsSection = document.querySelector('.products');
        const productsRect = productsSection.getBoundingClientRect();
        
        if (productsRect.top < windowHeight * 0.8 && productsRect.bottom > 0) {
            gsap.to('.section-title', {
                duration: 1.2,
                opacity: 1,
                y: 0,
                rotationX: 0,
                ease: "power3.out"
            });
            
            gsap.to('.product-card', {
                duration: 1,
                opacity: 1,
                y: 0,
                rotationY: 0,
                stagger: 0.2,
                ease: "back.out(1.7)"
            });
        }
        
        // Stats Section
        const statsSection = document.querySelector('.stats');
        const statsRect = statsSection.getBoundingClientRect();
        
        if (statsRect.top < windowHeight * 0.8 && statsRect.bottom > 0) {
            gsap.to('.stat-item', {
                duration: 0.8,
                opacity: 1,
                scale: 1,
                stagger: 0.2,
                ease: "back.out(2)",
                onComplete: function() {
                    document.querySelectorAll('.stat-number').forEach(animateCounter);
                }
            });
        }
        
        // Newsletter Section
        const newsletterSection = document.querySelector('.newsletter');
        const newsletterRect = newsletterSection.getBoundingClientRect();
        
        if (newsletterRect.top < windowHeight * 0.8) {
            gsap.to('.newsletter h2', {
                duration: 1,
                opacity: 1,
                y: 0,
                ease: "power3.out"
            });
            
            gsap.to('.newsletter p', {
                duration: 0.8,
                opacity: 1,
                y: 0,
                ease: "power2.out",
                delay: 0.3
            });
            
            gsap.to('.newsletter-form', {
                duration: 0.8,
                opacity: 1,
                y: 0,
                ease: "back.out(1.7)",
                delay: 0.6
            });
        }
    });
    
    // Advanced Product Card Interactions
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.4,
                scale: 1.08,
                rotationY: 10,
                rotationX: 5,
                z: 100,
                ease: "power2.out"
            });
            
            gsap.to(this.querySelector('.product-image'), {
                duration: 0.4,
                scale: 1.15,
                rotation: 5,
                ease: "power2.out"
            });
            
            // Magnetic effect
            gsap.to(this, {
                duration: 0.3,
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.4,
                scale: 1,
                rotationY: 0,
                rotationX: 0,
                z: 0,
                boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
                ease: "power2.out"
            });
            
            gsap.to(this.querySelector('.product-image'), {
                duration: 0.4,
                scale: 1,
                rotation: 0,
                ease: "power2.out"
            });
        });
    });
    
    // Testimonial Slider
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                gsap.to(testimonial, {
                    duration: 0.8,
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    ease: "back.out(1.7)"
                });
            } else {
                gsap.to(testimonial, {
                    duration: 0.5,
                    opacity: 0,
                    x: i < index ? -100 : 100,
                    scale: 0.8,
                    ease: "power2.out"
                });
            }
        });
    }
    
    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 4000);
    
    // Custom Cursor Follower
    const cursorFollower = document.querySelector('.cursor-follower');
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        gsap.to(cursorFollower, {
            duration: 0.1,
            opacity: 1,
            ease: "power2.out"
        });
    });
    
    // Smooth cursor following
    gsap.ticker.add(() => {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        gsap.set(cursorFollower, {
            x: followerX,
            y: followerY
        });
    });
    
    // Enhanced Search Bar
    const searchBar = document.querySelector('.desktop-searchBar');
    searchBar.addEventListener('focus', function() {
        gsap.to('.search-container', {
            duration: 0.4,
            scale: 1.08,
            rotationX: 5,
            boxShadow: "0 10px 30px rgba(255, 63, 108, 0.3)",
            ease: "back.out(1.7)"
        });
    });
    
    searchBar.addEventListener('blur', function() {
        gsap.to('.search-container', {
            duration: 0.4,
            scale: 1,
            rotationX: 0,
            boxShadow: "0 0 0px rgba(255, 63, 108, 0)",
            ease: "power2.out"
        });
    });
    
    // Newsletter Form Animation
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        gsap.to('.newsletter-btn', {
            duration: 0.3,
            scale: 0.95,
            ease: "power2.out",
            onComplete: function() {
                gsap.to('.newsletter-btn', {
                    duration: 0.5,
                    scale: 1,
                    backgroundColor: "#4CAF50",
                    innerHTML: "Subscribed!",
                    ease: "back.out(1.7)"
                });
            }
        });
    });
    
    // Parallax Effect on Scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.parallax-bg');
        const speed = scrolled * 0.5;
        
        gsap.set(parallax, {
            transform: `translateY(${speed}px)`
        });
    });
});