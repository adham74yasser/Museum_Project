const MODEL_URL = "https://teachablemachine.withgoogle.com/models/VfO5yK12d/"; 
let model, webcam, maxPredictions;
let isVideoPlaying = false; 
let isModelReady = false; 
let detectionCount = 0; 

async function init() {
    updateLabel("Loading the model...", "#d4af37");
    try {
        model = await tmImage.load(MODEL_URL + "model.json", MODEL_URL + "metadata.json");
        maxPredictions = model.getTotalClasses();
        isModelReady = true; 
        updateLabel("Model is ready", "#d4af37");
    } catch (e) {
        updateLabel("Failed to load the model", "#ff4d4d");
    }
}

async function startWebcam(useFrontCamera = true) {
    resetUI();
    updateLabel("Starting the camera...", "#d4af37");
    try {
        const facingMode = useFrontCamera ? "user" : "environment";
        webcam = new tmImage.Webcam(224, 224, true); 
        await webcam.setup({ facingMode: facingMode }); 
        await webcam.play();
        
        const container = document.getElementById("webcam-container");
        container.innerHTML = "";
        container.appendChild(webcam.canvas);
        container.style.display = "block";
        
        isVideoPlaying = false;
        window.requestAnimationFrame(loop);
    } catch (err) {
        updateLabel("Unable to access the camera", "#ff4d4d");
    }
}

let isLocked = false; 

async function loop() {
    if (webcam && !isVideoPlaying && !isLocked) {
        webcam.update();
        if (detectionCount % 30 === 0) {
            await predict(webcam.canvas);
        }
        detectionCount++;
        window.requestAnimationFrame(loop);
    }
}

async function predict(source) {
    if (!isModelReady || !model) return;

    const prediction = await model.predict(source);
    let top = prediction.reduce((prev, current) => (prev.probability > current.probability) ? prev : current);
    if (top.probability > 0.98) {
        updateLabel("Recognition complete! Please stay still", "#00ff00");
        isLocked = true; 
        setTimeout(() => {
            showResult(top.className);
        }, 2000); 
    } else {
        updateLabel("Scanning... Please zoom in on the statue", "#d4af37");
    }
}

function showResult(statueName) {
    if (isVideoPlaying) return;
    isVideoPlaying = true;
    
    // إيقاف الكاميرا وتفريغ محتوى الحاوية فوراً لمنع أي تضارب في الأبعاد
    if (webcam) {
        webcam.stop();
        webcam = null;
    }
    
    const video = document.getElementById("statue-video");
    const imagePreview = document.getElementById("uploaded-image-preview");
    const webcamContainer = document.getElementById("webcam-container");

    // إخفاء فريمات الكاميرا والصور تماماً
    webcamContainer.innerHTML = "";
    webcamContainer.style.display = "none";
    imagePreview.style.display = "none";
    
    // إعداد وتشغيل الفيديو داخل الفريم الثابت والمحمي بالـ CSS
    const fileName = encodeURIComponent(statueName);
    video.src = `static/videos/${fileName}.mp4`; 
    video.style.display = "block"; 
    video.play();
    
    updateLabel(`تم التعرف على: ${statueName}`, "#00ff00");

    video.onended = () => {
        video.style.display = "none"; 
        document.getElementById("buttons-group").style.display = "flex";
        updateLabel("انتهى العرض، هل تريد المحاولة مجدداً؟", "#fff");
    };
}

function resetUI() {
    detectionCount = 0;
    isVideoPlaying = false;
    isLocked = false; // إعادة فتح القفل عند عمل الـ Reset
    
    if (webcam) {
        webcam.stop();
        webcam = null;
    }
    
    const webcamContainer = document.getElementById("webcam-container");
    if (webcamContainer) webcamContainer.innerHTML = "";

    document.getElementById("webcam-container").style.display = "none";
    document.getElementById("uploaded-image-preview").style.display = "none";
    document.getElementById("statue-video").style.display = "none";
    document.getElementById("buttons-group").style.display = "none";
}

function updateLabel(text, color) {
    const label = document.getElementById("label-container");
    if (label) { label.innerHTML = text; label.style.color = color; }
}

async function handleFileUpload(event) {
    resetUI();
    const file = event.target.files[0];
    if (!file) return;
    const imgElement = document.getElementById("uploaded-image-preview");
    const reader = new FileReader();
    reader.onload = (e) => {
        imgElement.src = e.target.result;
        imgElement.style.display = "block";
        imgElement.onload = async () => await predict(imgElement);
    };
    reader.readAsDataURL(file);
}

init();