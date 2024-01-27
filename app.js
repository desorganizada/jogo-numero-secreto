let listaNumeros=[];
let numeroLimite = 10;
let numeroSecreto=numeroAleatorio();
let tentativa = 1

function exibirTexto (tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML= texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}
function exibirMensagem(){
exibirTexto('h1','Jogo do Número Secreto');
exibirTexto('p','Escolha entre 1 a 10');
}
exibirMensagem();
function verificarChute(){
    let chute= document.querySelector('input').value;
    if( chute == numeroSecreto){
        exibirTexto('h1','Acertou');
        let palavraTentativa = tentativa>1?'tentativas':'tentativa';
        let mesagemTentativas = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}`;
        exibirTexto('p',mesagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute> numeroSecreto){
            exibirTexto('p','O número secreto é menor que o chute');
        } else {
            exibirTexto('p','O número secreto é maior que o chute');
        }
        tentativa++;
        limparCampo();
    }
}

function numeroAleatorio() {
    let numeroEscolhido=  parseInt(Math.random()*numeroLimite+1);
    let quantidadeNumerosNaLista = listaNumeros.length;
    if(quantidadeNumerosNaLista==numeroLimite){
        listaNumeros= [];
    }
     if(listaNumeros.includes(numeroEscolhido)){
        return numeroAleatorio();
     }else{
        listaNumeros.push(numeroEscolhido);
        console.log(listaNumeros);
        return numeroEscolhido;
     }
}
function limparCampo(){
    chute=document.querySelector('input');
    chute.value='';
}
function reiniciaJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativa=1;
    exibirMensagem();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entra 1 e 10';