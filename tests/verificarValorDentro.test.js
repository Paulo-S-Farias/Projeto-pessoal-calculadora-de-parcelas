const verificarValorDentro = require('../src/verificarValorDentro');

test('Deve verificar se o valor está dentro do orçamento', () => {
  expect(verificarValorDentro(150, 200)).toBe(true);
  expect(verificarValorDentro(250, 200)).toBe(false);
});
