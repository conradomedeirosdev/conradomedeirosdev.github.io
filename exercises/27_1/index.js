const readlineSync = require('readline-sync') ; 

const peso = readlineSync.questionFloat('Quanto vc pesa?');
const altura = readlineSync.questionFloat('Qual é sua altura?');
const IMC = peso / Math.pow(altura,2)
console.log('O seu IMC é ' + IMC.toFixed(2) + '!');