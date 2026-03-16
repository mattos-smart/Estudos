// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade,
//     };
// }

// const pessoa1 = criaPessoa("Luís", "Felipe", 22);
// console.log(pessoa1);

const pessoa1 = {
    nome: "Luís",
    sobrenome: "Felipe",
    idade: 23,

    fala() {
        console.log(`Minha idade é: ${pessoa1.idade}`);
    },

    incrementaIdade() {
        ++this.idade;
    },
};

pessoa1.fala();
pessoa1.incrementaIdade()

pessoa1.fala();
pessoa1.incrementaIdade()

pessoa1.fala();
pessoa1.incrementaIdade()
