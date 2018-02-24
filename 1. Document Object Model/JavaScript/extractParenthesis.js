function solution(id) {
    let arr = []
    let text = document.getElementById(id).textContent
    let regex = /\((.+?)\)/g
    let match

    while (match = regex.exec(text)) {
        arr.push(match[1])
    }

    return arr.join('; ')
}

console.log(solution('content'))