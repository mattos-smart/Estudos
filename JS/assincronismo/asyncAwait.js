// ASYNC E AWAIT : É uma forma de escrever código assíncrono como se estivesse escrevendo código síncrono

// const fs = require("fs");
// const path = require("path");

// const filePath = path.resolve(__dirname, "tarefas.csv");

// async function buscarArquivo() {
//     try {
//         const arquivo = await fs.promises.readFile(filePath);
//         const textoDoArquivo = arquivo.toString("utf-8");
//         console.log(textoDoArquivo);
//     } catch (error) {
//         console.log("Deu " + error)
//     } finally {
//         console.log("Finalizou");
//     }
// }

// buscarArquivo();

// O "cozinheiro" (a Promise)
function prepararLanche() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Hambúrguer 🍔"), 2000);
    });
}

// O "cliente" usando Async/Await
async function fazerRefeicao() {
    console.log("1. Fiz o pedido...");

    // O await PAUSA a função aqui até a promessa resolver
    const meuLanche = await prepararLanche();

    // Só executa isso DEPOIS que o lanche chegou
    console.log(`2. Oba! Vou comer meu ${meuLanche}`);
}

fazerRefeicao();
