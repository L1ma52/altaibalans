document.addEventListener('DOMContentLoaded', function () {
    const cookieBanner = document.getElementById('cookie-banner');
    const consentButton = document.querySelector('.btn-cookie-consent');

    if (!cookieBanner || !consentButton) {
        return;
    }

    if (!localStorage.getItem('cookieConsent')) {
        cookieBanner.style.display = 'block';
    }

    consentButton.addEventListener('click', function () {
        localStorage.setItem('cookieConsent', 'true');
        cookieBanner.style.display = 'none';
    });
});
