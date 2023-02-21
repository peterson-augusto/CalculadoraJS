import calculate from "./calculate.js"

const input = document.getElementById('input')
const resultInput = document.getElementById('result')

export function handleButtonPress(ev) {
    const value = ev.currentTarget.dataset.value
    input.value += value
}

export function handleClearButton() {
    input.value = ''
    resultInput.value = ''
    input.focus()
}

export function handleTyping(ev) {
    const allowedKeys = ['(', ')', '/', '%', '*', '-', '+', '=', '.', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '']
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
    }
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter') {
        calculate()
    }
}