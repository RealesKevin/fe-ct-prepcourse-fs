const { nodeModuleNameResolver } = require("typescript");

function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  var normalizado = string.replace(/[\W_]/g, '').toLowerCase();
  var palindromo = normalizado.split("").reverse().join("");

  return normalizado === palindromo;
}

module.exports = esPalindromo;