const alunos = [
    { Nome: "Márcio", Idade: 19, Curso: "Eng de computação", RA: 248888 },
    { Nome: "Joao Augusto", Idade: 17, Curso: "Biologia", RA: 243589 },
    { Nome: "Vinicius", Idade: 20, Curso: "Eng mecânica", RA: 248535 },
    { Nome: "Beatriz", Idade: 18, Curso: "Analise de Sistemas", RA: 249042 }
];

function alunosMaior(array) {
    return array.filter(aluno => aluno.Idade > 18);
}

const alunosVelhos = alunosMaior(alunos);
console.log(alunosVelhos);
