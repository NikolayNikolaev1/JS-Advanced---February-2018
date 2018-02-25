function deleteByEmail() {
    let trArr = document.getElementsByTagName('tr')
    let targetValue = document.getElementsByName('email')[0].value.trim()

    for (let i = 1; i < trArr.length; i++) {
        if (targetValue === trArr[i].children[1].textContent) {
            trArr[i].parentNode.removeChild(trArr[i])
            document.getElementById("result").textContent = "Deleted."
            return
        }
    }

    document.getElementById("result").textContent = "Not found."
}