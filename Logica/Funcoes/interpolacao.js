createStringConnection ("db_products", "jessica", "9876")

function createStringConnection(databaseName, user, pass){
    console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`)
}

// Interpolação de Strings são valores que são substituídas por variáveis.
// Interpolação a medida que o tempo vai passando é mais usado do que concatenação.
