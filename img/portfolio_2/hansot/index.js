//
const header = document.querySelector('#header');
const headerSub = document.querySelector('.header_sub');
const headerGnb = document.querySelector('.gnb');
const headerGnbMenuTit = document.querySelectorAll('.gnb_menu_tit');
const headerGnbMenuUl = document.querySelectorAll('.gnb_menu_deep > ul')
const headerLogo = document.querySelector('.logo h1');
window.addEventListener('scroll',()=>{
    if(scrollY>10){
        headerSub.style.display='none';
        header.style.background='#373737';
        headerGnb.style.height='60px';
        headerGnb.style.background='transparent';
        headerGnb.style.color='white';
        headerLogo.style.width
        headerLogo.style.background='url(images/bg_w_h1_logo.png) center center no-repeat';
        headerLogo.style.backgroundSize='100%';
        headerLogo.style.width='27px';
        headerLogo.style.height='28px';
        for(let key of headerGnbMenuTit){
            key.style.height='60px';
        }
        for(let key of headerGnbMenuUl){
            key.style.top='60px';
        }
    }else{
        headerSub.style.display='block';
        header.style.background='transparent';
        headerGnb.style.background='#fff';
        headerLogo.style.background='url(images/h1_logo.png) center center no-repeat';
        headerLogo.style.width='109px';
        headerLogo.style.height='46px';
        headerGnb.style.color='#373737';
        headerGnb.style.height='90px';
        for(let key of headerGnbMenuTit){
            key.style.height='90px';
        }
        for(let key of headerGnbMenuUl){
            key.style.top='90px';
        }
    }
    if(scrollY>500){
        header.style.display='none';
    }else{
        header.style.display='block';
    }
})








//슬라이드
const slideWrap = document.querySelector('.slide_wrap');
const slideItems = document.querySelectorAll('.slide_item');

//백그라운드 이미지 편하게 넣기
let slideBg = 1;
const slideCount = slideWrap.childElementCount;
for(let key of slideItems){
    key.style.width = `${100/(slideCount+1)}%`;
    key.style.background = `center/cover no-repeat url(images/slide0${slideBg}.jpg)`;
    slideBg++;
}
//루프 슬라이드를위한 맨앞에거 맨뒤로 보내기
const slideFirstItem = slideWrap.firstElementChild;
const slideFirstItemClone = slideFirstItem.cloneNode(true);
slideWrap.appendChild(slideFirstItemClone);


slideWrap.style.width = `${(slideCount+1)*100}%`;
const slideItemWidth = `${100/(slideCount+1)}`;


let slideCur = 0;
let delay = 3000;
let slideDelay = 1000;


//페이저
const slidePager = document.querySelector('.pager');
for(let i=1; i<= slideCount; i++){
    const slidePage = document.createElement('li');
    slidePage.setAttribute('class','slide_pager')
    slidePager.appendChild(slidePage);
}

const slidePage = document.querySelectorAll('.slide_pager');
let curPage = slidePage[slideCur];
curPage.classList.add('on');
const slideNext = ()=>{
    for(key of slidePage){
        key.classList.remove('on');
    }
    curPage = slidePage[++slideCur];
    
    if(slideCur==slideCount){
        slideWrap.style.transition = `${slideDelay}ms`;
        slideWrap.style.transform=`translateX(-${slideItemWidth*(slideCur)}%)`;
        slidePage[0].classList.add('on');
        slideCur=0;
        setTimeout(
            ()=>{
                slideWrap.style.transition = `0ms`;
                slideWrap.style.transform=`translateX(0%)`;
            },slideDelay)
        return false;
    }
    curPage.classList.add('on');
    slideWrap.style.transition = `${slideDelay}ms`;
    slideWrap.style.transform=`translateX(-${slideItemWidth*(slideCur)}%)`;
}


let autoPlay = 
    setInterval(
        slideNext,delay)

const goStop = document.querySelector('.slide_stop_go');
goStop.addEventListener('click', (e)=>{
    const target = e.target;
    if(target.classList.contains('stop')){
        target.classList.remove('stop');
        autoPlay = 
        setInterval(
            slideNext
        ,delay)

        return false;
    }
    target.classList.add('stop');
    clearInterval(autoPlay);
    autoPlay=0;
})


for(let i=0; i<slidePage.length; i++){
    slidePage[i].addEventListener('click',(e)=>{
        for(page of slidePage){
            page.classList.remove('on');
        }
        let target = e.target;
        target.classList.add('on');
        slideWrap.style.transition = `${slideDelay}ms`;
        slideWrap.style.transform=`translateX(-${slideItemWidth*i}%)`;
        slideCur=i;
        clearInterval(autoPlay);
        autoPlay=0;
        if(goStop.classList.contains('stop')){
            return false;
        }else{
            setTimeout(
                autoPlay = 
            setInterval(
                slideNext
            ,delay),300
            )
        }
    })
}

