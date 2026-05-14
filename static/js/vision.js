let vision = document.querySelector(".vision");
let videKing = document.querySelector(".videKing");
let clo = document.querySelector(".clo");

// مصفوفة البيانات مع دعم اللغتين
let cartVision = [
  {
    Statue: "static/img/TUTANKHAMUN.jpeg",
    NameStatue_en: "Tutankhamun",
    NameStatue_ar: "توت عنخ آمون",
    EraStatue_en: "New Kingdom – 18th Dynasty (14th Century BC)",
    EraStatue_ar: "الدولة الحديثة - الأسرة الثامنة عشر (القرن 14 ق.م)",
    dicStatue_en:
      "Step beyond the veil of time and witness the eternal glory of the Boy King. Hidden for three millennia in the silent depths of the Valley of the Kings, Tutankhamun has returned to claim his place in the modern world...",
    dicStatue_ar:
      "اخطُ وراء حجاب الزمن واشهد المجد الأبدي للملك الصبي. مخبأ لثلاثة آلاف عام في الأعماق الصامتة لوادي الملوك، عاد توت عنخ آمون لليطالب بمكانه في العالم الحديث...",
  },
  {
    Statue: "static/img/Anubis.jpeg",
    NameStatue_en: "ANUBIS",
    NameStatue_ar: "أنوبيس",
    EraStatue_en:
      "Old Kingdom – Predynastic to Roman Period (3100 BC – 4th Century AD)",
    EraStatue_ar:
      "الدولة القديمة - من عصر ما قبل الأسرات إلى العصر الروماني (3100 ق.م - القرن الرابع الميلادي)",
    dicStatue_en:
      "The jackal-headed god of mummification and the afterlife. Anubis guided the souls of the dead to the underworld and weighed their hearts against the feather of Maat. He was one of the most important deities in ancient Egyptian funerary beliefs.",
    dicStatue_ar:
      "إله التحنيط والعالم الآخر ذو رأس ابن آوى. قام أنوبيس بتوجيه أرواح الموتى إلى العالم السفلي ووزن قلوبهم مقابل ريشة ماعت. لقد كان واحداً من أهم الآلهة في المعتقدات الجنائزية المصرية القديمة.",
  },
  {
    Statue: "static/img/HATSHEPSUT.jpeg",
    NameStatue_en: "HATSHEPSUT",
    NameStatue_ar: "حتشبسوت",
    EraStatue_en: "New Kingdom – 18th Dynasty (15th Century BC)",
    EraStatue_ar: "الدولة الحديثة – الأسرة 18 (القرن 15 ق.م)",
    dicStatue_en:
      "One of the few female pharaohs of ancient Egypt. Hatshepsut ruled as a full pharaoh for over 20 years and was known for her extensive building projects, including her magnificent mortuary temple at Deir el-Bahari, and for launching successful trade expeditions, most famously to the land of Punt.",
    dicStatue_ar:
      "من أشهر الملكات اللاتي حكمن مصر كفرعون كامل. حكمت حتشبسوت لأكثر من 20 عاماً واشتهرت بمشاريعها المعمارية الضخمة، وأهمها معبدها الجنائزي الرائع في الدير البحري، وبرحلاتها التجارية الناجحة، وأشهرها رحلتها إلى بلاد بونت.",
  },
  {
    Statue: "static/img/NEFERTITI.jpeg",
    NameStatue_en: "NEFERTITI",
    NameStatue_ar: "نفرتيتي",
    EraStatue_en: "New Kingdom – 18th Dynasty (14th Century BC)",
    EraStatue_ar: "الدولة الحديثة – الأسرة 18 (القرن 14 ق.م)",
    dicStatue_en:
      "Great Royal Wife of Pharaoh Akhenaten. Nefertiti was one of the most powerful and mysterious queens of ancient Egypt. Her iconic bust discovered in 1912 at Amarna remains one of the most recognized symbols of beauty and art from the pharaonic era.",
    dicStatue_ar:
      "الزوجة الملكية العظيمة للفرعون أخناتون. كانت نفرتيتي واحدة من أقوى وأكثر ملكات مصر القديمة غموضاً. ولا يزال تمثالها النصفي الشهير الذي اكتُشف عام 1912 في تل العمارنة أحد أشهر رموز الجمال والفن في العصر الفرعوني.",
  },
  {
    Statue: "static/img/KHAFRE.jpeg",
    NameStatue_en: "KHAFRE",
    NameStatue_ar: "خفرع",
    EraStatue_en: "Old Kingdom – 4th Dynasty (26th Century BC)",
    EraStatue_ar: "الدولة القديمة - الأسرة الرابعة (القرن 26 ق.م)",
    dicStatue_en:
      "Pharaoh of the Old Kingdom who built the second-largest pyramid at Giza and is widely believed to have commissioned the Great Sphinx. He ruled during Egypt’s golden age of pyramid building. His name means “He Appears Like Ra”.",
    dicStatue_ar:
      'فرعون من الدولة القديمة بنى ثاني أكبر هرم في الجيزة، ويُعتقد على نطاق واسع أنه هو من أمر بنحت تمثال أبو الهول العظيم. حكم خلال العصر الذهبي لبناء الأهرامات في مصر. اسمه يعني "هو يظهر مثل رع".',
  },
  {
    Statue: "static/img/SEKHMET.jpeg",
    NameStatue_en: "SEKHMET",
    NameStatue_ar: "سخمت",
    EraStatue_en:
      "Old Kingdom – Predynastic to Roman Period (3100 BC – 4th Century AD)",
    EraStatue_ar:
      "الدولة القديمة – من عصر ما قبل الأسرات حتى العصر الروماني (3100 ق.م – القرن 4 م)",
    dicStatue_en:
      "The lion-headed goddess of war, destruction, and healing. Sekhmet was seen as the fierce aspect of the goddess Hathor and was believed to have been sent by Ra to punish humanity. She was also worshipped as a powerful healer who could ward off disease and plagues.",
    dicStatue_ar:
      "الإلهة برأس اللبؤة، إلهة الحرب والدمار والشفاء. كانت تُعتبر الوجه الغاضب للإلهة حتحور، ويُعتقد أن رع أرسلها لمعاقبة البشر. كما كانت تُعبد كإلهة شفاء قوية قادرة على درء الأمراض والأوبئة.",
  },
  {
    Statue: "static/img/CLEOPATRA.jpeg",
    NameStatue_en: "CLEOPATRA",
    NameStatue_ar: "كليوباترا",
    EraStatue_en: "Ptolemaic Period – 1st Century BC",
    EraStatue_ar: "العصر البطلمي – القرن 1 ق.م",
    dicStatue_en:
      "The last active ruler of the Ptolemaic Kingdom of Egypt. Cleopatra VII was known for her intelligence, political acumen, and relationships with Julius Caesar and Mark Antony. Her reign marked the end of the pharaonic era before Egypt became a Roman province in 30 BC.",
    dicStatue_ar:
      "آخر حكام الأسرة البطلمية في مصر. اشتهرت كليوباترا السابعة بذكائها الحاد ومهارتها السياسية، وبعلاقاتها مع يوليوس قيصر ومارك أنطوني. انتهى حكمها بضم مصر إلى الإمبراطورية الرومانية عام 30 ق.م، وبه انتهى العصر الفرعوني.",
  },
  // يمكنك إضافة باقي العناصر هنا بنفس النمط
];

function renderVision() {
  // جلب اللغة الحالية من التخزين المحلي
  let lang = localStorage.getItem("lang") || "en";
  let res = "";

  cartVision.forEach((e) => {
    // التأكد من اختيار الحقل الصحيح بناءً على اللغة
    let name = lang === "ar" ? e.NameStatue_ar : e.NameStatue_en;
    let era = lang === "ar" ? e.EraStatue_ar : e.EraStatue_en;
    let dic = lang === "ar" ? e.dicStatue_ar : e.dicStatue_en; // تأكد إن دي ar ودي en

    res += `
            <div class="container my-5 position-relative p-0 col-10 card-item flex-column d-flex justify-content-center align-items-center">
                <span class="position-absolute rounded-5 rounded-start-0 top-50 z-3 translate-middle"></span>
                <span class="position-absolute rounded-5 rounded-end-0 top-50 z-3 translate-middle"></span>
                <div class="card p-0 m-0 d-flex justify-content-between flex-row-reverse" style="height: 450px;">
                    <div class="card-img position-relative w-25 h-100">
                        <span class="position-absolute z-3 rounded-5 rounded-top-0 translate-middle"></span>
                        <span class="position-absolute z-3 rounded-5 rounded-bottom-0 translate-middle"></span>
                        <img  src="${e.Statue}" style="object-fit: cover; width:100%; height:100%;" alt="">
                    </div>
                    <div class="body-card w-75 position-relative">
                        <b class="rotet display-1 w-100 text-center d-flex justify-content-center py-5 text-uppercase">${name}</b>
                        <p class="hidden text-center fs-5">${era}</p>
                        <p class="hidden px-5 fw-bold">${dic}</p>
                        <span class="hidden position-absolute top-50 start-50 translate-middle w-100 h-100 d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-circle-play"></i>
                        </span>
                    </div>
                </div>
            </div>
        `;
  });

  vision.innerHTML = res;
  attachCardEvents();
}

// الرندر الأول عند تحميل الصفحة
$(document).ready(function () {
  renderVision();
});

// هذا الجزء هو "المفتاح" لحل المشكلة:
// عند الضغط على زر اللغة، نعيد تشغيل الـ render باللغة الجديدة
$(document).on("click", "#lang-switch, #lang-switch-mobile", function () {
  // ننتظر 50 ملي ثانية لضمان أن ملف commen.js قام بتحديث localStorage أولاً
  setTimeout(renderVision, 50);
});

/* =========================
   Video Modal Control
========================= */
function attachCardEvents() {
  const cards = document.querySelectorAll(".card-item");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      videKing.classList.add("hidden");
    });
  });
}

if (clo) {
  clo.addEventListener("click", () => {
    videKing.classList.remove("hidden");
  });
}

if (videKing) {
  videKing.addEventListener("click", (e) => {
    if (e.target === videKing) {
      videKing.classList.remove("hidden");
    }
  });
}
