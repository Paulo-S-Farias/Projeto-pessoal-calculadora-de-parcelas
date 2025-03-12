function calcularJurosSimples(capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + (taxa * tempo));
  }
  
  module.exports = calcularJurosSimples;
  