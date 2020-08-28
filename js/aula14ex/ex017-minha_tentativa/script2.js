function gerar(){
    let num = document.getElementById('txttabu')
    let tabuada = document.getElementById('tabuada')

    if (num.value.length == 0){
        alert('[ERRO] Informe um número!')
    } else {
        let numero = Number(num.value)
        tabuada.innerHTML = ''
        for (let cont = 0; cont <=10; cont++){
            let item = document.createElement('option')
            resultado = cont * numero
            item.text = `${numero} * ${cont} = ${resultado}`
            tabuada.appendChild(item)
        }
    }
}