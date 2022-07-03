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

const numberContainer = document.querySelector('.numbers')

const toast = document.createElement('div')
       toast.classList.add('toast')
       toast.innerText = 'Wyrażenie jest niepoprawne'

let firstInputValue= ''

let secondInputValue =''

let operation = '+'

let activeInput = firstInput

mathSymbol.innerText = operation

actionsContainer.addEventListener('click', (event) => {
    if(event.target.classList.contains('math') && event.target.classList.contains('math-equal') === false ) {
        mathSymbol.innerText=event.target.innerText
        operation = event.target.innerText
    } 
    else if(event.target.classList.contains('math-equal') && firstInputValue && secondInputValue ) {
        if(operation==='+') {
            resultInput.value= +firstInputValue + +secondInputValue
        } else if(operation==='-') {
            resultInput.value= +firstInputValue - +secondInputValue
        } else if(operation===':') {
            resultInput.value= +firstInputValue / +secondInputValue
        } else if(operation==='*') {
            resultInput.value= +firstInputValue * +secondInputValue
        }

    } else if(event.target.classList.contains('math-equal') && (!firstInputValue || !secondInputValue)) {
       document.body.appendChild(toast)

       window.setTimeout(()=>{
        toast.remove()
       },
       3000
       )
    }
} )

firstInput.addEventListener('input', (event) => {
    if(isNaN(Number(event.target.value))) {
        firstInput.classList.add('error')
    } 
    
    else {firstInput.classList.remove('error')
    firstInputValue = +event.target.value}
})

firstInput.addEventListener('click', (event) => {
    activeInput= firstInput
})

secondInput.addEventListener('input', (event) => {
    if(isNaN(Number(event.target.value))) {
        secondInput.classList.add('error')
    }

    else {secondInput.classList.remove('error')
    secondInputValue = +event.target.value}
})

secondInput.addEventListener('click', (event) => {
    activeInput = secondInput
})


numberContainer.addEventListener('click',(event) => {
    if(event.target.classList.contains('num')){
        activeInput.value += +event.target.innerText
        if(activeInput===firstInput) {
            firstInputValue+= event.target.innerText
        }
        else if(activeInput===secondInput) {
            secondInputValue+= event.target.innerText
        }
    }

} )
