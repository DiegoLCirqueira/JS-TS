function criaPessoa (nome, sobrenome, idade){
    return{nome, sobrenome, idade};   
}

const pessoa1 ={
    nome:'Diego',
    sobrenome: 'Lins',
    idade: 20,

    fala(){
     console.log('Olá Mundo!')   
    }
}

pessoa1.fala();

const pessoa2 = criaPessoa('Diego', 'Lins', 20)
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade)