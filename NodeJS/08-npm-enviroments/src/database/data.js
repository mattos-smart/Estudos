async function connectToDataBase(user, password) {
    if (user === process.env.USER_DATA_BASE && password === process.env.PASSWORD_DATA_BASE) {
        console.log("Conexão com o DB estabelecida!");
    } else {
        console.log("Falha de login!");
    }
}

export default connectToDataBase;
