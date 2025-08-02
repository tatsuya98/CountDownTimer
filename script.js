const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


function countDownTimer(){
    setInterval(function(){
            if(days.innerText == 0 && hours.innerText == 0 && minutes.innerText == 0 && seconds.innerText == 0){
                clearStorage();
                return
            }
            if(seconds.innerText == 0 && minutes.innerText != 0 && hours.innerText != 0 && days.innerText != 0){
                seconds.innerText = 59;
                minutes.innerText--;
            }else if(minutes.innerText == 0 && hours.innerText != 0 ){
                minutes.innerText = 59;
                hours.innerText--;
            }else if(hours.innerText == 0 && days.innerText != 0){
                hours.innerText = 23;
                days.innerText--;
            }else{
                seconds.innerText--;
            }
        }, 1000);
}

function setInitialState(){
    days.innerText = window.localStorage.getItem("days") || "08";
    hours.innerText = window.localStorage.getItem("hours") || 23;
    minutes.innerText = window.localStorage.getItem("minutes") || 59;
    seconds.innerText = window.localStorage.getItem("seconds") || 59;
}

function saveState(){
    window.localStorage.setItem("days", days.innerText);
    window.localStorage.setItem("hours", hours.innerText);
    window.localStorage.setItem("minutes", minutes.innerText);
    window.localStorage.setItem("seconds", seconds.innerText);
}

function clearStorage(){
    window.localStorage.removeItem("days");
    window.localStorage.removeItem("hours");
    window.localStorage.removeItem("minutes");
    window.localStorage.removeItem("seconds");
}
clearStorage();
setInitialState();
document.addEventListener("DOMContentLoaded", countDownTimer);
window.onbeforeunload = saveState;
