function calcularDesconto(valor, percentual) {
    return valor - (valor * (percentual / 100));
  }
  
  module.exports = calcularDesconto;
  