function gerar(){
    let num = document.getElementById('txttabu')
    let tabuada = document.getElementById('tabuada')

    if (num.value.length == 0){
        alert('[ERRO] Informe um numero')
    } else {
        let numero = Number(num.value)
        for (let cont = 0; cont <=10; cont++){
            resultado = cont * numero
            tabuada.innerHTML = `${numero} * ${cont} = ${resultado} <br>`
        }
    }
}