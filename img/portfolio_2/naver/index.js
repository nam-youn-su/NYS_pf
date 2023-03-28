const header = document.querySelector('#header');
const allMenuBtn = document.querySelector('.btn_all_menu');

allMenuBtn.addEventListener('click', () => {
    if (header.classList.contains('active')) {
        header.classList.remove('active');
        return false;
    } {
        header.classList.add('active');
        return false;
    }
})


let beforePosition = document.documentElement.scrollTop;

document.addEventListener('scroll', function () {

    let afterPosition = document.documentElement.scrollTop;

    if (beforePosition < afterPosition) {
        setTimeout(() => {
            header.classList.add('scroll_down');
        }, 400)
        // 스크롤 위로 
    } else {
        setTimeout(() => {
            header.classList.remove('scroll_down');
        }, 400)
        // 스크롤 아래로
    }
    beforePosition = afterPosition;
    //console.log(`beforePosition:${beforePosition} = afterPosition:${document.documentElement.scrollTop} `)
});





//슬라이드

const slideWrap = document.querySelector('.slide_wrap');
const slideFirst = slideWrap.firstElementChild;
const slideLast = slideWrap.lastElementChild;
const slideFirstClone = slideFirst.cloneNode(true);
const slideLastClone = slideLast.cloneNode(true);
slideWrap.appendChild(slideFirstClone);
slideWrap.insertBefore(slideLastClone, slideFirst);
const slideLength = slideWrap.childElementCount;
const slideItem = document.querySelectorAll('.slide_item');
slideWrap.style.width = `${slideLength * 100}%`
const slideWidth = `${100 / slideLength}`;
const pagerBar = document.querySelector('.bar_fill')
const slideTransition = 1000;
const slideDelay = 3000;
let slideCurNum = 1;
const slideTotal = document.querySelector('.total');
const slideNum = document.querySelector('.current');
slideTotal.innerHTML = slideLength - 2;

const showBox = document.querySelectorAll('.hide_box');

const addClass = (num)=>{
    showBox[num].classList.add('show');
    showBox[num].style.opacity=0;
    setTimeout(()=>{
        showBox[num].style.opacity=1;
        },300)
}
const removeClass = ()=>{
    for(let key of showBox){
        key.classList.remove('show');
    }
}

const nextBtn = document.querySelector('.next_btn');
const prevBtn = document.querySelector('.prev_btn');

for (let key of slideItem) {
    key.style.width = `${slideWidth}%`;
}
slideWrap.style.transform = `translateX(-${slideWidth}%)`;
pagerBar.style.width = `${(100 / (slideLength - 2)) * slideCurNum}%`;
const slideNext = () => {
    removeClass();
    slideCurNum++;
    if (slideCurNum == slideLength - 1) {
        addClass(0);
        slideWrap.style.transition = `0ms`;
        slideWrap.style.transform = `translateX(0)`;
        setTimeout(() => {
            slideWrap.style.transform = `translateX(-${slideWidth * slideCurNum}%)`;
            slideWrap.style.transition = `${slideTransition}ms`;
        }, 0)
        slideCurNum = 1;
        pagerBar.style.width = `${(100 / (slideLength - 2)) * slideCurNum}%`;
        slideNum.innerHTML = slideCurNum;
        return false;
    }
        addClass(slideCurNum-1)
    slideWrap.style.transform = `translateX(-${slideWidth * slideCurNum}%)`;
    slideWrap.style.transition = `${slideTransition}ms`;
    pagerBar.style.width = `${(100 / (slideLength - 2)) * slideCurNum}%`;
    slideNum.innerHTML = slideCurNum;
}

const slidePrev = () => {
    removeClass();
    slideCurNum--;
    if (slideCurNum == 0) {
        addClass(slideLength-3);
        slideWrap.style.transition = `0ms`;
        slideWrap.style.transform = `translateX(-${100 - slideWidth}%)`;
        setTimeout(() => {
            slideWrap.style.transform = `translateX(-${slideWidth * slideCurNum}%)`;
            slideWrap.style.transition = `${slideTransition}ms`;
        }, 0)
        slideCurNum = slideLength - 2;
        pagerBar.style.width = `${(100 / (slideLength - 2)) * slideCurNum}%`;
        slideNum.innerHTML = slideCurNum;
        return false;
    }
    addClass(slideCurNum-1);
    slideWrap.style.transform = `translateX(-${slideWidth * slideCurNum}%)`;
    slideWrap.style.transition = `${slideTransition}ms`;
    pagerBar.style.width = `${(100 / (slideLength - 2)) * slideCurNum}%`;
    slideNum.innerHTML = slideCurNum;
}

let slideLoop = setInterval(
    slideNext, slideDelay
);
let double = true;

nextBtn.addEventListener('click', () => {
    if (double) {
        slideNext();
        double = false;
        clearInterval(slideLoop);
        setTimeout(() => {
            double = true;
            slideLoop = setInterval(
                slideNext, slideDelay
            );
        }, slideDelay - 500);
        return false;
    }

})

prevBtn.addEventListener('click', () => {
    if (double) {
        slidePrev();
        double = false;
        clearInterval(slideLoop);
        setTimeout(() => {
            double = true;
            slideLoop = setInterval(
                slideNext, slideDelay
            );
        }, slideDelay - 500);
        return false;
    }

})



const mainContentBg = document.querySelectorAll('.main_content02_box_item');
let bgNum = 1;
for (let key of mainContentBg) {
    key.style.background = `center/cover no-repeat url(img/img_main_content${bgNum++}.png)`;
}


