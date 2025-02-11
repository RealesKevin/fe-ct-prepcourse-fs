function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  const ArrayMayusculas = array.map(Elemento => Elemento.toUpperCase());
  return ArrayMayusculas;
}

module.exports = convertirStringAMayusculas;
