const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "tarefas.csv");

const promessaLeituraDoArquivo = fs.promises.readFile(filePath);

promessaLeituraDoArquivo
    .then((arquivo) => arquivo.toString("utf-8"))
    .then((textoDoArquivo) => textoDoArquivo.split("\n").slice(1))
    .then((linhasSemOCabeçalho) =>
        linhasSemOCabeçalho.map((linha) => {
            const [nome, feito] = linha.split(";");
            return {
                nome,
                feito: feito.trim() === "true",
            };
        })
    )

    .then((listaDeTarefas) => console.log(listaDeTarefas))
    .catch((error) => {
        console.log("Deu Ruim", error);
    });
