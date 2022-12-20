let root = document.querySelector(':root');
let carousel  = document.querySelectorAll('.moraya-carousel');
var darkmode = document.getElementById('darkmode-dt');
let property = document.getElementById('property');

if(screen.width > 992) {
    var darkmode = document.getElementById('darkmode-dt');
    var darkModeCircle = document.getElementById('darkModeCircle-dt');
} else {
    var darkmode = document.getElementById('darkmode-mb');
    var darkModeCircle = document.getElementById('darkModeCircle-mb');
}

if(localStorage.getItem('dark') == "true") {
    property.style.backgroundImage = "url('assets/images/down-arrow-light.png')";

    let x = 1;
    for(let i = 0; i<carousel.length; i++) {
        carousel[i].setAttribute('src', "assets/images/moraya-carousel"+x+"-night-dt.jpg");
        x++;
    }

    root.style.setProperty('--dark', '#FFFFFF');
    root.style.setProperty('--light', '#232F47');
    root.style.setProperty('--nav-dt-dark', '#D9D9D9');
    root.style.setProperty('--board-members', '#232F47');
    root.style.setProperty('--nav-dt-light', '#2F3A52');
    darkmode.classList.add('dark-mode-dark');
    darkModeCircle.classList.add('dark-mode-circle-dark');
} else {
    property.style.backgroundImage = "url('assets/images/down-arrow-dark.png')";
    darkmode.classList.remove('dark-mode-dark');
    darkModeCircle.classList.remove('dark-mode-circle-dark');
    root.style.setProperty('--dark', '#232F47');
    root.style.setProperty('--light', '#FFFFFF');
    root.style.setProperty('--board-members', '#D9D9D9');
    root.style.setProperty('--nav-dt-dark', '#2F3A52');
    root.style.setProperty('--nav-dt-light', '#D9D9D9');
}


darkmode.onclick=()=>{
    darkmode.classList.toggle('dark-mode-dark');
    darkModeCircle.classList.toggle('dark-mode-circle-dark');
    if(getComputedStyle(root).getPropertyValue('--dark') == "#232F47") {
        property.style.backgroundImage = "url('assets/images/down-arrow-light.png')";
        
        let x = 1;
        for(let i = 0; i<carousel.length; i++) {
            carousel[i].setAttribute('src', "assets/images/moraya-carousel"+x+"-night-dt.jpg");
            x++;
        }
        localStorage.setItem('dark', "true");
        root.style.setProperty('--dark', '#FFFFFF');
        root.style.setProperty('--light', '#232F47');
        root.style.setProperty('--board-members', '#232F47');
        root.style.setProperty('--nav-dt-dark', '#D9D9D9');
        root.style.setProperty('--nav-dt-light', '#2F3A52');
    } else {
        property.style.backgroundImage = "url('assets/images/down-arrow-dark.png')";

        let x = 1;
        for(let i = 0; i<carousel.length; i++) {
            carousel[i].setAttribute('src', "assets/images/moraya-carousel"+x+"-dt.jpg");
            x++;
        }
        localStorage.setItem('dark', "false");
        root.style.setProperty('--dark', '#232F47');
        root.style.setProperty('--light', '#FFFFFF');
        root.style.setProperty('--board-members', '#D9D9D9');
        root.style.setProperty('--nav-dt-dark', '#2F3A52');
        root.style.setProperty('--nav-dt-light', '#D9D9D9');
    }
    
}