personagens = ["", "", ""];

viloes = ["", "", ""];

forcaPersonagens = 0;

forcaViloes = 0;

function calcularForca() {
  for(let i = 0; i < 3; i++) {
   //Calcular a força de cada personagem e depois somar à força do time
  forcaPersonagens += Math.floor(Math.random() * 10) + 1
  //+= adicona o valor a própria variável
   
  //Calcular a força de cada vilão e depois somar à força do time do computador
  forcaViloes += Math.floor(Math.random() * 10) + 1; 
  }
 }


function jogar() {
  //Adicionando os personagens digitados pelo jogador no array personagens
  personagens[0] = document.getElementById('jogador1').value;

  personagens[1] = document.getElementById('jogador2').value;

  personagens[2] = document.getElementById('jogador3').value;

  console.log("Seus personagens:" + personagens);
  
  //Escolhendo os vilões para o time do computador
  for(let i = 0; i < 3; i++) {
  indiceAleatorio = Math.floor(Math.random() * 10); //0 a 9
  viloesPossiveis = ["Joker", "Lex Luthor", "Thanos", "Magneto", "Green Goblin", "Loki", "Doctor Doom", "Venom", "Harley Quinn", "Ultron"];
  viloes[i] = viloesPossiveis[indiceAleatorio];
  }
    
  console.log("Vilões:" + viloes);
  
  //Calculando a força dos times
  calcularForca();
  
  console.log("Força personagens: " + forcaPersonagens)
  
  console.log("Força vilões: " + forcaViloes)
  
  document.getElementById('vilao1').innerText = viloes[0];
  document.getElementById('vilao2').innerText = viloes[1];
  document.getElementById('vilao3').innerText = viloes[2];
  
 //Comparar os dois times para saber quem venceu
  let resultado;
  if (forcaPersonagens > forcaViloes) {
    resultado = "Seu time é muito forte! \nVocê ganhou a disputa de cabo de guerra! \nSua força foi " + forcaPersonagens;
  } else if (forcaPersonagens < forcaViloes) {
    resultado = "Seu time é fraquinho. \nO computador ganhou o cabo de guerra com força de " + forcaViloes;
  } else {
    resultado = "Os dois times tem a mesma força! Vocês empataram!"
  }
  
  document.getElementById('resultado').innerText = resultado;
  
//Resetando as forças para a próxima jogada  
forcaPersonagens = 0; 

forcaViloes = 0;
  
}