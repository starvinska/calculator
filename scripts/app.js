const imie = "Tom"
const nazwisko = "Krawczyk"
const waga = 80
const czyMaKota = false
const czyMaPsa = true
const cechy = ['zajebisty', 'kochany', 'pojebany']
const dodatkoweInfo = {
    ulubionyKolor: "czerwony",
    numerTel: "999",
    zdjecie: null
}


if(dodatkoweInfo.zdjecie !== null) {
    console.log()
}

if( !czyMaKota) {
    console.log("pusy")
} 

if(cechy.length >2) {
    console.log(cechy.length+5)

}

console.log(cechy[4])


if(waga > 90) { 
    console.log('ty tłuściochu')
} else {
    console.log("nice!")
}

if(imie === 'ola') {
    console.log('hejka ola')
} else if (imie === 'zbychu') {
    console.log('siemka zbychu')
} else {
    console.log("siema mistrzu")
}