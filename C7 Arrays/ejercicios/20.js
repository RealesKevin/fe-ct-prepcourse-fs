function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  if (array.length===0) return true;

  return array.every(elemento => elemento === array[0]);
  
}

module.exports = todosIguales;
