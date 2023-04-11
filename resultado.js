mostrarResultado();

function mostrarResultado() {
    document.getElementById("resultadoDiv").innerHTML = `<h1>${window.localStorage.getItem("result")}</h1>`
}

function anotherOption() {
    let choices = window.localStorage.getItem("choices");
    choices = choices.split(",");
    var rand = Math.round(Math.random() * (choices.length - 1));
    window.localStorage.setItem("result", choices[rand]);
    mostrarResultado();
}

function reset() {
    window.localStorage.clear();
}