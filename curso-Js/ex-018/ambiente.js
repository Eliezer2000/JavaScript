let num = [7 , 2, 9, 3, 8, 4,]
num.push(1)
console.log(num)
num.sort()
console.log(num)
console.log(`O primeiro valor é ${num[0]}`)
console.log(`O vetor tem ${num.length} posições`)
let pos = num.indexOf(3)

if(pos == -1){
    console.log('O valor não foi encontrado!')
}
else{
    console.log(`O valor  está na posição ${pos}`)
}