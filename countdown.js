
function onClickMenu() {
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
}
var start = document.getElementById('start');
var reset = document.getElementById('reset');

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");


var startTimer = null;

start.addEventListener('click', function () {
    
    function startInterval() {
        startTimer = setInterval(function () {
            timer();
        }, 1000);
    }
    startInterval();
})

reset.addEventListener('click', function () {
    h.value = 0;
    m.value = 0;
    s.value = 0;
    
    stopInterval()
})
let mySound= new Audio('The Chainsmokers - Closer (Official Video) ft. Halsey [TubeRipper.com].mp3');
function timer() {
   
    if (h.value == 0 && m.value == 0 && s.value == 0) {
         
        h.value = 0;
        m.value = 0;
        s.value = 0;
        mySound.play();
    } else if (s.value != 0) {
        s.value--;
    } else if (m.value != 0 && s.value == 0) {
        s.value = 59;
        m.value--;
    } else if (h.value != 0 && m.value == 0) {
        m.value = 60;
        h.value--;
    }
    else if(h.value != 0 || m.value != 0 || s.value != 0){
       mySound.play();
    }
   return;
}





function stopInterval() {
    clearInterval(startTimer);
}

