function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let resultados=[];
   for(let string of arrayOfStrings) {
      if(string[0] ==="a") {
         resultados.push(string);
      }
   }
   return resultados;

}

module.exports = filter;
