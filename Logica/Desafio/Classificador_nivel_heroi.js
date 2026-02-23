//# 1️⃣ Desafio Classificador de nível de Herói
//**O Que deve ser utilizado**
//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões

//## Objetivo

//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura 
//de decisão para apresentar alguma das mensagens abaixo:

//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

//## Saída

//Ao final deve se exibir uma mensagem:
//"O Herói de nome **{nome}** está no nível de **{nivel}**"

let nomeHeroi = "Mooncake"
let xpHeroi = 6500

function classificarNivelXP(xp) {
    if (xp <= 1000) return "Ferro"
    if (xp <= 2000) return "Bronze"
    if (xp <= 5000) return "Prata"
    if (xp <= 7000) return "Ouro"
    if (xp <= 8000) return "Platina"
    if (xp <= 9000) return "Ascendente"
    if (xp <= 10000) return "Imortal"
    return "Radiante"
}

let nivel = classificarNivelXP(xpHeroi)

console.log(`A heroína ${nomeHeroi} está no nível ${nivel}`)

for (let experienciaHeroi = 0; experienciaHeroi <= 11000; experienciaHeroi += 200) {

    nivel = classificarNivelXP(experienciaHeroi);

    console.log(`A heroína vai subindo de nível de experiência a cada 200 pontos: ${experienciaHeroi} e com isso ficando no nível: ${nivel}`)
}