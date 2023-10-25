// Captura os elementos
let titulo = document.getElementById("titulo");
let listaNaoOrdenada = document.querySelector("ul");
let link = document.querySelector("a");
let listaOrdenada = document.getElementById("lista-ordenada");

// Adiciona conteúdo
titulo.innerText = "Título da Página";
link.innerText = "Visite o Proz Educação";
link.href = "https://prozeducacao.com.br";

// Adiciona itens à lista não ordenada
let itensNaoOrdenados = ["Item 1", "Item 2", "Item 3"];
itensNaoOrdenados.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    listaNaoOrdenada.appendChild(li);
});

// Adiciona itens à lista ordenada
let itensOrdenados = [
    { text: "Google", url: "https://www.google.com" },
    { text: "Facebook", url: "https://www.facebook.com" },
    { text: "Twitter", url: "https://www.twitter.com" }
];

itensOrdenados.forEach((item) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.innerText = item.text;
    a.href = item.url;
    li.appendChild(a);
    listaOrdenada.appendChild(li);
});