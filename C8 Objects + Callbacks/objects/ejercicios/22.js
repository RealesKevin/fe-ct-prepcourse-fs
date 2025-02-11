function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   const limpiar= (palabra) => palabra.replace(/\s+/g, '').toLowerCase();

   const letra1= limpiar(str1).split("").sort().join("");
   const letra2=limpiar(str2).split("").sort().join("");

   return letra1 === letra2;
}

module.exports = esAnagrama;
