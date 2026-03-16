const pessoa = {
    nome: "Luis",
    idade: 22,
};

function gritar(prefixo) {
    console.log(prefixo, this.nome);
}

gritar("Olaaaaaa");

gritar.apply(pessoa, ["Olaaaaaa"]);
gritar.call(pessoa, "Olaaaaaa");
