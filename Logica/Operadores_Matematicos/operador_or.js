// OR ( || )
// O nosso boneco só pode sair se tiver sem chuva OU com guarda chuva
let tempo = "sol"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("O nosso personagem pode sair? " + podeSair)

tempo = "chuva"
item = "guarda chuva"
podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("O nosso personagem pode sair? " + podeSair)

tempo = "chuva"
item = "pá"
podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("O nosso personagem pode sair? " + podeSair)