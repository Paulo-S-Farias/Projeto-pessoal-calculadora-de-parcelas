function calcularValorEmprestimo(montante, taxa, tempo) {
  // Fórmula correta para parcelas fixas de empréstimo
  const parcela = (montante * taxa) / (1 - Math.pow(1 + taxa, -tempo));
  return parcela;
}

module.exports = calcularValorEmprestimo;
