let numero = document.querySelector("h1");
let botao = document.querySelector("button");
let contagem = 0;




//botao.addEventListener("click", function(){
  //  contagem = contagem + 1;
    //numero.innerText = contagem;
//});

botao.addEventListener("click", () => {

    contagem = contagem + 1;
  
    numero.innerText = contagem;
  
  });