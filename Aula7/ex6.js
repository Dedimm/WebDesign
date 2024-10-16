function dobrar(numero) {
    let i=0;
    let valor;
    do {
        i++;
        if (numero <= 0) {
            console.log("Nao é aceito numero negativo");
        }
        valor = (numero - i) * 2;
        if (valor > 0)
            console.log(valor);
    }while (valor > 0);
    return 0;
} 
const numero = 4;
dobrar(numero);