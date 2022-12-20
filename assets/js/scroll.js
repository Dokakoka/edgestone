let first = document.querySelector('.firstSection');
let second = document.querySelector('.secondSection');
let third = document.querySelector('.thirdSection');

let first_scroll = true;
let second_scroll = false;

let down = 1;
let up = 1;

var lastScrollTop = 0;

var scroll = window.pageYOffset;
window.addEventListener("scroll", (e)=>{ 
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop){
       console.log("down")
       if(down == 1) {
           second.scrollIntoView();
           e.preventDefault();
           down = 2;
           up = 1;
       } else if(down == 2) {
            third.scrollIntoView();
            e.preventDefault();
            up = 2;
       }
    } else {
       console.log("up")
        if(up == 1) {
            first.scrollIntoView();
            down = 1;
        } else if(up == 2) {
            third.scrollIntoView();
            down = 2;
       }
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
 }, false);
