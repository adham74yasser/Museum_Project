const MODEL_URL = "./my_model/"; 
let model, webcam, maxPredictions;
let isVideoPlaying = false; 

// تحميل الموديل عند البداية
async function init() {
    try {
        model = await tmImage.load(MODEL_URL + "model.json", MODEL_URL + "metadata.json");
        maxPredictions = model.getTotalClasses();
        updateLabel("✅ الموديل جاهز للاستخدام", "#d4af37");
    } catch (e) {
        updateLabel("❌ خطأ في تحميل الموديل", "#ff4d4d");
    }
}

// تشغيل الكاميرا
async function startWebcam() {
    resetUI();
    updateLabel("جاري فتح الكاميرا...", "#d4af37");
    try {
        webcam = new tmImage.Webcam(224, 224, true); 
        await webcam.setup(); 
        await webcam.play();
        document.getElementById("webcam-container").innerHTML = "";
        document.getElementById("webcam-container").appendChild(webcam.canvas);
        document.getElementById("webcam-container").style.display = "block";
        window.requestAnimationFrame(loop);
    } catch (err) {
        updateLabel("❌ يرجى السماح بوصول الكاميرا", "#ff4d4d");
    }
}

async function loop() {
    if (webcam && !isVideoPlaying) {
        webcam.update();
        await predict(webcam.canvas);
        window.requestAnimationFrame(loop);
    }
}

// معالجة رفع الصور
async function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    resetUI();
    const imgElement = document.getElementById("uploaded-image-preview");
    const reader = new FileReader();
    reader.onload = function(e) {
        imgElement.src = e.target.result;
        imgElement.style.display = "block";
        imgElement.onload = async () => {
            updateLabel("جاري التحليل...", "#d4af37");
            await predict(imgElement);
        };
    };
    reader.readAsDataURL(file);
}

// دالة التنبؤ
async function predict(source) {
    const prediction = await model.predict(source);
    let found = false;
    for (let i = 0; i < maxPredictions; i++) {
        if (prediction[i].probability > 0.99) {
            showResult(prediction[i].className);
            found = true;
            break;
        }
    }
    if (!found && !isVideoPlaying) {
        updateLabel("🔍 وجه الكاميرا بدقة نحو التمثال", "#fff");
    }
}

// عرض الفيديو
function showResult(statueName) {
    if (isVideoPlaying) return;
    isVideoPlaying = true;
    
    // إيقاف الكاميرا فوراً لتوفير المعالج
    if (webcam) {
        webcam.stop();
    }

    const video = document.getElementById("statue-video");
    const label = document.getElementById("label-container");
    
    // المسار الجديد بعد تعديلك للأسماء (mp4 واحدة)
    video.src = `static/videos/${statueName}.mp4`; 
    
    // إدارة العناصر المرئية
    document.getElementById("webcam-container").style.display = "none";
    document.getElementById("uploaded-image-preview").style.display = "none";
    video.style.display = "block";

    // محاولة التشغيل
    video.play().catch(error => {
        console.error("خطأ في تشغيل الفيديو:", error);
        if (label) label.innerHTML = "❌ تعذر العثور على الفيديو: " + statueName;
    });

    if (label) {
        label.innerHTML =  statueName === "class 1" ? "✨ تم التعرف على: "+"Tutankhamun" : "✨ تم التعرف على: "+"Ramesses II";
        label.style.color = "#d4af37"; // اللون الذهبي
    }

    // ماذا يحدث بعد انتهاء الفيديو؟
    video.onended = function() {
        video.style.display = "none";
        document.getElementById("buttons-group").style.display = "flex";
        if (label) label.innerHTML = "هل تود اكتشاف تمثال آخر؟";
        isVideoPlaying = false; 
    };
}

function updateLabel(text, color) {
    const label = document.getElementById("label-container");
    if (label) { label.innerHTML = text; label.style.color = color; }
}

function resetUI() {
    isVideoPlaying = false;
    if (webcam) webcam.stop();
    document.getElementById("webcam-container").style.display = "none";
    document.getElementById("uploaded-image-preview").style.display = "none";
    document.getElementById("statue-video").style.display = "none";
    document.getElementById("buttons-group").style.display = "none";
}

init();