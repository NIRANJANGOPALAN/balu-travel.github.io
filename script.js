// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerOffset = 80; // Adjust this value based on your header height
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close menu on mobile after clicking a link
            if (window.innerWidth <= 768) {
                menu.classList.remove('show');
            }
        }
    });
});

// Toggle menu for mobile view
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});


// Auto-scroll review carousel
const reviewCarousel = document.querySelector('.review-carousel');
let scrollAmount = 0;
const scrollStep = 1;
const scrollDelay = 30;

function autoScroll() {
    reviewCarousel.scrollLeft += scrollStep;
    scrollAmount += scrollStep;

    if(scrollAmount >= reviewCarousel.scrollWidth / 2) {
        scrollAmount = 0;
        reviewCarousel.scrollLeft = 0;
    }

    setTimeout(autoScroll, scrollDelay);
}

autoScroll();

