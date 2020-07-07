hrs = 0;
min = 0;
sec = 0;
msec = 0;
var hrsHeading = document.getElementById('hrs')
var minHeading = document.getElementById('min')
var secHeading = document.getElementById('sec')
var msecHeading = document.getElementById('msec')
var interval;
function timer() {
    msec++
    msecHeading.innerHTML = msec;
     if(msec >= 100) {
        sec++
        secHeading.innerHTML = sec
        msec = 0;
    }else if(sec >= 60){
     min++
     minHeading.innerHTML = min
     sec = 0;
    }else if(min >= 60){
        hrs++
        hrsHeading.innerHTML = hrs
        min = 0;
    }    
  interval;
}

function start() {
    interval = setInterval(timer,10)
}

function pause() {
    clearInterval(interval)
}

function reset(){
    location.reload();
    }

function disable(){
    document.getElementById('startbtn').disabled = true;
} 

function enable() {
    document.getElementById("startbtn").disabled = false;
  }

  
