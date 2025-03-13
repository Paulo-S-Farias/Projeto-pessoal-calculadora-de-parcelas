const calcularValorParcela = require('../src/CalcularValorParcela');

test('Deve calcular corretamente o valor da parcela', () => {
  expect(calcularValorParcela(1200, 12)).toBe(100);
});
