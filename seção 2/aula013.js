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
|NÃO podemos redeclarar variáveis com let                      |
+--------------------------------------------------------------+
*/

/*
let nome - Decrala a variável; vai manter essa variável guardada para quando for ultilizar
nome = 'João' - Inicializa a variável
console.log(nome)
*/

let nome = 'João';

console.log(nome, 'nasceu em 1984.')
console.log('Em 2000', nome, 'conheceu Maria.')
console.log(nome, 'casou-se com Maria em 2012.')
console.log('Maria teve 1 filho com', nome, 'em 2015.')
console.log('O filho de', nome, 'se chama Eduardo.')