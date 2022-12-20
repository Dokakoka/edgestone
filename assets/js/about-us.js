let logo = document.getElementById('logo');
let close = document.getElementById('close-icon');

if(screen.width < 992) {
    logo.style.marginLeft = close.offsetWidth + "px !important";
}