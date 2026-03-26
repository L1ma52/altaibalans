$(function () {
    if (window.location.search) {
        const cleanUrl = window.location.href.split('?')[0];
        window.history.replaceState({}, '', cleanUrl);
    }

    $('body').on('click', '.burger', function () {
    const header = $(this).closest('.header');
    header.toggleClass('expand');

    if (header.hasClass('expand')) {
        $('body').addClass('lock');
    } else {
        $('body').removeClass('lock');
    }
});

$('body').on('click', '.menu a', function () {
    $('.header').removeClass('expand');
    $('body').removeClass('lock');
});

    $('body').on('click', '.partners a', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

    const partners = document.querySelector('.partners');
    if (partners) {
        partners.addEventListener('wheel', (event) => {
            const canScrollLeft = event.deltaY < 0 && partners.scrollLeft > 0;
            const canScrollRight = event.deltaY > 0 && partners.scrollLeft < partners.scrollWidth - partners.clientWidth;

            if (canScrollLeft || canScrollRight) {
                event.preventDefault();
                partners.scrollLeft += event.deltaY;
            }
        }, { passive: false });
    }

    $('body').on('click', 'a[href^="#"]', function (e) {
        const href = $(this).attr('href');
        if (href && href.length > 1 && $(href).length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(href).offset().top - 70
            }, 500);
            $('.header').removeClass('expand');
        }
    });

    document.addEventListener('keyup', function (e) {
        if (e.key === 'Escape') {
            $('.header').removeClass('expand');
        }
    });

    const copyEmailLink = document.getElementById('copyEmail');
    const copyToast = document.getElementById('copyToast');

    if (copyEmailLink && copyToast && navigator.clipboard) {
        copyEmailLink.addEventListener('click', function () {
            navigator.clipboard.writeText('altaibalans@yandex.ru').then(() => {
                copyToast.classList.add('show');
                setTimeout(() => copyToast.classList.remove('show'), 2000);
            }).catch(() => {
                // if clipboard API is blocked, keep normal mailto behavior
            });
        });
    }

    document.querySelectorAll('.route-2gis').forEach(function (link) {
        link.addEventListener('click', function () {
            const fallback = this.getAttribute('data-fallback');
            if (!fallback) return;

            setTimeout(function () {
                window.open(fallback, '_blank');
            }, 1200);
        });
    });
});
