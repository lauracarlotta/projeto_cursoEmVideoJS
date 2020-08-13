function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if(hora >= 6 && hora < 12){
        //Bom dia
    } else if (hora >= 12 && hora < 18){
        // Boa tarde
    } else if (hora >=18 && hora < 00) {
        // Boa noite
    } else {
        // Já é tarde! Você não deveria estar domindo, ahan?
    }
}

