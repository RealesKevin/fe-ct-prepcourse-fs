function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var por2 = array.map((num) => num *2);
  return por2;
}

module.exports = duplicarElementos;
