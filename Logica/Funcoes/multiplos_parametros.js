// Exemplo 1
torrar("pão de forma" , "Joana")
torrar("pão integral" , "Natalie")
torrar("pão francês" , "Jéssica")

function torrar(pao, nome){
    console.log("Torrada feita com " + pao)
    console.log("Ela é um pedido de " + nome)
}

// Passamos parâmetros quando queremos que a mesma função execute resultados diferentes.

// Exemplo 2
torrar("pão de forma")

function torrar(pao, nome = "Cliente"){ // Caso o pedido não tenha nome, vai com esse nome genérico: "Cliente"
    console.log("Torrada feita com " + pao)
    console.log("Ela é um pedido de " + nome)
}

// Exemplo 3
torrar("pão de forma", "Jéssica", 10.90)

function torrar(pao, nome = "Cliente", valor){ // Caso o pedido não tenha nome, vai com esse nome genérico: "Cliente"
    console.log("Torrada feita com " + pao)
    console.log("Ela é um pedido de " + nome)
    console.log("O Valor total é " + valor)
}

// Exemplo 4
//torrar("pão interal", , 49.90) // apresentará erro, pois o campo vazio (opcional) sempre deverá ser no final ("pão interal", 49.90, )

//function torrar(pao, nome = "Cliente", valor){ // Caso o pedido não tenha nome, vai com esse nome genérico: "Cliente"
//    console.log("Torrada feita com " + pao)
//    console.log("Ela é um pedido de " + nome)
//    console.log("O Valor total é " + valor)
//}
