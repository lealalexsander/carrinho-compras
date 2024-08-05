let carrinho = [];
let produtosCarrinho = [];
let valorTotal = 0;
const celular = 1400;
const controleVR = 450;
const oculosVR = 5000;
const fone = 100;
let totalProduto = 0;

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
    let quantidadeProdutos = parseInt(document.getElementById('quantidade').value);

    let itemCarrinho = {
        nome: produtoSelecionado,
        quantidade: quantidadeProdutos,
        preco: 0
    };

    if (produtoSelecionado == 'fone'){
        itemCarrinho.preco = fone;
    } else if (produtoSelecionado == 'controle') {
        itemCarrinho.preco = controleVR;
    } else if (produtoSelecionado == 'celular') {
        itemCarrinho.preco = celular;
    } else if (produtoSelecionado == 'oculos') {
        itemCarrinho.preco = oculosVR;
    }

    totalProduto += itemCarrinho.preco * quantidadeProdutos;
    produtosCarrinho.push(itemCarrinho);
    carrinho.push(produtoSelecionado);

    valorTotal += itemCarrinho.preco * quantidadeProdutos;
    atualizarListaProdutos();
    atualizarValorTotal();
}

function atualizarListaProdutos() {
    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = ''; // Limpa a lista antes de atualizar

    produtosCarrinho.forEach((item) => {
        let produtoHTML = `
            <section class="carrinho__produtos__produto">
                <span class="texto-azul">${item.quantidade}x</span> ${item.nome} <span class="texto-azul">R$${item.quantidade * item.preco}</span>
            </section>
        `;
        listaProdutos.innerHTML += produtoHTML;
    });
}

function atualizarValorTotal() {
    let valorFinal = document.getElementsByClassName('carrinho__total')[0];
    valorFinal.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${valorTotal}</span>`;
}

function limpar() {
    let listaProdutos = document.getElementById('lista-produtos');
    

    produtosCarrinho.forEach((item) => {
        let produtoHTML = `<section class="carrinho__produtos__produto">
          <span class="texto-azul"></span> Carrinho vazio... <span class="texto-azul"></span>
        </section>`;
        listaProdutos.innerHTML = produtoHTML;        
    });

    valorTotal = 0;
    let valorFinal = document.getElementsByClassName('carrinho__total')[0];
    valorFinal.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$0</span>`;

    produtosCarrinho = [];
    carrinho = [];
}
