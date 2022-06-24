/*var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}


var idade = 66
console.log(`Você tem ${idade} anos`)
if(idade < 16){
    console.log(`Não vota!`)
}else if(idade < 18 || idade > 65){
        console.log(`Voto opcional!`)
    }else{
        console.log(`Voto obrigatorio!`)
    }

var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if(hora < 4){
    console.log(`Bom dia! Aproveite a madrugada.`)
}else if(hora > 4 && hora < 12){
    console.log(`Bom dia! Aproveite a paisagem.`)
}else if(hora <= 18){
    console.log(`Boa tarde!`)
}else{
    console.log(`Boa noite!`)
}*/



var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)
switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('ERRO! Dia inválido.')
}






