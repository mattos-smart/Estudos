const elementos = [
    { tag: "p", text: "Frase 1" },
    { tag: "div", text: "Frase 2" },
    { tag: "footer", text: "Frase 3" },
    { tag: "section", text: "Frase 4" },
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
    let { tag, text } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = text;
    div.appendChild(tagCriada);
}

container.appendChild(div);
