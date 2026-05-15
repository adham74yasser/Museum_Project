// --- Language System Start ---
let currentLang = localStorage.getItem('lang') || 'en';

function applyLanguage(lang) {
    // تحديث النصوص فقط دون تغيير اتجاه الصفحة (Keep LTR)
    $('[data-en]').each(function() {
        const translation = $(this).attr(`data-${lang}`);
        if (translation) {
            $(this).text(translation);
        }
    });

    // تحديث الـ Typewriter للهيدر
    clearTimeout(aboutTimer);
    updateHeaderTypewriter(lang);
}

$(document).on('click', '#lang-switch', function() {
    currentLang = (currentLang === 'en') ? 'ar' : 'en';
    localStorage.setItem('lang', currentLang);
    applyLanguage(currentLang);
});

function updateHeaderTypewriter(lang) {
    let title = (lang === 'en') ? [
        "Silence No Longer Defines History",
        "For every word spoken is a spark of light",
        "That burns through the darkness of the past",
        "And carves our path toward a brighter tomorrow"
    ] : [
        "الصمت لم يعد يحدد التاريخ",
        "لكل كلمة تُنطق هي شرارة من نور",
        "تحرق ظلام الماضي",
        "وتنحت طريقنا نحو غدٍ أكثر إشراقاً"
    ];
    startTypewriter(".titleHeader h1", title, 200, 100, 3000);
}
// --- Language System End ---

// start header
let aboutTimer;
function startTypewriter(selector, wordsList, writeSpeed = 200, deleteSpeed = 100, waitSpeed = 3000) {
    let index = 0, res = 0, delet = false, speed = 200;
    const target = $(selector);
    function type() {
        if (!target.length) return;
        const currentWord = wordsList[index];
        if (delet) {
            target.text(currentWord.substring(0, res - 1));
            res--;
            speed = deleteSpeed;
        } else {
            target.text(currentWord.substring(0, res + 1));
            res++;
            speed = writeSpeed;
        }
        if (!delet && res === currentWord.length) {
            delet = true;
            speed = waitSpeed;
        } else if (delet && res === 0) {
            delet = false;
            index = (index + 1) % wordsList.length;
            speed = 500;
        }
        aboutTimer = setTimeout(type, speed);
    }
    type();
}

$(document).ready(function() {
    applyLanguage(currentLang); // تطبيق اللغة المحفوظة فوراً
});

// start about hover
$('.about').mouseenter(() => {
    $('.img').css({ transform: 'rotateX(40deg) rotateZ(-1deg)' });
    $('.imgRotate, .imgRotate2, .lastImg, .cardAbout span').css({ opacity: '1' });
    let words = (currentLang === 'en') ? ["I am awake", "Discover secrets"] : ["أنا مستيقظ", "اكتشف الأسرار"];
    startTypewriter(".cardAbout span", words, 100, 50, 1000);
});

$('.about').mouseleave(() => {
    clearTimeout(aboutTimer);
    $('.img').css({ transform: 'rotateX(0deg) rotateZ(0deg)' });
    $('.imgRotate, .imgRotate2, .lastImg, .cardAbout span').css({ opacity: '0' });
    $('.cardAbout span').empty();
});

// start data count
let nums = document.querySelectorAll(".num");
window.onscroll = function() {
    nums.forEach((num) => {
        if (isInViewport(num) && !num.classList.contains("started")) {
            startCount(num);
            num.classList.add("started");
        }
    });
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) clearInterval(count);
    }, 10);
}

function isInViewport(el) {
    let rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight;
}

// start folio slider (Always LTR)
$(document).ready(function() {
    $('.container').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        rtl: false // الحفاظ على اتجاه السلايدر ثابت
    });
});

// Video Interaction
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.play(); else entry.target.pause();
    });
}, { threshold: 0.5 });
document.querySelectorAll('video').forEach(v => observer.observe(v));

// Services Popups
$('.allpopup').mouseover(function() {
    $(this).find('.popup').css({ opacity: '1', visibility: "visible" });
}).mouseleave(function() {
    $(this).find('.popup').css({ opacity: '0', visibility: "hidden" });
});


new WOW().init();