function generateNumber (min, max) {
   return Math.floor(Math.random() * (max-min+1) + min);
}

const tab =[];

for (let i=0; i<10; i++ ) {
    const nam = generateNumber(30,70)
    if(nam <40) {
        console.log('błąd',nam,i)
        continue
    } 
    else{
        tab.push (nam)
    }
}

console.log(tab)

function sumArray (arr) {
    let sum = 0
    for (let i=0; i<arr.length; i++) {
sum=sum+arr[i]
    }

    return sum

}

console.log(sumArray(tab))