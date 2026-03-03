// JSON - JavaScript Object Notation
// chave e valor com o objetivo de transferir dados

let name = "Jéssica"
let age = 35
let products = ["mouse Lenovo", "teclado Lenovo", "monitor Dell"]
let productsValues = [29.90, 129.99, 899.99]

generateInvoice(name, products, productsValues, age)

function generateInvoice(name, products, productsValues, age){
    console.log("O comprador é " + name)
    console.log("A idade é " + age)
    console.log("O produto é " + products[0])
    console.log("O valor é " + productsValues[0])
}