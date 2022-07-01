const displayText = (tekst) => {
    console.log(`tekst który pisałeś to ${tekst}`)
    
}

displayText('ciamciaramcia')


const users = [
    {
        userName: "Ola",
        age: 26,
        wantADog: true,
        favorites: {
            favoriteColour: "blue",
            favoriteRestaurants: ["oskar", 'aioli'],
        }
    }, 
    {
        userName: "Tomek",
        age: 30,
        wantADog: false,
        favorites: {
            favoriteColour: "red",
            favoriteRestaurants: ["McDonald's", 'KFC'],
        }
    },
]

users[0].favorites.favoriteRestaurants.filter((value)=>{
    console.log(value)

    return value !== 'oskar'
})


const runCallback = (cb) => {
    const text = 'kkkk'

    cb(text)
}

runCallback((xxx)=>{
    console.log('inner function',xxx)
})

const demoArr = ["McDonald's", 'KFC']

const myFilter = (fn) => {
    const arr = []

    for(let i = 0; i < demoArr.length; i++) {
        const shouldNotBeFiltered = fn(demoArr[i])

        if(shouldNotBeFiltered) {
            arr.push(demoArr[i])
        } 
    }

    return arr
}

const xxx = () => {
    //xxx
}

const result = myFilter(()=>{
    return true
})

myFilter(xxx)

console.log(result)

/*
Callback:
    Niektóre funkcje wymagają podania funkcji jako argumentu. 
    Możemy wtedy podawać funkcje anonimowe;
    MOżemy też podać funkcje którą wcześniej przypisaliśmy do zmiennej i podac tą zmienną (linijka 63 ->71)
    Te callbacki mogą otrzymywać od funkcji matki pewne dane jako parametry do nich (linijka 30 - metoda filter przekazuje do callbacka każdy kolejny element z tablicy)

*/


const yy = (...all) => {
    console.log(all[2]) 
    return {
        aaa: 'aaa',
        bbb: 3
    }
} 

 const {aaa}= yy(1,2,3)

