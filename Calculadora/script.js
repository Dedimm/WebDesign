let expression = [];

function addToExpression(value) {
    expression.push(value);
    document.getElementById('display').innerText = expression.join('');
}

function calculate() {
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

function clearDisplay() {
    expression = [];
    document.getElementById('display').innerText = '';
}
