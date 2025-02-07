const alunos = ['Diego', 'Carina', 'João'];

alunos.push('Vilma'); // Vai adicionar ao final da lista
alunos.unshift('Flora'); // Vai adicionar no início da lista

console.log(alunos.slice(0, 2))

const removido = alunos.pop(); // remove o ultimo da lista
console.log(removido) // mostra o que foi removido

const removido1 = alunos.shift(); // remove o primeiro da lista
console.log(removido1) // mostra o que foi removido

console.log(alunos)
console.log(alunos[0])
console.log(alunos[1])
console.log(alunos[2])
