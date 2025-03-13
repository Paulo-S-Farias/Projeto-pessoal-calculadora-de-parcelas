const calcularValorParcela = require('../src/calcularValorParcela');

test('Deve calcular corretamente o valor da parcela', () => {
  expect(calcularValorParcela(1200, 12)).toBe(100);
});
