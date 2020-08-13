function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var rodape = document.getElementById('footer')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 18
    msg.innerHTML = `Agora são ${hora} horas!`

        if(hora >= 6 && hora < 12){
            //Bom dia
            img.src = 'manha.png'
            msg.innerHTML += '<p>Bom dia! Pronta pra começar?</p>'
            document.body.style.background = '#bac5cb'
        } else if (hora >= 12 && hora < 18){
            // Boa tarde
            img.src = 'tarde.png'
            msg.innerHTML += '<p>Boa tarde! Você já almoçou?</p>'
            document.body.style.background = '#f69f2c'
        } else if (hora >=18 && hora <= 23) {
            // Boa noite
            img.src = 'noite.png'
            msg.innerHTML += '<p>Tenha uma ótima noite e bom descanso!</p>'
            document.body.style.background = '#0e3359'

        } else {
            // Madrugada
            img.src = 'madrugada.png'
            msg.innerHTML += '<p>Já é tarde! Você não deveria estar dormindo e tendo bons sonhos?</p>'
            document.body.style.backgroundImage = 'url("sonhos1.jpg")' 
            footer.style.color = '#053e4f'
        }
        // background-image:url(buttons/off.png)
}

