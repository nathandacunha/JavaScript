// 6. Faça um algoritmo que verifique a letra digitada e imprima se ela é uma vogal ou consoante. (Dica: pesquise sobre o uso de array).

function verificacaoLetra() {
    letraDigitar = prompt("Digite uma letra: ");

    if (letraDigitar.includes("a", "i", "o", "u")) {
        alert("A letra é vogal");
    }
}