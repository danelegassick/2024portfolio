// Only apply scroll effects if window width is 1000px or larger
function checkWindowSize() {
  // Get current window width
  const windowWidth = window.innerWidth;
  
  // Only attach scroll listeners if window is 1000px or wider
  if (windowWidth >= 1000) {
    enableParallaxEffects();
  } else {
    disableParallaxEffects();
  }
}

function enableParallaxEffects() {
  // Scroll-1 effect
  window.addEventListener('scroll', scroll1Effect);
  
  // Scroll-2 effect
  window.addEventListener('scroll', scroll2Effect);
  
  // Scroll-3 effect
  window.addEventListener('scroll', scroll3Effect);
  
  // Scroll-4 effect
  window.addEventListener('scroll', scroll4Effect);
}

function disableParallaxEffects() {
  // Remove event listeners
  window.removeEventListener('scroll', scroll1Effect);
  window.removeEventListener('scroll', scroll2Effect);
  window.removeEventListener('scroll', scroll3Effect);
  window.removeEventListener('scroll', scroll4Effect);
  
  // Reset all transformations
  resetTransforms();
}

function resetTransforms() {
  const elements = [
    document.querySelector('.scroll-1'),
    document.querySelector('.scroll-2'),
    document.querySelector('.scroll-3'),
    document.querySelector('.scroll-4')
  ];
  
  elements.forEach(element => {
    if (element) {
      element.style.transform = 'translateY(0)';
    }
  });
}

// Define the effect functions
function scroll1Effect() {
  const item = document.querySelector('.scroll-1');
  if (item) {
    const scrollTop = window.scrollY;
    item.style.transform = `translateY(-${scrollTop * 0.2}px)`;
  }
}

function scroll2Effect() {
  const item = document.querySelector('.scroll-2');
  if (item) {
    const scrollTop = window.scrollY;
    item.style.transform = `translateY(${-scrollTop * 0.05}px)`;
  }
}

function scroll3Effect() {
  const item = document.querySelector('.scroll-3');
  if (item) {
    const scrollTop = window.scrollY;
    item.style.transform = `translateY(-${scrollTop * 0.15}px)`;
  }
}

function scroll4Effect() {
  const item = document.querySelector('.scroll-4');
  if (item) {
    const scrollTop = window.scrollY;
    item.style.transform = `translateY(-${scrollTop * 0.3}px)`;
  }
}

// Toggle menu function
function toggleMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  const hamburger = document.querySelector('.hamburger');
  
  // Toggle active class on mobile menu
  mobileMenu.classList.toggle('nav-active');
  mobileMenu.classList.toggle('nav-hidden');
  
  // Toggle active class on hamburger
  hamburger.classList.toggle('is-active');
}

// Add this to your DOMContentLoaded event handler
document.addEventListener('DOMContentLoaded', () => {
  // ... your existing code ...
  
  // Enhanced hamburger menu functionality
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-menu a');

  if (hamburger && mobileMenu) {
    // Replace the previous click handler with the toggleMenu function
    hamburger.addEventListener('click', toggleMenu);
    
    // Add click events to all mobile menu links
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        // Only close if menu is open
        if (mobileMenu.classList.contains('nav-active')) {
          toggleMenu();
        }
      });
    });
  }
});