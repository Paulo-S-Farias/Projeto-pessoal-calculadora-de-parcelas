const calcularImposto = require('../src/CalcularImposto');

test('Deve calcular o imposto corretamente', () => {
  expect(calcularImposto(1000, 15)).toBe(150);
});
