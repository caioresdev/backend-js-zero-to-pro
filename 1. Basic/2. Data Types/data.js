// Toda linguagem de programação possui tipos de dados e objetos que são usados para armazenar e manipular informações. 
// JavaScript é uma linguagem de programação de tipagem dinâmica, o que significa que você não precisa especificar o tipo de dados de uma variável ao declará-la. 
// O tipo de dados de uma variável pode mudar durante a execução do programa e o JavaScript converterá automaticamente os tipos de dados conforme necessário.

// Tipos:

// Number: Inteiros e decimais.

let age = 25;
let price = 9.99;

// BigInt: Inteiros maiores que 2^53 - 1. 
// É usado para representar números inteiros de precisão arbitrária. 
// O que significa que pode lidar com números muito grandes além do limite de precisão do tipo Number.

let bigNumber = BigInt(9007199254740991) + BigInt(1);
console.log(bigNumber);  // 9007199254740992n

// Valores especiais: Infinity, -Infinity e NaN.

// NaN (Not-a-Number): Resultado de uma operação inválida com números.
// Infinity: Resultam de operações matemáticas como divisão por zero.

console.log(1 / 0);  // Infinity
console.log("abc" * 3);  // NaN

// String: Texto.

let name = "John";
let message = 'Hello, world!';

// Boolean: Verdadeiro ou falso.

let isActive = true;
let isBlocked = false;

// Undefined: Valor indefinido.

let x;
console.log(x); // undefined

// Null: Valor nulo.

let y = null;
console.log(y); // null

// Symbol: Valor único e imutável.

let sym1 = Symbol('id');
let sym2 = Symbol('id');
console.log(sym1 === sym2);  // false (símbolos sempre são únicos)