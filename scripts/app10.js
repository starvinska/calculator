const whatYouWant = (cb) => {
    cb('tekst', "drugi", 33)
}

whatYouWant((name, bbb, zzz) =>{
    console.log( zzz)
})

const arr = ["McDonald", 'KFC']

const filterArray = arr.filter((name)=> {
    return name !== 'KFC'
})

console.log(filterArray)


const showArray = (liczba, aaa) => {
    console.log(aaa)
    const arr = []
    for(let i = 0; i <10; i++) {
        arr.push(liczba*i)
    } 
    return arr
}

showArray(1, 'aaabbb')

const result = showArray(5)

console.log(result)


function xxx (...all) {
    return all[2]

}

const r = {
    aaa: 'aaa',
    bbb: 3
}

const {
    aaa
} = r

console.log(`jakiś tekst ${aaa}`)


function aa (fn)  {
        fn()
}

aa(()=> {
    console.log('aaa')
})