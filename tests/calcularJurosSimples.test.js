const calcularJurosSimples = require('../src/CalcularJurosSimples');

test('Deve calcular corretamente os juros simples', () => {
  expect(calcularJurosSimples(1000, 0.05, 2)).toBe(1100);
});
