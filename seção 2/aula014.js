/*
+--------------------------------------------------------------+
|Não podemos criar variáveis com palavras reservadas:          |
|let let;                                                      |
|let if;                                                       | 
|let console;                                                  |
|--------------------------------------------------------------|
|Variáveis PRECISAM ter nomes significativos !!!               |
|--------------------------------------------------------------|
|NÃO pode começar nome de variável com NÚMERO !!!              |
|--------------------------------------------------------------|
|NÃO pode conter espaço ou traços no nome da variável !!!      |
|--------------------------------------------------------------|
|ULTIIZAR este modelo:                                         |
|nomeCompletoDoCliente                                         |
|--------------------------------------------------------------|
|NÃO podemos modificar o valor de uma contante                 |
+--------------------------------------------------------------+
*/
const nome ='João';
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
console.log('Este é o resultado:',resultado);
console.log('Este é o resultado vezes 2:',resultadoDuplicado);