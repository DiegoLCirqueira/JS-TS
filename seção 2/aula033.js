// usar {...a} quando quiser permanecer com o valor da referência
const a ={
    nome: 'Diego',
    sobrenome: 'Lins',
};
const b = {...a};

a.nome = 'João';
console.log(a);
console.log(b);