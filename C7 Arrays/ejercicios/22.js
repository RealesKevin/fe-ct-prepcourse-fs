function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  const tabla=[];
  const num = 6;
  
  for (let i = 0; i <= 10; i++) {
    tabla.push( num * i)
  }
  return tabla
}

module.exports = tablaDelSeis;
