let valores = [2, 5, 8, 4, 9, 3, 6]

/*for(let pos =0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]} `)
}*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}