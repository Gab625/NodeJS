// USANDO WHILE TRUE

p = Number(prompt("Informe o valor do produto: "))
c = prompt("Deseja continuar? Informe com SIM ou NAO")
tot = p

while (c=="SIM"){
  
  p = Number(prompt("Informe o valor do produto: "))
  c = prompt("Deseja continuar?")

  tot = (tot + p)
}

console.log("Total da compra: "+tot)


// USANDO WHILE 0

p = Number(prompt("Informe o valor do produto: "))
tot = p

while (p!=0){
  p = Number(prompt("Informe o valor do produto, caso não queira mais registrar compras, informe 0: "))
  tot = tot + p
}

console.log("Total da compra: "+tot)