/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num = 4) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   return ((num) ** (2));
}

function elevarAlCubo(num = 2) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   return ((num) ** (3));
}

function elevar(num = 3, exponent = 4) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   return ((num) ** (exponent));
}

function redondearNumero(num = 3.51) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   return Math.round(num);
}

function redondearHaciaArriba(num = 2.10) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   return Math.ceil(num);
}

function numeroRandom(rand = 1) {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   return Math.random(rand);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
