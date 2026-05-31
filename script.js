document.addEventListener("DOMContentLoaded", () => {

const title = document.querySelector(".title");

let glow = true;

setInterval(() => {

if(glow){
title.style.color = "#ff4444";
}else{
title.style.color = "#ff0000";
}

glow = !glow;

},1000);

});

document.addEventListener("mousemove",(e)=>{

const x = (window.innerWidth / 2 - e.clientX) / 50;
const y = (window.innerHeight / 2 - e.clientY) / 50;

document.body.style.backgroundPosition =
`${50 - x}% ${50 - y}%`;

});

const buttons = document.querySelectorAll(".buttons a");

buttons.forEach(button => {

button.addEventListener("mouseenter",()=>{

button.style.transform = "scale(1.08)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform = "scale(1)";

});

});

window.addEventListener("load",()=>{

document.body.style.opacity = "0";

setTimeout(()=>{

document.body.style.transition = "1s";
document.body.style.opacity = "1";

},100);

});

/* Background Auto Movement */

let posX = 50;
let posY = 50;
let dirX = 0.02;
let dirY = 0.01;

setInterval(()=>{

posX += dirX;
posY += dirY;

if(posX >= 55 || posX <= 45){
dirX = -dirX;
}

if(posY >= 55 || posY <= 45){
dirY = -dirY;
}

document.body.style.backgroundPosition =
`${posX}% ${posY}%`;

},30);
