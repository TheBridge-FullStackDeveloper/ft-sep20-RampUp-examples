/* -----------------------------------------
   -------------- Block scope --------------
   ----------------------------------------- */

// --------- Ejemplo 1 ---------

let fueraGlobal = 10;

if (true) {
  var dentroAmbitoNormal = 20
  let dentroAmbitoBloque = 25;
  
  console.log(fueraGlobal); // 10

  if (true) {
    console.log(fueraGlobal); // 10
    console.log(dentroAmbitoNormal); // 20
    console.log(dentroAmbitoBloque); // 25
  }
}

console.log(fueraGlobal); // 3

console.log(dentroAmbitoNormal); // 20
// Al declararse con var, es accesible en todo su ámbito "normal", fuera del if

console.log(dentroAmbitoBloque); // Error
// Al declararse con let, solo es accesible en su ámbito de bloque (el del if) y sucesores

// --------- Ejemplo 2 ---------

const PI = 3.14;
PI = 3.14159; // Error: Independientemente de su ámbito, una constante no se puede modificar

// --------- Ejemplo 3 ---------

for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}

console.log(i); // Error
// El iterador i no existe fuera de su ámbito de bloque (el del for)

// --------- Ejemplo 4 ---------

let fueraGlobal2 = 10;

if (true) {
  let fueraGlobal2 = 15;
  
  console.log(fueraGlobal2); // 15
}

console.log(fueraGlobal2); // 10
/* Al declararse con let, el fueraGlobal2 de dentro del if
   pertenece SOLO a ese subámbito de bloque, de manera que
   no afecta al (ni es el mismo que el) fueraGlobal2 que
   está en el superámbito de bloque que contiene al if.
   En cambio, si se hiciera con var, daría error */

// --------- Ejemplo 5 ---------

let letras = [];
letras[0] = "w";

console.log(letras); // ["w"]
console.log(letras[0]); // "w"
console.log(letras[1]); // undefined
console.log(letras.length); // 1

let numeros = [47, -9];
console.log(numeros.length); // 2

numeros[0]++;
console.log( numeros[0] ); // 48

// --------- Ejemplo 6 ---------

function sumarDosNumeros(num1, num2) {

  let result = num1 + num2;

  return result;
}

let fuerza1 = 3;
let fuerza2 = 8;
let fuerzaTotal = sumarDosNumeros(fuerza1, fuerza2);

console.log( fuerzaTotal ); // 11
console.log( sumarDosNumeros(12, 6) ); // 18

// --------- Ejemplo 7 ---------

function incrementarEnUno(numerosArray) {

  const sizeNumerosArray = numerosArray.length;

  // Si no vacío
  if (sizeNumerosArray > 0) {

    // Suma 1 a cada elemento
    for (let i = 0; i < sizeNumerosArray; i++) {
      numerosArray[i]++;
    }
  }

  return numerosArray;
}

let puntos = [10, 20, 30];

incrementarEnUno(puntos);
console.log(puntos); // [10, 20, 30]
/* Al pasar como parámetro el array, dentro de la
   función existe una copia del mismo (numerosArray)
   que existe SOLO dentro de su ámbito, y con la
   que trabaja. Por tanto, no afecta al de fuera */

puntos = incrementarEnUno(puntos);
console.log(puntos); // [11, 21, 31]
/* Para poder modificar el array recibido, la función debe DEVOLVER (con return)
   la copia con la que ha trabajado (numerosArray) para modificarla al superámbito
   que la llamó, y este a su vez recogerla en el mismo array (puntos) pasado */