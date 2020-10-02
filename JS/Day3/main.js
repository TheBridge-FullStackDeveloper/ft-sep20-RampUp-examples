
let fuera = 3;

if (true) {
  let dentro = 9;
  // Existe algo llamado fuera 

  if (true) {

    console.log(dentro)
    console.log(fuera)
  }
}

console.log(fuera) // 3





















console.log(fuera);   // 1
















let fuera = 1;

if (true) {
  fuera = 3;
  
  console.log(fuera);
}

console.log(fuera); // ?









for (let i = 0; i < 11; i++) {
  console.log(i);
}


console.log(i);












const PI = 3.14;


console.log(numero);













let numeros = [ 47, -9 ];

let vacio = [];

vacio[0] = 3; // [3]
console.log(vacio[1])

console.log(vacio.length); // 1
















console.log( numeros[0] ); // 47
console.log( numeros[1] ); // -9
console.log( numeros[2] ); // ??

numeros[0]++;
numeros[1]++;

console.log( numeros[1] ); // -8
console.log( numeros[0] ); // 47










let numeros = [2, 5];

function increaseArrayOfNumbersAndThenAddA(numerosArray) {

  var theLetter = "a";

  // Si no vacio
  if (numerosArray.length > 0) {
    const sizeNumeros = numerosArray.length;

    // Suma 1 a cada elemento (del principio al final)
    for (let i = 0; i < sizeNumeros; i++) {
      numerosArray[i] += 1;
    }

    // Añádele una "a" (del final al principio) de manera
    // que se conviertan todos ellos en strings
    for (let i = sizeNumeros - 1; i > -1; i--) {
      numerosArray[i] += theLetter;
    }
  }

  return numerosArray;
}

let cosas = [ 4, 6 ];

increaseArrayOfNumbersAndThenAddA( [1, 2, 3] );

console.log(cosas)
cosas = increaseArrayOfNumbersAndThenAddA( cosas );
console.log(cosas)




let colection = [];



// Se pide: Dado un array colection, añadir un número al final igual al tamaño de dicho
// array antes de habérselo añadido

colection[ colection.length ] = colection.length;




















function suma(num1, num2) {

  let result = num1 + num2;

  num1 = 3278346782347

  return result;
}

let edad1 = 3
let edad2 = 8


console.log(suma(edad1, edad2));
console.log(edad1);





function identidad(a) {
  return a;
}


console.log(suma(2, 3));


let algo = identidad(1);
