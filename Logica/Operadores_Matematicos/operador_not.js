// NOT ( ! ) - Nega uma afirmação
let tempo = "chuva"
let resultado = tempo !== "chuva"
console.log(resultado)

tempo = "chuva"
resultado = tempo !== "chuva"
console.log(!resultado) // Quando se coloca uma exclamação (NOT), você muda uma polaridade de uma variável booliana.

tempo = "chuva"
resultado = tempo !== "chuva"
console.log(!!resultado) // Quando se coloca duas exclamações (NOT), você muda novamente a polaridade de uma variável booliana.

tempo = "chuva"
let horario = 8
resultado = (tempo !== "chuva") && (horario > 6)
console.log(resultado)

tempo = "chuva"
horario = 8
resultado = !((tempo !== "chuva") && (horario > 6)) // Quando se coloca uma exclamação (NOT), você muda uma polaridade de uma variável booliana.
console.log(resultado)