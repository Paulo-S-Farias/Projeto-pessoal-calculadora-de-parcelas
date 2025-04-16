const {
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
  } = require("../src/calculadorParcelas.js");
  
  test("Deve calcular o valor do desconto corretamente", () => {
    expect(calcularDesconto(200, 10)).toBe(180);
  });
  
  test("Deve calcular o imposto corretamente", () => {
    expect(calcularImposto(1000, 15)).toBe(150);
  });
  
  test("Deve calcular corretamente os juros compostos", () => {
    expect(calcularJurosComposta(1000, 0.05, 2)).toBeCloseTo(1102.5);
  });
  
  test("Deve calcular corretamente os juros simples", () => {
    expect(calcularJurosSimples(1000, 0.05, 2)).toBe(1100);
  });
  
  test("Deve calcular corretamente o saldo final", () => {
    expect(calcularSaldoFinal(1000, 500, 300)).toBe(1200);
  });
  
  test("Deve calcular o valor total de uma compra", () => {
    expect(calcularValor(100, 2)).toBe(200);
  });
  
  test("Deve calcular o valor do empréstimo corretamente", () => {
    expect(calcularValorEmprestimo(5000, 0.05, 3)).toBeCloseTo(1836.04, 2);
  });
  
  test("Deve calcular corretamente o valor da parcela", () => {
    expect(calcularValorParcela(1200, 12)).toBe(100);
  });
  
  test("Deve converter corretamente o valor entre moedas", () => {
    expect(converterMoeda(100, 5.5)).toBe(550);
  });
  
  test("Deve verificar se o valor está dentro do orçamento", () => {
    expect(verificarValorDentro(150, 200)).toBe(true);
    expect(verificarValorDentro(250, 200)).toBe(false);
  });
  