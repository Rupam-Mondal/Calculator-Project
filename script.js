const seven = document.querySelector('#btn-7')
const eight = document.querySelector('#btn-8')
const nine = document.querySelector('#btn-9')
const four = document.querySelector('#btn-4')
const five = document.querySelector('#btn-5')
const six = document.querySelector('#btn-6')
const one = document.querySelector('#btn-1')
const two = document.querySelector('#btn-2')
const three = document.querySelector('#btn-3')
const dzero = document.querySelector('#btn-00')
const zero = document.querySelector('#btn-0')
const dot = document.querySelector('#btn-d')
const plus = document.querySelector('#btn-p')
const mul = document.querySelector("#btn-m")
const neg = document.querySelector("#btn-n")
const ac = document.querySelector("#btn-ac")
const percentage = document.querySelector("#btn-percentage")
const backspace = document.querySelector("#btn-backspace")
const div = document.querySelector("#btn-divide")
const finalclick = document.querySelector('#result-click')

const result = document.querySelector('.result')

let displayString = "";

seven.addEventListener('click' , (e) => {
    displayString = displayString + seven.textContent;
    console.log(displayString)
    result.innerHTML = `${displayString}`
})
backspace.addEventListener('click' ,(e) => {
    displayString = displayString.slice(0, -1); // Removing last character
    console.log(displayString);
    result.innerHTML = displayString;
})
mul.addEventListener('click', (e) => {
    displayString += "*";
    console.log(displayString);
    result.innerHTML = displayString;
});

neg.addEventListener('click', (e) => {
    displayString += "-";
    console.log(displayString);
    result.innerHTML = displayString;
});

percentage.addEventListener('click', (e) => {
    displayString += "%";
    console.log(displayString);
    result.innerHTML = displayString;
});

nine.addEventListener('click', (e) => {
    displayString = displayString + nine.textContent;
    console.log(displayString)
    result.innerHTML = `${displayString}`
})

eight.addEventListener('click', (e) => {
    displayString = displayString + eight.textContent;
    console.log(displayString)
    result.innerHTML = `${displayString}`
})

four.addEventListener('click', (e) => {
    displayString = displayString + four.textContent;
    console.log(displayString)
    result.innerHTML = `${displayString}`
})

five.addEventListener('click', (e) => {
    displayString = displayString + five.textContent;
    console.log(displayString)
    result.innerHTML = `${displayString}`
})

six.addEventListener('click', (e) => {
    displayString = displayString + six.textContent;
    console.log(displayString)
    result.innerHTML = `${displayString}`
})

two.addEventListener('click', (e) => {
    displayString = displayString + two.textContent;
    console.log(displayString)
    result.innerHTML = `${displayString}`
})

three.addEventListener('click', (e) => {
    displayString = displayString + three.textContent;
    console.log(displayString)
    result.innerHTML = `${displayString}`
})

dzero.addEventListener('click', (e) => {
    displayString = displayString + dzero.textContent;
    console.log(displayString)
    result.innerHTML = `${displayString}`
})

zero.addEventListener('click', (e) => {
    displayString = displayString + zero.textContent;
    console.log(displayString)
    result.innerHTML = `${displayString}`
})

one.addEventListener('click', (e) => {
    displayString = displayString + one.textContent;
    console.log(displayString)
    result.innerHTML = `${displayString}`
})
dot.addEventListener('click', (e) => {
    displayString = displayString + dot.textContent;
    console.log(displayString)
    result.innerHTML = `${displayString}`
})

plus.addEventListener('click', (e) => {
    displayString += "+";
    console.log(displayString);
    result.innerHTML = displayString;
});

div.addEventListener('click', (e) => {
    displayString += "/";
    console.log(displayString);
    result.innerHTML = displayString;
});
ac.addEventListener('click' , (e) => {
    displayString = "";
    result.innerHTML = displayString;
})

finalclick.addEventListener('click' , (e) => {
    let ans = eval(displayString)
    result.innerHTML = `${ans}`
})
