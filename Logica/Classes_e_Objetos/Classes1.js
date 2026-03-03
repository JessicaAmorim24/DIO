class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }

    assar(){
        console.log("Bolo assando de " + this.saborDaMassa)
    }
}

let boloFesta = new formaDeBolo("Chocolate", "Nutella")
let boloPremium = new formaDeBolo("Baunilha", "Morango")

boloFesta.escrever()
boloPremium.escrever()
boloFesta.assar()