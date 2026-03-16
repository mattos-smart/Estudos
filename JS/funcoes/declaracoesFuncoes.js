// Ficar ligado com o Hoisting
// Nada mais é que a ordem em que os acontecimentos ocorrem dentro do programa.

function nomeFuncao() {
    console.log("nomeFuncao()");
}

const nomeSegundaFuncao = function () {
    console.log("nomeSegundaFuncao()");
};

nomeFuncao();
nomeSegundaFuncao();
