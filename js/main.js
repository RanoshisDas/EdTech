document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        header.style.transform = (scrollTop > lastScrollTop && scrollTop > 100) ? 'translateY(-100%)' : 'translateY(0)';
        lastScrollTop = scrollTop;
    });

    header.style.transition = 'transform 0.3s ease-in-out';



    // Hover effects
    document.querySelectorAll('.cta-button, .submit-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px) scale(1.05)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Typing effect
    const heroTitle = document.querySelector('.hero h1');
    const titleText = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;
    const typeWriter = () => {
        if (i < titleText.length) {
            heroTitle.textContent += titleText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    setTimeout(typeWriter, 1000);


    // Add keyboard navigation style
    const style = document.createElement('style');
    style.textContent = `
        .keyboard-navigation *:focus {
            outline: 2px solid #ff6b6b !important;
            outline-offset: 2px !important;
        }
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(255, 107, 107, 0.5);
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 107, 107, 0.7);
        }
    `;
    document.head.appendChild(style);


    const footer = document.createElement('footer');
    footer.innerHTML = `
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h3>EduTech Pro</h3>
                <p>Transforming education through innovative technology and expert instruction.</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <p><a href="index.html">Home</a></p>
                <p><a href="about.html">About</a></p>
                <p><a href="services.html">Services</a></p>
                <p><a href="contact.html">Contact</a></p>
            </div>
            <div class="footer-section">
                <h3>Contact Info</h3>
                <p>&#128231; ranoshisdas@gmail.com</p>
                <p>&#128222; +91 6294209813</p>
                <p>&#128205; Barasat, North 24 Paragana, IN 700124</p>
            </div>
        </div>
        <p>&copy; 2025 EduTech Pro. All rights reserved.</p>
    </div>
`;

// Append the footer to the body
    document.body.appendChild(footer);

});
