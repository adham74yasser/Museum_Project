// تأكد أن المسار دقيق جداً (استخدم ./backend/ كما ذكرت في آخر رسالة)
const MODEL_URL = "https://teachablemachine.withgoogle.com/models/gRzfC285E/"; 
let model, webcam, maxPredictions;
let isVideoPlaying = false; 
let isModelReady = false; 

// 1. تحميل الموديل عند بداية التشغيل
async function init() {
    try {
        updateLabel("جاري تحميل الموديل...", "#d4af37");
        
        // تحميل الموديل باستخدام الرابط المباشر للمجلد
        // تأكد أن المجلد يحتوي على model.json, metadata.json, weights.bin
        model = await tmImage.load(MODEL_URL + "model.json", MODEL_URL + "metadata.json");
        maxPredictions = model.getTotalClasses();
            
        isModelReady = true; 
        document.getElementById("image-upload").disabled = false;
        updateLabel("✅ الموديل جاهز للاستخدام", "#d4af37");
    } catch (e) {
        console.error("خطأ تحميل الموديل:", e);
        updateLabel("❌ خطأ تحميل: تأكد أن الملفات في مجلد backend", "#ff4d4d");
    }
}

// 2. دالة التنبؤ (المحمية)
async function predict(source) {
    if (!isModelReady || !model) {
        console.error("الموديل غير متاح حالياً.");
        updateLabel("⚠️ الموديل لم يحمل بعد، انتظر...", "#ff4d4d");
        return;
    }

    try {
        const prediction = await model.predict(source);
        let found = false;
        
        for (let i = 0; i < maxPredictions; i++) {
            // التحقق من نسبة الدقة
            if (prediction[i].probability > 0.95) {
                showResult(prediction[i].className);
                found = true;
                break;
            }
        }
        if (!found && !isVideoPlaying) {
            updateLabel("🔍 وجه الكاميرا بدقة نحو التمثال", "#fff");
        }
    } catch (err) {
        console.error("خطأ أثناء معالجة التنبؤ:", err);
    }
}

// 3. معالجة رفع الصور
async function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    resetUI();
    
    const imgElement = document.getElementById("uploaded-image-preview");
    const reader = new FileReader();
    
    reader.onload = function(e) {
        imgElement.src = e.target.result;
        imgElement.style.display = "block";
        
        // التحقق من اكتمال تحميل الصورة قبل التنبؤ
        imgElement.onload = async () => {
            updateLabel("جاري التحليل...", "#d4af37");
            await predict(imgElement);
        };
    };
    reader.readAsDataURL(file);
}

// 4. تشغيل الكاميرا
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

// 5. عرض النتيجة والفيديو
function showResult(statueName) {
    if (isVideoPlaying) return;
    isVideoPlaying = true;
    
    if (webcam) webcam.stop();

    const video = document.getElementById("statue-video");
    const label = document.getElementById("label-container");
    
    video.src = `static/videos/${statueName}.mp4`; 
    
    document.getElementById("webcam-container").style.display = "none";
    document.getElementById("uploaded-image-preview").style.display = "none";
    video.style.display = "block";

    video.play().catch(error => {
        console.error("خطأ في تشغيل الفيديو:", error);
    });

    if (label) {
        label.innerHTML = statueName === "Class 1" ? "Ramesses II" : "Tutankhamun";
        label.style.color = "#d4af37";
    }

    video.onended = () => {
        video.style.display = "none";
        document.getElementById("buttons-group").style.display = "flex";
        label.innerHTML = "هل تود اكتشاف تمثال آخر؟";
        isVideoPlaying = false; 
    };
}

// 6. دوال مساعدة
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

// بدء التشغيل
init();