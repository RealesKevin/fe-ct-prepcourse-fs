function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   const IndiceAleatorio = Math.floor( Math.random() * array.length);
   return array[IndiceAleatorio]
}

module.exports = obtenerElementoAleatorio;
