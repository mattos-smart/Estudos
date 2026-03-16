// Export Default
exports.dataBaseConnect = async (dataname) =>{ 
//Uma particularidade do export async é o local onde ele é posto na função (normalmente seria a frente, porém no exports é diferente)
    console.log("Conectando ao banco: " + dataname);
}

exports.disconnectDatabase = () => {
    console.log("Desconectando do banco");
}
