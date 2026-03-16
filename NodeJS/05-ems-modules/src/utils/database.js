const databaseType = {
    userType: "admin",
    typeData: "datalocal",
};

async function connectToDatabase(dataName) {
    console.log("Conectado com o banco " + dataName);
}

async function disconnectDatabase() {
    console.log("Banco de dados desconectado.");
}

export { 
    connectToDatabase, 
    disconnectDatabase, 
    databaseType 
}; // Export de funções e const
