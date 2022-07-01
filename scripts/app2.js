let imie = 'Ola'
const czyMaPsa = true

function sprawdzOle (imie, warunek) {
    if(imie === 'Ola' && warunek === true) {
        console.log('gratulacje')
    }
    else if(imie === "Seba" || imie === 'Agata' && warunek === false) {
        console.log('siema'+imie)
    }
}

for (let i=0; i<2; i++) {
    if(i === 0) {
        sprawdzOle(imie, czyMaPsa)

    }
    else if(i === 1) {
        sprawdzOle('Seba', false)
    }
}

const tab = ["Ala", "Monika", "Beata", "Karol"];

function pokazElement (index) {
    const element = tab[index]
    if( element === undefined){
        console.log('błąd')
    }
    else if( element !== undefined) {
        console.log(element)
    }
}
pokazElement(0)
pokazElement(1)
pokazElement(10)


const Users = {
ototom: "test123",
tomussromus: "srom",
piesel: "kość"
}

function signIn() { 
const userName = prompt('podaj swoją nazwe')
const haslo = prompt('podaj swoje hasło')
if(Users[userName]=== undefined){
    console.log('użytkownik nie istnieje')

} else if(Users[userName] != undefined){
    if(Users[userName]===haslo){
        console.log('jesteś zalogowany')

    }
    else{
        console.log('hasło jest niepoprawne')
    }
}
}

signIn()

Users.ototom

Users['ototom']

Users[userName]

