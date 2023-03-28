const menuSlideWrap = document.querySelector('.menu_slide');
const menuSlideItem = document.querySelectorAll('.menu_item');
const menuSlideItemImg = document.querySelectorAll('.item_img');
const menuSlideBox = document.querySelector('.main_wrap');
const menuFirstItem = menuSlideWrap.firstElementChild;
const menuLastItem = menuSlideWrap.lastElementChild;



document.querySelector('.menu_slide_max').innerHTML=menuSlideWrap.childElementCount;
let menuItemImg =1;
for(key of menuSlideItemImg){
    key.style.background=`center / cover no-repeat url(menu${menuItemImg++}.jpg)`;
}
const menuFirstItemClone = menuFirstItem.cloneNode(true);
const menuSecondItemClone = menuSlideItem[1].cloneNode(true);
const menuLastItemClone = menuLastItem.cloneNode(true);
const menuLastSecondItemClone = menuSlideItem[6].cloneNode(true);
menuSlideWrap.insertBefore(menuLastSecondItemClone,menuFirstItem)
menuSlideWrap.insertBefore(menuLastItemClone,menuFirstItem)
menuSlideWrap.appendChild(menuFirstItemClone);
menuSlideWrap.appendChild(menuSecondItemClone);
const menuSlideNum = menuSlideWrap.childElementCount;


const menuSlidepagerBox = document.querySelector('.menu_pager_box');

for(i=0; i<menuSlideWrap.childElementCount-4; i++){
    const menuSlidepager = document.createElement('li');
    menuSlidepagerBox.appendChild(menuSlidepager);
    menuSlidepager.setAttribute('class','menu_pager');
    menuSlidepager.setAttribute('value',i+2);
}


const menuSlidepager = document.querySelectorAll('.menu_pager');
let menuSlideCurNum=2;


let menuNum = document.querySelector('.menu_slide_cur');


menuSlideWrap.style.transform=`translate(-${menuSlideCurNum*33.333}%)`;
const menuNextSlide = ()=>{
    
    for(key of menuSlidepager){
        key.classList.remove('on');
    }
    if(menuSlideCurNum==menuSlideNum-4){
        menuSlidepager[menuSlideCurNum-1].classList.add('on');
        menuSlideWrap.style.transition= `1000ms`
        menuSlideWrap.style.transform=`translate(-${(menuSlideCurNum+1)*33.333}%)`;
        setTimeout(()=>{
            menuSlideWrap.style.transition= `0ms`;
            menuSlideWrap.style.transform=`translate(-${(1)*33.333}%)`;
        },1000);
        menuNum.innerHTML = menuSlideCurNum;
        menuSlideCurNum=1;
        return false;
    }
    if(menuSlideCurNum==1 || menuSlideCurNum==menuSlideNum-3){
        menuSlideCurNum=1;
        menuSlideWrap.style.transition= `0ms`;
        menuSlideWrap.style.transform=`translate(-${(menuSlideCurNum)*33.333}%)`;
        menuSlidepager[menuSlideCurNum-1].classList.add('on');
        setTimeout(()=>{
            menuSlideWrap.style.transition= `1000ms`
            menuSlideWrap.style.transform=`translate(-${(menuSlideCurNum)*33.333}%)`;
        },1)
        menuNum.innerHTML = menuSlideCurNum;
        menuSlideCurNum++;
        return false;

    }
    menuNum.innerHTML = menuSlideCurNum;
    menuSlidepager[menuSlideCurNum-1].classList.add('on');
    menuSlideWrap.style.transition= `1000ms`
    menuSlideWrap.style.transform=`translate(-${(menuSlideCurNum+1)*33.333}%)`;
    menuSlideCurNum++;
}


const menuPrevSlide = ()=>{
    menuSlideCurNum--;
    for(key of menuSlidepager){
        key.classList.remove('on');
    }
    if(menuSlideCurNum<=1){
            menuSlidepager[menuSlideCurNum+6].classList.add('on');
            menuSlideWrap.style.transition= `1000ms`
            menuSlideWrap.style.transform=`translate(-${(menuSlideCurNum)*33.333}%)`;
            menuSlideCurNum=9;
            menuNum.innerHTML = menuSlideCurNum-1;
            setTimeout(()=>{
                menuSlideWrap.style.transition= `0ms`
                menuSlideWrap.style.transform=`translate(-${(menuSlideCurNum)*33.333}%)`;
            },1001)
            return false;
    }
    menuSlideWrap.style.transition= `1000ms`
    menuSlideWrap.style.transform=`translate(-${menuSlideCurNum*33.333}%)`;

    if(menuSlideCurNum==1){
        menuSlidepager[menuSlideCurNum+6].classList.add('on');
        return false;
    }
    menuSlidepager[menuSlideCurNum-2].classList.add('on');
    menuNum.innerHTML = menuSlideCurNum-1;
}

menuSlidepager[0].classList.add('on');

for(key of menuSlidepager){

    key.addEventListener('click',(e)=>{
        const target = e.target;
        menuNum.innerHTML = target.value-1;
        if(target.classList.contains('on')){
            return false;
        }
        for(key of menuSlidepager){
            key.classList.remove('on');
        }
        menuSlideCurNum=target.value+1;

        if(menuSlideNum-3==menuSlideCurNum){
            target.classList.add('on');
            menuSlideWrap.style.transition= `1000ms`
            menuSlideWrap.style.transform=`translate(-${(menuSlideCurNum-1)*33.333}%)`;
            console.log(`menuSlideNum-3==menuSlideCurNum  ${menuSlideCurNum} `)
            menuSlideCurNum=menuSlideNum-4;
            return false;
        }

        if(menuSlideNum-4==menuSlideCurNum){
            target.classList.add('on');
            menuSlideWrap.style.transition= `1000ms`
            menuSlideWrap.style.transform=`translate(-${(menuSlideCurNum-1)*33.333}%)`;
            console.log(`menuSlideNum-4==menuSlideCurNum  ${menuSlideCurNum} `)
            menuSlideCurNum=menuSlideNum-5;
            return false;
        }
        target.classList.add('on');
        menuSlideWrap.style.transition= `1000ms`
        menuSlideWrap.style.transform=`translate(-${(menuSlideCurNum-1)*33.333}%)`;
        menuSlideCurNum-=1;
    })
}


const menuNextBtn = document.querySelector('.menu_next');
const menuPrevBtn = document.querySelector('.menu_prev');

let click = true;

menuNextBtn.addEventListener('click',()=>{
    if(click){
    menuNextSlide();
    click=false;
    return setTimeout(()=>{
        click = true;
    },1001)
}})

menuPrevBtn.addEventListener('click',()=>{
    if(click){
        menuPrevSlide();
        click=false;
        return setTimeout(()=>{
            click = true;
        },1001)
}})

let menuSlideGo = setInterval(() => {
    menuNextSlide()
}, 3000);


const menuStopBtn = document.querySelector('.menu_slide_stop_go');

menuStopBtn.addEventListener('click',(e)=>{
    let target = e.target;
    let icon = document.querySelector('.menu_slide_stop_go i svg')
    if(target.id =='stop'){
        
        icon.setAttribute('data-icon','pause')
        menuSlideGo = setInterval(
            menuNextSlide
            ,3000);
        target.id='go';
        return false;
    }
    target.id = 'stop';
    icon.setAttribute('data-icon','play')
    clearInterval(menuSlideGo);
    menuSlideGo=0;
    
})


