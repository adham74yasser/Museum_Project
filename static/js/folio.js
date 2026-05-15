let CardData = [
    {
        id: "akhenaten",
        img: "static/img/اخناتون.png",
        name_en: "Akhenaten",
        name_ar: "أخناتون",
        dic_en: "I have returned from the darkness of centuries to tell you the story of a throne I claimed as a child, and a world I reshaped with my own hands.",
        dic_ar: "لقد عدت من ظلمات القرون لأحكي لكم قصة عرش طالبت به عندما كنت طفلاً، وعالم أعدت صياغته بيدي."
    },
    {
        id: "amenhotep_iii",
        img: "static/img/Amenhotep_-removebg-preview.png",
        name_en: "Amenhotep III",
        name_ar: "أمنحتب الثالث",
        dic_en: "The magnificent pharaoh who ruled at the peak of Egypt's power. My reign was an era of unprecedented prosperity and artistic splendor.",
        dic_ar: "الفرعون العظيم الذي حكم في ذروة قوة مصر. كان عهدي حقبة من الرخاء غير المسبوق والروعة الفنية."
    },
    {
        id: "hatshepsut",
        img: "static/img/Gemini_Generated_Image_c7jepxc7jepxc7je-removebg-preview.png",
        name_en: "Hatshepsut",
        name_ar: "حتشبسوت",
        dic_en: "I am the woman who became King. I built monuments that touched the sky and opened trade routes to the mysterious Land of Punt.",
        dic_ar: "أنا المرأة التي أصبحت ملكاً. بنيت صروحاً لامست السماء وفتحت طرقاً تجارية إلى بلاد بونت الغامضة."
    },
    {
        id: "khafre",
        img: "static/img/خفرع.png",
        name_en: "Khafre",
        name_ar: "خفرع",
        dic_en: "Builder of the second great pyramid of Giza and the face of the Great Sphinx. My legacy is carved in eternal stone.",
        dic_ar: "باني الهرم الثاني في الجيزة ووجه تمثال أبي الهول العظيم. إرثي محفور في الحجر الأبدي."
    },
    {
        id: "merneptah",
        img: "static/img/Merenptah_-removebg-preview.png",
        name_en: "Merneptah",
        name_ar: "مرنبطاح",
        dic_en: "Son of Ramesses the Great, I defended the borders of Egypt against all invaders to maintain the peace of my father's empire.",
        dic_ar: "ابن رمسيس العظيم، دافعت عن حدود مصر ضد جميع الغزاة للحفاظ على سلام إمبراطورية والدي."
    },
    {
        id: "ramesses_ii",
        img: "static/img/رمسيس.png",
        name_en: "Ramesses II",
        name_ar: "رمسيس الثاني",
        dic_en: "The King of Kings. My name is etched on every temple and my power echoed through the centuries as the greatest pharaoh.",
        dic_ar: "ملك الملوك. اسمي محفور على كل معبد وقوتي ترددت أصداؤها عبر القرون كأعظم فرعون."
    },
    {
        id: "sekhmet",
        img: "static/img/سخمت.png",
        name_en: "Sekhmet",
        name_ar: "سخمت",
        dic_en: "The lioness goddess of war and healing. My breath created the desert, and my gaze protected the pharaohs from their enemies.",
        dic_ar: "الإلهة اللبؤة للحرب والشفاء. أنفاسي خلقت الصحراء، ونظرتي حمت الفراعنة من أعدائهم."
    },
    {
        id: "senusret_i",
        img: "static/img/Senwosret_I-removebg-preview.png",
        name_en: "Senusret I",
        name_ar: "سنوسرت الأول",
        dic_en: "A king of stability and wisdom. I established the foundations of the Middle Kingdom and built the White Chapel at Karnak.",
        dic_ar: "ملك الاستقرار والحكمة. وضعت أسس الدولة الوسطى وبنيت المقصورة البيضاء في الكرنك."
    },
    {
        id: "tutankhamun",
        img: "static/img/توت.png",
        name_en: "Tutankhamun",
        name_ar: "توت عنخ آمون",
        dic_en: "The boy king whose name became immortal. I restored the old gods and left behind a golden treasure that stunned the world.",
        dic_ar: "الملك الصبي الذي أصبح اسمه خالداً. استعدت الآلهة القديمة وتركت وراءي كنزاً ذهبياً أذهل العالم."
    },
    {
        id: "menkaure",
        img: "static/img/Menkaure-removebg-preview.png",
        name_en: "Menkaure",
        name_ar: "منكاورع",
        dic_en: "The builder of the smallest pyramid at Giza, but my legacy is no less grand. I am the pharaoh who balanced strength with grace.",
        dic_ar: "باني الهرم الأصغر في الجيزة، لكن إرثي ليس أقل عظمة. أنا الفرعون الذي جمع بين القوة والنعمة."
    }
];

function renderFolio() {
    const lang = localStorage.getItem('lang') || 'en';
    const container = $('#folio-container');
    
    if (container.length === 0) return; 
    container.empty(); 

    CardData.forEach((e, index) => {
        let isEven = index % 2 === 0;
        let currentClass = isEven ? "cardFolio" : "cardFolioRight";
        
        let name = lang === 'en' ? e.name_en : e.name_ar;
        let dic = lang === 'en' ? e.dic_en : e.dic_ar;
        let btnText = lang === 'en' ? "Reveal My Secrets" : "اكتشف أسراري";

        container.append(
            `<div class="${currentClass} ${isEven ? '' : 'flex-row-reverse'} d-flex mb-5">
                <div class="card-img">
                    <img src="${e.img}" alt="${name}" class="img-fluid">
                </div>
                <div class="body-card flex-column w-50 px-4">
                    <b class="fs-1">${name}</b>
                    <p class="textmu py-2 text-uppercase w-100">${dic}</p>
                    <a class="textmu btn ps-0 king-link" href="details.html" data-id="${e.id}">${btnText}</a>
                </div>
            </div>`
        );
    });
}

// توحيد كود الـ Click تماماً لتخزين الـ ID الصحيح فوراً
$(document).on('click', '.king-link', function(e) {
    let idToSave = $(this).data('id');
    localStorage.setItem('selectedKingId', idToSave);
});

$(document).ready(function() {
    renderFolio();
});

$(document).on('click', '#lang-switch, #lang-switch-mobile', function() {
    setTimeout(renderFolio, 50);
});