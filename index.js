const hour = document.getElementById("hour");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const ampmclock = document.getElementById("ampm");

function updateClock(){
    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let ampm = "am";

    if(hr > 12){
        hr = hr-12;
        ampm = "pm";
    }

    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    hour.innerText = hr;
    minute.innerText = min;
    second.innerText = sec;
    ampmclock.innerText = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock();