function contagemRegressiva() {
    var cont = 11;
    let i = 1;
    let contador = 0;

    function decreaseCont () {
        contador = cont - i;
        i++;
        while(contador >= 0) {
            document.write(contador);
            return contador;
        }
    }
    setInterval(decreaseCont, 1000);
    
}
