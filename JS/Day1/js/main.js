
/*
Esto es un ejemplo
de Hola Mundo vitaminado
en JavaScript
*/

// Variables
var numero; // undefined
numero = 3; // number
console.log(numero);
console.log(typeof numero);

var miNumero2 = -5; 
var resultado = numero + -(miNumero2 * 3);

var saludo = "Welcome to door "; // String
console.log(typeof saludo);

console.log("Hello World");
console.log(saludo + resultado); // ??

console.log(5 % "2"); // "32"

// boolean
var feliz = true;

// console.log("3a" + "6b") // Kata?? 

if (numero > 2 && miNumero2 === -5) {
  console.log("Tanque, estoy dentro");
}
else {
  console.log("Tanque, dame acceso");
}




//if (numero > 2 && miNumero2 === -5) {

if (numero > 2) {

  if (miNumero2 === -5) {
    console.log("Tanque, estoy dentro");
  }
  else {
    console.log("El miNumero2 no es identico a -5");
  }

}
else {
  console.log("El numero no es mayor que 2");
}

// Estado de partida
var times = 0;

// Condicion de parada
while ( times < 3 ) {

  console.log("Beetlejuice");

  // Modificacion del estado
  // times = times + 1;
  // times += 1;
  times++;
}

console.log("Let's rock");







