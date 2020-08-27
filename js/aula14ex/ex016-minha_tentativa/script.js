function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var contando = document.getElementById('contando')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
            contando.innerHTML = 'Impossível contar!'

            if (Number(passo.value) < 1){
                alert('[ERRO] Impossivel contar, passo mudará para "1"!')
                Number(passo.value) = 1
            }
            if (inicio.value < fim.value){
                for(var c = Number(inicio.value);  c <= Number(fim.value); c += Number(passo.value)){
                    contando.innerHTML += `${c} \u{1F449} `
                }
            } else {
                for(var c = Number(inicio.value);  c >= Number(fim.value); c -= Number(passo.value)){
                contando.innerHTML += ` ${c} \u{1F449} `
                }
            }
            contando.innerHTML += `\u{1F3C1}`
    }
}