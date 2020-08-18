function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var cabecalho = document.getElementById('cabecalho')
    var rodape = document.getElementById('rodape')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 18
    msg.innerHTML = `Agora são ${hora} horas!`

        if(hora >= 6 && hora < 12){
            //Bom dia
            img.src = 'manha.png'
            msg.innerHTML += '<p>Bom dia! Pronta pra começar?</p>'
            document.body.style.background = '#bac5cb'
            cabecalho.style.color = '#04330e'
            rodape.style.color = '#04330e'
        } else if (hora >= 12 && hora < 18){
            // Boa tarde
            img.src = 'tarde.png'
            msg.innerHTML += '<p>Boa tarde! Você já almoçou?</p>'
            document.body.style.background = '#f69f2c'
            cabecalho.style.color = '#421400'
            rodape.style.color = '#421400'
        } else if (hora >=18 && hora <= 23) {
            // Boa noite
            img.src = 'noite.png'
            msg.innerHTML += '<p>Tenha uma ótima noite e bom descanso!</p>'
            document.body.style.background = '#0e3359'
            cabecalho.style.color = '#d49457'
            rodape.style.color = '#d49457'
        } else {
            // Madrugada
            img.src = 'madrugada.png'
            msg.innerHTML += '<p>Já é tarde! Você não deveria estar dormindo e tendo bons sonhos?</p>'
            document.body.style.backgroundImage = 'url("sonhos1.jpg")'
            cabecalho.style.color = '#053e4f'
            rodape.style.color = '#053e4f'
        }
}