const calcularSaldoFinal = require('../src/CalcularSaldoFinal');

test('Deve calcular corretamente o saldo final', () => {
  expect(calcularSaldoFinal(1000, 500, 300)).toBe(1200);
});
