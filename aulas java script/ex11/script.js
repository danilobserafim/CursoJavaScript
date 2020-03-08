function verificar(){
    var data = new Date()
    var ano = data.getFullYear()    
    var fano = document.getElementById('txtano') 
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
       alert('[ERRO] Verifique o ano de de nascimento e tente outra vez')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <15){
                //Criança
                res.innerHTML = `Um garoto com ${idade} anos<br/>`
                img.setAttribute('src','garoto.JPG')
            }else if(idade <= 21){
                //Jovem
                res.innerHTML = `Um jovem com ${idade} anos<br/>`
                img.setAttribute('src','adolecenteele.JPG')
            }else if(idade <= 50){
                //Adulto
                res.innerHTML = `Um Homem com ${idade} anos<br/>`
                img.setAttribute('src','homem.JPG')
            }else{
                //Idoso
                res.innerHTML = `Um senhor com ${idade} anos<br/>`
                img.setAttribute('src','idoso.jpg')
            }

        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade > 0 && idade <15){
                //Criança
                res.innerHTML = `Uma garota com ${idade} anos<br/>`
                img.setAttribute('src','garota.JPG')
            }else if(idade <= 21){
                //Jovem
                res.innerHTML = `Uma jovem com ${idade} anos<br/>`
                img.setAttribute('src','adolecenteela.JPG')
            }else if(idade <= 50){
                //Adulto
                res.innerHTML = `Uma mulher com ${idade} anos<br/>`
                img.setAttribute('src','mulher.JPG')
            }else{
                //Idoso
                res.innerHTML = `Uma senhora com ${idade} anos<br/>`
                img.setAttribute('src','idosa.JPG')
            }
            
        }
        
       res.appendChild(img)
    }
}