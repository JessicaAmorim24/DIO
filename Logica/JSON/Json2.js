// JSON - JavaScript Object Notation
// chave e valor com o objetivo de transferir dados

let invoice = {
    name: "Jéssica",
    age: 35,
    products: {
        0: ["mouse Lenovo", 29.90],
        1: ["teclado Lenovo", 129.99],
        2: ["monitor Dell", 899.99]
    }
}

console.log(invoice)
console.log(invoice.name) // apenas pra mostrar que dá pra trazer apenas um item dentro do invoice
console.log(invoice.age) // apenas pra mostrar que dá pra trazer apenas um item dentro do invoice
console.log(invoice.products) // apenas pra mostrar que dá pra trazer apenas um item dentro do invoice