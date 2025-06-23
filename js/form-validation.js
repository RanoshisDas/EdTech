document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validatePhone(phone) {
        return /^[\+]?[1-9][\d]{0,15}$/.test(phone.replace(/\s/g, ''));
    }

    function showError(input, errorId, message) {
        const errorElement = document.getElementById(errorId);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        input.style.borderColor = '#ff6b6b';
    }

    function hideError(input, errorId) {
        const errorElement = document.getElementById(errorId);
        errorElement.style.display = 'none';
        input.style.borderColor = '';
    }

    function validateForm() {
        let isValid = true;

        if (nameInput.value.trim().length < 2) {
            showError(nameInput, 'nameError', 'Name must be at least 2 characters');
            isValid = false;
        } else {
            hideError(nameInput, 'nameError');
        }

        if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'emailError', 'Please enter a valid email address');
            isValid = false;
        } else {
            hideError(emailInput, 'emailError');
        }

        if (phoneInput.value && !validatePhone(phoneInput.value)) {
            showError(phoneInput, 'phoneError', 'Please enter a valid phone number');
            isValid = false;
        } else {
            hideError(phoneInput, 'phoneError');
        }

        if (messageInput.value.trim().length < 10) {
            showError(messageInput, 'messageError', 'Message must be at least 10 characters');
            isValid = false;
        } else {
            hideError(messageInput, 'messageError');
        }

        return isValid;
    }

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            const submitBtn = document.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert("Thank you for your message! We'll get back to you within 24 hours.");
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }
    });

    // Real-time validation
    nameInput.addEventListener('blur', () => {
        if (nameInput.value.trim().length < 2) showError(nameInput, 'nameError', 'Name must be at least 2 characters');
        else hideError(nameInput, 'nameError');
    });

    emailInput.addEventListener('blur', () => {
        if (!validateEmail(emailInput.value)) showError(emailInput, 'emailError', 'Invalid email');
        else hideError(emailInput, 'emailError');
    });

    phoneInput.addEventListener('blur', () => {
        if (phoneInput.value && !validatePhone(phoneInput.value)) showError(phoneInput, 'phoneError', 'Invalid phone');
        else hideError(phoneInput, 'phoneError');
    });

    messageInput.addEventListener('blur', () => {
        if (messageInput.value.trim().length < 10) showError(messageInput, 'messageError', 'Min 10 characters');
        else hideError(messageInput, 'messageError');
    });
});
