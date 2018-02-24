function colorize() {
    let arr = document.getElementsByTagName("table")[0].children[0].children

    for (let i = 1; i < arr.length; i+=2) {
        arr[i].style.backgroundColor = "Teal"
    }
}