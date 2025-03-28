// 6. Faça um algoritmo que verifique a letra digitada e imprima se ela é uma vogal ou consoante. (Dica: pesquise sobre o uso de array).

function verificacaoLetra() {
    letraDigitar = prompt("Digite uma letra: ");

    letraVogais = ["a", "e", "i", "o", "u"];

    if (Array.prototype.indexOf(letraDigitar.toLowerCase()) != 0 ) {
        alert("Vogal");
    } else {
        alert("Consoante");
    }
}