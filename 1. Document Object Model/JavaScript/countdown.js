window.onload = function() {
    countdown(600);
}

function countdown(sec) {
    setInterval(() => {
        let minutes = Math.floor(sec / 60)
        let seconds = sec % 60
        let time = (minutes < 10 ? '0' + minutes : minutes) + ':' +
            (seconds < 10 ? '0' + seconds : seconds)

        document.getElementById("time").value = time
        sec--
    }, 1000)
}