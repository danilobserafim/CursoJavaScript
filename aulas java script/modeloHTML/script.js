function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 5
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora > 0 && hora < 12){
        //Bom dia
        img.src = 'manha.jpg'
        document.body.style.backgroundColor = '#e2cd9f'
    }else if(hora < 18 ){
        //Boa tarde
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = '#a37462'
    }else{
        //Boa noite
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = '#cebc96'
    }
}