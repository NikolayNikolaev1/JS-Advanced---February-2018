function process(arr) {
    let commandExec = (function () {
        let arr = []
        function add(str) {
            arr.push(str)
        }
        function remove(str) {
            arr = arr.filter(w => w !== str)
        }
        function print() {
            console.log(arr.join(','))
        }
        return {add, remove, print}
    }())

    for (let str of arr) {
        let [command, value] = str.split(' ')
        commandExec[command](value)
    }
}

process(['add hello', 'add again', 'remove hello', 'add again', 'print'])
console.log()
process(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print'])