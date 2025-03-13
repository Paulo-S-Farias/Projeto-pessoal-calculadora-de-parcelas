const calcularValorEmprestimo = require('../src/CalcularValorEmprestimo');

test('Deve calcular o valor do empréstimo corretamente', () => {
  expect(calcularValorEmprestimo(5000, 0.05, 3)).toBeCloseTo(1836.04, 2);  // Ajuste o valor esperado para o correto
});
