/*
    Objetivo: fazer com que um clique no botão troque a imagem de fundo

    Passo 1: pegar o elemento HTML do botão e das imagens
    Passo 2: identificar o click do usuário no botão
    passo 3: desmarcar o botão anterior
    passo 4: marcar o botão selecionado
    passo 5: desmarcar a imagem anterior
    passo 6: marcar a imagem de fundo correspondente ao botão selecionado
*/

// Passo 1:
const botoesCarrossel = document.querySelectorAll('.btn');
const imagens = document.querySelectorAll('.img-carrossel');

// Passo 2:
botoesCarrossel.forEach((botao, indiceN) => {
    botao.addEventListener('click', () => {
        // Passo 3:
        desmarcarBotao();// element.classList retorna uma lista com as classes do tal elemento
        // Passo 4:
        marcarNovoBotao(botao);
        // Passo 5:
        esconderImagem();
        // Passo 6:
        marcarNovaImagem(indiceN); 
    })
});

function marcarNovaImagem(indiceN) {
    imagens[indiceN].classList.add('ativa');
}

function marcarNovoBotao(botao) {
    botao.classList.add('selecionado');
}

function esconderImagem() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
} 

//função criada para deixar o código mais simples
function desmarcarBotao() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
