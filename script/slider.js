let objLinkImg = {
    preview: [
        "../img/slider/slider_preview/img_preview_1.png",
        "../img/slider/slider_preview/img_preview_2.png",
        "../img/slider/slider_preview/img_preview_3.png",
    ],

    slider_active: [
        "../img/slider/slider_active/img_slider_2.png",
        "../img/slider/slider_active/img_slider_3.png",
        `../img/slider/slider_active/img_slider_1.png`,
    ]
}

// =====================================================
// =====================================================

let btnArrowPrev = document.querySelector(".carousel-control-prev")
let btnArrowNext = document.querySelector(".carousel-control-next")

let preview_1 = document.querySelector(".preview_1")
let preview_2 = document.querySelector(".preview_2")

let sliderImgActive = document.querySelector(".slider_img_active")

let imgSlideWrap = document.querySelector('.img_slide_wrap')
// =====================================================
// =====================================================

let countSlide = 0
let saveCount = 0

let prevSlide = () => {

    let imgPreview = `<img class="img_slider preview_${countSlide + 1}" src="${objLinkImg.preview[countSlide]}" alt="">`
    // let activeSlidePattern = `<img class="slider_img_active" src="${objLinkImg.slider_active[countSlide]}" alt="">`
    
    countSlide += 1

    if (countSlide < objLinkImg.preview.length) {
        imgSlideWrap.insertAdjacentHTML('afterbegin', imgPreview)
    } else {
        countSlide = 0
        imgSlideWrap.insertAdjacentHTML('afterbegin', imgPreview)
    }
    document.querySelector(`.img_slide_wrap`).lastElementChild.remove()
    document.querySelector('.slider_count').innerHTML = `0${(countSlide + 1)}`
}


// ==================================================
// ==================================================
// ==================================================

let nextSlide = () => {

    let imgPreview = `<img class="img_slider preview_${countSlide + 1}" src="${objLinkImg.preview[countSlide]}" alt="">`
    
    countSlide += 1

    if (countSlide < objLinkImg.preview.length) {
        imgSlideWrap.insertAdjacentHTML('beforeend', imgPreview)
    } else {
        countSlide = 0
        imgSlideWrap.insertAdjacentHTML('beforeend', imgPreview)
    }

    document.querySelector(`.img_slider`).remove()

    document.querySelector('.slider_count').innerHTML = `0${(countSlide + 1)}`
    document.querySelector(`.active_line_1`).setAttribute('style', `transform: translateX(${(100 / (objLinkImg.slider_active.length - 1)) * countSlide}%);`)
}
    
setInterval(() => {
    nextSlide()
}, 5000);


btnArrowNext.onclick = prevSlide
btnArrowPrev.onclick = nextSlide
