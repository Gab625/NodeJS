dia = prompt("Digite o valor o dia: ")

switch (dia) {
  case "1":
    nomeDia = "Domingo"
    break
  case "2":
    nomeDia = "Segunda"
    break
  case "3":
    nomeDia = "Terça"
    break
  case "4":
    nomeDia = "Quarta"
    break
  case "5":
    nomeDia = "Quinta"
    break
  case "6":
    nomeDia = "Sexta"
    break
  case "7":
    nomeDia = "Sábado"
    break
  default:
    nomeDia = "Dia inválido"       
}

console.log(nomeDia)