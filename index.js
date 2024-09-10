let x = 40;
let y = 0;
let health = 100
let speedX = 5;
let speedY = 5;

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        y -= speedY;
    }
    else if (e.keyCode == '40') {
        // down arrow
        y -= 0 - speedY;
    }
    else if (e.keyCode == '37') {
       // left arrow
       x -= speedX;
    }
    else if (e.keyCode == '39') {
       // right arrow
       x -= 0 - speedX;
    }
    console.log('X:' + x + ' Y:' + y)
    document.getElementById('player').innerHTML = "<p style='translate: " + x + "px " + y + "px;'>웃</p>";

}
