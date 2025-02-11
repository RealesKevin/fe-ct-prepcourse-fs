const { textSpanContainsPosition } = require("typescript");

function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  if (texto.length ===0) {
    return ""
  }
  return texto.split("") 
  .reverse()
  .join("");
}

module.exports = invertirTexto;
