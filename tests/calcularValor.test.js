const calcularValor = require('../src/calcularValor');

test('Deve calcular o valor total de uma compra', () => {
  expect(calcularValor(100, 2)).toBe(200);
});
