document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinksContainer = document.querySelector('.nav-links');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            navLinks.forEach(nl => nl.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(targetPage).classList.add('active');
            navLinksContainer.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    mobileMenu.addEventListener('click', function() {
        navLinksContainer.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            navLinksContainer.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
});
