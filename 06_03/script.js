const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

console.log(hr + ":" + min + ":" + sec);

let hrPosition = hr*30 + (min*6/12);
let minPosition = min*6 +(sec*6/60);
let secPosition = sec*6;


function runTheClock(){
    hrPosition +=0.12;
    minPosition +=0.1;
    secPosition +=6;

    HOURHAND.style.transform = "rotate("+ hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate("+ minPosition + "deg)";
    SECONDHAND.style.transform = "rotate("+ secPosition + "deg)";
}

var interval = setInterval(runTheClock , 1000);