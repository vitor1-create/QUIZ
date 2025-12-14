function verificarRespostas() {
    let pontuacao = 0;

    if (document.querySelector('input[name="q1"]:checked')?.value === 'b') {
        pontuacao++;
    }

    if (document.querySelector('input[name="q2"]:checked')?.value === 'b') {
        pontuacao++;
    }

    if (document.querySelector('input[name="q3"]:checked')?.value === 'a') {
        pontuacao++;
    }

    if (document.querySelector('input[name="q4"]:checked')?.value === 'a') {
        pontuacao++;
    }

    if (document.querySelector('input[name="q5"]:checked')?.value === 'a') {
        pontuacao++;
    }

    document.getElementById("resultado").innerText =
        `Você acertou ${pontuacao} de 5 perguntas!`;
}
