const tabela = document.getElementById("tabela");
const containerSeta = document.getElementById("containerSeta");
const botaoReiniciar = document.getElementById("botaoReiniciar");

// configuraçoes do tabuleiro
const LINHAS = 6;
const COLUNAS = 6;
let quadradosTabela = [];
let quadradoCorreto = null;

// essa funçao cria o tabuleiro com os quadrados
function criarTabuleiro() {
  tabela.innerHTML = "";
  quadradosTabela = [];

  for (let i = 0; i < LINHAS * COLUNAS; i++) {
    const quadrado = document.createElement("div");
    quadrado.className = "quadrado";
    quadrado.setAttribute("data-index", i);
    quadrado.addEventListener("click", cliqueNoQuadrado);
    tabela.appendChild(quadrado);
    quadradosTabela.push(quadrado);
  }
}

// escolhe um quadrado correto aleatoriamente
function escolherQuadradoCorreto() {
  quadradoCorreto = Math.floor(Math.random() * LINHAS * COLUNAS);
}

// evento que acontece quando clica no quadrado (correto)
function cliqueNoQuadrado(event) {
  const quadrado = event.currentTarget;
  const indice = parseInt(quadrado.getAttribute("data-index"));

  // ignora se ja foi clicado antes
  if (quadrado.classList.contains("correto") || quadrado.classList.contains("errado")) return;

  if (indice === quadradoCorreto) {
    quadrado.classList.add("correto");
    mostrarSeta("");
    alert("Parabéns! Você encontrou!");
  } else {
    quadrado.classList.add("errado");
    mostrarSetaDirecao(indice, quadradoCorreto);
  }
}

// calcula a direçao do quadrado correto em relacao a origem onde foi clicado, e mostra a seta correspondente
function mostrarSetaDirecao(origem, destino) {
  var linhaOrigem = Math.floor(origem / COLUNAS);
  var colunaOrigem = origem % COLUNAS;
  var linhaDestino = Math.floor(destino / COLUNAS);
  var colunaDestino = destino % COLUNAS;

  var diferencaLinha = linhaDestino - linhaOrigem;
  var diferencaColuna = colunaDestino - colunaOrigem;

  var seta = "❓";

  if (diferencaLinha === 0 && diferencaColuna > 0) seta = "→";
  else if (diferencaLinha === 0 && diferencaColuna < 0) seta = "←";
  else if (diferencaColuna === 0 && diferencaLinha > 0) seta = "↓";
  else if (diferencaColuna === 0 && diferencaLinha < 0) seta = "↑";
  else if (diferencaLinha < 0 && diferencaColuna > 0) seta = "↗";
  else if (diferencaLinha > 0 && diferencaColuna > 0) seta = "↘";
  else if (diferencaLinha > 0 && diferencaColuna < 0) seta = "↙";
  else if (diferencaLinha < 0 && diferencaColuna < 0) seta = "↖";

  mostrarSeta(seta);
}
  
// atualiza o container que mostra a seta
function mostrarSeta(simbolo) {
  containerSeta.textContent = simbolo;
}

// reinicia o jogo
function reiniciarJogo() {
  criarTabuleiro();
  escolherQuadradoCorreto();
  mostrarSeta("");
}

// configura o evento do botao
botaoReiniciar.addEventListener("click", reiniciarJogo);

// inicia o jogo ao clicar em reinicializar
reiniciarJogo();
