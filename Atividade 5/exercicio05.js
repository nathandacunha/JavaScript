// 5. Faça um algoritmo que peça um número e se este número for par, transforme-o em ímpar e vice-versa. 
function transformacaoNumeroImpar() {
    let num = parseFloat(prompt("Digite um número: "));
    numeroPar = num/2;
    if (numeroPar == 0) {
        num = num+1;
    } else if (numeroPar == 1) {
        num = num-1;
    }
}
