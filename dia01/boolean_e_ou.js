faixa = prompt ("Informe a faixa etária do filme")

if (faixa < 12){
  console.log("C l a s s i f i c a ç ã o  L i v r e !")
} else if ((faixa >= 12)&&(faixa <= 14)) {
  console.log("C l a s s i f i c a ç ã o : + 12")
} else if ((faixa >= 15)&&(faixa <= 17)) {
  console.log("C l a s s i f i c a ç ã o : + 15")
} else {
  console.log("C l a s s i f i c a ç ã o : + 18")
}