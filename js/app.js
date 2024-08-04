let carrinho = [];
let valorTotal = 0;
const celular = 1400;
const controleVR = 450;
const oculosVR = 5000;
const fone = 100;

function trocarProduto(){
    let select = document.getElementById('produto');
    let id = select.value;
    let produto = document.getElementById('imagem-produto');
    
    if (id == 'fone') {
        produto.innerHTML = '<img class="imagem-produto" src="./assets/fone.png" alt="imagem fone">';
    } else if(id == 'celular'){
        produto.innerHTML = '<img class="imagem-produto" src="./assets/celular.png" alt="imagem fone">';
    } else if(id == 'controle'){
        produto.innerHTML = '<img class="imagem-produto imagem-controle" src="./assets/controle.png" alt="imagem fone">';
    } else if(id == 'oculos'){
        produto.innerHTML = '<img class="imagem-produto" src="./assets/oculos.png" alt="imagem fone">';
    }
}

function adicionar(){
    let produtoSelecionado = document.getElementById('produto').value;
    carrinho.push(produtoSelecionado);
    quantidadeProdutos = document.getElementById('quantidade').value;
    
    if (quantidadeProdutos == 1) {
        if (produtoSelecionado == 'fone'){
            valorTotal += fone;
        } else if (produtoSelecionado == 'controle') {
            valorTotal += controleVR;
        } else if (produtoSelecionado == 'celular') {
            valorTotal += celular;
        } else if (produtoSelecionado == 'oculos') {
            valorTotal += oculosVR;
        }
    } else if (quantidadeProdutos > 1){
        if (produtoSelecionado == 'fone'){
            valorTotal += fone * quantidadeProdutos;
        } else if (produtoSelecionado == 'controle') {
            valorTotal += controleVR * quantidadeProdutos;
        } else if (produtoSelecionado == 'celular') {
            valorTotal += celular * quantidadeProdutos;
        } else if (produtoSelecionado == 'oculos') {
            valorTotal += oculosVR * quantidadeProdutos;
        } 
    }
    let valorFinal = document.getElementsByClassName('carrinho__total')[0];
    valorFinal.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${valorTotal}</span>`;
}