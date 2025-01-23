let nome = 'Diego';
let sobrenome = 'Lins';
let idade = 20;
let peso = 87;
let altura = 1.86;
let anoNascimento = 2025 - idade;

const imc = peso / (altura * altura);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);