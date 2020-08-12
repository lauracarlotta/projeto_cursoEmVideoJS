var Agora = new Date()
var hora = Agora.getHours() // Assim colocamos exatamente a hora do sistema do comput.

console.log(`Agora são exatamente ${hora} horas!`)

if(hora >= 6 && hora < 12){
    console.log('Olá, bom dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde, você já almoçou?')
} else if (hora >= 18 &&  hora <=24 ){
    console.log('Boa noite! você está cansado? Trabalhou muito?')
} else{
    console.log('É madrugada, você não deveria estar dormindo?')
}
