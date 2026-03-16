let titulo = "Monitoramento de Rede";
let descricao = "Configurar alertas para trafego em tempo real";
let dataVencimento = "18/12";

let numeroDeCaracteres = descricao.length;

function validacao() {
    if (numeroDeCaracteres > 50) {
        console.log("Descricao ultrapassa limite de caracteres.");
    } else {
        console.log(descricao + (`\n${dataVencimento}`));
    }
}

validacao();
