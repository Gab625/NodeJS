x = prompt("Informe a faixa etária do filme: ")

if (x == "livre") {
    alert("Pode entrar")
}
else if (x < "12") {
    alert("Pode entrar acompanhado dos pais")
}
else if (x <= "14") {
    alert("Pode entrar acompanhado dos pais ou responsáveis")
}
else if (x <= "17") {
    alert("Pode entrar acompanhado dos pais ou responsáveis")
}
else if (x >= "18") {
    alert("Pode entrar somente com documento de identidade")
}
