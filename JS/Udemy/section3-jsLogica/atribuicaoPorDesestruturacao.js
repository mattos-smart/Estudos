// -----====ARRAYS====-----
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
// console.log(primeiroNumero, segundoNumero, terceiroNumero);
// console.log(resto);

// const numeros = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// const [lista1, lista2, lista3] = numeros;
// console.log(lista3[2]);

// -----====OBJETOS====-----
const pessoa = {
    nome: "Luis",
    sobrenome: "Felipe",
    idade: 30,
    endereco: {
        rua: "Porfirio Lopes de Aguiar",
        numero: 1000,
    },
};

const {
    endereco: { rua, numero },
} = pessoa;
console.log(rua, numero);
