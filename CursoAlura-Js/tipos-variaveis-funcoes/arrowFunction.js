function apresentar(nome){
    return `Meu nome é ${nome}`
}
//Arrow function
const apresentaArrow = nome => `Meu nome é ${nome}`
const soma = (n1, n2) => n1 + n2

//Arrow function com mais de uma linha de instrução
const numerosPequenos = (n1, n2) => {
    if(n1 || n2 > 10){
        return 'Somente números de 1 a 9.'
    }else{
        return n1 + n2
    }
}
