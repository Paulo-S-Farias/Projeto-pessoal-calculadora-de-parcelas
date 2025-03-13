const calcularJurosComposta = require('../src/CalcularJurosComposta');

test('Deve calcular corretamente os juros compostos', () => {
  expect(calcularJurosComposta(1000, 0.05, 2)).toBeCloseTo(1102.5);
});
