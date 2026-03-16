/*
 * A função reduce do JavaScript serve para iterar sobre um array e utilizar o valor de cada item para criar um objeto final
 * com base em alguma regra. Como o próprio nome da função sugere, ela “reduz” os itens de um vetor a um valor único.
 * Por exemplo, podemos utilizá-la para obter a soma ou produto dos itens de um vetor numérico.
 *
 * array.reduce(callback[, initialValue])
 *
 * array: Vetor de origem sobre o qual estamos iterando para aplicar a função;
 *
 * callback: Função a ser chamada para cada item do array de origem e cujo o retorno produz um valor final baseado em alguma regra.
 *
 * initialValue: É o valor inicial do resultado da operação que será passado para a função de callback na primeira iteração.
 */

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const somaDeTodosOsElementos = lista.reduce((previous, current) => {
    return previous + current;
}, 0);

console.log(somaDeTodosOsElementos);
