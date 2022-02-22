function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.lenght == 0|| fano.value > ano){
        alert('[Erro] Verifique os dados e tente novamente')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','img/crianca=h.png')
            }
            else if(idade < 21){
                img.setAttribute('src', 'img/adolescente-h.png')
            }
            else if( idade < 50){
                img.setAttribute('src', 'img/homem.png')
            }
            else{
                img.setAttribute('src','idoso-h.png')
            }
        }
        else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/crianca=m.png')
            }
            else if(idade < 21){
                img.setAttribute('src', 'img/adolescente-m.png')
            }
            else if( idade < 50){
                img.setAttribute('src', 'img/Sem título.png')
            }
            else{
                img.setAttribute('src', 'img/idoso-m.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos`
        res.appendChild(img)
    }
}