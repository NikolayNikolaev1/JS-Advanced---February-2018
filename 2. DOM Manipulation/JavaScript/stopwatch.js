window.onload = function() {
    stopwatch()
}

function stopwatch() {
    let seconds = 0
    let interval
    let startBtn = document.getElementById("startBtn")
    let stopBtn = document.getElementById("stopBtn")
    startBtn.addEventListener('click', start)
    stopBtn.addEventListener('click', stop)
    
    function start() {
        document.getElementById("time").textContent = '00:00'
        seconds = 1
        startBtn.disabled = true
        stopBtn.disabled = false
        interval = setInterval(function () {
            document.getElementById("time").textContent =
                ('0' + Math.floor(seconds / 60)).slice(-2) +
                ':' + ('0' + seconds % 60).slice(-2)
            seconds++
        }, 1000)
    }
    
    function stop() {
        clearInterval(interval)
        startBtn.disabled = false
        stopBtn.disabled = true
        seconds = -1
    }
}