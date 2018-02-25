function validate() {
    let regex = /^[a-z]+@[a-z]+\.[a-z]+\b/
    let input = document.getElementById("email")
    input.addEventListener('input', function () {
        let value = input.value

        if (regex.test(value)) {
            input.className = ''
        } else {
            input.className = 'error'
        }
    })
}