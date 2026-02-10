/**
 * TRAMA SUR - JavaScript
 * Interacciones suaves y funcionalidad del sitio
 */

// ========================================
// CONFIGURACIÓN INICIAL
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initSmoothScroll();
    initScrollAnimations();
    initEpisodeCards();
    initAudioPlayers();
    initGallery();
    initPosters();
    createOrganicBackground();
});

// ========================================
// NAVEGACIÓN
// ========================================
function initNavigation() {
    const nav = document.getElementById('mainNav');
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinkElements = document.querySelectorAll('.nav-link');
    let lastScrollTop = 0;
    let scrollTimeout;

    // Mobile menu toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // Close mobile menu when clicking on a link
    navLinkElements.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Hide/show navigation on scroll
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        
        scrollTimeout = setTimeout(function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                nav.classList.add('nav-hidden');
            } else {
                // Scrolling up
                nav.classList.remove('nav-hidden');
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, 50);
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavOnScroll() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinkElements.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavOnScroll);
}

// ========================================
// SMOOTH SCROLL
// ========================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                e.preventDefault();
                
                const navHeight = document.getElementById('mainNav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger children animations if they exist
                const children = entry.target.querySelectorAll('.value-card, .project-card, .episode-card, .social-card');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe sections and cards
    const animatedElements = document.querySelectorAll('.section, .value-card, .project-card, .episode-card, .social-card');
    
    animatedElements.forEach(element => {
        // Set initial state for cards
        if (element.classList.contains('value-card') || 
            element.classList.contains('project-card') || 
            element.classList.contains('episode-card') ||
            element.classList.contains('social-card')) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }
        
        observer.observe(element);
    });
}

// ========================================
// EPISODE CARDS INTERACTION
// ========================================
function initEpisodeCards() {
    const episodeCards = document.querySelectorAll('.episode-card');
    
    episodeCards.forEach(card => {
        card.addEventListener('click', function() {
            // Here you could add functionality to play the episode
            // For now, just add a visual feedback
            console.log('Episode clicked:', this.dataset.episode);
            
            // Add a subtle pulse animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
        
        // Add keyboard accessibility
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// ========================================
// GALLERY INTERACTIONS
// ========================================
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const loadMoreBtn = document.getElementById('loadMoreGallery');
    
    // Gallery item click - open lightbox
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const caption = this.querySelector('.gallery-caption')?.textContent || '';
            openLightbox(img.src, caption);
        });
        
        // Keyboard accessibility
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', 'Ver imagen en tamaño completo');
        
        item.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Load more functionality
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Here you would load more images
            // For now, just show a notification
            showNotification('Cargando más imágenes...', 'info');
            
            // Simulate loading
            setTimeout(() => {
                showNotification('Todas las imágenes han sido cargadas', 'success');
            }, 1000);
        });
    }
}

// ========================================
// LIGHTBOX MODAL
// ========================================
function openLightbox(imageSrc, caption) {
    // Create lightbox if it doesn't exist
    let lightbox = document.getElementById('lightbox');
    
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close" aria-label="Cerrar">&times;</button>
                <img src="" alt="" class="lightbox-image">
                <div class="lightbox-caption"></div>
                <button class="lightbox-prev" aria-label="Anterior">‹</button>
                <button class="lightbox-next" aria-label="Siguiente">›</button>
            </div>
        `;
        document.body.appendChild(lightbox);
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .lightbox {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(45, 31, 26, 0.95);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            .lightbox.active {
                opacity: 1;
                visibility: visible;
            }
            
            .lightbox-content {
                position: relative;
                max-width: 90%;
                max-height: 90%;
                animation: zoomIn 0.3s ease;
            }
            
            .lightbox-image {
                max-width: 100%;
                max-height: 85vh;
                object-fit: contain;
                border-radius: 4px;
                box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
            }
            
            .lightbox-caption {
                text-align: center;
                color: white;
                font-size: 1.2rem;
                margin-top: 1rem;
                font-family: var(--font-sans);
            }
            
            .lightbox-close {
                position: absolute;
                top: -50px;
                right: 0;
                font-size: 3rem;
                color: white;
                background: none;
                border: none;
                cursor: pointer;
                transition: transform 0.2s ease;
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .lightbox-close:hover {
                transform: rotate(90deg);
            }
            
            .lightbox-prev,
            .lightbox-next {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                font-size: 4rem;
                color: white;
                background: rgba(255, 255, 255, 0.1);
                border: none;
                cursor: pointer;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                transition: all 0.2s ease;
                font-weight: 300;
            }
            
            .lightbox-prev:hover,
            .lightbox-next:hover {
                background: rgba(200, 72, 67, 0.8);
            }
            
            .lightbox-prev {
                left: -80px;
            }
            
            .lightbox-next {
                right: -80px;
            }
            
            @keyframes zoomIn {
                from {
                    transform: scale(0.8);
                    opacity: 0;
                }
                to {
                    transform: scale(1);
                    opacity: 1;
                }
            }
            
            @media (max-width: 768px) {
                .lightbox-prev,
                .lightbox-next {
                    width: 50px;
                    height: 50px;
                    font-size: 3rem;
                }
                
                .lightbox-prev {
                    left: 10px;
                }
                
                .lightbox-next {
                    right: 10px;
                }
                
                .lightbox-close {
                    top: 10px;
                    right: 10px;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Close button
        lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        
        // Click outside to close
        lightbox.addEventListener('click', function(e) {
            if (e.target === this) {
                closeLightbox();
            }
        });
        
        // Escape key to close
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }
    
    // Set image and caption
    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    
    lightboxImg.src = imageSrc;
    lightboxImg.alt = caption;
    lightboxCaption.textContent = caption;
    
    // Show lightbox
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ========================================
// POSTERS INTERACTIONS
// ========================================
function initPosters() {
    const posterCards = document.querySelectorAll('.poster-card');
    
    posterCards.forEach(card => {
        const viewBtn = card.querySelector('.btn-view-poster');
        
        if (viewBtn) {
            viewBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const img = card.querySelector('.poster-image');
                const title = card.querySelector('.poster-info h4')?.textContent || '';
                const description = card.querySelector('.poster-info p')?.textContent || '';
                const caption = `${title} - ${description}`;
                
                openLightbox(img.src, caption);
            });
        }
        
        // Click on card also opens lightbox
        card.addEventListener('click', function() {
            const img = this.querySelector('.poster-image');
            const title = this.querySelector('.poster-info h4')?.textContent || '';
            const description = this.querySelector('.poster-info p')?.textContent || '';
            const caption = `${title} - ${description}`;
            
            openLightbox(img.src, caption);
        });
        
        // Keyboard accessibility
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// ========================================
// AUDIO PLAYERS
// ========================================
function initAudioPlayers() {
    const audioPlayers = document.querySelectorAll('.audio-player');
    
    audioPlayers.forEach(player => {
        // Add custom controls styling
        player.addEventListener('play', function() {
            console.log('Audio playing');
            // Pause other players
            audioPlayers.forEach(otherPlayer => {
                if (otherPlayer !== player) {
                    otherPlayer.pause();
                }
            });
        });
        
        player.addEventListener('pause', function() {
            console.log('Audio paused');
        });
        
        player.addEventListener('ended', function() {
            console.log('Audio ended');
        });
    });
}

// ========================================
// ORGANIC BACKGROUND
// ========================================
function createOrganicBackground() {
    const bgContainer = document.getElementById('organicBg');
    
    // Create SVG pattern
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    
    // Create pattern definition
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const pattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
    pattern.setAttribute('id', 'textile-pattern');
    pattern.setAttribute('x', '0');
    pattern.setAttribute('y', '0');
    pattern.setAttribute('width', '200');
    pattern.setAttribute('height', '200');
    pattern.setAttribute('patternUnits', 'userSpaceOnUse');
    
    // Create weaving paths
    const paths = [
        { d: 'M 0 100 Q 50 50, 100 100 T 200 100', stroke: '#6B4423', strokeWidth: '1' },
        { d: 'M 100 0 Q 150 50, 100 100 T 100 200', stroke: '#2F5233', strokeWidth: '1' },
        { d: 'M 0 0 L 200 200', stroke: '#4A7C8E', strokeWidth: '0.5', opacity: '0.3' },
        { d: 'M 200 0 L 0 200', stroke: '#C84843', strokeWidth: '0.5', opacity: '0.3' }
    ];
    
    paths.forEach(pathData => {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathData.d);
        path.setAttribute('stroke', pathData.stroke);
        path.setAttribute('stroke-width', pathData.strokeWidth);
        path.setAttribute('fill', 'none');
        if (pathData.opacity) {
            path.setAttribute('opacity', pathData.opacity);
        }
        pattern.appendChild(path);
    });
    
    defs.appendChild(pattern);
    svg.appendChild(defs);
    
    // Apply pattern
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('width', '100%');
    rect.setAttribute('height', '100%');
    rect.setAttribute('fill', 'url(#textile-pattern)');
    svg.appendChild(rect);
    
    bgContainer.appendChild(svg);
}

// ========================================
// PARALLAX EFFECT (Optional)
// ========================================
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.parallax || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// ========================================
// FORM VALIDATION (if needed in the future)
// ========================================
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            
            // Here you would handle form submission
            console.log('Form submitted:', Object.fromEntries(formData));
            
            // Show success message
            showNotification('¡Gracias por tu mensaje! Te responderemos pronto.', 'success');
        });
    });
}

// ========================================
// NOTIFICATION SYSTEM
// ========================================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#2F5233' : '#4A7C8E'};
        color: white;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ========================================
// LAZY LOADING IMAGES
// ========================================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ========================================
// PERFORMANCE MONITORING
// ========================================
function logPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log('Page load time:', pageLoadTime + 'ms');
            }, 0);
        });
    }
}

// Initialize performance logging in development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    logPerformance();
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Throttle function for performance
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

// Debounce function
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ========================================
// EXPORT FOR MODULE USE (if needed)
// ========================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initNavigation,
        initSmoothScroll,
        initScrollAnimations,
        showNotification
    };
}