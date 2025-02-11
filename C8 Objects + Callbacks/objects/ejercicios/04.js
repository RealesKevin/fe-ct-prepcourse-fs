function verificarPropiedad(objeto, propiedad) {
   // Verifica si el objeto posee la propiedad recibida.
   // Retorna true si la tiene, sino retorna false.
   // PISTA: puedes usar el método hasOwnProperty().
   // Tu código:
   var verificarProp = objeto.hasOwnProperty(propiedad);
   return verificarProp;
}

module.exports = verificarPropiedad;
