//pregunto la fecha y hora
var laHora = new Date().getHours();
document.querySelector("#hora").innerHTML = laHora;
var elSaludo;
if (5 < laHora && laHora < 12) {
    elSaludo = "Wen0s dí4s";
} else if (11 < laHora && laHora < 19) {
    elSaludo = "Wen4s t4rd3s";
} else {
    elSaludo = "Wen4s n0ch3s";
}
// pregunto la ubicación
var dondeEstas;
if (document.body.classList.contains("nave")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}
//voy a buscar unos datos
var starWars;
function preload() {
    var api = "https://swapi.dev/api/people/?page=3&format=json";
    starWars = loadJSON(api);
}
//tomo el main
var loPrincipal = document.querySelector("main");

function setup() {
    noCanvas();
    createElement("h1", elSaludo).parent(loPrincipal).id("contenido");
    createA("index.html", "index").parent("vinculos");
    createA("page.html", "page").parent("vinculos");
    if (dondeEstas) {
        x = Math. round(random(0,1)*10)
        portada();
    } else {
        pagina();
    }
}

function portada() {
    createSpan(" ¿Sabía usted que " + starWars.results[x].name + " nació el año " + starWars.results[x].birth_year + "?").parent("contenido");
    select("a:nth-child(1)").style("color", "#FFFFFF");
}
function pagina() {
    createSpan(" ¿Sabía usted que " + starWars.results[3].name + " nació el año " + starWars.results[3].birth_year + "?"
        ).parent("contenido");
    select("a:nth-child(2)").style("color", "#FFFFFF");
}