printWinner();
//Función para mostrar el resultado
function printWinner() {
    document.getElementById("resultadoDiv").innerHTML = `<h1>${window.localStorage.getItem("result")}</h1>`
}

//Función para volven a elegir otra opción de la lista de opciones anterior
function anotherOption() {
    let choices = window.localStorage.getItem("choices");
    choices = choices.split(",");
    var rand = Math.round(Math.random() * (choices.length - 1));
    window.localStorage.setItem("result", choices[rand]);
    printWinner();
}

//Función para volver a crear otra lista de opciones
function reset() {
    window.localStorage.clear();
}