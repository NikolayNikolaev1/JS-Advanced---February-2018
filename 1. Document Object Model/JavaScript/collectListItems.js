function extractText() {
    let items = document.querySelectorAll("#items li")

    for (let item of items) {
        document.getElementById("result").textContent += item.textContent +'\n'
    }
}