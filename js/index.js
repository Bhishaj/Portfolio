
var typed = new Typed(".auto-input", {
    strings: ['Welcome to my Website', 'Great to see you here.'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});
var waveRightElement = document.getElementById('waveRightElement');
var card_1 = document.getElementById('card-1');
var card_2 = document.getElementById('card-2');
var card_3 = document.getElementById('card-3');
var progressArr = document.getElementsByClassName("progress-bar");
var leftAniArr = document.getElementsByClassName("leftAniElement");
var rightAniArr = document.getElementsByClassName("rightAniElement");
window.onscroll = () => {
    if (window.pageYOffset >= 734) {
        progressArr[0].classList.add('progress-1');
        progressArr[1].classList.add('progress-2');
        progressArr[2].classList.add('progress-3');
        progressArr[3].classList.add('progress-4');
        progressArr[4].classList.add('progress-5');
    }
}

let preloader = document.getElementById('loading');
function preLoad() {
    preloader.style.display = "none";
}
