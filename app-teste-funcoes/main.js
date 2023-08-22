const somar = require('./somar');
const reajusteSalarial = require('./exec01');

let resultado = somar(1, 3);
console.log("O resultado da soma = " + resultado);

reajusteSalarial("João", 1500);