class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
}

let boloFesta = new formaDeBolo("Massa de chocolate", "Recheio de Nutella")

console.log(boloFesta)
console.log(boloFesta.saborDaMassa) // apenas pra mostrar que dá pra trazer apenas um item dentro do constructor
console.log(boloFesta.saborRecheio) // apenas pra mostrar que dá pra trazer apenas um item dentro do constructor