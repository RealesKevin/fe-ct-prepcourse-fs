function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  const arrayMultiplicado=[];
  for (let i = 0; i < array.length; i++) {
    var elementomultiplicado= (array[i] * i);
    arrayMultiplicado.push(elementomultiplicado);
  }
  return arrayMultiplicado;
}

module.exports = multiplicarElementosPorIndice;
