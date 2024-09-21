// Você deve ter percebido alguns simbolos nos códigos anteriores, como === e ++. 
// Esses são operadores, que são usados para realizar operações em variáveis e valores.

// Operadores Aritméticos:

// +: Adição
// -: Subtração
// *: Multiplicação
// /: Divisão
// %: Resto da divisão
// ++: Incremento
// --: Decremento
// **: Exponenciação

let a = 10;
let b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.3333333333333335
console.log(a % b);  // 1
console.log(++a);  // 11
console.log(--b);  // 2
console.log(a ** b);  // 1000

// Operadores de Atribuição:

// =: Atribuição
// +=: Adição e atribuição
// -=: Subtração e atribuição
// *=: Multiplicação e atribuição
// /=: Divisão e atribuição
// %=: Resto da divisão e atribuição

let x = 10;
x += 5; // x = x + 5
console.log(x); // x = 15

// Operadores de Comparação:

// ==: Igualdade
// ===: Igualdade estrita
// !=: Diferença
// !==: Diferença estrita
// >: Maior que
// <: Menor que
// >=: Maior ou igual a
// <=: Menor ou igual a

let y = 5;
let z = "5";
console.log(y == z);  // true

// ==: Verifica igualdade, mas **converte os tipos** dos operandos se necessário. Isso pode levar a resultados inesperados.
// ===: Verifica igualdade **sem conversão de tipo**, ou seja, os tipos dos operandos também devem ser os mesmos.

console.log(5 == '5');   // true (conversão automática de tipos)
console.log(5 === '5');  // false (tipos diferentes)
console.log(5 != '5');   // false (são considerados iguais)
console.log(5 !== '5');  // true (tipos diferentes)

// Operadores Lógicos:

// &&: E lógico
// ||: Ou lógico
// !: Negação lógica

let p = true;
let q = false;
console.log(p && q); // false (ambos precisam ser verdadeiros)
console.log(p || q); // true (pelo menos um é verdadeiro)
console.log(!p);     // false (negação de true é false)

// Operadores Ternários:

// ?: Operador condicional (ternário)

// É o único operador em JavaScript que possui três operandos. Ele é uma maneira curta de escrever uma condicional if-else

let idade = 18;
let canVote = idade >= 18 ? "Yes" : "No";
console.log(canVote);  // Yes

// Operador de Tipo:

// typeof: Retorna o tipo de uma variável ou expressão

console.log(typeof 42);  // number
console.log(typeof "Hello");  // string
console.log(typeof true);  // boolean

// Operadores Verificador:

// instanceof: Retorna true se um objeto é uma instância de um tipo de objeto

let cars = ["BMW", "Volvo", "Mini"];
console.log(cars instanceof Array);  // true
console.log(cars instanceof Object);  // true

// Operadores de Desestruturação:

// Desestruturação de Arrays

let numbers = [1, 2, 3];
let [first, second, third] = numbers;
console.log(first);  // 1
console.log(second);  // 2
console.log(third);  // 3

// Desestruturação de Objetos

let person = { name: "John", age: 30 };
let { name, age } = person;
console.log(name);  // John
console.log(age);  // 30

// Já que você viu um pouco de objetos, vamos a fundo no próximo arquivo.