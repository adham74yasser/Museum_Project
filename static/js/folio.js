let CardData = [
    {
        img: "static/img/AkhenatenCrad.png",
        name_en: "Akhenaten",
        name_ar: "أخناتون",
        dic_en: "I have returned from the darkness of centuries to tell you the story of a throne I claimed as a child, and a world I reshaped with my own hands.",
        dic_ar: "لقد عدت من ظلمات القرون لأحكي لكم قصة عرش طالبت به عندما كنت طفلاً، وعالم أعدت صياغته بيدي."
    },
    {
        img: "static/img/Amenhotep-IIICard.png",
        name_en: "Amenhotep III",
        name_ar: "أمنحتب الثالث",
        dic_en: "The magnificent pharaoh who ruled at the peak of Egypt's power. My reign was an era of unprecedented prosperity and artistic splendor.",
        dic_ar: "الفرعون العظيم الذي حكم في ذروة قوة مصر. كان عهدي حقبة من الرخاء غير المسبوق والروعة الفنية."
    },
    {
        img: "static/img/HatshepsutCard.png",
        name_en: "Hatshepsut",
        name_ar: "حتشبسوت",
        dic_en: "I am the woman who became King. I built monuments that touched the sky and opened trade routes to the mysterious Land of Punt.",
        dic_ar: "أنا المرأة التي أصبحت ملكاً. بنيت صروحاً لامست السماء وفتحت طرقاً تجارية إلى بلاد بونت الغامضة."
    },
    {
        img: "static/img/KhafreCard.png",
        name_en: "Khafre",
        name_ar: "خفرع",
        dic_en: "Builder of the second great pyramid of Giza and the face of the Great Sphinx. My legacy is carved in eternal stone.",
        dic_ar: "باني الهرم الثاني في الجيزة ووجه تمثال أبي الهول العظيم. إرثي محفور في الحجر الأبدي."
    },
    {
        img: "static/img/KhufuCard.png",
        name_en: "Khufu",
        name_ar: "خوفو",
        dic_en: "The visionary behind the Great Pyramid, the only remaining wonder of the ancient world. A testament to human brilliance and power.",
        dic_ar: "صاحب الرؤية وراء الهرم الأكبر، العجيبة الوحيدة المتبقية من العالم القديم. شهادة على العبقرية البشرية والقوة."
    },
    {
        img: "static/img/MerneptahCard.png",
        name_en: "Merneptah",
        name_ar: "مرنبطاح",
        dic_en: "Son of Ramesses the Great, I defended the borders of Egypt against all invaders to maintain the peace of my father's empire.",
        dic_ar: "ابن رمسيس العظيم، دافعت عن حدود مصر ضد جميع الغزاة للحفاظ على سلام إمبراطورية والدي."
    },
    {
        img: "static/img/Psusennes ICard.png",
        name_en: "Psusennes I",
        name_ar: "بسوسنس الأول",
        dic_en: "Known as the Silver Pharaoh, my tomb survived untouched with treasures that rivaled the sun itself.",
        dic_ar: "المعروف بالفرعون الفضي، نجا قبري دون أن يمسه أحد بكنوز نافست الشمس نفسها."
    },
    {
        img: "static/img/Ramesses IICard.png",
        name_en: "Ramesses II",
        name_ar: "رمسيس الثاني",
        dic_en: "The King of Kings. My name is etched on every temple and my power echoed through the centuries as the greatest pharaoh.",
        dic_ar: "ملك الملوك. اسمي محفور على كل معبد وقوتي ترددت أصداؤها عبر القرون كأعظم فرعون.",
        url: "RamessesII.html"
    },
    {
        img: "static/img/SekhmetCard.png",
        name_en: "Sekhmet",
        name_ar: "سخمت",
        dic_en: "The lioness goddess of war and healing. My breath created the desert, and my gaze protected the pharaohs from their enemies.",
        dic_ar: "الإلهة اللبؤة للحرب والشفاء. أنفاسي خلقت الصحراء، ونظرتي حمت الفراعنة من أعدائهم."
    },
    {
        img: "static/img/Senusret ICard.png",
        name_en: "Senusret I",
        name_ar: "سنوسرت الأول",
        dic_en: "A king of stability and wisdom. I established the foundations of the Middle Kingdom and built the White Chapel at Karnak.",
        dic_ar: "ملك الاستقرار والحكمة. وضعت أسس الدولة الوسطى وبنيت المقصورة البيضاء في الكرنك."
    },
    {
        img: "static/img/TutankhamunCard.png",
        name_en: "Tutankhamun",
        name_ar: "توت عنخ آمون",
        dic_en: "The boy king whose name became immortal. I restored the old gods and left behind a golden treasure that stunned the world.",
        dic_ar: "الملك الصبي الذي أصبح اسمه خالداً. استعدت الآلهة القديمة وتركت وراءي كنزاً ذهبياً أذهل العالم."
    },
    {
        img: "static/img/Senusret-IIICard.png",
        name_en: "Senusret III",
        name_ar: "سنوسرت الثالث",
        dic_en: "The warrior pharaoh who extended Egypt's reach to the south. My stern statues reflect the weight of the crown and my duty to the land.",
        dic_ar: "الفرعون المحارب الذي مد نفوذ مصر إلى الجنوب. تماثيلي الصارمة تعكس ثقل التاج وواجبي تجاه الأرض."
    }
];

function renderFolio() {
    const lang = localStorage.getItem('lang') || 'en';
    const container = $('#folio-container');
    
    if (container.length === 0) return; // حماية في حالة عدم وجود الحاوية

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
                    <p class="py-2 text-uppercase w-100">${dic}</p>
                    <a class="btn ps-0" href="${e.url || '#'}" >${btnText}</a>
                </div>
            </div>`
        );
    });
}

$(document).ready(function() {
    renderFolio();
});

$(document).on('click', '#lang-switch', function() {
    setTimeout(renderFolio, 50);
});