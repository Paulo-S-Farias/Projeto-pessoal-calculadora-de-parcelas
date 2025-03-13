const calcularSaldoFinal = require('../src/calcularSaldoFinal');

test('Deve calcular corretamente o saldo final', () => {
  expect(calcularSaldoFinal(1000, 500, 300)).toBe(1200);
});
