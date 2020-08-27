// let foi criado nas ultimas versões do JS e é melhor por uma declaração do escopo*

function contar(){
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let contando = document.getElementById('contando')

    if (inicio.value.length == 0 || fim.value.length ==0 || passo.value.length ==0){
        contando.innerHTML = 'Impossível contar!'
    } else{
        contando.innerHTML = 'Contando:'
        let ini = Number(inicio.value)
        let f = Number(fim.value)
        let pas = Number(passo.value)

        if(pas <= 0){
            alert('[ERRO] Impossivel contar a passo "1"!')
            pas = 1
        }
        if(ini < f){
            for(let c = ini; c <= f; c += pas){
                // contagem crescente
                contando.innerHTML += ` ${c} \u{1F449} `
            }
        } else {
            for(let c = ini; c >= f; c -= pas){
                // contagem decrescente
                contando.innerHTML += ` ${c} \u{1F449} `
            }
        }
        contando.innerHTML += `\u{1F3C1}`
    }
}