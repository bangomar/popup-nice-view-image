
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
    let spanClosePopUp = `<a href="javascript:;" id="closePopUpNiceView" class="nice-view-slide__close-pop-up" title="close"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 4.667969 2.667969 C 4.496094 2.667969 4.324219 2.730469 4.195312 2.863281 L 2.863281 4.195312 C 2.601562 4.457031 2.601562 4.878906 2.863281 5.136719 L 7.722656 10 L 2.863281 14.863281 C 2.601562 15.121094 2.601562 15.542969 2.863281 15.804688 L 4.195312 17.136719 C 4.457031 17.398438 4.878906 17.398438 5.136719 17.136719 L 10 12.277344 L 14.863281 17.136719 C 15.121094 17.398438 15.542969 17.398438 15.804688 17.136719 L 17.136719 15.804688 C 17.398438 15.542969 17.398438 15.121094 17.136719 14.863281 L 12.277344 10 L 17.136719 5.136719 C 17.398438 4.878906 17.398438 4.457031 17.136719 4.195312 L 15.804688 2.863281 C 15.542969 2.601562 15.121094 2.601562 14.863281 2.863281 L 10 7.722656 L 5.136719 2.863281 C 5.007812 2.730469 4.835938 2.667969 4.667969 2.667969 Z M 4.667969 2.667969 "/>
    </svg></a>`
    let spanFullScreenPopUp = `<a href="javascript:;" id="fullScreenPopUpNiceView" class="nice-view-slide__full-screen-pop-up" onclick="btnFullScreen()" title="full screen"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 16.800781 12.800781 C 17.0625 12.800781 17.328125 12.800781 17.601562 12.800781 C 17.601562 14.515625 17.601562 16.230469 17.601562 18 C 15.882812 18 14.167969 18 12.398438 18 C 12.398438 17.734375 12.398438 17.472656 12.398438 17.199219 C 13.851562 17.199219 15.304688 17.199219 16.800781 17.199219 C 16.800781 15.746094 16.800781 14.296875 16.800781 12.800781 Z M 16.800781 12.800781 "/>
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 2.398438 12.800781 C 2.664062 12.800781 2.929688 12.800781 3.199219 12.800781 C 3.199219 14.253906 3.199219 15.703125 3.199219 17.199219 C 4.652344 17.199219 6.105469 17.199219 7.601562 17.199219 C 7.601562 17.464844 7.601562 17.726562 7.601562 18 C 5.882812 18 4.167969 18 2.398438 18 C 2.398438 16.285156 2.398438 14.566406 2.398438 12.800781 Z M 2.398438 12.800781 "/>
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 12.398438 2.398438 C 14.117188 2.398438 15.832031 2.398438 17.601562 2.398438 C 17.601562 4.117188 17.601562 5.832031 17.601562 7.601562 C 17.335938 7.601562 17.070312 7.601562 16.800781 7.601562 C 16.800781 6.148438 16.800781 4.695312 16.800781 3.199219 C 15.347656 3.199219 13.894531 3.199219 12.398438 3.199219 C 12.398438 2.9375 12.398438 2.671875 12.398438 2.398438 Z M 12.398438 2.398438 "/>
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 2.398438 2.398438 C 4.117188 2.398438 5.832031 2.398438 7.601562 2.398438 C 7.601562 2.664062 7.601562 2.929688 7.601562 3.199219 C 6.148438 3.199219 4.695312 3.199219 3.199219 3.199219 C 3.199219 4.652344 3.199219 6.105469 3.199219 7.601562 C 2.9375 7.601562 2.671875 7.601562 2.398438 7.601562 C 2.398438 5.882812 2.398438 4.167969 2.398438 2.398438 Z M 2.398438 2.398438 "/>
    </svg></a>`
    let spanExitFullScreenPopUp = `<a href="javascript:;" id="exitFullScreenPopUpNiceView" class="nice-view-slide__exit-full-screen-pop-up" onclick="btnFullScreen()" title="exit full screen" style="display:none"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 11.28125 11.28125 C 12.972656 11.28125 14.667969 11.28125 16.410156 11.28125 C 16.496094 11.621094 16.578125 11.957031 16.667969 12.308594 C 16.152344 12.820312 16.152344 12.820312 15.375 12.871094 C 15.070312 12.863281 14.769531 12.859375 14.457031 12.851562 C 14.148438 12.847656 13.84375 12.84375 13.53125 12.839844 C 13.296875 12.832031 13.0625 12.828125 12.820312 12.820312 C 12.828125 13.054688 12.832031 13.289062 12.839844 13.53125 C 12.84375 13.835938 12.847656 14.140625 12.851562 14.457031 C 12.859375 14.757812 12.863281 15.0625 12.871094 15.375 C 12.820312 16.152344 12.820312 16.152344 12.308594 16.667969 C 11.96875 16.582031 11.628906 16.496094 11.28125 16.410156 C 11.28125 14.71875 11.28125 13.027344 11.28125 11.28125 Z M 11.28125 11.28125 "/>
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 3.589844 11.28125 C 5.28125 11.28125 6.972656 11.28125 8.71875 11.28125 C 8.71875 12.972656 8.71875 14.667969 8.71875 16.410156 C 8.378906 16.496094 8.042969 16.578125 7.691406 16.667969 C 7.179688 16.152344 7.179688 16.152344 7.128906 15.375 C 7.136719 15.070312 7.140625 14.769531 7.148438 14.457031 C 7.152344 14.148438 7.15625 13.84375 7.160156 13.53125 C 7.167969 13.296875 7.171875 13.0625 7.179688 12.820312 C 6.945312 12.828125 6.710938 12.832031 6.46875 12.839844 C 6.011719 12.84375 6.011719 12.84375 5.542969 12.851562 C 5.089844 12.863281 5.089844 12.863281 4.625 12.871094 C 3.847656 12.820312 3.847656 12.820312 3.332031 12.308594 C 3.417969 11.96875 3.503906 11.628906 3.589844 11.28125 Z M 3.589844 11.28125 "/>
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 11.539062 3.332031 C 12.484375 3.511719 12.484375 3.511719 12.820312 3.847656 C 12.839844 4.40625 12.84375 4.96875 12.835938 5.527344 C 12.835938 5.835938 12.832031 6.144531 12.828125 6.460938 C 12.828125 6.695312 12.824219 6.933594 12.820312 7.179688 C 13.171875 7.171875 13.171875 7.171875 13.53125 7.160156 C 13.835938 7.15625 14.140625 7.152344 14.457031 7.148438 C 14.757812 7.140625 15.0625 7.136719 15.375 7.128906 C 16.152344 7.179688 16.152344 7.179688 16.667969 7.691406 C 16.582031 8.03125 16.496094 8.371094 16.410156 8.71875 C 14.71875 8.71875 13.027344 8.71875 11.28125 8.71875 C 11.277344 7.878906 11.269531 7.035156 11.265625 6.167969 C 11.265625 5.90625 11.261719 5.640625 11.257812 5.367188 C 11.257812 5.054688 11.257812 5.054688 11.257812 4.738281 C 11.253906 4.523438 11.253906 4.308594 11.253906 4.089844 C 11.28125 3.589844 11.28125 3.589844 11.539062 3.332031 Z M 11.539062 3.332031 "/>
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 7.691406 3.332031 C 8.03125 3.417969 8.371094 3.503906 8.71875 3.589844 C 8.71875 5.28125 8.71875 6.972656 8.71875 8.71875 C 7.027344 8.71875 5.332031 8.71875 3.589844 8.71875 C 3.503906 8.378906 3.421875 8.042969 3.332031 7.691406 C 3.847656 7.179688 3.847656 7.179688 4.625 7.128906 C 5.082031 7.136719 5.082031 7.136719 5.542969 7.148438 C 6.003906 7.15625 6.003906 7.15625 6.46875 7.160156 C 6.703125 7.167969 6.9375 7.171875 7.179688 7.179688 C 7.171875 6.945312 7.167969 6.710938 7.160156 6.46875 C 7.15625 6.164062 7.152344 5.859375 7.148438 5.542969 C 7.140625 5.242188 7.136719 4.9375 7.128906 4.625 C 7.179688 3.847656 7.179688 3.847656 7.691406 3.332031 Z M 7.691406 3.332031 "/>
    </svg></a>`
    let spanDownloadPopUp = `<a href="javascript:;" id="downloadPopUpNiceView" class="nice-view-slide__download-pop-up" title="download" ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 3.125 12.5 C 3.539062 12.5 3.949219 12.5 4.375 12.5 C 4.375 13.53125 4.375 14.5625 4.375 15.625 C 8.085938 15.625 11.800781 15.625 15.625 15.625 C 15.625 14.59375 15.625 13.5625 15.625 12.5 C 16.039062 12.5 16.449219 12.5 16.875 12.5 C 16.875 13.945312 16.875 15.386719 16.875 16.875 C 12.335938 16.875 7.800781 16.875 3.125 16.875 C 3.125 15.429688 3.125 13.988281 3.125 12.5 Z M 3.125 12.5 "/>
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 9.375 3.125 C 9.789062 3.125 10.199219 3.125 10.625 3.125 C 10.726562 5.1875 10.832031 7.25 10.9375 9.375 C 11.144531 9.167969 11.351562 8.960938 11.5625 8.75 C 11.976562 8.75 12.386719 8.75 12.8125 8.75 C 12.730469 10.171875 12.140625 10.910156 11.128906 11.839844 C 10.625 12.1875 10.625 12.1875 9.84375 12.265625 C 8.761719 11.722656 7.875 11.007812 7.1875 10 C 7.1875 9.585938 7.1875 9.175781 7.1875 8.75 C 8.710938 9.023438 8.710938 9.023438 9.0625 9.375 C 9.164062 7.3125 9.269531 5.25 9.375 3.125 Z M 9.375 3.125 "/>
    </svg>
    </a>`
    let spanSharePopUp = `<a href="javascript:;" id="sharePopUpNiceView" class="nice-view-slide__share-pop-up" title="share"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 15 1.667969 C 13.621094 1.667969 12.5 2.785156 12.5 4.167969 C 12.5 4.324219 12.515625 4.480469 12.546875 4.632812 L 6.617188 8.09375 C 6.164062 7.710938 5.59375 7.5 5 7.5 C 3.621094 7.5 2.5 8.621094 2.5 10 C 2.5 11.378906 3.621094 12.5 5 12.5 C 5.589844 12.5 6.164062 12.289062 6.613281 11.90625 L 12.546875 15.367188 C 12.515625 15.519531 12.5 15.675781 12.5 15.832031 C 12.5 17.214844 13.621094 18.332031 15 18.332031 C 16.378906 18.332031 17.5 17.214844 17.5 15.832031 C 17.5 14.453125 16.378906 13.332031 15 13.332031 C 14.410156 13.335938 13.835938 13.542969 13.386719 13.925781 L 7.453125 10.46875 C 7.484375 10.3125 7.5 10.15625 7.5 10 C 7.5 9.84375 7.484375 9.6875 7.453125 9.53125 L 13.382812 6.074219 C 13.835938 6.457031 14.40625 6.667969 15 6.667969 C 16.378906 6.667969 17.5 5.546875 17.5 4.167969 C 17.5 2.785156 16.378906 1.667969 15 1.667969 Z M 15 1.667969 "/>
    </svg></a>`
    let popUpContent = document.createElement("div")
    let popUpContentSlideList = document.createElement("div")
    let popUpContentPageNumber = `<div class="nice-view-slide__pop-up-page-number"></div>`
    let popUpContentCaptionContainer = `<div class="nice-view-slide__pop-up-caption-container"><p id="myPopUpNiceSlideViewCaption"></p></div>`
    let popUpContentSlidePrev = `<a id="myPopUpNiceSlideViewPrev" class="nice-view-slide__pop-up-prev">&#10094;</a>`
    let popUpContentSlideNext = `<a id="myPopUpNiceSlideViewNext" class="nice-view-slide__pop-up-next">&#10095;</a>`
    let popUpContentShareList = `<ul id="popUpContentShareList" class="popup-nice-view-slide__share-list" style="display:none">
    <li id="popNiceViewShareToFb" class="popup-nice-view-slide__share-list-content"><a href="javascript:;" title="Facebook"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(1.176471%,60.784314%,89.803922%);fill-opacity:1;" d="M 10 2.082031 C 5.628906 2.082031 2.082031 5.628906 2.082031 10 C 2.082031 14.371094 5.628906 17.917969 10 17.917969 C 14.371094 17.917969 17.917969 14.371094 17.917969 10 C 17.917969 5.628906 14.371094 2.082031 10 2.082031 Z M 10 2.082031 "/>
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 11.070312 12.097656 L 13.121094 12.097656 L 13.441406 10.015625 L 11.070312 10.015625 L 11.070312 8.878906 C 11.070312 8.015625 11.355469 7.25 12.164062 7.25 L 13.460938 7.25 L 13.460938 5.433594 C 13.234375 5.402344 12.75 5.332031 11.839844 5.332031 C 9.933594 5.332031 8.816406 6.339844 8.816406 8.632812 L 8.816406 10.015625 L 6.855469 10.015625 L 6.855469 12.097656 L 8.816406 12.097656 L 8.816406 17.820312 C 9.203125 17.878906 9.597656 17.917969 10 17.917969 C 10.363281 17.917969 10.71875 17.882812 11.070312 17.835938 Z M 11.070312 12.097656 "/>
    </svg>Facebook</a></li>
    <li id="popNiceViewShareToTw" class="popup-nice-view-slide__share-list-content"><a href="javascript:;" title="Twitter"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
    <path style=" stroke:none;fill-rule:evenodd;fill:rgb(12.941176%,12.941176%,12.941176%);fill-opacity:1;" d="M 15.832031 17.5 L 4.167969 17.5 C 3.246094 17.5 2.5 16.753906 2.5 15.832031 L 2.5 4.167969 C 2.5 3.246094 3.246094 2.5 4.167969 2.5 L 15.832031 2.5 C 16.753906 2.5 17.5 3.246094 17.5 4.167969 L 17.5 15.832031 C 17.5 16.753906 16.753906 17.5 15.832031 17.5 Z M 15.832031 17.5 "/>
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 14.273438 14.167969 L 11.589844 14.167969 L 5.761719 5.832031 L 8.445312 5.832031 Z M 11.910156 13.460938 L 12.980469 13.460938 L 8.125 6.539062 L 7.058594 6.539062 Z M 11.910156 13.460938 "/>
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 6.609375 14.167969 L 9.613281 10.691406 L 9.21875 10.167969 L 5.757812 14.167969 Z M 6.609375 14.167969 "/>
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 10.1875 9.050781 L 10.566406 9.585938 L 13.808594 5.832031 L 12.972656 5.832031 Z M 10.1875 9.050781 "/>
    </svg>Twitter</a></li>
    <li id="popNiceViewShareToCopyLink" class="popup-nice-view-slide__share-list-content"><a href="javascript:;" title="Copy Link"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(72.941176%,72.54902%,72.156863%);fill-opacity:1;" d="M 16.667969 0.832031 C 18.15625 1.878906 18.660156 2.519531 19.0625 4.296875 C 18.625 6.457031 17.464844 7.726562 15.832031 9.167969 C 14.277344 10.121094 13.054688 10 11.25 10 C 10.976562 10.273438 10.699219 10.550781 10.417969 10.832031 C 10.433594 11.28125 10.449219 11.726562 10.46875 12.1875 C 10.390625 14.542969 9.230469 15.871094 7.578125 17.449219 C 5.972656 18.515625 5.222656 18.675781 3.332031 18.332031 C 1.84375 17.285156 1.339844 16.648438 0.9375 14.871094 C 1.375 12.710938 2.535156 11.441406 4.167969 10 C 5.722656 9.046875 6.945312 9.167969 8.75 9.167969 C 9.023438 8.890625 9.300781 8.617188 9.582031 8.332031 C 9.566406 7.886719 9.550781 7.441406 9.53125 6.980469 C 9.609375 4.625 10.769531 3.292969 12.421875 1.71875 C 14.027344 0.648438 14.777344 0.488281 16.667969 0.832031 Z M 13.875 3.554688 C 13.554688 3.960938 13.554688 3.960938 13.230469 4.375 C 13.011719 4.644531 12.796875 4.917969 12.570312 5.195312 C 12.410156 5.40625 12.25 5.617188 12.082031 5.832031 C 12.496094 5.972656 12.910156 6.109375 13.332031 6.25 C 13.746094 6.867188 13.746094 6.867188 14.167969 7.5 C 15.082031 6.726562 15.9375 5.957031 16.667969 5 C 16.683594 3.828125 16.683594 3.828125 16.25 2.917969 C 14.628906 2.730469 14.628906 2.730469 13.875 3.554688 Z M 5.832031 11.667969 C 4.917969 12.441406 4.0625 13.210938 3.332031 14.167969 C 3.316406 15.339844 3.316406 15.339844 3.75 16.25 C 4.878906 16.183594 5.609375 16.050781 6.4375 15.25 C 6.949219 14.625 7.433594 13.980469 7.917969 13.332031 C 7.503906 13.195312 7.089844 13.058594 6.667969 12.917969 C 6.390625 12.503906 6.117188 12.089844 5.832031 11.667969 Z M 5.832031 11.667969 "/>
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(50.980392%,50.588235%,50.588235%);fill-opacity:1;" d="M 18.332031 2.917969 C 18.472656 2.917969 18.609375 2.917969 18.75 2.917969 C 18.980469 4.507812 19.050781 5.371094 18.160156 6.738281 C 16.960938 8.140625 15.914062 9.324219 14.167969 10 C 13.195312 10 12.222656 10 11.25 10 C 10.976562 10.273438 10.699219 10.550781 10.417969 10.832031 C 10.433594 11.28125 10.449219 11.726562 10.46875 12.1875 C 10.390625 14.542969 9.230469 15.871094 7.578125 17.449219 C 5.972656 18.515625 5.222656 18.675781 3.332031 18.332031 C 2.109375 17.449219 2.109375 17.449219 1.25 16.25 C 1.121094 14.871094 1.121094 14.871094 1.25 13.75 C 1.386719 13.75 1.523438 13.75 1.667969 13.75 C 1.777344 14.214844 1.890625 14.679688 2.003906 15.15625 C 2.359375 16.757812 2.359375 16.757812 3.75 17.5 C 5.449219 17.464844 6.109375 17.207031 7.394531 16.066406 C 7.707031 15.714844 8.015625 15.363281 8.332031 15 C 8.609375 14.726562 8.882812 14.449219 9.167969 14.167969 C 9.433594 13.304688 9.433594 13.304688 9.582031 12.5 C 8.324219 13.191406 8.324219 13.191406 7.941406 14.113281 C 7.378906 15.238281 6.828125 15.894531 5.832031 16.667969 C 4.53125 16.824219 4.53125 16.824219 3.332031 16.667969 C 2.5 15.832031 2.5 15.832031 2.316406 14.84375 C 2.5 13.75 2.5 13.75 3.488281 12.863281 C 3.851562 12.605469 4.210938 12.347656 4.582031 12.082031 C 4.859375 11.671875 5.132812 11.257812 5.417969 10.832031 C 6.511719 10.753906 6.511719 10.753906 7.5 10.832031 C 7.363281 11.382812 7.226562 11.933594 7.082031 12.5 C 7.300781 12.308594 7.515625 12.117188 7.738281 11.921875 C 8.03125 11.664062 8.320312 11.410156 8.621094 11.144531 C 8.921875 10.878906 9.226562 10.613281 9.539062 10.335938 C 10.214844 9.753906 10.921875 9.207031 11.640625 8.671875 C 12.5625 7.863281 12.789062 7.453125 12.917969 6.25 C 12.640625 6.113281 12.367188 5.976562 12.082031 5.832031 C 12.890625 5.988281 12.890625 5.988281 13.75 6.25 C 13.886719 6.523438 14.023438 6.800781 14.167969 7.082031 C 14.992188 6.394531 15.816406 5.707031 16.667969 5 C 16.066406 6.402344 15.332031 7.34375 14.167969 8.332031 C 13.753906 8.332031 13.339844 8.332031 12.917969 8.332031 C 12.917969 8.609375 12.917969 8.882812 12.917969 9.167969 C 15.171875 8.253906 16.582031 7 17.917969 5 C 18.308594 3.851562 18.308594 3.851562 18.332031 2.917969 Z M 5.832031 11.667969 C 4.917969 12.441406 4.0625 13.210938 3.332031 14.167969 C 3.316406 15.339844 3.316406 15.339844 3.75 16.25 C 4.878906 16.183594 5.609375 16.050781 6.4375 15.25 C 6.949219 14.625 7.433594 13.980469 7.917969 13.332031 C 7.503906 13.195312 7.089844 13.058594 6.667969 12.917969 C 6.390625 12.503906 6.117188 12.089844 5.832031 11.667969 Z M 5.832031 11.667969 "/>
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(52.941176%,52.941176%,52.54902%);fill-opacity:1;" d="M 18.332031 2.917969 C 18.472656 2.917969 18.609375 2.917969 18.75 2.917969 C 18.980469 4.507812 19.050781 5.371094 18.160156 6.738281 C 16.960938 8.136719 15.914062 9.328125 14.167969 10 C 13.675781 9.992188 13.1875 9.984375 12.683594 9.972656 C 11.269531 9.855469 11.269531 9.855469 10.441406 10.625 C 10.296875 10.832031 10.152344 11.039062 10 11.25 C 9.726562 11.113281 9.449219 10.976562 9.167969 10.832031 C 9.402344 10.640625 9.636719 10.449219 9.882812 10.253906 C 10.339844 9.871094 10.339844 9.871094 10.808594 9.480469 C 11.113281 9.226562 11.417969 8.976562 11.730469 8.71875 C 12.542969 7.871094 12.757812 7.394531 12.917969 6.25 C 12.640625 6.113281 12.367188 5.976562 12.082031 5.832031 C 12.890625 5.988281 12.890625 5.988281 13.75 6.25 C 13.886719 6.523438 14.023438 6.800781 14.167969 7.082031 C 14.992188 6.394531 15.816406 5.707031 16.667969 5 C 16.066406 6.402344 15.332031 7.34375 14.167969 8.332031 C 13.753906 8.332031 13.339844 8.332031 12.917969 8.332031 C 12.917969 8.609375 12.917969 8.882812 12.917969 9.167969 C 15.171875 8.253906 16.582031 7 17.917969 5 C 18.308594 3.851562 18.308594 3.851562 18.332031 2.917969 Z M 18.332031 2.917969 "/>
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(60.784314%,60.784314%,60.392157%);fill-opacity:1;" d="M 5.417969 10.832031 C 6.511719 10.753906 6.511719 10.753906 7.5 10.832031 C 7.363281 11.382812 7.226562 11.933594 7.082031 12.5 C 6.535156 12.5 5.984375 12.5 5.417969 12.5 C 4.445312 13.195312 4.445312 13.195312 3.75 14.167969 C 3.75 14.714844 3.75 15.265625 3.75 15.832031 C 5.851562 15.648438 6.824219 14.703125 8.332031 13.332031 C 7.730469 14.742188 7.050781 15.722656 5.832031 16.667969 C 4.53125 16.824219 4.53125 16.824219 3.332031 16.667969 C 2.5 15.832031 2.5 15.832031 2.316406 14.84375 C 2.5 13.75 2.5 13.75 3.488281 12.863281 C 3.851562 12.605469 4.210938 12.347656 4.582031 12.082031 C 4.859375 11.671875 5.132812 11.257812 5.417969 10.832031 Z M 5.417969 10.832031 "/>
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(86.666667%,86.27451%,86.27451%);fill-opacity:1;" d="M 11.667969 6.25 C 12.078125 6.25 12.492188 6.25 12.917969 6.25 C 12.738281 8.257812 11.964844 9.019531 10.46875 10.3125 C 10.101562 10.636719 9.730469 10.960938 9.351562 11.296875 C 8.332031 12.082031 8.332031 12.082031 7.082031 12.5 C 7.136719 11.796875 7.136719 11.796875 7.5 10.832031 C 8.109375 10.320312 8.71875 9.808594 9.351562 9.320312 C 10.128906 8.6875 10.128906 8.6875 10.910156 7.371094 C 11.160156 7 11.410156 6.628906 11.667969 6.25 Z M 11.667969 6.25 "/>
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(64.705882%,64.313725%,63.921569%);fill-opacity:1;" d="M 16.25 2.5 C 15.914062 2.628906 15.914062 2.628906 15.574219 2.761719 C 13.414062 4.011719 12.082031 5.792969 10.832031 7.917969 C 10.558594 7.917969 10.285156 7.917969 10 7.917969 C 9.738281 6.71875 9.738281 6.71875 9.582031 5.417969 C 9.859375 5.140625 10.132812 4.867188 10.417969 4.582031 C 10.554688 4.859375 10.691406 5.132812 10.832031 5.417969 C 11.050781 5.207031 11.265625 4.996094 11.488281 4.777344 C 11.78125 4.507812 12.070312 4.238281 12.371094 3.957031 C 12.796875 3.550781 12.796875 3.550781 13.234375 3.136719 C 14.335938 2.382812 14.941406 2.371094 16.25 2.5 Z M 16.25 2.5 "/>
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(69.803922%,69.803922%,69.411765%);fill-opacity:1;" d="M 17.917969 2.082031 C 18.054688 2.082031 18.191406 2.082031 18.332031 2.082031 C 18.484375 4.730469 18.484375 4.730469 17.761719 6.015625 C 17.082031 6.667969 17.082031 6.667969 16.25 6.667969 C 16.136719 6.925781 16.027344 7.183594 15.910156 7.449219 C 15.417969 8.332031 15.417969 8.332031 14.167969 9.167969 C 13.753906 9.167969 13.339844 9.167969 12.917969 9.167969 C 12.917969 8.890625 12.917969 8.617188 12.917969 8.332031 C 13.605469 7.90625 14.300781 7.492188 15 7.082031 C 16.238281 6.109375 16.457031 5.296875 16.667969 3.75 C 16.941406 4.023438 17.214844 4.300781 17.5 4.582031 C 17.636719 3.757812 17.773438 2.933594 17.917969 2.082031 Z M 17.917969 2.082031 "/>
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(50.588235%,50.588235%,50.196078%);fill-opacity:1;" d="M 18.332031 2.917969 C 18.472656 2.917969 18.609375 2.917969 18.75 2.917969 C 18.980469 4.488281 19.027344 5.371094 18.203125 6.753906 C 17.03125 8.203125 16.097656 9.3125 14.191406 9.582031 C 13.773438 9.582031 13.351562 9.582031 12.917969 9.582031 C 13.328125 9.308594 13.742188 9.035156 14.167969 8.75 C 16.457031 7.03125 17.863281 5.800781 18.332031 2.917969 Z M 18.332031 2.917969 "/>
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(80.392157%,80.392157%,80.392157%);fill-opacity:1;" d="M 7.5 10 C 7.269531 10.09375 7.035156 10.1875 6.796875 10.285156 C 5.566406 10.984375 4.738281 11.90625 3.75 12.917969 C 3.0625 13.480469 2.371094 14.039062 1.667969 14.582031 C 2.355469 11.984375 4.636719 9.480469 7.5 10 Z M 7.5 10 "/>
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(80%,80%,80%);fill-opacity:1;" d="M 13.332031 1.667969 C 13.746094 1.804688 14.160156 1.941406 14.582031 2.082031 C 12.5 4.167969 12.5 4.167969 11.796875 4.816406 C 11.160156 5.515625 10.800781 6.226562 10.417969 7.082031 C 10.234375 6.015625 10.234375 6.015625 10.417969 4.582031 C 11.285156 3.492188 12.277344 2.578125 13.332031 1.667969 Z M 13.332031 1.667969 "/>
    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(72.941176%,72.941176%,72.941176%);fill-opacity:1;" d="M 15.417969 6.667969 C 15.554688 7.078125 15.691406 7.492188 15.832031 7.917969 C 14.324219 9.167969 14.324219 9.167969 12.917969 9.167969 C 12.917969 8.890625 12.917969 8.617188 12.917969 8.332031 C 13.597656 7.894531 14.292969 7.480469 15 7.082031 C 15.136719 6.945312 15.273438 6.808594 15.417969 6.667969 Z M 15.417969 6.667969 "/>
    </svg>Copy Link</a></li>
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
var itemWidth = slideritems.length > 0 ? slideritems[0].clientWidth:0;
var maxslide = itemWidth  * (slideritems.length - 1);
var slideNow = 0

function changePropertyToolBar(){
    document.querySelectorAll('.mySlidesNiceSlideView').forEach((mySlides,idx) => {
        mySlides.setAttributes({
            'data-sh-link':niceViewSlide[idx].getAttribute('data-nice-view-sh-link'),
            'data-desc':niceViewSlide[idx].getAttribute('data-nice-view-desc'),
            'data-src':niceViewSlide[idx].getAttribute('data-nice-view-src'),
        })
    })
}

function startSlide(val=null){
    changePropertyToolBar()
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

const downloadImage = async (imageSrc,
    nameOfDownload) => {
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

var stringToHTML = function (str) {
	var parser = new DOMParser();
	var doc = parser.parseFromString(str, 'text/html');
	return doc.body;
};

niceViewSlide.forEach((obj,idx) => {
    let svgFCForSpan = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
    <path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.98 2 3.96 2 6 C0.02 6 -1.96 6 -4 6 C-4 5.34 -4 4.68 -4 4 C-2.68 4 -1.36 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#000000" transform="translate(16,12)"/>
    <path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.32 2 2.64 2 4 C3.32 4 4.64 4 6 4 C6 4.66 6 5.32 6 6 C4.02 6 2.04 6 0 6 C0 4.02 0 2.04 0 0 Z " fill="#000000" transform="translate(2,12)"/>
    <path d="M0 0 C1.98 0 3.96 0 6 0 C6 1.98 6 3.96 6 6 C5.34 6 4.68 6 4 6 C4 4.68 4 3.36 4 2 C2.68 2 1.36 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#000000" transform="translate(12,2)"/>
    <path d="M0 0 C1.98 0 3.96 0 6 0 C6 0.66 6 1.32 6 2 C4.68 2 3.36 2 2 2 C2 3.32 2 4.64 2 6 C1.34 6 0.68 6 0 6 C0 4.02 0 2.04 0 0 Z " fill="#000000" transform="translate(2,2)"/>
    </svg>`
    let svgFCSpan = document.createElement('span')
    svgFCSpan.setAttribute('class','popup-nice-view-slide__open-dialog')
    svgFCSpan.innerHTML = svgFCForSpan
    if(obj.tagName.toLowerCase() !== 'div'){
        alert('Error Scrit PopUp Nice Image Slide. Tag elements must use a div in the class="popup-nice-view-slide" attribute')
        return;
    }
    obj.append(svgFCSpan)
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
    if(document.fullscreenElement){
        closeFullscreen()
        document.querySelector('#fullScreenPopUpNiceView').setAttribute('style','display:block')
        document.querySelector('#exitFullScreenPopUpNiceView').setAttribute('style','display:none')
    }
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
    if(slideritems.length > 1){
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
    }else{
        prevSlider.style.display = 'none'
        nextSlider.style.display = 'none'
        return false
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
    // else if (e.keyCode == '70') {
    //     btnFullScreen()
    // }
}

prevSlider.addEventListener('click',function(e){changeSlide(e,'left')})
nextSlider.addEventListener('click',function(e){changeSlide(e,'right')})
document.onkeydown = checkKey;
slideritems.forEach(slideItem=> {
    slideItem.addEventListener('mousedown', startDragging)
    slideItem.addEventListener('touchstart', startDragging)
})
