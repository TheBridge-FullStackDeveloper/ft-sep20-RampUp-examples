console.log("Hola Mundo");

let name;// = "Foris"; //prompt("¿Cuál es tu nombre?");
let password; //= "123";//prompt("¿Cuál es tu contraseña?");
let age;// = 29; //prompt("Cuál es tu edad?");

/*
    AND (true y true) &&
    OR  (true y false) (false y true) (true y true) ||

    == Igual a
    != Diferente de

    / division
    + suma
    - resta
    * multiplicacion
    % módulo

*/
while (name != "Foris" || password != "123") {
    name = prompt("¿Cuál es tu nombre?");
    password = prompt("¿Cuál es tu contraseña?");
}

for (let i = 0; i < 10; i++)
    console.log(i);

age = prompt("Cuál es tu edad?");
// if (name == "Foris" && password == "123") {
console.log("Bienvenido", name);
// }
// if (name != "Foris" || password != "123") {
//     console.log("Usuario incorrecto");
// }

if (age % 2 == 0)
    console.log("Tu edad es par");
if (age % 2 == 1)
    console.log("Tu edad es impar");

let i = 0;
while (i < 10)
    if (i++ % 2)
        console.log("par");

// String -> "Foris" || 'Foris' || `Foris`
// Integers -> 0, 1, 2, 3, 4
// Floats -> 0.1, 0.2, 0.3, 0.4
