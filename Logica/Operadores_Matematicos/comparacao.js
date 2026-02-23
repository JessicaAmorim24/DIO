let numero = "1"
console.log(numero == 1) // resultado será true, pois ambos os números são 1, independente da variável de um ser string e do outro number

numero = "1"
console.log(numero === 1)  // resultado será false, pois o número entre aspas é string e o do console é number

let texto = "jessica"
console.log(texto === "Jessica")  // resultado será false, pois o comparativo também é feito entre letras maiúsculas e minúsculas

let marca = "Apple"
console.log(marca === "Apple") 

marca = "Apple"
console.log(marca !== "Apple") // resultado será false, pois as duas marcas são iguais

marca = "Apple"
console.log(marca !== "Samsung") // resultado será true, pois as duas marcas são diferentes

// abaixo é para guardar o valor de uma variável de resultado TRUE/FALSE
marca = "Apple"
let resultado = marca === "Samsung"

let CPFBloqueado = "123.456.789-00"
let CPFUsuario = "009.876.543-21"
let ehCPFBloqueado = CPFUsuario === CPFBloqueado
console.log("O usuário pode embarcar? " + ehCPFBloqueado)

let CPFPermitido = "123.456.789-00"
let CPFDoUsuario = "009.876.543-21"
let ehBloqueado = CPFDoUsuario !== CPFPermitido
console.log("É um usuário inválido? " + ehBloqueado)


// = é atribuição
// == é para comparar o valor
// === é para comparar o valor e o formato do conteúdo, se é string, se é number, se é boolean
// !== é diferente?