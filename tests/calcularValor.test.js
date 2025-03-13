const calcularValor = require('../src/CalcularValor');

test('Deve calcular o valor total de uma compra', () => {
  expect(calcularValor(100, 2)).toBe(200);
});
