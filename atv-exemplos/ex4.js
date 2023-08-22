let nLitro;
let tipo;
let precoGasolina = 2.50;
let precoAlcool = 1.90;
let valorTotal;
let valorDoDesconto;
let valorComDesconto;

nLitro = 65;
tipo = "B";

if(tipo == "A"){
    console.log(">>Álcool<<")
    valorTotal = nLitro * precoAlcool;
    if(nLitro <= 20){
        valorDoDesconto = valorTotal * 0.03;
        valorComDesconto = valorTotal - valorDoDesconto; 
    }else if(nLitro > 20){
        valorDoDesconto = valorTotal * 0.05;
        valorComDesconto = valorTotal - valorDoDesconto; 
    }
}else if(tipo == "B"){
    console.log(">>Gasolina<<")
    valorTotal = nLitro * precoGasolina;
    if(nLitro <= 20){
        valorDoDesconto = valorTotal * 0.04;
        valorComDesconto = valorTotal - valorDoDesconto; 
    }else if(nLitro > 20){
        valorDoDesconto = valorTotal * 0.06;
        valorComDesconto = valorTotal - valorDoDesconto; 
    }
}

console.log("O valor a ser pago é: R$ " + valorComDesconto);