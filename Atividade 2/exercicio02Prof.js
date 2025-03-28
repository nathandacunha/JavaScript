function lancamento(){
    var contagem = 10;

    let sequencia = setInterval(contagemLancamento(), 1000);

    function contagemLancamento(){
        console.log(contagem);

        if (contagem == 5){
            console.log("Falta 5s para o lançamento...");
        }

        if (contagem < 1){
            console.log("Lançamento!");
            clearInterval(sequencia);
        }
        contagem--;
    }

}