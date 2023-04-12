var choices = [];
choices_selected = "";


// Editar la lista de opciones post sorteo.
// if (window.localStorage.getItem("choices") != null) {
//   show_choices();
// }

//Función para mostrar en pantalla help
function show_help() {
  alert("Bienvenidos a nuestro Sorteador.");
  const windowFeatures = "left=0,top=0,width=1800,height=1600";
  const handle = window.open(
    "help.html",
    "mozillaWindow",
    windowFeatures
  );

}

//Función para añadir la opción
function add_choice() {
 
  var valor = document.getElementById("choice").value;
  console.log("value: " + valor);
  var contains_characters = false;
  
  var char_array = valor.split('');

  for (let index = 0; index < char_array.length; index++) {
   
    if ((char_array[index]) != " ") {
      contains_characters = true;
      break;

    }
  }
 
  if ((valor != "" && valor != " " && contains_characters == true)) {
    choices.push(valor);
    document.getElementById("choice").value = "";
    show_choices(choices[choices.length - 1]);
  } else {
    document.getElementById("choice").value = "";
    alert("No puede Introducir nullo o solo Espacios Blancos.");
  }
}


//Función para mostrar la lista de opciones que ha añadido
function show_choices(val) {
  choices_selected += val + " <br>";
  document.getElementById("contenido_actividades").innerHTML = choices_selected;
}

//Función para seleccionar una opción aleatoriamente
document.getElementById("btnGo").addEventListener("click", e => {
  if (choices.length == 0) {
    alert("Debes introducir opciones antes de sortear!");
    e.preventDefault();
  } else {
    var rand = Math.round(Math.random() * (choices.length-1));
    window.localStorage.setItem("result", choices[rand]);
    window.localStorage.setItem("choices", choices);
  }
});