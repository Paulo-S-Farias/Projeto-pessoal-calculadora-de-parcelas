const calcularImposto = require('../src/calcularImposto');

test('Deve calcular o imposto corretamente', () => {
  expect(calcularImposto(1000, 15)).toBe(150);
});
