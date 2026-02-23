// do while

let contador = 0

do {
    console.log("olá")
    contador++
} while (contador < 3)

// exemplo 2

contador = 3

do {
    console.log("olá")
    contador++
} while (contador < 3) // diferente do while, o "do while" primeiro executa e depois verifica.
// então o que tiver dentro do escopo dele será sempre executado pelo menos uma vez, 
// como no exemplo 2 que apareceu um "olá".