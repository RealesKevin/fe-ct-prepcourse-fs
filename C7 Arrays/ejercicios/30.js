function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  const numVisto = new Set();

  for( const Elemento of numeros) {
    if (numVisto.has(Elemento)) {
      return Elemento;
    }
    numVisto.add(Elemento);
  }
  return undefined;
}

module.exports = encontrarElementoRepetido;