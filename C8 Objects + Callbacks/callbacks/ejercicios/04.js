function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   let sumaTotal= arrayOfNumbers.reduce((acum,numero)=> acum + numero,0);
   cb(sumaTotal);
}

module.exports = sumarArray;
