function suma(nr1, nr2) {
    const result = nr1+nr2;
  
} 
 
console.log(suma(1,2))
const xx = suma(3,4)

console.log(xx)

function greet(imie) {
    console.log('witaj ' + imie + '!')
    
} 

greet('Ola')

greet('Tomek')

const helloZbychu = greet('Zbychu') 

console.log(helloZbychu)

function oblicz(liczba1, liczba2, dzialanie) {
    if(dzialanie === 'dodawanie') {
        console.log(liczba1+liczba2)
    } else if(dzialanie === 'mnozenie') {
        console.log(liczba1*liczba2)
    } else if(dzialanie === 'dzielenie') {
        console.log(liczba1/liczba2)
    } else {
        console.log('niepoprawne działanie')
    }

}

oblicz(1,2,'xxx')