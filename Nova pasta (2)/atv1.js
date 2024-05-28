const readline = require('readline-sync');

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

while (true) {
    let tentativaAtual = parseInt(readline.question("Digite um numero entre 1 e 100 (ou '0' para desistir): "));
    tentativas++;

    if (tentativaAtual === 0) {
        console.log("Você desistiu do jogo.");
        let jogarNovamente = readline.keyInYNStrict("Deseja jogar novamente?");
        if (jogarNovamente) {
            numeroAleatorio = Math.floor(Math.random() * 100) + 1;
            tentativas = 0;
        } else {
            break;
        }
        continue;
    }

    if (isNaN(tentativaAtual) || tentativaAtual < 1 || tentativaAtual > 100) {
        console.log("Por favor, DIGITE um numero valido entre 1 e 100.");
        continue;
    }

    if (tentativaAtual === numeroAleatorio) {
        console.log("Parabens! Voce adivinhou o numero em " + tentativas + " tentativas.");
        let jogarNovamente = readline.keyInYNStrict("Deseja jogar novamente?");
        if (jogarNovamente) {
            numeroAleatorio = Math.floor(Math.random() * 100) + 1;
            tentativas = 0;
        } else {
            break;
        }
    } else if (tentativaAtual < numeroAleatorio) {
        console.log("O numero e maior que " + tentativaAtual + ".");
    } else {
        console.log("O numero e menor que " + tentativaAtual + ".");
    }
}
