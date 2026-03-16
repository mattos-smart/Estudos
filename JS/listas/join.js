const lista = [{ nome: "Luis" }, { nome: "Pâm" }, { nome: "Nina" }, { nome: "Peposa" }];

console.log(
    lista.map((e) => e.nome)
         .filter((e) => e.startsWith("P"))
         .join(" & ")
);
