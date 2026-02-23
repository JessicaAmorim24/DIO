// for
for (let contador = 0; contador < 5; contador++){
    console.log(contador)
}

// ou o mais comum é no lugar do "contador" ser usador apenas "i"

for (let i = 0; i < 5; i++){
    console.log(i)
}

// cuidados com o for

let pontosDeVida = 0

for(let i = 0; i < 11; i++){
    pontosDeVida += 1
    console.log("Tomou poção mágica " + i)
}

console.log(pontosDeVida + " Totais ")