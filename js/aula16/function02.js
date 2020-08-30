/* function soma(n1, n2){
    return n1 + n2
}

console.log(soma(7))

Quando não colocamos ' = 0' nos parametros, caso deixarmos de dar os valores nas chamadas, a resposta sera NaN (not a number)
porém se colocarmos, o parâmetros que não foi chamado será substituido por zero.  
*/ 
function soma(n1=0, n2=0, n3=0){
    return n1 + n2 + n3
}

console.log(soma(7))