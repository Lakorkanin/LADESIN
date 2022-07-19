window.onscroll = function showHeader() {
    let header = document.querySelector('.header__top');
    let headerContent = document.querySelector('.header-top');
    if(window.pageYOffset > 106) {
        header.classList.add('header-fixed');
        document.getElementById("dark-logo").src="img/logo-dark.png";
        document.getElementById("icone-phone").src="img/phone-dark.svg";
    }else{
        header.classList.remove('header-fixed');
        document.getElementById("dark-logo").src="img/logo.png";
        document.getElementById("icone-phone").src="img/phone.svg";
    }
}