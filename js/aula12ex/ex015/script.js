function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) { // Number nesse caso é só para deixar mais explicito, pois sem o 'Number', funciona também!
        alert('[ERRO] Verifique os dados informados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Masculino'
            if (idade >= 0 && idade < 4){
                // Criança de até 3 anos
                img.setAttribute ('src', 'm1.png')
            } else if (idade < 7){
                // Criança de ate 6 anos
                img.setAttribute ('src', 'm5.png')
            } else if (idade < 13){
                // Criança/Adolescente de até 12 anos
                img.setAttribute ('src', 'm10.png')
            } else if (idade < 17){
                // Adolescente de até 16 anos
                img.setAttribute ('src', 'm15.png')
            } else if (idade <= 25){
                // Adulto de até 25 anos
                img.setAttribute ('src', 'm25.png')
            } else if (idade <= 35){
                // Adulto de até 35 anos
                img.setAttribute ('src', 'm35.png')
            } else if (idade <= 45){
                // Adulto de até 45 anos
                img.setAttribute ('src', 'm45.png')
            } else if (idade <= 55){
                // Adulto de até 55 anos
                img.setAttribute ('src', 'm55.png')
            } else if (idade <= 65){
                // Idoso de até 65 anos
                img.setAttribute ('src', 'm65.png')
            } else if (idade <= 75){
                // Idoso de até 75 anos
                img.setAttribute ('src', 'm75.png')
            } else if (idade <= 85){
                // Idoso de até 85 anos
                img.setAttribute ('src', 'm85.png')
            } else {
                // Idoso de até 86 anos pra cima.
                img.setAttribute ('src', 'm95.png')
            }
        } else if (fsex[1].checked){
            genero = 'Feminino'
            if (idade >= 0 && idade < 4){
                // Criança de até 3 anos
                img.setAttribute ('src', 'f1.png')
            } else if (idade < 7){
                // Criança de ate 6 anos
                img.setAttribute ('src', 'f5.png')
            } else if (idade < 13){
                // Criança/Adolescente de até 12 anos
                img.setAttribute ('src', 'f10.png')
            } else if (idade < 17){
                // Adolescente de até 16 anos
                img.setAttribute ('src', 'f15.png')
            } else if (idade <= 25){
                // Adulto de até 25 anos
                img.setAttribute ('src', 'f25.png')
            } else if (idade <= 35){
                // Adulto de até 35 anos
                img.setAttribute ('src', 'f35.png')
            } else if (idade <= 45){
                // Adulto de até 45 anos
                img.setAttribute ('src', 'f45.png')
            } else if (idade <= 55){
                // Adulto de até 55 anos
                img.setAttribute ('src', 'f55.png')
            } else if (idade <= 65){
                // Idoso de até 65 anos
                img.setAttribute ('src', 'f65.png')
            } else if (idade <= 75){
                // Idoso de até 75 anos
                img.setAttribute ('src', 'f75.png')
            } else if (idade <= 85){
                // Idoso de até 85 anos
                img.setAttribute ('src', 'f85.png')
            } else {
                // Idoso de até 86 anos pra cima.
                img.setAttribute ('src', 'f95.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos uma pessoa do gênero ${genero} </br> com ${idade} anos! </p>`
        res.appendChild(img)
    }
}