function adicao(x, y) {
    return x + y;
}
function subtracao(x, y) {
    return x - y;
}
function divisao(x, y) {
    return x / y;
}
function multiplicacao(x, y) {
    return x * y;
}

function calcular(x, operacao, y){
    console.log(`Resultado: ${operacao(x, y)}`)
}

calcular(10, adicao, 10)
calcular(10, subtracao, 10)
calcular(10, divisao, 10)
calcular(10, multiplicacao, 10)