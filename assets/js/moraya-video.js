let root = document.querySelector(':root');
let video = document.getElementById('video');
let typeProperty = document.getElementById('typeProperty');
let rooms = document.getElementById('rooms');
let chooseProperty = document.querySelectorAll('.choose-property');
let property = document.getElementById('property');

typeProperty.addEventListener('change', ()=>{
    if(typeProperty.value == "DUPLEXES") {
        rooms.remove(1);
    } else {
        rooms.innerHTML = `
        <option>NUMBER OF ROOMS</option>
            <option value="2 BEDROOMS">2 BEDROOMS</option>
            <option value="3 BEDROOMS">3 BEDROOMS</option>
            <option value="4 BEDROOMS">4 BEDROOMS</option>
        `
    }
})

if(screen.width>=992) {
    video.src = "assets/videos/Edge Stone Cut Down 2 with hotline.mp4";
} else {
    video.src = "assets/videos/ed_a_rs_1080x1080 Mobile web.mp4";
}


if(screen.width > 992) {
    var darkmode = document.getElementById('darkmode-dt');
    var darkModeCircle = document.getElementById('darkModeCircle-dt');
} else {
    var darkmode = document.getElementById('darkmode-mb');
    var darkModeCircle = document.getElementById('darkModeCircle-mb');
}

if(localStorage.getItem('dark') == "true") {
    property.style.backgroundImage = "url('assets/images/down-arrow-light.png')";
    rooms.style.backgroundImage = "url('assets/images/down-arrow-light.png')";
    typeProperty.style.backgroundImage = "url('assets/images/down-arrow-light.png')";
    root.style.setProperty('--dark', '#FFFFFF');
    root.style.setProperty('--light', '#232F47');
    root.style.setProperty('--nav-dt-dark', '#D9D9D9');
    root.style.setProperty('--board-members', '#232F47');
    root.style.setProperty('--nav-dt-light', '#2F3A52');
    darkmode.classList.add('dark-mode-dark');
    darkModeCircle.classList.add('dark-mode-circle-dark');
} else {
    property.style.backgroundImage = "url('assets/images/down-arrow-dark.png')";
    rooms.style.backgroundImage = "url('assets/images/down-arrow-dark.png')";
    typeProperty.style.backgroundImage = "url('assets/images/down-arrow-dark.png')";
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
        rooms.style.backgroundImage = "url('assets/images/down-arrow-light.png')";
        typeProperty.style.backgroundImage = "url('assets/images/down-arrow-light.png')";
        localStorage.setItem('dark', "true");
        root.style.setProperty('--dark', '#FFFFFF');
        root.style.setProperty('--light', '#232F47');
        root.style.setProperty('--board-members', '#232F47');
        root.style.setProperty('--nav-dt-dark', '#D9D9D9');
        root.style.setProperty('--nav-dt-light', '#2F3A52');
    } else {
        property.style.backgroundImage = "url('assets/images/down-arrow-dark.png')";
        rooms.style.backgroundImage = "url('assets/images/down-arrow-dark.png')";
        typeProperty.style.backgroundImage = "url('assets/images/down-arrow-dark.png')";
        localStorage.setItem('dark', "false");
        root.style.setProperty('--dark', '#232F47');
        root.style.setProperty('--light', '#FFFFFF');
        root.style.setProperty('--board-members', '#D9D9D9');
        root.style.setProperty('--nav-dt-dark', '#2F3A52');
        root.style.setProperty('--nav-dt-light', '#D9D9D9');
    }
    
}