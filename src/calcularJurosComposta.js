function calcularJurosComposta(capitalInicial, taxa, tempo) {
    return capitalInicial * Math.pow(1 + taxa, tempo);
  }
  
  module.exports = calcularJurosComposta;
  