//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número de 1 á 10';
let listaDeNumeroSorteados = [];
let tentativas = 1;
let limiteNumero = 10;
let numeroSecreto = gerarNumeroAleatorio();
exibirMensagemInicial();
// código omitido. 

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );

}
function exibirMensagemInicial() {
    exibirTextoNaTela ('h1', 'Jogo do número secreto');
        exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}


//function exibirTextoNaTela(tag, texto){
//    let campo = document.querySelector(tag);
 //   campo.innerHTML = texto;
 //   responsivevoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
//}
 
//function exibirMensagemInicial() {
 //   exibirTextoNaTela('h1', 'Jogo do número secreto');
  // exibirTextoNaTela('p', 'Escolha um número de 1 á 10');
//}


function verificarChute(){

    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
        let menssagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p',menssagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', `Número seccreto é menor que ${chute}!`);
        } else {
            exibirTextoNaTela('p', `Número seccreto é maior que ${chute}!`);
          }
        tentativas++;
        limparCampo();
      }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * limiteNumero + 1);
   let quantidadeElementosLista = listaDeNumeroSorteados.length;
   if (quantidadeElementosLista == limiteNumero) {
    listaDeNumeroSorteados = [];
}
   if (listaDeNumeroSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else { 
    listaDeNumeroSorteados.push(numeroEscolhido);
    console.log(listaDeNumeroSorteados);
    return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
} 

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}