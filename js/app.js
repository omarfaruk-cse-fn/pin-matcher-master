function getPin() {
    const pin = Math.round(Math.random() * 10000) // get 4 digit number
    const pinString = pin + ''
    if (pinString.length == 4) {
        return pin
    }
    else {
        getPin() // if get 3 digit it will cal again for 4 digit
    }
}
function generatePin() {
    const pin = getPin()
    document.getElementById('display-pin').value = pin
}
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText
    const calc = document.getElementById('typed-numbers')
    if (isNaN(number)) {
        if (number == 'C') {
            calc.value = ''
        }
    }
    else {
        const priviousCalc = calc.value
        const newcalc = priviousCalc + number
        calc.value = newcalc
    }

})
function verifyPin() {
    const pin = document.getElementById('display-pin').value
    const typedNumbers = document.getElementById('typed-numbers').value
    const successNotify = document.getElementById('notify-success')
    const errorNotify = document.getElementById('notify-fail')

    if (pin == typedNumbers) {
        successNotify.style.display = 'block'
        errorNotify.style.display = 'none'
    }
    else {
        errorNotify.style.display = 'block'
        successNotify.style.display = 'none'
    }
}
