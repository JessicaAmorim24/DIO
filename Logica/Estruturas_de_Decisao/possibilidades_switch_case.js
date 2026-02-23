// Estrutura de decisão
// Possibilidades com o switch case

let fruta = "maçã"

switch (fruta) {
    case "laranja":
       console.log("Suco de laranja")
       console.log("Comer laranja descascada")
       break
    
    case "banana":
    case "morango":
    case "abacate":
       console.log("Vitamina " + fruta)
       break // o "break" é usado para evitar que o código continue executando os próximos cases.

    case "maçã":
        console.log("Suco de maçã")
        console.log("Comer maçã cortada")
        break

    default: // caso não caia em nenhuma das situações anteriores, cairá no default que é uma situação genérica.
        console.log("Suco ou vitamina genérico")
}