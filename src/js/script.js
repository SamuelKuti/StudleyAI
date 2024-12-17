document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item .faq-question');
    faqItems.forEach((question) => {
        question.addEventListener('click', () => {
            const parent = question.closest('.faq-item');
            document.querySelectorAll('.faq-item.open').forEach(item => {
                if (item !== parent) {
                    item.classList.remove('open');
                }
            });
            parent.classList.toggle('open');
        });
    });

    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const body = document.body;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !hamburger.contains(e.target) && nav.classList.contains('active')) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // Close menu when clicking nav links
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            body.style.overflow = '';
        });
    });
});
