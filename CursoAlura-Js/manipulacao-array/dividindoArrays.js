let nomes = ['Ana','Alberto', 'Alice', 'Borges', 'Barbara', 'Beatriz', 'Bruno', 'Carlos', 'Carolina', 'Caio', 'Denilson', 'Daniele', 'Daniel', 'Eliseu', 'Elias', 'Elisangela', 'Eduarda', 'fábio', 'Fabiana', 'Felipe', 'Joel', 'Guanabara']

function titulo (msg){
    let tam = msg.length + 4
    console.log('*='.repeat(tam))
    console.log(msg)
    console.log('*='.repeat(tam))
    return 
}

titulo('Escola Municipal\nLista de alunos da escola:')

for(let pos in nomes){
    console.log(`${pos}. ${nomes[pos]} `) //Estrutura de repetição para apresentar a lista completa de alunos enumerada.
}

titulo('Sala 1')

let sala1 = nomes.slice(0, nomes.length/2) //Método usado para dividir uma array, neste caso para dividir em 2 turmas.
    for(let n in sala1){
        console.log(`${n}.${sala1[n]}`)
    }

titulo('Sala 2')

let sala2 = nomes.slice(nomes.length/2)
    for(let n in sala2){
        console.log(`${n}.${sala2[n]}`)
    }



