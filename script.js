// Creating variables to check the codition for start, stop and resume.

let check = false;
let check_for_start = false;

// Getting the elements by their id's to use event listeners 

let btn1 = document.getElementById("start_btn");
let btn2 = document.getElementById("stop_btn");
let btn3 = document.getElementById("reset_btn");
let timer_text = document.getElementById("timer_text");

// Creating variables to set the time in stopwatch

let milliSeconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let event_value;
let ms, s , m , h;

// Adding event listener on start button

btn1.addEventListener("click" , function() {
    if(check_for_start === true) return;

    check = true;
    check_for_start = true;
    event_value = setInterval(function(){
        milliSeconds += 5;
        if(milliSeconds === 1000) {
            milliSeconds = 0;
            seconds++;
        }
        if(seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if(minutes === 60) {
            minutes = 0;
            hours++;
        }
        if(hours === 24) {
            Reset();
        }
        
        if(milliSeconds < 10) {
            ms = "00" + milliSeconds;
        }
        else if(milliSeconds < 100) {
            ms = "0" + milliSeconds;
        }
        else {
            ms = milliSeconds;
        }

        if(seconds < 10) {
            s = "0" + seconds;
        }
        else {
            s = seconds;
        }

        if(minutes < 10) {
            m = "0" + minutes;
        }
        else {
            m = minutes;
        }

        // for hours
        if(hours < 10) {
            h = "0" + hours;
        }
        else {
            h = hours;
        }

        timer_text.innerHTML = h + " : " + m + " : " + s + " : " + ms;
    },5)
});

// Adding event listener on stop button

btn2.addEventListener("click" , function() {
    if(check === false) return;
    clearInterval(event_value);
    start_btn.innerText = "RESUME";
    check_for_start = false;
});

// Adding event listener on reset button

btn3.addEventListener("click" , function() {
    check = false;
    check_for_start = false;
    milliSeconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer_text.innerHTML = "00 : 00 : 00 : 000";
    clearInterval(event_value);
    start_btn.innerText = "START";   
});