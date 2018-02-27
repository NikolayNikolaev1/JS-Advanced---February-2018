function solve(arr) {
    return Math.max.apply('', arr)
}

console.log(solve([10, 20, 5]))
console.log()
console.log(solve([1, 44, 123, 33]))