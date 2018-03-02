function solution() {
    let firstElement, secondElement, result
    return {
        init: function (firstSelector, secondSelector, resultSelector) {
            firstElement = $(firstSelector)
            secondElement = $(secondSelector)
            result = $(resultSelector)
        },
        add: function () {
            result.val(Number(firstElement.val()) + Number(secondElement.val()))
        },
        subtract: function () {
            result.val(Number(firstElement.val()) - Number(secondElement.val()))
        }
    }
}

let obj = solution()
function sum() {
    obj.init('#num', '#num2', '#result')
    obj.add()
}
function sub() {
    obj.init('#num', '#num2', '#result')
    obj.subtract()
}