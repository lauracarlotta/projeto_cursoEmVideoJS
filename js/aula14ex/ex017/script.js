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