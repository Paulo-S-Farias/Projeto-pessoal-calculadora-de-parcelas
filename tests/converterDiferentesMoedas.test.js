const converterMoeda = require('../src/converterDiferentesMoedas');

test('Deve converter corretamente o valor entre moedas', () => {
  expect(converterMoeda(100, 5.5)).toBe(550);
});
