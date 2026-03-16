// Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression)
// e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que
// não sejam métodos, e elas não podem ser usadas como construtores (constructors).

function funcao1() {
    console.log(this);
}

const funcao2 = () => {
    console.log(this);
};

const luis = {
    nome: "Luís",
    funcao1,
    funcao2,
};

luis.funcao1();
luis.funcao2();
