document.addEventListener("DOMContentLoaded", () => {
    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");
  
    hamMenu.addEventListener("click", () => {
      hamMenu.classList.toggle("active");
      offScreenMenu.classList.toggle("active");
    });
  });

/*car key model animation */

const scrollers =  document.querySelectorAll(".scroller");

if (!window.matchMedia("prefers-reduced-animation: reduce").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller-inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
            const duplicaterItem = item.cloneNode(true);
            duplicaterItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicaterItem)
        })
    })
}

/*testimonial swiper */


new Swiper('.card-wrapper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },



  });