function jogar() {
  let rodada = 1;
  let venceu = false; // Variável para indicar se venceu
  
  while (rodada <= 3) {
    console.log("Rodada:" + rodada);

    let escolhaJogador = prompt("RODADA " + rodada + ": Vidro (1, 2 ou 3)?");
    let pisoQuebrado = Math.floor(Math.random() * 3) + 1;
    
    //Verifica se o usuário clicou em "Cancelar"
    if (escolhaJogador === null) {
      alert("Você saiu do jogo.");
      break; // Sai do loop}
    } 
    
    if (escolhaJogador != 1 && escolhaJogador != 2 && escolhaJogador != 3) {
      alert("Dando uma de espertinho? Escolha uma opção válida: Vidro (1, 2 ou 3)?");
      // O loop pula para a próxima iteração, sem incrementar a rodada
      continue;  
    } else if (escolhaJogador == pisoQuebrado) {
      alert("Vidro quebrou! Acabou o jogo pra você :c");
      //forçar parada, passou da última rodada
      rodada = 100;
    } else {
      alert("Passou! Piso quebrado estava na ponte: " + pisoQuebrado)
    }

    //controle do laço
    rodada = rodada + 1;
  }

  //neste bloco: a comparação não é feita em todas as iterações do loop
  if (rodada == 4) {
    venceu = true;
  }
  
  if (venceu) {
    alert("Você venceu! Parabéns")
  } else {
    alert("Você não venceu. Tente novamente!");
  }
}