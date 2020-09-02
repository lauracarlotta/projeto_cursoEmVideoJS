let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] 
/* 1º erro = colocar o array dentro de uma função especifica ao invés de fazer a declaração dentro do escopopara 
que todo o código tivesse acesso ao mesmo */


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

/* 2º erro = não utilizei a ultima aula sobre funções, quando o Guanabara mostra uma forma de uma função fazer uma chamada
para outra função */

// 3º Eu percebi que os valores não estavam sendo adicionados no array (usando o .push() resolvemos esse problema)

/* 4º Eu usei as divs do html errados também pensando que eu deveria partilhar os botões nas div, enquanto na verdade o que 
 eu deveria ter feito era colocar inputs em uma div e o res em outra. */
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('[ERRO] Valor inválido ou já se encontra na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Informe um número para continuar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        /* Percebi também que mesmo que eu tivesse conseguido chegar a essa parte do exercício, eu não teria usado esse laço
        pra conseguir o que eu precisava*/
            
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
        }
        for(let pos in valores){
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma/tot

        res.innerHTML = ''
        res.innerHTML += `<p>O total de elementos informados foram <strong>${tot}</strong> elementos.</p>`
        res.innerHTML += `<p>O maior valor informado foi o número <strong>${maior}</strong>.</p>`
        res.innerHTML += `<p>O menor valor informado foi o número <strong>${menor}</strong>.</p>`
        res.innerHTML += `<p>Somando todos os valores, o total é <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A média de todos os valores, é igual a <strong>${media}</strong>.</p>`
    }
}
