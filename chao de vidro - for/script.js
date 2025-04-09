//function jogar() {
  let venceu = true; // Variável para indicar se venceu
  
  for (let rodada = 1; rodada <= 3; rodada++) {
    console.log("Rodada:" + rodada);

    let escolhaJogador = prompt("RODADA " + rodada + ": Vidro (1, 2 ou 3)?");
    let pisoQuebrado = Math.floor(Math.random() * 3) + 1;
    
    //Verifica se o usuário clicou em "Cancelar"
    if (escolhaJogador === null) {
      alert("Você saiu do jogo.");
      break; // Sai do loop
    } 
    
    if (escolhaJogador != 1 && escolhaJogador != 2 && escolhaJogador != 3) {
      alert("Dando uma de espertinho? Escolha uma opção válida: Vidro (1, 2 ou 3)?");
      rodada--;  
    } else if (escolhaJogador == pisoQuebrado) {
      alert("Vidro quebrou! Acabou o jogo pra você :c");
      //forçar parada, passou da última rodada
      rodada = 100;
      venceu = false;
    } else {
      alert("Passou! Piso quebrado estava na ponte: " + pisoQuebrado)
    }
  }
  
  if (venceu && escolhaJogador != null) {
    alert("Você venceu! Parabéns")
  } else {
    alert("Você não venceu. Tente novamente!");
  }
//}