//Parâmetros de função

function soma(n1, n2){
    return n1 + n2
}
console.log(soma(2, 3))

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e tenho  ${idade} anos `
}
function multiplica(n1 = 1 , n2 = 1){
    return n1 * n2
}
console.log(multiplica(soma(4 , 2)))