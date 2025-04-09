// PARTE 1: Lista de perguntas e respostas
perguntas = [
  {
    pergunta: "Qual o principal pokémon do Ash?",
    respostas: [
      { opcao: "Pikachu", correto: true },
      { opcao: "Bubassauro", correto: false },
      { opcao: "Charmander", correto: false }
    ]
  },
  {
    pergunta: "Qual tipo de pokémon é o Squirtle?",
    respostas: [
      { opcao: "Fogo", correto: false },
      { opcao: "Água", correto: true },
      { opcao: "Grama", correto: false }
    ]
  },
  {
    pergunta: "Qual desses pokémons é do tipo Fogo?",
    respostas: [
      { opcao: "Charmander", correto: true },
      { opcao: "Pidgey", correto: false },
      { opcao: "Zubat", correto: false }
    ]
  },
  {
    pergunta: "Eevee pode evoluir para qual desses pokémons?",
    respostas: [
      { opcao: "Vaporeon", correto: true },
      { opcao: "Pikachu", correto: false },
      { opcao: "Jigglypuff", correto: false }
    ]
  },
  {
    pergunta: "Qual desses não é um pokémon inicial da primeira geração?",
    respostas: [
      { opcao: "Squirtle", correto: false },
      { opcao: "Meowth", correto: true },
      { opcao: "Bulbasaur", correto: false }
    ]
  },
  {
    pergunta: "Qual é o tipo do pokémon Gengar?",
    respostas: [
      { opcao: "Fantasma/Veneno", correto: true },
      { opcao: "Psíquico", correto: false },
      { opcao: "Sombrio", correto: false }
    ]
  },
  {
    pergunta: "Qual o nome da equipe vilã que persegue o Ash na série clássica?",
    respostas: [
      { opcao: "Equipe Rocket", correto: true },
      { opcao: "Equipe Magma", correto: false },
      { opcao: "Equipe Aqua", correto: false }
    ]
  },
  {
    pergunta: "Quantos pokémons Ash pode carregar com ele ao mesmo tempo?",
    respostas: [
      { opcao: "6", correto: true },
      { opcao: "5", correto: false },
      { opcao: "8", correto: false }
    ]
  },
  {
    pergunta: "Qual desses pokémons tem uma evolução por pedra da lua?",
    respostas: [
      { opcao: "Clefairy", correto: true },
      { opcao: "Pikachu", correto: false },
      { opcao: "Machop", correto: false }
    ]
  },
  {
    pergunta: "Qual desses pokémons é do tipo Elétrico?",
    respostas: [
      { opcao: "Raichu", correto: true },
      { opcao: "Onix", correto: false },
      { opcao: "Cubone", correto: false }
    ]
  }
];


// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta
  //Resumindo, perguntaAtual.pergunta está pegando a pergunta específica do objeto perguntaAtual, que foi selecionado do array perguntas com base no índice atual. O ponto (.) é a maneira de acessar as propriedades desse objeto.

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores
  
  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos++; // Incrementa o contador de acertos
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();
