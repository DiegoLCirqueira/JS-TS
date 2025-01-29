const nome = 'João'; //string
const nome1 = "João"; //string
const nome2 = "João"; //string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; //undefined -> não aponta pra local nenhum na memória
let sobrenomeAluno = null; //Nulo -> não aponta pra local nenhum na memória
const aprovado = true; // Boolean -> true ou false

console.log( typeof aprovado); // typeof -> identificar se é number,string,null
console.log(nome,nome1,nome2,num1,num2,nomeAluno,sobrenomeAluno,aprovado,);

const a = [1, 2];
const b = a
console.log(a, b);

b.push(3);
console.log(a, b);