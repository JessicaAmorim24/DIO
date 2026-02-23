//Exemplo 1
function torrar(){
    console.log("Torrando pão")
    injetarPao() // Pode ser colocado uma funcao dentro da outra para chamá-la
}

function injetarPao(){
    console.log("Preparar o pão")
    console.log("Finalizado")
}

torrar()

// Funcão não pode começar com números
// Função são ações, coloque o nome das funções com verbos, exemplo "function bancoDeDados" 
// não fica claro qual é essa função, já a função "function salvarBancoDeDados" fica claro o objetivo dela.

//Exemplo 2
// Função que pega todos os dados "main()"
function main(){
    getData()
    checkValues()
    sendToDatabase()
}

function getData(){
    console.log("pegando dados do usuário")
}

function checkValues(){
    console.log("validando dados")
}

function sendToDatabase(){
    console.log("cadastrando dados")
}

main()

// Exemplo 3
function enviarDados(){
    let nomeDoBanco = "banco-de-dados"
    console.log("Salvando dados em: " + nomeDoBanco)

    if (3 === 3){
        console.log("Senha validada")        
    }
}

enviarDados()