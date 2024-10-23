const aluno = {
    Nome: "Márcio",
    Idade: 19,
    Curso: "Eng de computação",
    RA: 248888,
    mostrarInformacoes: function() {
        console.log(`Nome: ${this.Nome}`);
        console.log(`Idade: ${this.Idade}`);
        console.log(`Curso: ${this.Curso}`);
        console.log(`RA: ${this.RA}`);
    }
};

aluno.mostrarInformacoes();
