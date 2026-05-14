// كود الموبايل المكتوب مسبقاً (لا نلمسه)
$('.iconMain').click(()=>{
    $('.main').toggleClass('active')    
})

// --- إضافة نظام اللغة الجديد (بدون تغيير القديم) ---

// 1. تحديد اللغة عند تحميل الصفحة
let currentLang = localStorage.getItem('lang') || 'en';

function applyLanguage(lang) {
    // ترجمة كل العناصر التي تحتوي على data-en و data-ar
    $('[data-en]').each(function() {
        const translation = $(this).attr(`data-${lang}`);
        if (translation) {
            $(this).text(translation);
        }
    });
}

// 2. تشغيل الترجمة فور تحميل الملف
$(document).ready(function() {
    applyLanguage(currentLang);
});

// 3. كود زر تبديل اللغة (للمكتب والموبايل)
$(document).on('click', '#lang-switch, #lang-switch-mobile', function() {
    // تبديل القيمة
    currentLang = (currentLang === 'en') ? 'ar' : 'en';
    
    // حفظ القيمة في المتصفح
    localStorage.setItem('lang', currentLang);
    
    // تطبيق الترجمة على العناصر الثابتة
    applyLanguage(currentLang);

    // إذا كنا في صفحة vision، سنحتاج لإعادة تشغيل الـ Render (اختياري لو الكود في vision.js موجود)
    if (typeof renderVision === "function") {
        renderVision();
    }
});