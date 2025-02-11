function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  array.sort((a,b) => {
    if (typeof a === "string" && typeof b === "string"){
      return a.localeCompare(b);
    }
    return a-b
  });
  return array
}

module.exports = ordenarArray;
