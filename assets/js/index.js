let main = document.getElementById('scroll-section');
let firstSection = document.querySelector('.firstSection');
let navbar = document.getElementById('navbar-mb');
let navbar_dt = document.querySelector('.navbar-dt');

if(screen.width<992) {
    main.style.marginTop = navbar.offsetHeight + "px";
}

window.onscroll=()=>{
    if(screen.width > 992) {
        if(window.scrollY > firstSection.offsetTop) {
            navbar_dt.classList.add('navbar-scroll');
        } else {
            navbar_dt.classList.remove('navbar-scroll');
        }
    }
}