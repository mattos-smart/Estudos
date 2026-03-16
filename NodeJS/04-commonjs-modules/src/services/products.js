// Todas as funções que lidam com o produto
async function getFullName(codeId, productName) {
    console.log("Produto: " + codeId + "--" + productName);
}

async function getLabel(productName) {
    console.log("Nome do produto: " + productName);
}

module.exports = {
    getFullName,
    getLabel,
};
