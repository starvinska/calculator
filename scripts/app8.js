const animal = {
    type: 'dog',
    weight: 20,
    likesFetching: true,
    mainEnemies: ['cat', 'squirrel']

}

let animalType = animal.type

const {
    weight, likesFetching
} = animal



let tekst = `mój pies waży ${weight}kg`

console.log(tekst)

if(animalType !== 'dog' && likesFetching) {
    console.log(animalType)

}

else if(animal.mainEnemies.length >1 || weight <20) {
    console.log(animal.mainEnemies[0])
}

const keys = Object.entries(animal)

console.log(keys)

const enemies = animal.mainEnemies.filter((item)=> {
   return item!=='cat'
})

console.log(enemies)

const cy = (url, ...rest) => {
    console.log(url, rest)
} 

cy('homepage', 1,2,3,4,5)


const isAuthorized = false

function auth () {
    const isAuthorized = true 
    
    console.log(isAuthorized)
}

const theXX = () => { 
    console.log(ww)
    const theYY = () => {
       const ww = true
    }
}

console.log(uu)

const uu = "tekst"