// ------------------ Global variables ------------------
// ------------------ & Initializations ------------------

let enabled = false;
let fruits = ["apple", "orange", "banana"]; // TODO: Hardcoded!!!

// Crear un nodo de tipo lista por cada fruta de mi array
fruits.map( function(item, index) {
  let newFruit = document.createElement("li");
  newFruit.innerText = item;
  newFruit.id = "fruit" + index;
  document.querySelector("#fruits").appendChild(newFruit);
});

// ------------------ Elements selections ------------------

//let myButton = document.getElementById("btn1");
let myButton = document.querySelector("#btn1");
//let allButtons = document.querySelectorAll(".btn.red");

// ------------------ Handler functions ------------------

function toggle(myButton, myState) {
  // Si estoy apagado...
  if (myState === false) {
    // Enciendo
    myButton.className = "btn green";
    myButton.innerText = "ON";

    return true;
  }
  else { // Si estoy encendido...
    // Apago
    myButton.className = "btn red";
    myButton.innerText = "OFF";

    return false;
  }
}

// ------------------ Event handlers ------------------

// Binding
myButton.addEventListener("click", function() {
  enabled = toggle(myButton, enabled);
});