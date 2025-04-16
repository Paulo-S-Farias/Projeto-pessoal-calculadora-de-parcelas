// financeiroService.js

function calcularDesconto(valor, percentual) {
    return valor - (valor * (percentual / 100));
  }
  
  function calcularImposto(valor, percentualImposto) {
    return valor * (percentualImposto / 100);
  }
  
  function calcularJurosComposta(capitalInicial, taxa, tempo) {
    return capitalInicial * Math.pow(1 + taxa, tempo);
  }
  
  function calcularJurosSimples(capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + (taxa * tempo));
  }
  
  function calcularSaldoFinal(saldoInicial, depositos, retiradas) {
    return saldoInicial + depositos - retiradas;
  }
  
  function calcularValor(preco, quantidade) {
    return preco * quantidade;
  }
  
  function calcularValorEmprestimo(montante, taxa, tempo) {
    const parcela = (montante * taxa) / (1 - Math.pow(1 + taxa, -tempo));
    return parcela;
  }
  
  function calcularValorParcela(valorTotal, numeroParcelas) {
    return valorTotal / numeroParcelas;
  }
  
  function converterMoeda(valor, taxaCambio) {
    return valor * taxaCambio;
  }
  
  function verificarValorDentro(valor, limiteOrcamento) {
    return valor <= limiteOrcamento;
  }
  
  module.exports = {
    calcularDesconto,
    calcularImposto,
    calcularJurosComposta,
    calcularJurosSimples,
    calcularSaldoFinal,
    calcularValor,
    calcularValorEmprestimo,
    calcularValorParcela,
    converterMoeda,
    verificarValorDentro
  };
  