// const d = document.createElement('div')

// d.innerText = 'Lorem ipsum'

// const b = document.querySelector('body')

// d.classList.add('error')

// b.appendChild(d)

// const button = document.querySelector('.actions button')

// button.addEventListener('click', (e) => {
//     console.log("Klik")

//     console.log(e)
// } )

// const input1 = document.querySelector('.first')

// const b = document.querySelector ('.numbers')

// b.addEventListener('click', (e) => {
//     if(e.target.classList.contains('num')){
//         input1.value=e.target.innerText
//     }
// })

const mathSymbol = document.querySelector('.plus')

const actionsContainer = document.querySelector('.actions')

const firstInput = document.querySelector('.first')

const secondInput =document.querySelector('.second')

const resultInput =document.querySelector('.result')

let firstInputValue 

let secondInputValue 

let operation = '+'

mathSymbol.innerText = operation

actionsContainer.addEventListener('click', (event) => {
    if(event.target.classList.contains('math') && event.target.classList.contains('math-equal') === false ) {
        mathSymbol.innerText=event.target.innerText
        operation = event.target.innerText
    } 
    else if(event.target.classList.contains('math-equal') && firstInputValue && secondInputValue ) {
        if(operation==='+') {
            resultInput.value= firstInputValue + secondInputValue
        } else if(operation==='-') {
            resultInput.value= firstInputValue - secondInputValue
        } else if(operation===':') {
            resultInput.value= firstInputValue / secondInputValue
        } else if(operation==='*') {
            resultInput.value= firstInputValue * secondInputValue
        }
    }
} )

firstInput.addEventListener('input', (event) => {
    firstInputValue = +event.target.value
})

secondInput.addEventListener('input', (event) => {
    secondInputValue = +event.target.value
})
