function Palindromo(texto) {
    const textoLimpo = texto.replace(/[\W_]/g, '').toLowerCase();
    const textoInvertido = textoLimpo.split('').reverse().join('');
    
    return textoLimpo === textoInvertido;
}

console.log(Palindromo("Ame o poema"));   
console.log(Palindromo("radar"));         
console.log(Palindromo("exemplo"));       
