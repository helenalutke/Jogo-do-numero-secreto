//document.querySelector esta referenciando o titulo no html
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número Secreto';

//let paragrafo = document.querySelector('p'); 
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let listaDeNumerosSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNuemroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag); 
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}; 

function exibirMensagemInicial() {
exibirTextoNaTela('h1','Jogo do número Secreto');
exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10');
};

exibirMensagemInicial();

//function significa função > um trecho de códico que chama uma função
function verificarChute() {
  let chute = document.querySelector('input').value;
  
  if(chute == numeroSecreto) {
    exibirTextoNaTela('h1','Acertou!');
    let palavraTentativas = tentativas > 1? 'tentativas': 'tentativa';
    let mensagemTentativas = `Parabéns, você descobriu o número Secreto, com ${tentativas} ${palavraTentativas}!`
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if(chute > numeroSecreto) {
    exibirTextoNaTela('p', 'O número Secreto é menor');
    } else {
          exibirTextoNaTela ('p', 'O número secreto é maior');
        } 
        tentativas++;   
        limparCampo();
  }
};

function gerarNuemroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
      listaDeNumerosSorteados = [];
      }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNuemroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log (listaDeNumerosSorteados);
    return numeroEscolhido;
  }

};

function limparCampo() {
  chute = document.querySelector ('input');
  chute.value = '';
}

function novoJogo() {
  numeroSecreto = gerarNuemroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true); 
  
}