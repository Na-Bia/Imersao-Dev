function jogar() {
  let idade = prompt("Quantos anos você tem?");

  if (idade < 18) {
    alert("Você NÃO pode jogar jokenpo");
  } else {
    let escolhaJogador = prompt(" 1-Pedra, 2-Papel ou 3-Tesoura?");

    let escolhaComputador = Math.floor(Math.random() * 3) + 1;
    console.log(escolhaComputador);
    //Math.floor arredonda para baixo
    //Math.random gera um número entre 0 e 0.99
    
    //atribuindo nomes para a escolha do computador
    let nomeEscolha;
    if (escolhaComputador == 1) {
      nomeEscolha = "pedra";
    }
    if (escolhaComputador == 2) {
      nomeEscolha = "papel";
    }
    if (escolhaComputador == 3) {
      nomeEscolha = "tesoura";
    }
    
    console.log(nomeEscolha);
    
    //Resposta para entradas não válidas
    if (escolhaJogador != 1 && escolhaJogador != 2 && escolhaJogador != 3){
      alert("Por favor, insira uma opção válida: 1, 2 ou 3.");
    //Possibilidades de empate
    } else if (escolhaJogador == escolhaComputador) {
      alert("Empate!!");
    //Casos em que o jogador vence
    } else if ((escolhaJogador == 1 && escolhaComputador == 3) ||
               (escolhaJogador == 2 && escolhaComputador == 1) ||
               (escolhaJogador == 3 && escolhaComputador == 2)) {
      alert("Jogador venceu!! O computador escolheu " + nomeEscolha);
    } else {
      alert("Jogador perdeu :c! O computador escolheu " + nomeEscolha);
    }
  }
}
