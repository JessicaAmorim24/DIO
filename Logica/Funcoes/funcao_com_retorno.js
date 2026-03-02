let resultado = soma (5, 5)

console.log("O resultado dessa função é " + resultado)

function soma (numA, numB){
    let somatorio = numA + numB
    return somatorio
}

// ou 

resultado = soma (5, 5)

console.log("O resultado dessa função é " + resultado)

function soma (numA, numB){
    return numA + numB
}

// Exemplo 2

let userName = getFirstName("Carlos Almeida Juanito Gargalo", " ")
    console.log("Seja bem vindo " + userName)

//function getFirstName(name){
//    let firstName = name.split(" ")[0]
//        return firstName
//}    

// Exemplo 3

userName = getFirstName("Felipe-Silva-Han-Solo", "-") // no lugar de deixar vazio tenho que colocar o traço, que é o separador do nome e sobrenome
    console.log("Seja bem vindo " + userName)

function getFirstName(name, splitChar = " "){ // splitChair é o separador em traço
    let firstName = name.split(splitChar)[0]
        return firstName
}