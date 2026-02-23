// Estrutura de decisão
// default

let fruta = "abacate"

switch (fruta) {
    case "laranja":
       console.log("Suco de laranja")
       break
    
    case "banana":
       console.log("Vitamina de banana")
       break // o "break" é usado para evitar que o código continue executando os próximos cases.

    case "maçã":
        console.log("Suco de maçã")
        break

    default: // caso não caia em nenhuma das situações anteriores, cairá no default que é uma situação genérica.
        console.log("Suco ou vitamina genérico")
}
