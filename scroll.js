const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
        slidesPerView: 1
    },

     768: {
        slidesPerView: 2
    },

     1024: {
        slidesPerView: 3
    }
  }
});


    var btc = document.getElementsByClassName("btc");
    var slide = document.getElementById("slide");

    btc[0].onclick = function(){
        slide.style.transform = "translatex(0px)";
        for(i=0;i<4;i++){
            btc[i].classList.remove("active");
        }
        this.classList.add("active")

    }

     btc[1].onclick = function(){
        slide.style.transform = "translatex(-800px)";

         for(i=0;i<4;i++){
            btc[i].classList.remove("active");
        }
        this.classList.add("active")
     }

      btc[2].onclick = function(){
        slide.style.transform = "translatex(-1600px)";

         for(i=0;i<4;i++){
            btc[i].classList.remove("active");
        }
        this.classList.add("active")
     }

      btc[3].onclick = function(){
        slide.style.transform = "translatex(-2400px)";

         for(i=0;i<4;i++){
            btc[i].classList.remove("active");
        }
        this.classList.add("active")
     }