// 3. A empresa Mawer precisa fazer o balanço financeiro anual, portanto te contrataram e disseram: faça um algoritmo que peça o ganho bruto e os gastos desta empresa para cada um dos 12 meses de um ano, e que mostre no final o ganho bruto anual, o gasto anual e o saldo financeiro, informando também se a empresa teve lucro ou prejuízo.


function calcularBruto() {
    ganhoBruto = parseFloat(prompt("Digite seu ganho bruto: "));
    gastosEmpresa = parseFloat(prompt("Digite os gastos mensalmente da empresa: "));
    ganhoBruto = ganhoBruto*12;
    gastosEmpresa = gastosEmpresa*12;

    if (ganhoBruto <= gastosEmpresa) {
        alert("Gastos da empresa deste ano foi: " + gastosEmpresa);
        alert("Ganhos bruto deste ano foi:  " + ganhoBruto);
        alert("Saldo financeiro deste ano foi: " + gastosEmpresa);
        alert("A empresa neste ano, teve lucro!");
    } else if (ganhoBruto >= gastosEmpresa) {
        alert("Gastos da empresa deste ano foi: " + gastosEmpresa);
        alert("Ganhos bruto deste ano foi:  " + ganhoBruto);
        alert("Saldo financeiro deste ano foi: " + gastosEmpresa);
        alert("A empresa neste ano, teve prejuízo!");
    } 
}