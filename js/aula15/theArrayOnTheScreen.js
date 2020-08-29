let valores = [2, 9, 6, 5, 7, 1]

console.log(valores)
valores.sort()
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5]) */


//  Forma tradicional nos vetores

for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}!`)
}

//  Veja a forma simplificada no arquivo "theArrayOnTheScreen2.js"