/* ...AINDA SERIA A CODIÇÃO COMPOSTA 

var idade = 26
if(idade < 18){
    console.log('Você é menor de idade!')
} else {
    console.log('Você já atingiu a maioridade!')
}*/

var idade = 68
console.log(`Você tem ${idade} anos de idade!`)

if(idade < 16){
    console.log('Você não pode votar!')
} else if (idade < 18 || idade > 65){
    console.log('Seu voto é opcional!')
} else {
    console.log('Você precisa votar, pois pra você o voto é obrigatório no Brasil!')
}