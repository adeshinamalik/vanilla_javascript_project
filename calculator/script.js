let dataNumber = document.querySelectorAll('[data-number]');
let previousNumber = document.querySelector('[data-previous-operand]');
let currentNumber = document.querySelector('[data-current-operand]');
let dataDelete = document.querySelector('[data-delete]');
let dataOperation = document.querySelectorAll('[data-operation]');
let dataEqual = document.querySelector('[data-equal]');
let dataClearAll = document.querySelector('[data-all-clear]');

dataNumber.forEach(element => {
    element.addEventListener('click', function () {
        currentNumber.innerHTML += String(element.innerHTML);
    })
});

dataOperation.forEach(element => {
    element.addEventListener('click', function () {
        if (previousNumber.innerHTML.includes("/") || previousNumber.innerHTML.includes("*") || previousNumber.innerHTML.includes("+") || previousNumber.innerHTML.includes("-")) {
            return
        }
        currentNumber.innerHTML += element.innerHTML;
        previousNumber.innerHTML += currentNumber.innerHTML;
        currentNumber.innerHTML = "";
        console.log(previousNumber.innerHTML);
    })
});
dataEqual.addEventListener('click', function () {
    previousNumber.innerHTML += currentNumber.innerHTML;
    console.log(previousNumber.innerHTML);
    let sum = previousNumber.innerHTML;

    currentNumber.innerHTML = sum;
    if (!currentNumber.innerHTML == "") return

    // parseInt();
})
dataEqual.addEventListener('click', function () {
    let ans = previousNumber.innerHTML;
    if (ans.includes('+')) {
        let splitAns = ans.split('+');
        let splitAns0 = parseInt(splitAns[0]);
        let splitAns1 = parseInt(splitAns[1]);
        let sum = splitAns0 + splitAns1;
        console.log(sum);
        currentNumber.textContent = sum;
    }
    if (ans.includes('-')) {
        let splitAns = ans.split('-');
        let splitAns0 = parseInt(splitAns[0]);
        console.log(sum);
        let splitAns1 = parseInt(splitAns[1]);
        let sum = splitAns0 - splitAns1;
        currentNumber.textContent = sum;
    }
    if (ans.includes('/')) {
        let splitAns = ans.split('/');
        let splitAns0 = parseInt(splitAns[0]);
        let splitAns1 = parseInt(splitAns[1]);
        let sum = splitAns0 / splitAns1;
        console.log(sum);
        currentNumber.textContent = sum;
    }
    if (ans.includes('*')) {
        let splitAns = ans.split('*');
        let splitAns0 = parseInt(splitAns[0]);
        let splitAns1 = parseInt(splitAns[1]);
        let sum = splitAns0 * splitAns1;
        console.log(sum);
        currentNumber.textContent = sum;
    }

});

dataClearAll.addEventListener('click', function () {
    previousNumber.innerHTML = "";
    currentNumber.innerHTML = "";
})

