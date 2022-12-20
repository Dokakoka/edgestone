let root_var = document.querySelector(':root');

if(localStorage.getItem('dark') == "true") {
    root_var.style.setProperty('--dark', '#FFFFFF');
    root_var.style.setProperty('--light', '#232F47');
} else {
    root_var.style.setProperty('--dark', '#232F47');
    root_var.style.setProperty('--light', '#FFFFFF');
}