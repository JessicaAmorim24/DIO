// AND ( && )
let idade = 17
let vistoVerificado = true
console.log((idade >= 18) && (vistoVerificado === true))

idade = 18
vistoVerificado = false
let resultado = (idade >= 18) && (vistoVerificado === true)
console.log(resultado)

// 100 moedas coletadas e 1 item estrela
let moedasColetadas = 100
let item = "estrela"
resultado = (moedasColetadas === 100) && (item === "estrela")
console.log(resultado)

moedasColetadas = 100
item = "estrela"
resultado = (moedasColetadas === 100) && (item === "estrela")
console.log(resultado)

// 99 moedas coletadas e 1 item estrela
moedasColetadas = 99
item = "estrela"
resultado = (moedasColetadas >= 100) && (item === "estrela")
console.log(resultado)