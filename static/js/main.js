// start header

let aboutTimer;
  function startTypewriter(selector ,wordsList, writeSpeed = 200, deleteSpeed = 100, waitSpeed = 3000){
  let index = 0;
  let res = 0;
  let delet = false
  let speed = 200;
  const target = $(selector);
  
  function type() {
    const currentWord = wordsList[index];
    
    if (delet) {
      target.text(currentWord.substring(0,res - 1))
      res--;
      speed = deleteSpeed;
    }else {
      target.text(currentWord.substring(0,res + 1))
      res++;
      speed = writeSpeed;
    }

    if(!delet && res === currentWord.length){
      delet = true
      speed = waitSpeed
    }else if (delet && res === 0){
      delet = false;
      index = (index + 1) % wordsList.length;
      speed = 500;
    }
    aboutTimer = setTimeout(type, speed);  
}
  type();
}

$(document).ready(function(){
  let title = [
    "Silence No Longer Defines History",
    "For every word spoken is a spark of light",
    "That burns through the darkness of the past",
    "And carves our path toward a brighter tomorrow"
  ]
startTypewriter(".titleHeader h1", title, 200, 100, 3000);
})
// end header
// start about
$('.about').mouseenter(()=>{
    $('.img').css({transform: 'rotateX(40deg) rotateZ(-1deg)'})
    $('.imgRotate').css({transform: 'rotateX(0deg) rotateZ(0deg)',opacity : '1'})
    $('.imgRotate2').css({opacity: '1'})
    $('.lastImg').css({opacity: "1"})
    $('.cardAbout span').css({opacity: "1"})
    let words = [
    "I am awake",
    "Let us discover",
    "the hidden secrets together",
    "through these...",
    "digital eyes." 
    ]
  startTypewriter(".cardAbout span", words, 100, 50, 1000);
})
$('.about').mouseleave(()=>{
  clearTimeout(aboutTimer);
    $('.img').css({transform: 'rotateX(0deg) rotateZ(0deg)'})
    $('.imgRotate').css({transform: 'rotateX(40deg) rotateZ(-1deg)',opacity : '0'})
    $('.imgRotate2').css({opacity: '0'})
    $('.lastImg').css({opacity: "0"})
    $('.cardAbout span').css({opacity: "0"})
    $('.cardAbout span').empty();
})


// end about
// start data
let nums = document.querySelectorAll(".num");

window.onscroll = function () {
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
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 10);
}

function isInViewport(el) {
  let rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight;
}
// end data
// start folio
$(document).ready(function(){
  $('.container').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay :true,
    autoplaySpeed :3000 , 
    arrows : false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768, 
            settings: {
                slidesToShow: 1,
            }
        }
    ]
  });
});
// end folio
// start videoAi


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      $('video').play();
    } else {
      $('video').pause();
    }
  });
}, { threshold: 0.5 });

const videoElement = document.querySelector('.videoAi video');
if (videoElement) {
    observer.observe(videoElement);
}
// end videoAi
// start services
$('.allpopup').mouseover(function () {
  $(this).find('.popup').css({opacity: '1', visibility: "visible"})
})
$('.allpopup').mouseleave(function () {
  $(this).find('.popup').css({opacity: '0',visibility: "hidden"})
})
// end services


// ....................................................

new WOW().init();