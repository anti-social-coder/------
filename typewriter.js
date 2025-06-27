document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                // Unobserve after animation starts to prevent replay on scroll
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Adjust this to start the animation slightly before the element is fully in view
    });

    // Observe all elements with the typed-out class
    document.querySelectorAll('.typed-out').forEach((element) => {
        observer.observe(element);
    });
});
