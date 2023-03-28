const vtSlideWrap = document.querySelector('.vt_slideWrap');
const vtSlideItem = document.querySelectorAll('.vt_slideItem');
const vtSlideCount = vtSlideItem.length;
const vtSLideY = 100/vtSlideCount;
const vtDelay =  3000;
const vtSlideFirstChild = vtSlideWrap.firstElementChild;
const vtSlideLastChild = vtSlideWrap.lastElementChild;
const vtSLideFirstClone = vtSlideFirstChild.cloneNode(true)
const vtSLideLastClone = vtSlideLastChild.cloneNode(true)
vtSlideWrap.appendChild(vtSLideFirstClone);
vtSlideWrap.insertBefore(vtSLideLastClone,vtSlideFirstChild);
vtSlideWrap.style.transform= `translateY(-${1*100}%)`
let vtSlideNum = 0;

const vtSlide = ()=>{
    if(vtSlideNum==5){
        vtSlideWrap.style.transition= `${1000}ms`;
        vtSlideWrap.style.transform= `translateY(-${(vtSlideNum+1)*100}%)`;
        setTimeout(()=>{
            vtSlideWrap.style.transition= `0ms`;
            vtSlideWrap.style.transform= `translateY(-${1*100}%)`;
        },1000)
        vtSlideNum=1;
        return false;
    }
    vtSlideWrap.style.transition= `${1000}ms`;
    vtSlideWrap.style.transform= `translateY(-${(vtSlideNum+1)*100}%)`;
    vtSlideNum++;
}


setInterval(()=>{vtSlide()},vtDelay);
