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

const input1 = document.querySelector('.first')

const b = document.querySelector ('.numbers')

b.addEventListener('click', (e) => {
    if(e.target.classList.contains('num')){
        input1.value=e.target.innerText
    }
})

