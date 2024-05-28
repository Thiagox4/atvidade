var entrada = require("readline-sync");

var operacoes = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => num1 / num2,
    '^': (num1, num2) => Math.pow(num1, num2),
    'sqrt': (num1) => Math.sqrt(num1)
};

var continuar = 'sim';
while (continuar.toLowerCase() == 'sim') {
    var operacao = entrada.question("escolha uma operacao \n '+' para Soma\n '-' para Subtracao\n '*' para Multiplicacao\nDigite '/' para Divisao\n'^' para Potenciacao\n 'sqrt' para Extrair Raiz Quadrada\n:").toLowerCase();
    var num1 = parseFloat(entrada.question("Por favor, digite o primeiro numero: "));
    var num2 = operacao != 'sqrt' ? parseFloat(entrada.question("Por favor, digite o segundo numero: ")) : null;
    var resultado;

    if (operacoes[operacao]) {
        resultado = operacao == 'sqrt' ? operacoes[operacao](num1) : operacoes[operacao](num1, num2);
        console.log("O resultado e: " + resultado);
    } else {
        console.log("Desculpe, essa e uma operacao invalida.");
    }

    continuar = entrada.question("Gostaria de realizar outra operacao? (sim/nao): ");
}

console.log("Obrigado");