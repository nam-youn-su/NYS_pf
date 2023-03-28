const slideBox = document.querySelector('.slide_box');
const slideWrap = document.querySelector('.slide_wrap');



const slideLen = slideWrap.childElementCount;
const slideItem = document.querySelectorAll('.slide_item');

//자동으로 슬라이드 움직일건지 그리고 그 속도
let slideDelay = 3000;
let slideTran = 1000;
for(key of slideItem){
    key.style.transition=`${slideTran}ms`;
}

//슬라이드 페이저 생성

const slideAllNum = document.querySelector('.allNum');
const slideCurNum = document.querySelector('.curNum');

const slidePager = document.querySelector('.slidePager');

slideAllNum.innerHTML = slideLen;
let slideNum = 0;

for (let i = 1; i <= slideLen; i++) {
    let slidePage = document.createElement('li');
    slidePage.setAttribute('class', 'slidePage');
    slidePage.setAttribute('value', i);
    slidePager.appendChild(slidePage);
}
const slidePage = document.querySelectorAll('.slidePage');
slidePage[0].classList.add('on');
slideItem[0].classList.add('show');
for (let key of slidePage) {
    key.addEventListener('click', (e) => {
        for (let i of slidePage) {
            i.classList.remove('on');
        }
        for (let i of slideItem){
            i.classList.remove('show');
        }
        let target = e.target;
        let value = target.value;
        slideItem[value-1].classList.add('show')
        slideCurNum.innerHTML=value;
        target.classList.add('on');
        slideNum=value;
    })
}

const nextSlide = ()=>{
        for(key of slideItem){
            key.classList.remove('show');
        }
        for (let key of slidePage) {
            key.classList.remove('on');
        }
        if(slideNum==6){
            slideNum=0;
        }
        slideItem[slideNum].classList.add('show');
        slidePage[slideNum].classList.add('on')
        slideCurNum.innerHTML=slideNum+1;
        slideNum++;

    }

let reSlide = setInterval(
nextSlide
,slideDelay);

reSlide;

const stopBtn = document.querySelector('.stop_go');

stopBtn.addEventListener('click',(e)=>{
    let target = e.target;
    let icon = document.querySelector('.stop_go i svg')
    if(target.id =='stop'){
        icon.setAttribute('data-icon','pause')
        reSlide = setInterval(
            nextSlide
            ,slideDelay);
        target.id='go';
        return false;
    }
    target.id = 'stop';
    icon.setAttribute('data-icon','play')
    clearInterval(reSlide);
    resLide=0;
})