const form = document.querySelector("#formulario");

form.addEventListener("submit", function (e) {
    //e de event
    e.preventDefault();
    const inputPeso = e.target.querySelector("#peso");
    const inputAltura = e.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    console.log(peso, altura);
    console.log(calculoImc(peso, altura));
    setResultado(calculoImc(peso, altura));
});

function calculoImc(peso, altura) {
    imc = peso / (altura * altura);
    return imc;
}

function criaParagrafo() {
    const p = document.createElement("p");
    return p;
}

function getNivelImc() {
    const nivel = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade Grau I", "Obesidade Grau II", "Obesidade Grau III"];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function setResultado() {
    const resultado = document.querySelector("#resultado");
    resultado.classList.remove("attencion", "goodResult", "badResult");
    const nivelImc = getNivelImc(imc)

    if (imc < 18.5) {
        resultado.classList.add("attencion");
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} <br> Resultado: ${nivelImc}`;
        return;
    } else if (imc >= 18.5 && imc < 24.9) { 
        resultado.classList.add("goodResult");
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} <br> Resultado: ${nivelImc}`;
        return;
    } else if (imc > 25 && imc < 29.9) {
        resultado.classList.add("attencion");
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} <br> Resultado: ${nivelImc}`;
        return;
    } else if (imc > 30 && imc < 34.9) {
        resultado.classList.add("badResult");
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} <br> Resultado: ${nivelImc}`;
        return;
    } else if (imc > 35 && imc < 39.9) {
        resultado.classList.add("badResult");
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} <br> Resultado: ${nivelImc}`;
        return;
    } else if (imc >= 40) {
        resultado.classList.add("badResult");
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} <br> Resultado: ${nivelImc}`;
        return;
    } else if (isNaN || null) {
        resultado.classList.add("badResult");
        resultado.innerHTML = `Erro na consulta, insira um valor válido!`;
        return;
    }
}
