const h = document.querySelector('.navbar h1')
console.log(h)

const b =document.querySelectorAll('.numbers button')
// console.log(...b)
// console.log(...b)

const bArr = [...b]

const tab = [1,2,3]

const a = [...tab]

a.push(4)

console.log(tab)
console.log(a)


// h.innerHTML = `
//     <span style="color:red;">Lorem ipsum dolor sit amet</span>
// `

h.setAttribute('class', 'Ola')
