// let num = []  --->  variável vazia
 
let num = [3,2,5,4,6]

num.push(1)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições!`)
console.log(`O segundo valor do vetor é o número ${num[2]}`) // assim mostrará isoladamente
let pos = num.indexOf(4) // assim, eu procuro o valor '4' no array "num".
if(pos == -1){
    console.log(`O valor valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}!`)
}