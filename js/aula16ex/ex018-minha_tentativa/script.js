function adicionar(){
    let num = document.getElementById('txtnum')
    let insere = document.getElementById('txtinsere')
    let valores = []

    if (num.value.length == 0){
        alert('[ERRO] Informe um número!')
    } else {
        valores.push(Number(num.value))
        if (valore < 1 || valores > 100){
            alert('[ERRO] Valor inválido ou já encontrado na lista')
        }
        else if (valores.indexOf(Number(num.value)) != -1){
            alert('[ERRO] Valor inválido ou já encontrado na lista')
        } else {
            let item = document.createElement('option')
            insere.appendChild(item)
            item.text = `Valor ${num.value} adicionado.`
            item++
        }   
    }
}

/*
function gerarTabuada() {
    let num = document.getElementById('txtnum')
    let tabu = document.getElementById('tabuada')

    if (num.value.length == 0){
        alert('[ERRO] Informe um número!')
    } else {
        let numero = Number(num.value)
        let cont = 1
        tabu.innerHTML = ''
        while (cont <= 10){
            let item = document.createElement('option')
            item.text = `${numero} x ${cont} = ${numero*cont}`
            tabu.appendChild(item)
            cont++
        }
    }
}
*/