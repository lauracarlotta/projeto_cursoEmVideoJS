function contar(){
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let contador = document.getElementById('contador')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        contador.innerText = 'Impossível contar. Faltam dados!'
    } else {
        contador.innerText = 'Contando:'
        let ini = Number(inicio.value)
        let fm = Number(fim.value)
        let pas = Number(passo.value)
        
        if (pas <=0){
            alert('[ERRO] Contagem será feita com valor 1')
            pas = 1
        }

        if (ini < fm){
            for (let cont = ini; cont <= fm; cont += pas)
            contador.innerText += ` ${cont} \u{1F449} `
        } else if (ini > fm) {
            for (let cont = ini; cont >= fm; cont -= pas)
            contador.innerHTML += ` ${cont} \u{1F449} `
        }
        contador.innerHTML += `\u{1F3C1}`
    }
        
}