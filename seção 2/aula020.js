/* 
Aritméticos:
    + Adição e Concatenação | - e *
    ** Elevado
    % Resto da divisão
    /

Ordem de execução:
    ()
    **
    *, /, %
    +, -
*/

// Somar de 1 em 1:
let contador = 1;
contador++;
++contador;
console.log(contador)

let contador1 = 1;
console.log(contador1++)
console.log(contador1)

let contador2 = 1;
console.log(++contador2)

//Subtrair de 1 em 1:

let subtrair = 10;
console.log(--subtrair)

//Somar quantidade predefinida:
const step = 2;
let num1 = 1;
num1 += step; // num1 = num1 + step
console.log(num1)
//---------------------------
let resultado = 0;
resultado += 2;
console.log(resultado)

//Transformando uma string em int:
const n1=10;
const n2 = parseInt('5');
console.log(n1 + n2)

//Transformando uma string em float:
const N1=10;
const N2 = parseFloat('5.5');
console.log(N1 + N2)