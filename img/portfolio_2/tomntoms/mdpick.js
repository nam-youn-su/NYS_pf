const mdSlideWrap = document.querySelector('.md_slide');
const mdSlideItem = document.querySelectorAll('.md_item');
const mdSlideItemImg = document.querySelectorAll('.md_item_img');
const mdSlideBox = document.querySelector('.main_wrap');
const mdFirstItem = mdSlideWrap.firstElementChild;
const mdLastItem = mdSlideWrap.lastElementChild;



document.querySelector('.md_slide_max').innerHTML=mdSlideWrap.childElementCount;
let mdItemImg =1;
for(key of mdSlideItemImg){
    key.style.background=`center / cover no-repeat url(md${mdItemImg++}.jpg)`;
}
const mdFirstItemClone = mdFirstItem.cloneNode(true);
const mdSecondItemClone = mdSlideItem[1].cloneNode(true);
const mdLastItemClone = mdLastItem.cloneNode(true);
const mdLastSecondItemClone = mdSlideItem[4].cloneNode(true);
mdSlideWrap.insertBefore(mdLastSecondItemClone,mdFirstItem)
mdSlideWrap.insertBefore(mdLastItemClone,mdFirstItem)
mdSlideWrap.appendChild(mdFirstItemClone);
mdSlideWrap.appendChild(mdSecondItemClone);
const mdSlideNum = mdSlideWrap.childElementCount;


const mdSlidepagerBox = document.querySelector('.md_pager_box');

for(i=0; i<mdSlideWrap.childElementCount-4; i++){
    const mdSlidepager = document.createElement('li');
    mdSlidepagerBox.appendChild(mdSlidepager);
    mdSlidepager.setAttribute('class','md_pager');
    mdSlidepager.setAttribute('value',i+2);
}


const mdSlidepager = document.querySelectorAll('.md_pager');
let mdSlideCurNum=2;
let mdNum = document.querySelector('.md_slide_cur');




mdSlideWrap.style.transform=`translate(-${mdSlideCurNum*33.333}%)`;
const mdNextSlide = ()=>{
    
    for(key of mdSlidepager){
        key.classList.remove('on');
    }
    if(mdSlideCurNum==mdSlideNum-4){
        mdSlidepager[mdSlideCurNum-1].classList.add('on');
        mdSlideWrap.style.transition= `1000ms`
        mdSlideWrap.style.transform=`translate(-${(mdSlideCurNum+1)*33.333}%)`;
        setTimeout(()=>{
            mdSlideWrap.style.transition= `0ms`;
            mdSlideWrap.style.transform=`translate(-${(1)*33.333}%)`;
        },1000);
        mdNum.innerHTML = mdSlideCurNum
        mdSlideCurNum=1;
        return false;
    }
    if(mdSlideCurNum==1 || mdSlideCurNum==mdSlideNum-3){
        mdSlideCurNum=1;
        mdSlideWrap.style.transition= `0ms`;
        mdSlideWrap.style.transform=`translate(-${(mdSlideCurNum)*33.333}%)`;
        mdSlidepager[mdSlideCurNum-1].classList.add('on');
        setTimeout(()=>{
            mdSlideWrap.style.transition= `1000ms`
            mdSlideWrap.style.transform=`translate(-${(mdSlideCurNum)*33.333}%)`;
        },1)
        mdNum.innerHTML = mdSlideCurNum
        mdSlideCurNum++;
        return false;

    }
    mdSlidepager[mdSlideCurNum-1].classList.add('on');
    mdSlideWrap.style.transition= `1000ms`
    mdSlideWrap.style.transform=`translate(-${(mdSlideCurNum+1)*33.333}%)`;
    mdNum.innerHTML = mdSlideCurNum
    mdSlideCurNum++;
}


const mdPrevSlide = ()=>{
    mdNum.innerHTML = mdSlideCurNum-1;
    mdSlideCurNum--;
    for(key of mdSlidepager){
        key.classList.remove('on');
    }
    if(mdSlideCurNum<=1){
            mdSlidepager[mdSlideCurNum+3].classList.add('on');
            mdSlideWrap.style.transition= `1000ms`
            mdSlideWrap.style.transform=`translate(-${(mdSlideCurNum)*33.333}%)`;
            mdSlideCurNum=6;
            mdNum.innerHTML = mdSlideCurNum-1;
            setTimeout(()=>{
                mdSlideWrap.style.transition= `0ms`
                mdSlideWrap.style.transform=`translate(-${(mdSlideCurNum)*33.333}%)`;
            },1001)
            return false;
    }
    mdSlideWrap.style.transition= `1000ms`
    mdSlideWrap.style.transform=`translate(-${mdSlideCurNum*33.333}%)`;

    if(mdSlideCurNum==1){
        mdSlidepager[mdSlideCurNum+6].classList.add('on');
        return false;
    }
    mdNum.innerHTML = mdSlideCurNum-1;
    mdSlidepager[mdSlideCurNum-2].classList.add('on');
}

mdSlidepager[0].classList.add('on');

for(key of mdSlidepager){

    key.addEventListener('click',(e)=>{
        const target = e.target;
        mdNum.innerHTML = target.value-1;
        if(target.classList.contains('on')){
            return false;
        }
        for(key of mdSlidepager){
            key.classList.remove('on');
        }
        mdSlideCurNum=target.value+1;
        if(mdSlideNum-3==mdSlideCurNum){
            target.classList.add('on');
            mdSlideWrap.style.transition= `1000ms`
            mdSlideWrap.style.transform=`translate(-${(mdSlideCurNum-1)*33.333}%)`;
            console.log(`mdSlideNum-3==mdSlideCurNum  ${mdSlideCurNum} `)
            mdSlideCurNum=mdSlideNum-4;
            return false;
        }

        if(mdSlideNum-4==mdSlideCurNum){
            target.classList.add('on');
            mdSlideWrap.style.transition= `1000ms`
            mdSlideWrap.style.transform=`translate(-${(mdSlideCurNum-1)*33.333}%)`;
            console.log(`mdSlideNum-4==mdSlideCurNum  ${mdSlideCurNum} `)
            mdSlideCurNum=mdSlideNum-5;
            return false;
        }
        console.log(`mdSlideCurNum : ${mdSlideCurNum}`)
        target.classList.add('on');
        mdSlideWrap.style.transition= `1000ms`
        mdSlideWrap.style.transform=`translate(-${(mdSlideCurNum-1)*33.333}%)`;
        mdSlideCurNum-=1;
    })
}


const mdNextBtn = document.querySelector('.md_next');
const mdPrevBtn = document.querySelector('.md_prev');

let mdClick = true;

mdNextBtn.addEventListener('click',()=>{
    if(mdClick){
    mdNextSlide();
    mdClick=false;
    return setTimeout(()=>{
        mdClick = true;
    },1001)
}})

mdPrevBtn.addEventListener('click',()=>{
    if(mdClick){
        mdPrevSlide();
        mdClick=false;
        return setTimeout(()=>{
            mdClick = true;
        },1001)
}})

let mdSlideGo = setInterval(() => {
    mdNextSlide()
}, 3000);


const mdStopBtn = document.querySelector('.md_slide_stop_go');

mdStopBtn.addEventListener('click',(e)=>{
    let target = e.target;
    let icon = document.querySelector('.md_slide_stop_go i svg')
    if(target.id =='stop'){
        
        icon.setAttribute('data-icon','pause')
        mdSlideGo = setInterval(
            mdNextSlide
            ,3000);
        target.id='go';
        return false;
    }
    target.id = 'stop';
    icon.setAttribute('data-icon','play')
    clearInterval(mdSlideGo);
    mdSlideGo=0;
    
})


