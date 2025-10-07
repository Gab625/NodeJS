class Comida {
    public nome: string = ""
    public energia: number = 0

    constructor (nome: string, energia: number){
        this.nome = nome
        this.energia = energia
    }
}

class Cachorro {
    public nome: string = ""
    public peso: number = 0
    public cor: string = ""
    private energia: number = 0

        constructor (nome: string, peso: number, cor: string){
            this.nome = nome
            this.peso = peso
            this.cor = cor
        }

        emitirSom(): void {
            if (this.energia >= 30) {
                console.log("au-au")
                this.energia -= 20
            }
        }

        ouvirSom(som: string): void {
            if (som==this.nome){
                this.emitirSom()
            }
        }

        comer(comida: Comida){
            this.energia += comida.energia

            if(this.energia > 100){
                this.energia = 100
            }
        }

        calcularValorTosa(): number {
            return this.peso * 0.75
        }
}

const cachorro: Cachorro = new Cachorro("bruce", 50, "preto")

for (let cont=1;cont<=10;cont++){
    console.log(cont)
    cachorro.emitirSom
}

cachorro.comer(new Comida("ração", 100))

for (let cont=11;cont<=20;cont++){
    console.log(cont)
    cachorro.emitirSom()
}

