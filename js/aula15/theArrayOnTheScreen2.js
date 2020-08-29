
/* Forma tradicional nos vetores

for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}!`)
}
*/

//  Forma simplificada do ES6

let valores = [2, 9, 6, 5, 7, 1]


console.log(valores)
valores.sort() // não precisa necessariamente. Eu coloquei para ficar ordenado!



for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// console.log(valores.indexOf(7))  <- Irá retornar a key 4 do array, pois é aonde o '7' se encontra depois de ordenado. Contudo, caso o valor 7 não existisse, o JS retornaria pra nós a key -1, ou seja (nesse caso) o valor '7' não existiria! 