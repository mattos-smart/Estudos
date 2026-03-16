/* A sintaxe de uma função construtora se assemelha a essa abaixo;
 * Mas o que quer dizer?
 *
 * Quer dizer que a função possui escopo próprio
 *
 */

function Pessoa(nome, idade) {
    (this.nome = nome), 
    (this.idade = idade);
}

Pessoa.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome}`)
}

const luis = new Pessoa("Luis", 22);

console.log(luis);
