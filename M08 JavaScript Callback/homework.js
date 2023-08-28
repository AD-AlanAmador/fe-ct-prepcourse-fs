/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

const { nuevoUsuario } = require("../M06 JavaScript Objetos/homework");

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
var letra1 = function(){
   var name = nombre;
   var palabras = name.split('');
   return(palabras[0].toUpperCase());

}
var letra2 = function(){
   var name = nombre;
   var lowers = '';
   for(let i = 1 ; i < name.length ; i++){
      lowers = lowers + name[i];
   }
   return(lowers.toLowerCase());
}

var completo = function(){
   return(letra1() + letra2());
}
return(completo());
}
/*var restoLetras = function(){
   var name = nombre;
   var palabras = name.slice();
   return(palabras[1] + palabras[2] + palabras[3] + palabras[4]);
}
var mario = function(){
   return(letra1() + restoLetras());
}
return(mario());
}*/

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
var invocar = function(){
   return(cb);
}
var devolver = invocar(cb);
devolver();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
var numero1 = function(){
   return(num1);
}
var numero2 = function(){
   return(num2);
}
var operacion = function(){
   return(numero1() + cb() + numero2());
}
var result = operacion(numero1, numero2)

return(result);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
var suma = 0;
   for(let i = 0 ; i < arrayOfNumbers.length ; i++){
      (suma += arrayOfNumbers[i]);
   }
   cb(suma);
}


function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   for(let i = 0 ; i < array.length ; i++){
      cb(array[i]);
   }
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
nuevoArray = [];
for(let i = 0 ; i < array.length ; i++){
   nuevoArray.push(cb(array[i]));
}
return(nuevoArray);
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
var nuevoArray2 = [];
var filtrar = arrayOfStrings.filter((word) => word.startsWith('a'));
for(let i = 0 ; i < arrayOfStrings.length ; i++){
      if(filtrar == filtrar){
         nuevoArray2.push(filtrar[i]);
      }
   }
return(nuevoArray2);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
