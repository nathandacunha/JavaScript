/*
Faça um algoritmo para uma picoleteria que ao selecionar o tipo de sabor o preço do picolé é mostrado, os sabores:
a. Chocolate custa R$:1,50
b. Morango custa R$:2,50
c. Creme custa R$:2,50
d. Manga custa R$:3,20
e. Melancia custa R$:3,40
f. Vanilla Ice custa R$:3,00
g. Céu Azul custa R$:3,60
h. Brownie custa R$:4,00
i. Hawaiano custa R$:5,00
Obs.: Neste exercício também é utilizado array.
*/ 

function precoPicole(){
    alert("a. Chocolate")
    alert("b. Morango")
    alert("c. Creme")
    alert("d. Manga")
    alert("e. Melancia")
    alert("f. Vanilla Ice")
    alert("g. Céu Azul")
    alert("h. Brownie")
    alert("i. Hawaiano")

    let opcoes = prompt("Decide um tipo de picole (tudo minusculo): \n");
    if (opcoes == "a"){
        alert("Preço:s R$1.50"); //1.50
    } else if (opcoes == "b") {
        alert("Preço R$2,50") // 2,50
    } else if (opcoes == "c") {
        alert("Preço: R$2,50"); // 2,50
    } else if (opcoes == "d"){
        alert("Custa: R$3,20") // 3,20
    } else if (opcoes == "e") {
        alert("Custa: R$3,40") // 3,40
    } else if (opcoes == "f"){
        alert("Custa: R$3,00") // 3,00
    } else if (opcoes == "g") {
        alert("Custo: R$3,60"); // 3,60
    } else if (opcoes == "h") {
        alert("Custa: R$4,00"); // 4,00
    } else if (opcoes == "i") {
        alert("Custa: R$5,00"); // 5
    }
}
