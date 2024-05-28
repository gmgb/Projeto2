import entradaDados from 'readline-sync';
console.log('Aplicação de juros:\n');

let divida = entradaDados.question('Informe o valor devido: R$ ');
let dias = entradaDados.question('Informe quantos dias se passaram desde o vencimento do boleto: ');

if divida = 0{
    console.log("O Valor da dívida deve ser maior que 0!);
}
else{
    console.log(dias)
};
    

let juros1 = divida * 0.10;
let juros2 = divida * 0.05;

let juros_aplicado = (dias >= 15) && juros1;

console.log("\nValor original da dívida: "+divida);
console.log("Dias atrasados: "+dias);

let total1 = Number(divida) + Number(juros1);
let total2 = Number(divida) + Number(juros2);

if (juros_aplicado == juros1){
    console.log("Taxa de Juros: 10%");
    console.log("Total da divida: " +total1)
}
else{
    console.log("Taxa de Juros: 5%");
    console.log("Total da dívida: " +total2)
};






