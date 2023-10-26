
document.title = 'Produtos';


var produtoContainer = document.createElement('div');
produtoContainer.className = 'produto';

var nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Hypnotic Poison';

var descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'Descrição: Perfume Importado.';

var precoProduto = document.createElement('p');
precoProduto.textContent = 'Preço: R$ 499.99';

var imagemProduto = document.createElement('img');
imagemProduto.src = '/images.jpeg';
imagemProduto.alt = 'Imagem do Produto';

produtoContainer.appendChild(nomeProduto);
produtoContainer.appendChild(descricaoProduto);
produtoContainer.appendChild(precoProduto);
produtoContainer.appendChild(imagemProduto);

document.body.appendChild(produtoContainer);