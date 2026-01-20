// Quais ações o carrinho pode fazer

// CASOS DE USO
// -> Adicionar item no carrinho
async function adicionarItem(userCart, item) {
    userCart.push(item);
}

// -> Calcular o total
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(result);
}

// -> Deletar item do carrinho
async function deletarItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

// -> Remover um item - diminui um item
async function removeItemDois(userCart, item) {
    const indexFound = userCart.findIndex((produto) => produto.name === item.name);
    console.log("Item encontrado");
}

// -> Remover item
async function removeItem(userCart, index) {
    const deleteIndex = index - 1;
    // É Maior que zero e se é menor que o tamanho do carrinho
    if (index >= 0 && index < userCart.length) {
        userCart.splice(deleteIndex, 1);
    }
}

// -> Ver o que tem no carrinho
async function displayCart(userCart) {
    console.log("Shopee Cart List:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} | Subtotal = ${item.subtotal()}`);
    });
}

export { adicionarItem, calculateTotal, deletarItem, removeItem, displayCart, removeItemDois };
