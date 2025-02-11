function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  const numMayoresA10=[]
for (let i = 0; i < array.length; i++) {
  if (array[i] > 10) {
    numMayoresA10.push(array[i])
  }
}
return numMayoresA10.length
}

module.exports = contarElementosMayoresA10;
