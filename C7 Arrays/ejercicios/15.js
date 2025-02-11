function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if (array.length===0) {
    return 0;
  }

  var aux= array[0];
  var indice= 0;
  for (let i = 0; i< array.length; i++) {
    if (array[i] > aux) {
      aux=array[i];
      indice= i
    }
  }
  return indice
}

module.exports = encontrarIndiceMayor;
