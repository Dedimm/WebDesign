let expression = [];

function addToExpression(value) {
    expression.push(value);
    document.getElementById('display').innerText = expression.join('');
}

function calcular() {
    const expressionString = expression.join('');
    try {
        const result = eval(expressionString);
        document.getElementById('display').innerText = result;
        expression = [result];
    } catch (error) {
        document.getElementById('display').innerText = "Erro";
        expression = [];
    }
}

function limpar() {
    expression = [];
    document.getElementById('display').innerText = '';
}
