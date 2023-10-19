// Instruções do Projeto - copie e cole o array 'numerosDaSorte', e logo em seguida escreva o código necessário para avaliar cada elemento do array e imprimir uma frase seguindo algum dos seguintes três modelos: 
//- X é par e menor que 50
//- X é menor que 50
//- X é maior que 50


//numerosDaSorte = [37, 14, 26, 5, 94, 87] 

let numerosDaSorte = [37, 14, 26, 5, 94, 87];

for (let i = 0; i < numerosDaSorte.length; i++) {
  let numero = numerosDaSorte[i];
  
  if (numero % 2 === 0 && numero < 50) {
    console.log(numero + " é par e menor que 50");
  } else if (numero < 50) {
    console.log(numero + " é menor que 50");
  } else {
    console.log(numero + " é maior que 50");
  }
}