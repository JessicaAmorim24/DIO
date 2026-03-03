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

generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log(`O produto são ${invoice.products}`) // desta forma o console.log não consegue ler uma lista dentro do invoice, aparecendo apenas [object object]
}