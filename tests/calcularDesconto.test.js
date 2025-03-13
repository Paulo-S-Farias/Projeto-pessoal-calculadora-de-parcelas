const calcularDesconto = require('../src/calcularDesconto');

test('Deve calcular o valor do desconto corretamente', () => {
  expect(calcularDesconto(200, 10)).toBe(180);
});
