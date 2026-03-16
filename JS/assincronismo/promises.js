// O QUE É PROMISE?
// "Promise" é um objeto usado para processamento assíncrono. 
// Basicamente representa um valor que pode estar disponível agora, no futuro ou nunca

// // MANEIRA ANTIGA DE RETORNAR CALLBACK

// function successCallback(result) {
//   console.log("It succeeded with " + result);
// }

// function failureCallback(error) {
//   console.log("It failed with " + error);
// }

// doSomething(successCallback, failureCallback);

// // MANEIRA MODERNA
// const promise = doSomething();
// promise.then(successCallback, failureCallback);

// // OU

// doSomething().then(successCallback, failureCallback);

const getData = () => {
    return new Promise((resolve, reject) => { //RESOLVE vai ser invocada quando a operação assincrona for bem sucedida
      resolve('Dados aqui')
      // reject('Erros aqui')
    });
};
getData()
  .then(value => {console.log(value)})
  .catch((error)=>console.log(error)) // Só vai ser acionado quando o reject for invocado