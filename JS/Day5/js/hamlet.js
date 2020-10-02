let myButton = document.getElementById("btn1");
let enabled = false;

function toggle() {
  // Si estoy apagado...
  if(enabled === false) {
    // Enciendo
    myButton.className = "btn green";
    myButton.innerText = "ON";
    enabled = true;
  }
  else { // Si estoy encendido...
    // Apago
    myButton.className = "btn red";
    myButton.innerText = "OFF";
    enabled = false;
  }
}

myButton.addEventListener("click", toggle );
