/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return(array[0]);
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return(array[array.length - 1]);
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return(array.length);
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var masUno = array.map((num) => {return num + 1});
   return(masUno);
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return(array);
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return (array);
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return(palabras.join(' '));
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   if (array.includes(elemento)){
      return (true);
   } else return (false);
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var numeros = arrayOfNums, suma = 0;
   numeros.forEach((num) => { 
      suma += num
   });
   return(suma);

}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var arrayTest = resultadosTest;
   var initialValue = 0;
   var sumWithInitial = arrayTest.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
   var operacionFinal = (sumWithInitial / resultadosTest.length);

   return(operacionFinal);
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   x = 0
   for(let i = 0 ; i < arrayOfNums.length ; i++){
      if(arrayOfNums[i] > arrayOfNums[x]){
         return(arrayOfNums[i]);
      }
   }
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var x = 1;
   for(var i = 0 ; i < arguments.length ; i++){
      (x = arguments[i] * x);
      } if (arguments.length == 0) {
   return(0);
      } return(x);
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
let mayor18 = [];
for(let i = 0 ; i < array.length ; i++){
   if(array[i] > 18){
      mayor18.push(array[i])
   }
}
return(mayor18.length);
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   var dias = numeroDeDia
   if(dias === 1 || dias === 7){
      return("Es fin de semana");
   } else return("Es dia laboral");
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
var numStr = num.toString();
//var numero = numStr.indexOf('9');
if(numStr[0] == 9){
   return(true);
} else return(false);
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
xx = 1
for(let i = 0 ; i < array.length ; i++){
   if(array[i] == array[xx]){
      return(true);
   } else return(false);
}
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
var nuevoArray = [];
var incluyeEnero = array.includes('Enero');
var incluyeMarzo = array.includes('Marzo');
var incluyeNoviembre = array.includes('Noviembre');

if(incluyeEnero === true && incluyeMarzo === true && incluyeNoviembre === true){
   nuevoArray.push('Marzo');
   nuevoArray.push('Noviembre');
   nuevoArray.push('Enero');
   return(nuevoArray);
} else{
   return('No se encontraron los meses pedidos');
}
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
//var tablaFalsa = [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
var v = 6;
var tablaSeis = [];

for(let i = 0 ; i <= 10 ; i++){
   (v + i+(v * i));
   tablaSeis.push(v * i);
   }
return(tablaSeis);
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
var tabla100 = [];
   for(let i = 0 ; i < array.length ; i++){
      if(array[i] > 100){
         tabla100.push(array[i]);
      }
   }
return(tabla100);
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
var newArreglo = []

for(var i = 0; i < 10 ; i++){
   num = num + 2;
   if(num===i) break;
   else {
      newArreglo.push(num);
   }
}
if(i < 10) {
   return("Se interrumpió la ejecución");
} else {
   return(newArreglo);
}
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
var newArreglo2 = [];

for(var i = 0 ; i <10 ; i++){
   if(i === 5){
      continue;
   } else{
      num = num + 2;
      newArreglo2.push(num);
   }
}return(newArreglo2);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
