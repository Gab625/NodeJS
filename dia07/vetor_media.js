const n = 5
vetor = new Array (n)
media = 0
soma = 0

for (let i = 0; i < 5; i++) {
    vetor[i] = Number(prompt("Digite um número"));
    soma+=vetor[i]
}

for (let i = 0; i < 5; i++) {
    console.log("Valores digitados: "+vetor[i]);
    media = soma/vetor.length
}

console.log("Media dos valores: "+media)
