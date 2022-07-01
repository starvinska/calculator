function words (tekst) {
   const result = []

   for(let i=0; i<tekst.length; i++) {
    result.push(tekst[i])
   } 

   return result
}

console.log(words('krowa'))


const yyy = words('aaaaaa')

console.log(yyy)





// const userName = prompt('podaj usename')
// const password = prompt('podaj hasło')

// console.log(userName, password)


const users = {
   nazwaUsera: "hasło",
   tom: "hasło",
   ola: {
      aaa: 'ciamciaramc'
   }
}

const rrr = (xxx) =>{
   console.log(xxx)
}

const {nazwaUsera, ola, ...uuu} = users

rrr(uuu.tom)

function getUser (user) {
   const u = users[user]
   
   if(u !== undefined) {
      return u
   }
else {
   console.log('błąd')
}
} 


// getUser(userName)
// {
//    ifExists: true,
//    password: 'hasło'
// }

const t = "Ola"
const b = "Ciamciaramcia"

const x = t + b + " OOOO"
const xxx = "YYYY " + "XXXX"

console.log(x)

const xxxx = `Ola jest ${b}`

console.log(xxxx)

const aaa = (...yyy) => {
   console.log(yyy)
}

aaa(1,1,1,5,6,7,36,3)