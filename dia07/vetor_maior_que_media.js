n = prompt("Informe o tamanho do vetor")
vetor = new Array(n)
soma = 0
media = 0

for (i = 0; i < n; i++) {
    vetor[i] = Number(prompt("Digite um número"));
    soma += vetor[i]
}

for (let i = 0; i < n; i++) {
  media = soma/vetor.length
}

console.log("Media dos valores: "+media)

for (let i = 0; i < n; i++) {
  if(vetor[i]>=media){
    console.log("Valor maior ou igual a média: "+vetor[i])
  }
}