let cotacaoSelecionada = null;

function selecionarMoeda(moeda) {
  // Cotações de abril/2025
  switch (moeda) {
    case "USD":
      cotacaoSelecionada = 5.91;
      break;
    case "EUR":
      cotacaoSelecionada = 6.45;
      break;
    case "KRW":
      cotacaoSelecionada = 0.004;
      break;
  }

  // Exibe a cotação bruta no input
  document.getElementById("valMoeda").innerText = "R$ " + cotacaoSelecionada;
}

function conversor() {
  let quantidadeMoeda = parseFloat(
    document.getElementById("quantidadeMoeda").value
  );

  if (cotacaoSelecionada == null || isNaN(quantidadeMoeda)) {
    document.getElementById("resultado").innerHTML =
      "Selecione a moeda e insira uma quantidade válida.";
    return;
  }
  
  let resultado;
  if (cotacaoSelecionada == 'KRW') {
    resultado = quantidadeMoeda / cotacaoSelecionada;
  } else {
    resultado = quantidadeMoeda * cotacaoSelecionada;
  }
    
  
  document.getElementById(
    "resultado"
  ).innerHTML = "Valor em reais: R$" + resultado.toFixed(2);
}
