/*
Ambos darão "typeof como object "{
    
    let amigo = [] <- Array 

    let amigo = {} <- Object
}

console.log(typeof amigo) <- No JS, um array é um objeto e um objeto é um OBJETO rs, iso porquê eles são estruturas da mesma
classe, estruturas que vieram da mesma origem. */

let amigo = 
{nome:'José', 
sexo:'M', 
peso:85.4,
engordar(p = 0){
    console.log('Engordou!')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg.`)

// console.log(amigo.nome) <- object.atributo = mostra isoladamente o valor.
// this é uma palavra auto referencia do object
