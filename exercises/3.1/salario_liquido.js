let salarioBruto = 5283.98;
let salarioMenosInss = null;
let salarioLiquido = null;
if (salarioBruto <= 1556.94 && salarioBruto >= 0){
    salarioMenosInss = (salarioBruto - (salarioBruto * 0.08));
}else if (salarioBruto >= 1556.94 && salarioBruto <= 2594.92){
    salarioMenosInss = (salarioBruto - (salarioBruto * 0.09));
}else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    salarioMenosInss = (salarioBruto - (salarioBruto * 0.11));
}else {
    salarioMenosInss = (salarioBruto - 570.88);
}
if (salarioBruto <= 1903.98 && salarioBruto >= 0){
    salarioLiquido == salarioMenosInss;
}else if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65){
    salarioLiquido = (salarioMenosInss - (salarioBruto * 0.075) - 142.80);
}else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05){
    salarioLiquido = (salarioMenosInss - (salarioBruto * 0.15) - 354.80);
}else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68){
    salarioLiquido = (salarioMenosInss - (salarioBruto * 0.22) - 636.13);
}else {''
    salarioLiquido = (salarioMenosInss - 869.36- (salarioBruto * 0.275));
}
console.log("seu salario liquido é " + salarioLiquido.toFixed(2));x