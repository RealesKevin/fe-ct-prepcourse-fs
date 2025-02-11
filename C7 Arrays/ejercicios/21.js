function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  const MesesEncotrados = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Enero" || array[i] === "Noviembre" || array[i] === "Marzo") {
      MesesEncotrados.push(array[i])
    }
  }
  if (MesesEncotrados.length === 3) {
    return MesesEncotrados;
  } else {
    return "No se encontraron los meses pedidos"
  }
}

module.exports = mesesDelAño;
