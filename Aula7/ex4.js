function gerarEmail(nomeCompleto) {
    const nomes = nomeCompleto.trim().split(" ");

    const primeiroNome = nomes[0];
    
    const ultimoNome = nomes[nomes.length - 1];

    const email = `${primeiroNome.toLowerCase()}.${ultimoNome.toLowerCase()}@facens.br`;
    
    console.log(`Email: ${email}`);
}


const nomeCompleto = "Fabio Rodrigo Colombini";
gerarEmail(nomeCompleto);
