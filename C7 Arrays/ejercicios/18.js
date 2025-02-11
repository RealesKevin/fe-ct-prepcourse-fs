function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var SumaDeNotas=0;
  for (let i = 0; i< resultadosTest.length; i++) {
    SumaDeNotas+= resultadosTest[i]
  }
  var promedio = (SumaDeNotas / resultadosTest.length);
  return promedio;
}

module.exports = promedioResultadosTest;
