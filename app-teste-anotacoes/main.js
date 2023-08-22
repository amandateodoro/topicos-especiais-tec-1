
IniciarSistema();

console.log('Hello World!');

let nome = "Fulano";
let apresentacao = "Olá " + nome;
let idade = 36;

if(idade >=30){
    console.log("Idade MAIOR que 30");
}else{

    console.log("Idade MENOR que 30");
}

for(let i = 0; i <= 10; i++){
    console.log(">> i = " + i);
}

let numero = 10;

while(numero <= 20){
    console.log("N° " + numero);
    numero++;
}


function IniciarSistema(){
    console.log("Iniciando o sistema!");
}

function Somar(numero1 , numero2){
let resultado = numero1 + numero2;
return resultado;
}

let resultado = Somar(10, 20);
console.log("O resultado da soma = " + resultado);


//console.log(apresentacao);
//console.log("Nome: " + nome + ', parabéns pelos seus ' + idade + ' anos!');

//let informacao = {
//nome: "Amanda",
//sobrenome: "Teodoro",
//idade: 18,
//email: "amandateodorocunha@gmail.com",
//salario: 480.48
//};

//let apresentacao2 = "Olá " + informacao.nome;

//console.log(apresentacao2 + '\n');

//console.log(informacao.nome + '\n');

//console.log(informacao);


