const pessoa = {
    genero: "Masculino",
};

const luis = {
    nome: "Luís",
    idade: 22,
    __proto__: pessoa, //Orientação a Protótipo
};

console.log(luis.genero);

// O QUE QUER DIZER ORIENTAÇÃO A PROTÓTIPO?
// Quer dizer um objeto onde este mesmo objeto se baseia

