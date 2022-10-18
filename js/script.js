window.onscroll = function showHeader() {
    let header = document.querySelector('.header__top');
    let headerContent = document.querySelector('.header-top');
    if(window.pageYOffset > 106) {
        header.classList.add('header-fixed');
        document.getElementById("logo").src="img/logo-dark.png";
        document.getElementById("icone-phone").src="img/phone-dark.svg";
    }else{
        header.classList.remove('header-fixed');
        document.getElementById("logo").src="img/logo.png";
        document.getElementById("icone-phone").src="img/phone.svg";
    }
}

function rotateBtn() {
    let btnArrow = document.getElementById("btn1");
    let noneDescr = document.querySelector('.company__item-descr');
    btnArrow.classList.toggle('button__arrow-rotate');
    noneDescr.classList.toggle('descr-none');
};
function rotateBtn1() {
    let btnArrow = document.getElementById("btn2");
    let noneDescr = document.querySelector('.company__item-descr');
    btnArrow.classList.toggle('button__arrow-rotate');
    noneDescr.classList.toggle('company__item-descr--visit');
    noneDescr.classList.toggle('descr-none');
};
function rotateBtn2() {
    let btnArrow = document.getElementById("btn3");
    let noneDescr = document.querySelector('.company__item-descr');
    btnArrow.classList.toggle('button__arrow-rotate');
    noneDescr.classList.toggle('company__item-descr--visit');
};
function rotateBtn3() {
    let btnArrow = document.getElementById("btn4");
    let noneDescr = document.querySelector('.company__item-descr');
    btnArrow.classList.toggle('button__arrow-rotate');
    noneDescr.classList.toggle('company__item-descr--visit');
};
function rotateBtn4() {
    let btnArrow = document.getElementById("btn5");
    let noneDescr = document.querySelector('.company__item-descr');
    btnArrow.classList.toggle('button__arrow-rotate');
    noneDescr.classList.toggle('company__item-descr--visit');
};