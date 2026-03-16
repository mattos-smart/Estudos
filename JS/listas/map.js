// Função Map seve para trasformar os elementos de um lista

class Pessoa {
    constructor(name) {
        this.name = name;
    }
}

const lista = [new Pessoa("Luís"), new Pessoa("Pam"), new Pessoa("Nina")];

const listaNomes = lista.map((element, i) => {
    return `${i} - ${element.name}`;
});

console.log(listaNomes);
