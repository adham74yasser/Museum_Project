let vision = document.querySelector(".vision")
let videKing = document.querySelector(".videKing")
let clo = document.querySelector(".clo")

let cartVision = [
    {
        Statue : "static/img/Gemini_Generated_Image_kj7547kj7547kj75.png",
        NameStatue : "Tutankhamun",
        EraStatue : "New Kingdom – 18th Dynasty (14th Century BC)",
        dicStatue : "Step beyond the veil of time and witness the eternal glory of the Boy King. Hidden for three millennia in the silent depths of the Valley of the Kings, Tutankhamun has returned to claim his place in the modern world. Beyond the glimmering gold and the sacred lapis lazuli, lies a soul waiting to speak. Through the power of the gods and the wonders of the digital age, the Pharaoh awakens once more. Listen closely as he reveals the long-lost secrets of his golden throne, the mysteries of his divine journey, and the undying legacy of the 18th Dynasty. The legend is no longer silent—the King is ready to tell his story ..."
    },
    {
        Statue : "static/img/Gemini_Generated_Image_kj7547kj7547kj75.png",
        NameStatue : "Tutankhamun",
        EraStatue : "New Kingdom – 18th Dynasty (14th Century BC)",
        dicStatue : "Step beyond the veil of time and witness the eternal glory of the Boy King. Hidden for three millennia in the silent depths of the Valley of the Kings, Tutankhamun has returned to claim his place in the modern world. Beyond the glimmering gold and the sacred lapis lazuli, lies a soul waiting to speak. Through the power of the gods and the wonders of the digital age, the Pharaoh awakens once more. Listen closely as he reveals the long-lost secrets of his golden throne, the mysteries of his divine journey, and the undying legacy of the 18th Dynasty. The legend is no longer silent—the King is ready to tell his story ..."
    },
    {
        Statue : "static/img/Gemini_Generated_Image_kj7547kj7547kj75.png",
        NameStatue : "Tutankhamun",
        EraStatue : "New Kingdom – 18th Dynasty (14th Century BC)",
        dicStatue : "Step beyond the veil of time and witness the eternal glory of the Boy King. Hidden for three millennia in the silent depths of the Valley of the Kings, Tutankhamun has returned to claim his place in the modern world. Beyond the glimmering gold and the sacred lapis lazuli, lies a soul waiting to speak. Through the power of the gods and the wonders of the digital age, the Pharaoh awakens once more. Listen closely as he reveals the long-lost secrets of his golden throne, the mysteries of his divine journey, and the undying legacy of the 18th Dynasty. The legend is no longer silent—the King is ready to tell his story ..."
    },
    {
        Statue : "static/img/Gemini_Generated_Image_kj7547kj7547kj75.png",
        NameStatue : "Tutankhamun",
        EraStatue : "New Kingdom – 18th Dynasty (14th Century BC)",
        dicStatue : "Step beyond the veil of time and witness the eternal glory of the Boy King. Hidden for three millennia in the silent depths of the Valley of the Kings, Tutankhamun has returned to claim his place in the modern world. Beyond the glimmering gold and the sacred lapis lazuli, lies a soul waiting to speak. Through the power of the gods and the wonders of the digital age, the Pharaoh awakens once more. Listen closely as he reveals the long-lost secrets of his golden throne, the mysteries of his divine journey, and the undying legacy of the 18th Dynasty. The legend is no longer silent—the King is ready to tell his story ..."
    },
    {
        Statue : "static/img/Gemini_Generated_Image_kj7547kj7547kj75.png",
        NameStatue : "Tutankhamun",
        EraStatue : "New Kingdom – 18th Dynasty (14th Century BC)",
        dicStatue : "Step beyond the veil of time and witness the eternal glory of the Boy King. Hidden for three millennia in the silent depths of the Valley of the Kings, Tutankhamun has returned to claim his place in the modern world. Beyond the glimmering gold and the sacred lapis lazuli, lies a soul waiting to speak. Through the power of the gods and the wonders of the digital age, the Pharaoh awakens once more. Listen closely as he reveals the long-lost secrets of his golden throne, the mysteries of his divine journey, and the undying legacy of the 18th Dynasty. The legend is no longer silent—the King is ready to tell his story ..."
    },
    {
        Statue : "static/img/Gemini_Generated_Image_kj7547kj7547kj75.png",
        NameStatue : "Tutankhamun",
        EraStatue : "New Kingdom – 18th Dynasty (14th Century BC)",
        dicStatue : "Step beyond the veil of time and witness the eternal glory of the Boy King. Hidden for three millennia in the silent depths of the Valley of the Kings, Tutankhamun has returned to claim his place in the modern world. Beyond the glimmering gold and the sacred lapis lazuli, lies a soul waiting to speak. Through the power of the gods and the wonders of the digital age, the Pharaoh awakens once more. Listen closely as he reveals the long-lost secrets of his golden throne, the mysteries of his divine journey, and the undying legacy of the 18th Dynasty. The legend is no longer silent—the King is ready to tell his story ..."
    },
    {
        Statue : "static/img/Gemini_Generated_Image_kj7547kj7547kj75.png",
        NameStatue : "Tutankhamun",
        EraStatue : "New Kingdom – 18th Dynasty (14th Century BC)",
        dicStatue : "Step beyond the veil of time and witness the eternal glory of the Boy King. Hidden for three millennia in the silent depths of the Valley of the Kings, Tutankhamun has returned to claim his place in the modern world. Beyond the glimmering gold and the sacred lapis lazuli, lies a soul waiting to speak. Through the power of the gods and the wonders of the digital age, the Pharaoh awakens once more. Listen closely as he reveals the long-lost secrets of his golden throne, the mysteries of his divine journey, and the undying legacy of the 18th Dynasty. The legend is no longer silent—the King is ready to tell his story ..."
    },
    {
        Statue : "static/img/Gemini_Generated_Image_kj7547kj7547kj75.png",
        NameStatue : "Tutankhamun",
        EraStatue : "New Kingdom – 18th Dynasty (14th Century BC)",
        dicStatue : "Step beyond the veil of time and witness the eternal glory of the Boy King. Hidden for three millennia in the silent depths of the Valley of the Kings, Tutankhamun has returned to claim his place in the modern world. Beyond the glimmering gold and the sacred lapis lazuli, lies a soul waiting to speak. Through the power of the gods and the wonders of the digital age, the Pharaoh awakens once more. Listen closely as he reveals the long-lost secrets of his golden throne, the mysteries of his divine journey, and the undying legacy of the 18th Dynasty. The legend is no longer silent—the King is ready to tell his story ..."
    },
    {
        Statue : "static/img/Gemini_Generated_Image_kj7547kj7547kj75.png",
        NameStatue : "Tutankhamun",
        EraStatue : "New Kingdom – 18th Dynasty (14th Century BC)",
        dicStatue : "Step beyond the veil of time and witness the eternal glory of the Boy King. Hidden for three millennia in the silent depths of the Valley of the Kings, Tutankhamun has returned to claim his place in the modern world. Beyond the glimmering gold and the sacred lapis lazuli, lies a soul waiting to speak. Through the power of the gods and the wonders of the digital age, the Pharaoh awakens once more. Listen closely as he reveals the long-lost secrets of his golden throne, the mysteries of his divine journey, and the undying legacy of the 18th Dynasty. The legend is no longer silent—the King is ready to tell his story ..."
    },
    {
        Statue : "static/img/Gemini_Generated_Image_kj7547kj7547kj75.png",
        NameStatue : "Tutankhamun",
        EraStatue : "New Kingdom – 18th Dynasty (14th Century BC)",
        dicStatue : "Step beyond the veil of time and witness the eternal glory of the Boy King. Hidden for three millennia in the silent depths of the Valley of the Kings, Tutankhamun has returned to claim his place in the modern world. Beyond the glimmering gold and the sacred lapis lazuli, lies a soul waiting to speak. Through the power of the gods and the wonders of the digital age, the Pharaoh awakens once more. Listen closely as he reveals the long-lost secrets of his golden throne, the mysteries of his divine journey, and the undying legacy of the 18th Dynasty. The legend is no longer silent—the King is ready to tell his story ..."
    },
]
 let res = "";
cartVision.map((e)=>(
    res +=`
               <div class="container my-5 position-relative p-0  col-10 card-item">
                <span class="position-absolute rounded-5 rounded-start-0 top-50 z-3 translate-middle"></span>
                <span class="position-absolute  rounded-5 rounded-end-0 top-50  z-3  translate-middle"></span>
                <div class="card p-0 m-0 d-flex justify-content-between flex-row-reverse " style="height: 450px;">
                    <div class="card-img  position-relative w-25 h-100">
                        <span class="position-absolute  z-3  rounded-5 rounded-top-0  translate-middle "></span>
                        <span class="position-absolute   z-3  rounded-5 rounded-bottom-0  translate-middle "></span>
                        <img src=${e.Statue} style="object-fit: cover;" alt="">
                    </div>
                    <div class="body-card w-75">
                        <b class="display-1 w-100 text-center d-flex justify-content-center py-5 text-uppercase">${e.NameStatue}</b>
                        <p class="text-center fs-5">${e.EraStatue}</p>
                        <p class="px-5 fw-bold">${e.dicStatue}</p>
                        <span class="position-absolute top-50 start-50  translate-middle w-100 h-100 d-flex justify-content-center align-items-center"><i class="fa-solid fa-circle-play"></i></span>
                    </div>
                </div>
            </div>
   ` 
))
vision.innerHTML = res
let opa = false;
const cards = document.querySelectorAll('.card-item');

cards.forEach(card => {
    card.addEventListener('click', () => {
        if (opa === false) {
            videKing.classList.add('hidden');
            opa === true
        }else {
            videKing.classList.remove('hidden');
            opa = false;
        }
    });
});
clo.addEventListener('click', () => {
        videKing.classList.remove('hidden');
        opa = false
});
