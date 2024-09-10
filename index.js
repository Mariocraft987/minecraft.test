let player = "웃";
let x = 40;
let y = 0;
let health = 100
let speedX = 5;
let speedY = 5;

document.getElementById('player').innerHTML = `<p style='translate: 0px 0px;'>${player}</p>`;

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '87') {
        // up arrow
        y -= speedY;
    }
    else if (e.keyCode == '83') {
        // down arrow
        y -= 0 - speedY;
    }
    else if (e.keyCode == '65') {
       // left arrow
       x -= speedX;
    }
    else if (e.keyCode == '68') {
       // right arrow
       x -= 0 - speedX;
    }
    document.getElementById('player').innerHTML = `<p style='translate: ${x}px ${y}px;'>${player}</p>`;

}
