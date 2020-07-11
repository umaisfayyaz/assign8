var minute = 0;
var second = 0;
var millisecond = 0;
var head = document.getElementById('minute')
var head1 = document.getElementById('second')
var head2 = document.getElementById('millisecond')
var a = document.getElementById("start")
var b = document.getElementById("pause")
var interval;

function timer() {
    millisecond++
    head2.innerHTML = millisecond;
    if (millisecond >= 100) {
        second++
        head1.innerHTML = second;
        millisecond = 0;
    } else if (second >= 60) {
        minute++
        head.innerHTML = minute;
        second = 0;
    }
}

function start() {
    interval = setInterval(timer, 10)
    a.disabled = true
}

function stop() {
    interval = clearInterval(interval)
    if (b = true) {
        a.disabled = false
    }
}

function reset() {
    minute = 0
    second = 0
    millisecondL = 0
    head.innerHTML = 0
    head1.innerHTML = 0
    head2.innerHTML = 0
    interval = clearInterval(interval)
}