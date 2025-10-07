class Carro {
    public velocidadeTotal: number = 0
    public velocidade: number = 0
    public marchas: number = 0

    constructor (velocidadeTotal: number, velocidade: number, marchas: number){
        this.velocidadeTotal = velocidadeTotal
        this.velocidade = velocidade
        this.marchas = marchas
    }

    acelerar(): void{
        
    }
}

class CarroModeloA extends Carro {
    constructor() {super (150,6)}
}

class CarroModeloB extends Carro {

}

const carroA: CarroModeloA = new CarroModeloA()
const carroB: CarroModeloB = new CarroModeloB()

function montarCarros(carros: Array<carro>)