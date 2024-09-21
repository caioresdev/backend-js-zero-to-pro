// Temos várias palavras reservadas no JavaScript

// Palavras reservadas são palavras que não podem ser usadas como nomes de variáveis, funções, métodos, classes, etc.

// Exemplos de palavras reservadas:

// ######################################################################################

// Variáveis:

// const vem de constante, ou seja, não pode ser alterada depois de declarada
const pi = 3.14; 

// var é uma variável que pode ser alterada, pode ser de escopo de função ou global
var y = 10; // global

function teste() {
    var y = 20; // função
    console.log(y); // 20
}

teste();
console.log(y); // 10

// let é uma variável que pode ser alterada, mas tem escopo de bloco

let x = 10;

if (true) {
    let x = 20;
    console.log(x); // 20
}

console.log(x); // 10

// ######################################################################################

// Controles de Fluxo e Loops:

// do, define o início de um loop do-while, que executa pelo menos uma vez antes de verificar a condição.
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 3);

// while, define um laço que continua enquanto a condição for verdadeira.

while (i < 3) {
    console.log(i);
    i++;
}

// for, define um laço que repete um bloco de código um número fixo de vezes.

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// if, define uma condição para executar um bloco de código.
const age = 20;

if (age >= 18) {
    console.log("Você é adulto");
}

// else, define uma alternativa para um bloco if.

if (age < 18) {
    console.log("Menor de idade");
} else {
    console.log("Maior de idade");
}

// return, sai de uma função e retorna um valor, se especificado.

function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3)); // Saída: 5

// switch, seleciona um bloco de código a ser executado com base em um valor.
// case, define um bloco de código a ser executado em um switch.
// break, interrompe o laço ou switch atual.
// default, define um bloco de código a ser executado se nenhum caso corresponder.

const fruit = 'apple';

switch (fruit) {
    case 'banana':
        console.log('Banana');
        break;

    case 'apple':
        console.log('Apple');
        break;

    default:
        console.log('Unknown fruit');
}

// continue, interrompe a execução do loop atual e continua com o próximo.

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

// ######################################################################################

// Exceções

// try, define um bloco de código a ser testado quanto a erros.
// catch, define um bloco de código a ser executado se um erro for lançado.
// throw, define um erro a ser lançado.
// finally, define um bloco de código a ser executado após o bloco try, independentemente do resultado.

try {
    console.log("Tente isso");
    throw new Error("Algo deu errado");
} catch (error) {
    console.log("Erro!");
} finally {
    console.log("Sempre executa");
}

// ######################################################################################

// Módulos

// Essas palavras são usadas para importar/exportar funcionalidades e trabalhar com módulos.

// export, exporta funções, objetos ou valores de um módulo.

export const name = 'John';

// import, importa funções, objetos ou valores de um módulo.

import { name } from './words.js';

// default, exporta um valor padrão de um módulo.

export default function sum(a, b) {
    return a + b;
}

// ######################################################################################