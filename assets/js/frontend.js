let guests = document.querySelectorAll('.--guest-sname');
let size = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs', 's'];
let pos = ['tl', 'tr', 'tm', 'bl', 'bm', 'br', 'm'];
    pos = pos.reverse();
const swiperTestimoni = new Swiper('.swiper-testimoni', {
    autoplay: true,
    slidesPerView: 1,
    effect: 'fade',
    navigation: {
        nextEl: '.swiper-button--next',
        prevEl: '.swiper-button--prev',
    },
    pagination: {
        el: '.swiper-testimoni--pagination',
            clickable: true,
            renderBullet: function (index, className) {
                // return `<span class="pos-${pos[Math.floor(Math.random() * 4) + 1]} 
                //                      size-${size[Math.floor(Math.random() * 4) + 1]}
                //                      ${className} rounded">
                //                      ${guests[index].textContent}
                //         </span>`;
                return `<span class="pos-${pos[index]} 
                size-${size[index]}
                ${className} rounded">
                ${guests[index].textContent}
   </span>`;
            },
    },
});


// SIGHT SCENE SLIDER - START
const ss_title = document.querySelector('.ss-title--swiper .swiper-container');
let ss_titleSwiper;
if(ss_title){
    ss_titleSwiper = new Swiper(ss_title, {
        slidesPerView: 1,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
    });
}


const ss_imgs = document.querySelector('.ss-img--swiper .swiper-container');
let ss_imgsSwiper;
if(ss_imgs){
    ss_imgsSwiper = new Swiper(ss_imgs, {
        slidesPerView: 1,
        effect: 'fade',
        mousewheel: true,
        navigation: {
            nextEl: '.swiper-button--next',
            prevEl: '.swiper-button--prev',
        },
    });


    ss_imgsSwiper.slideTo(1);
    ss_titleSwiper.slideTo(1);
    

    ss_imgsSwiper.on('slideChange', function() {
        ss_titleSwiper.slideTo(this.activeIndex);
    });
}

// SIGHT SCENE SLIDER - END



jQuery(document).ready(function(){

    // adjust height
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);


   // ham menu
   jQuery('body').on('click', '.btn--hammenu', function(){
        jQuery(this).toggleClass('open');
        jQuery('nav').toggleClass('is-showing');
   });


   // jQuery('.form-success-modal').addClass('is-showing');
   
    // hide from sucess msg
    setTimeout(function(){
        if(jQuery('.form-success-modal').hasClass('is-showing')){
            jQuery('.form-success-modal').removeClass('is-showing');
        }
    }, 8000)

  });


   
// adjust height on resize
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});