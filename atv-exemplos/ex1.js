let salario = 1500;
let salarioeajuste;
let valorReajuste;

if(salario <= 280)
{
    valorReajuste = salario * 0.20;
    salarioreajuste = (valorReajuste) + salario;
    console.log("SALÁRIO DO COLABORADOS: R$" + salario);
    console.log("PERCENTUAL DE REAJUSTE: 20%");
    console.log("SALÁRIO REAJUSTADO: R$" + salarioreajuste);
    console.log("VALOR DO REAJUSTE: R$" + valorReajuste);    
}else if(salario > 280 && salario <= 700)
{
    valorReajuste = salario * 0.15;
    salarioreajuste = (valorReajuste) + salario;
    console.log("SALÁRIO DO COLABORADOS: R$" + salario);
    console.log("PERCENTUAL DE REAJUSTE: 15%");
    console.log("VALOR DO REAJUSTE: R$" + valorReajuste);
    console.log("SALÁRIO REAJUSTADO: R$" + salarioreajuste);
    
}else if(salario > 700 && salario <= 1500)
{
    valorReajuste = salario * 0.10;
    salarioreajuste = (valorReajuste) + salario;
    console.log("SALÁRIO DO COLABORADOS: R$" + salario);
    console.log("PERCENTUAL DE REAJUSTE: 10%");
    console.log("VALOR DO REAJUSTE: R$" + valorReajuste);
    console.log("SALÁRIO REAJUSTADO: R$" + salarioreajuste);
    
}else if(salario > 1500)
{
    valorReajuste = salario * 0.05;
    salarioreajuste = (valorReajuste) + salario;
    console.log("SALÁRIO DO COLABORADOS: R$" + salario);
    console.log("PERCENTUAL DE REAJUSTE: 5%");
    console.log("VALOR DO REAJUSTE: R$" + valorReajuste);
    console.log("SALÁRIO REAJUSTADO: R$" + salarioreajuste);    
}




