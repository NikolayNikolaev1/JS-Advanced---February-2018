function attachGradientEvents() {
    let gradient = document.getElementById("gradient-box")
    gradient.addEventListener('mousemove', function (event) {
        let result = Math.floor((event.offsetX / (event.target.clientWidth - 1)) * 100)
        document.getElementById("result").textContent = result + '%'
    })

    gradient.addEventListener('mouseleave', function (event) {
        document.getElementById("result").textContent = ''
    })
}