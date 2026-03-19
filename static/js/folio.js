let Card = [
    {
        img : "static/img/AkhenatenCrad.png",
        name : "Akhenaten",
        dic : "I have returned from the darkness of centuries to tell you the story of a throne I claimed as a child, and a world I reshaped with my own hands. My tomb was not just a burial, but a message of eternity spoken in gold when all went silent. Are you ready to learn how I faced my destiny?....."
    },
    {
        img : "static/img/Amenhotep-IIICard.png",
        name : "Amenhotep III",
        dic : "I have returned from the darkness of centuries to tell you the story of a throne I claimed as a child, and a world I reshaped with my own hands. My tomb was not just a burial, but a message of eternity spoken in gold when all went silent. Are you ready to learn how I faced my destiny?....."
    },
    {
        img : "static/img/HatshepsutCard.png",
        name : "Hatshepsut",
        dic : "I have returned from the darkness of centuries to tell you the story of a throne I claimed as a child, and a world I reshaped with my own hands. My tomb was not just a burial, but a message of eternity spoken in gold when all went silent. Are you ready to learn how I faced my destiny?....."
    },
    {
        img  : "static/img/KhafreCard.png",
        name : "Khafre",
        dic : "I have returned from the darkness of centuries to tell you the story of a throne I claimed as a child, and a world I reshaped with my own hands. My tomb was not just a burial, but a message of eternity spoken in gold when all went silent. Are you ready to learn how I faced my destiny?....."
    },
    {
        img : "static/img/KhufuCard.png",
        name : "Khufu",
        dic : "I have returned from the darkness of centuries to tell you the story of a throne I claimed as a child, and a world I reshaped with my own hands. My tomb was not just a burial, but a message of eternity spoken in gold when all went silent. Are you ready to learn how I faced my destiny?....."
    },
    {
        img  : "static/img/MerneptahCard.png",
        name : "Merneptah",
        dic : "I have returned from the darkness of centuries to tell you the story of a throne I claimed as a child, and a world I reshaped with my own hands. My tomb was not just a burial, but a message of eternity spoken in gold when all went silent. Are you ready to learn how I faced my destiny?....."
    },
    {
        img : "static/img/Psusennes ICard.png",
        name : "Psusennes I",
        dic : "I have returned from the darkness of centuries to tell you the story of a throne I claimed as a child, and a world I reshaped with my own hands. My tomb was not just a burial, but a message of eternity spoken in gold when all went silent. Are you ready to learn how I faced my destiny?....."
    },
    {
        img  : "static/img/Ramesses IICard.png",
        name : "Ramesses II",
        dic : "I have returned from the darkness of centuries to tell you the story of a throne I claimed as a child, and a world I reshaped with my own hands. My tomb was not just a burial, but a message of eternity spoken in gold when all went silent. Are you ready to learn how I faced my destiny?....."
    },
    {
        img : "static/img/SekhmetCard.png",
        name : "Sekhmet",
        dic : "I have returned from the darkness of centuries to tell you the story of a throne I claimed as a child, and a world I reshaped with my own hands. My tomb was not just a burial, but a message of eternity spoken in gold when all went silent. Are you ready to learn how I faced my destiny?....."
    },
    {
        img  : "static/img/Senusret ICard.png",
        name : "Senusret I",
        dic : "I have returned from the darkness of centuries to tell you the story of a throne I claimed as a child, and a world I reshaped with my own hands. My tomb was not just a burial, but a message of eternity spoken in gold when all went silent. Are you ready to learn how I faced my destiny?....."
    },
    {
        img : "static/img/TutankhamunCard.png",
        name : "Tutankhamun",
        dic : "I have returned from the darkness of centuries to tell you the story of a throne I claimed as a child, and a world I reshaped with my own hands. My tomb was not just a burial, but a message of eternity spoken in gold when all went silent. Are you ready to learn how I faced my destiny?....."
    },
    {
        img  : "static/img/Senusret-IIICard.png",
        name : "Senusret III",
        dic : "I have returned from the darkness of centuries to tell you the story of a throne I claimed as a child, and a world I reshaped with my own hands. My tomb was not just a burial, but a message of eternity spoken in gold when all went silent. Are you ready to learn how I faced my destiny?....."
    },
] 

console.log();


Card.forEach((e,index)=>{
    let isEven = index % 2 === 0;
    let currentClass = (index % 2 === 0) ? "cardFolio" : "cardFolioRight";
    $('.container').append(
        `<div class="${currentClass} ${isEven ? '' : 'flex-row-reverse'} d-flex">
            <div class="card-img ">
                <img src="${e.img}" alt="">
            </div>
            <div class="body-card flex-column w-50">
                <b class="fs-1" >${e.name}</b>
                <p class="py-0 text-uppercase w-100 ">${e.dic}</p>
                <a class="btn ps-0 " >Reveal My Secrets</a>
            </div>
        </div>`
    )
})