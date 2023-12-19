
let niceViewSlide = document.querySelectorAll(".popup-nice-view-slide");
var elem = document.documentElement;

Element.prototype.setAttributes = function (attrs) {
    for (var idx in attrs) {
        if ((idx == 'styles' || idx == 'style') && typeof attrs[idx] == 'object') {
            for (var prop in attrs[idx]){this.style[prop] = attrs[idx][prop]}
        } else if (idx == 'html') {
            this.innerHTML = attrs[idx]
        } else {
            this.setAttribute(idx, attrs[idx]);
        }
    }
}

function createPopUpNiceViewSlideImage(){
    let popUp = document.createElement("div")
    let spanClosePopUp = '<a href="javascript:;" id="closePopUpNiceView" class="nice-view-slide__close-pop-up" title="close">×</a>'
    let spanFullScreenPopUp = '<a href="javascript:;" id="fullScreenPopUpNiceView" class="nice-view-slide__full-screen-pop-up" onclick="btnFullScreen()" title="full screen"><img src="./images/popup/full-screen.png" alt="full screen"></a>'
    let spanExitFullScreenPopUp = '<a href="javascript:;" id="exitFullScreenPopUpNiceView" class="nice-view-slide__exit-full-screen-pop-up" onclick="btnFullScreen()" title="exit full screen" style="display:none"><img src="./images/popup/exit-full-screen.png" alt="exit full screen"></a>'
    let spanDownloadPopUp = '<a href="javascript:;" id="downloadPopUpNiceView" class="nice-view-slide__download-pop-up" title="download" ><img src="./images/popup/download.png" alt="download"></a>'
    let spanSharePopUp = '<a href="javascript:;" id="sharePopUpNiceView" class="nice-view-slide__share-pop-up" title="share"><img src="./images/popup/share.svg" alt="share"></a>'
    let popUpContent = document.createElement("div")
    let popUpContentSlideList = document.createElement("div")
    let popUpContentPageNumber = `<div class="nice-view-slide__pop-up-page-number"></div>`
    let popUpContentCaptionContainer = `<div class="nice-view-slide__pop-up-caption-container"><p id="myPopUpNiceSlideViewCaption"></p></div>`
    let popUpContentSlidePrev = `<a id="myPopUpNiceSlideViewPrev" class="nice-view-slide__pop-up-prev">&#10094;</a>`
    let popUpContentSlideNext = `<a id="myPopUpNiceSlideViewNext" class="nice-view-slide__pop-up-next">&#10095;</a>`
    let popUpContentShareList = `<ul id="popUpContentShareList" class="popup-nice-view-slide__share-list" style="display:none">
    <li id="popNiceViewShareToFb" class="popup-nice-view-slide__share-list-content"><a href="javascript:;" title="Facebook"><img src="./images/popup/fb.svg" alt="Facebook">Facebook</a></li>
    <li id="popNiceViewShareToTw" class="popup-nice-view-slide__share-list-content"><a href="javascript:;" title="Twitter"><img src="./images/popup/tw.svg" alt="Twitter">Twitter</a></li>
    <li id="popNiceViewShareToCopyLink" class="popup-nice-view-slide__share-list-content"><a href="javascript:;" title="Copy Link"><img src="./images/popup/copy-link.png" alt="Copy Link">Copy Link</a></li>
    </ul>`
    popUp.setAttributes({
            'id':'myPopUpNiceSlideView',
            'class':'nice-view-slide__pop-up'
        })
    popUpContent.setAttributes({
        'class':'nice-view-slide__pop-up-content'
    })
    popUpContentSlideList.setAttributes({
        'id':'popUpNiceSlideViewListSlides',
        'class':'nice-view-slide__pop-up-list-slides'
    })
    niceViewSlide.forEach(dt=>{
        if(dt.getAttribute('data-nice-view-src') == null || dt.getAttribute('data-nice-view-src') == '' || dt.getAttribute('data-nice-view-src') == undefined){
            alert('Attribute data-nice-view-src must be used')
            return false
        }
        popUpContentSlideList.innerHTML += `<div class="mySlidesNiceSlideView" data-desc="${dt.getAttribute('data-nice-view-desc') !== null ?dt.getAttribute('data-nice-view-desc'):''}" data-sh-link="${dt.getAttribute('data-nice-view-sh-link') !== null ?dt.getAttribute('data-nice-view-sh-link'):'#'}" data-src="${dt.getAttribute('data-nice-view-src')}">
        <img class="nice-view-slide__pop-up-content-file" src="${dt.getAttribute('data-nice-view-src')}">
      </div>`
    })
    popUpContent.innerHTML += popUpContentSlideList.outerHTML
    popUpContent.innerHTML += popUpContentPageNumber
    popUpContent.innerHTML += popUpContentCaptionContainer
    popUpContent.innerHTML += popUpContentSlidePrev
    popUpContent.innerHTML += popUpContentSlideNext
    popUp.innerHTML += spanClosePopUp
    popUp.innerHTML += spanFullScreenPopUp
    popUp.innerHTML += spanExitFullScreenPopUp
    popUp.innerHTML += spanDownloadPopUp
    popUp.innerHTML += spanSharePopUp
    popUp.innerHTML += popUpContentShareList
    popUp.innerHTML += popUpContent.outerHTML
    document.body.appendChild(popUp);
}

createPopUpNiceViewSlideImage()
let closePopUpNiceView = document.querySelector("#closePopUpNiceView")
const slideritems = document.querySelectorAll('#popUpNiceSlideViewListSlides .mySlidesNiceSlideView')
const prevSlider = document.querySelector('#myPopUpNiceSlideViewPrev')
const nextSlider = document.querySelector('#myPopUpNiceSlideViewNext')
const pageNumberPopUp = document.querySelector(".nice-view-slide__pop-up-page-number")
const pageCaptionPopUp = document.querySelector("#myPopUpNiceSlideViewCaption")

var Xposition = 0;
var XpositionMove = 0;
var XNewPosition = 0;
var slide = 0;
var XNewPositionFinal = 0;
var currentPosition = 0;
var itemWidth = slideritems[0].clientWidth;
var maxslide = itemWidth  * (slideritems.length - 1);
var slideNow = 0

function startSlide(val=null){
    itemWidth = slideritems[0].clientWidth;
    maxslide = itemWidth  * (slideritems.length - 1);
    slideritems.forEach((slideItem,idx) => {
        if(val != null){
            currentPosition = slideritems[val].getAttribute('data-width')
            if(parseInt(slideItem.getAttribute('data-width')) == currentPosition){
                slideItem.setAttribute('current',`true`);
                checkArrow(idx)
            }else{
                slideItem.setAttribute('current',`false`);
            }
        }else{
            slideItem.setAttribute('current',`false`);
        }
        slideItem.style.transition = `left .3s ease-in-out`;
        slideItem.style.left = `${currentPosition}px`;
        slideItem.setAttribute('data-idx',idx)
    })
    XNewPositionFinal = parseInt(currentPosition)
    Xposition = 0;
    XpositionMove = 0;
    XNewPosition = 0;
    slide = 0;
}

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

function btnFullScreen(){
    if(document.fullscreenElement){
        closeFullscreen()
        document.querySelector('#fullScreenPopUpNiceView').setAttribute('style','display:block')
        document.querySelector('#exitFullScreenPopUpNiceView').setAttribute('style','display:none')
    }else{
        openFullscreen()
        document.querySelector('#fullScreenPopUpNiceView').setAttribute('style','display:none')
        document.querySelector('#exitFullScreenPopUpNiceView').setAttribute('style','display:block')
    }
}

async function downloadImage(
    imageSrc,
    nameOfDownload,
  ) {
    const response = await fetch(imageSrc);
  
    const blobImage = await response.blob();
  
    const href = URL.createObjectURL(blobImage);
  
    const anchorElement = document.createElement('a');
    anchorElement.href = href;
    anchorElement.download = nameOfDownload;
  
    document.body.appendChild(anchorElement);
    anchorElement.click();
  
    document.body.removeChild(anchorElement);
    window.URL.revokeObjectURL(href);
}

document.querySelector('#downloadPopUpNiceView').addEventListener('click',(e)=>{
    e.preventDefault()
    let filename = document.querySelector('#downloadPopUpNiceView').getAttribute('data-src').replace(/^.*[\\\/]/, '');
    downloadImage(document.querySelector('#downloadPopUpNiceView').getAttribute('data-src'),Date.now()+'-'+filename)
})

let sharePopUpNiceView = document.querySelector('#sharePopUpNiceView'),
popUpContentShareList = document.querySelector('#popUpContentShareList'),
timerShareList;

function toggleShare(){
    if(popUpContentShareList.getAttribute('style') == 'display:none'){
        popUpContentShareList.setAttribute('style','display:block')
    }else{
        popUpContentShareList.setAttribute('style','display:none')
    }
}

const onClickOutside = (e) => {
    window.addEventListener("click",(event)=>{
            event.preventDefault()
            clearTimeout(timerShareList);
            timerShareList = setTimeout(()=>{
                if(e.type == 'mouseleave'){
                    if(popUpContentShareList.getAttribute('style') == 'display:block'){
                        popUpContentShareList.setAttribute('style','display:none')
                    }
                }
        },1)
    });
};

sharePopUpNiceView.addEventListener('click',(e)=>{
    e.preventDefault()
    toggleShare()
})

sharePopUpNiceView.addEventListener("mouseleave", onClickOutside);
sharePopUpNiceView.addEventListener("mouseenter", onClickOutside);
popUpContentShareList.addEventListener("mouseleave", onClickOutside);
popUpContentShareList.addEventListener("mouseenter", onClickOutside);

niceViewSlide.forEach((obj,idx) => {
    obj.addEventListener('click',(e)=>{
        e.preventDefault()
        document.getElementById("myPopUpNiceSlideView").style.display = "block";
        document.querySelector('.nice-view-slide__pop-up-list-slides').setAttribute('style',`width:calc(100% * ${slideritems.length})`)
        slideritems.forEach((slideItem,idx) => {
            if(idx > 0){
                slideItem.setAttribute('data-width','-'+slideItem.offsetWidth*idx)
            }else{
                slideItem.setAttribute('data-width','0')
            }
        })
        startSlide(idx)
    })
})

closePopUpNiceView.addEventListener('click',(e)=>{
    e.preventDefault()
    document.getElementById("myPopUpNiceSlideView").style.display = "none";
})

function startDragging(e){
    Xposition = e.pageX || e.touches[0].pageX;
    document.addEventListener('mousemove', startMove)
    document.addEventListener("touchmove", startMove);
    document.addEventListener('mouseup',dragging)
    document.addEventListener('touchend',dragging)
}

function checkArrow(moveSlide){
    pageNumberPopUp.innerHTML = `${moveSlide+1} / ${slideritems.length}`
    pageCaptionPopUp.innerHTML = slideritems[moveSlide].getAttribute('data-desc')
    document.querySelector('#downloadPopUpNiceView').setAttributes({
        'data-src':slideritems[moveSlide].getAttribute('data-src')
    })
    document.querySelector('#popNiceViewShareToFb').setAttributes({
        'href':'https://www.facebook.com/share.php?u='+slideritems[moveSlide].getAttribute('data-sh-link'),
    })
    document.querySelector('#popNiceViewShareToTw').setAttributes({
        'href':'https://twitter.com/intent/tweet?url='+slideritems[moveSlide].getAttribute('data-sh-link'),
    })
    document.querySelector('#popNiceViewShareToCopyLink').setAttributes({
        'data-link':slideritems[moveSlide].getAttribute('data-sh-link')
    })
    if(moveSlide == 0){
        prevSlider.style.display = 'none'
        return false
    }else if(moveSlide == (slideritems.length-1)){
        nextSlider.style.display = 'none'
        return false
    }else{
        prevSlider.style.display = 'block'
        nextSlider.style.display = 'block'
        return true
    }
}

document.querySelectorAll('.popup-nice-view-slide__share-list-content').forEach((obj)=>{
    if(obj.getAttribute('id') == 'popNiceViewShareToCopyLink'){
        obj.addEventListener('click',e=>{
            e.preventDefault()
            var dummy = document.createElement('input'),
                text = obj.getAttribute('data-link');
            document.body.appendChild(dummy);
            dummy.value = text;
            dummy.select();
            document.execCommand('copy');
            document.body.removeChild(dummy);
        })
    }else{
        obj.addEventListener('click',e=>{
            e.preventDefault()
            window.open(
                obj.getAttribute('href'),
                "myWindow",
                "status = 1, height = 760, width = 760, resizable = 0"
            )
        })
    }
})

function dragging(){
    document.removeEventListener('mousemove',startMove)
    document.removeEventListener('touchmove',startMove)
    XNewPositionFinal = parseInt(XNewPositionFinal) + parseInt(XNewPosition)
    if(slide < 0){
        /** Slide Next */
        if(Math.abs(slide) > 150 && Math.abs(currentPosition - itemWidth) <=  maxslide){
            currentPosition = parseInt(currentPosition) - parseInt(itemWidth)
        }
    }else{
        /** Slide Privous */
        if(Math.abs(slide) > 150  && Math.abs(currentPosition - itemWidth) >  itemWidth){
            currentPosition = parseInt(currentPosition) + parseInt(itemWidth)
        } 
    }

    slideritems.forEach((el,idx) => {
        el.style.transition = `left .3s ease-in-out`;
        el.style.left = `${currentPosition}px`
        if(parseInt(el.getAttribute('data-width')) == currentPosition){
            el.setAttribute('current',`true`);
            checkArrow(idx)
        }else{
            el.setAttribute('current',`false`);
        }
        setTimeout(()=>{
            el.style.transition = `none`;
        }, 800)
    })  
    /** Reset Variables */
    XNewPositionFinal = parseInt(currentPosition)
    Xposition = 0;
    XpositionMove = 0;
    XNewPosition = 0;
    slide = 0;
}

function startMove(e){
    e.preventDefault();
    XpositionMove = e.pageX || e.touches[0].pageX;
    slide = parseInt(XpositionMove) - parseInt(Xposition)
    XNewPosition = parseInt(XNewPositionFinal) + parseInt(slide)
    slideritems.forEach(el => {
        el.style.left = `${XNewPosition}px`
    })
}

function changeSlide(e,arrow){
    e.preventDefault();
    let moveSlide,elSlide;
    if(arrow == 'left'){
        slideritems.forEach((el,idx) => {
            if(idx > 0){
                if(el.getAttribute('current') == 'true'){
                    moveSlide = idx-1
                }
            }
        })
    }else{
        slideritems.forEach((el,idx) => {
            if(idx < (slideritems.length - 1)){
                if(el.getAttribute('current') == 'true'){
                    moveSlide = idx+1
                }
            }
        })
    }
    if(moveSlide != undefined){
        checkArrow(moveSlide)
        elSlide = parseInt(slideritems[moveSlide].getAttribute('data-width'))
        currentPosition = elSlide
        slideritems.forEach(el => {
            el.style.transition = `left .3s ease-in-out`;
            el.style.left = `${elSlide}px`
            if(parseInt(el.getAttribute('data-width')) == currentPosition){
                el.setAttribute('current',`true`);
            }else{
                el.setAttribute('current',`false`);
            }
        })
    }
    /** Reset Variables */
    XNewPositionFinal = parseInt(currentPosition)
    Xposition = 0;
    XpositionMove = 0;
    XNewPosition = 0;
    slide = 0;
}

function checkKey(e) {
    if (e.keyCode == '37') {
        changeSlide(e,'left')
    }
    else if (e.keyCode == '39') {
        changeSlide(e,'right')
    }
    else if (e.keyCode == '70') {
        btnFullScreen()
    }
}

prevSlider.addEventListener('click',function(e){changeSlide(e,'left')})
nextSlider.addEventListener('click',function(e){changeSlide(e,'right')})
document.onkeydown = checkKey;
slideritems.forEach(slideItem=> {
    slideItem.addEventListener('mousedown', startDragging)
    slideItem.addEventListener('touchstart', startDragging)
})
