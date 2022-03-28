var elEncabezado = document.querySelector("header");
var elColor, princesas;

function preload() {
    princesas = loadJSON("https://raw.githubusercontent.com/AntoCvP/Jason/main/datosoriginal.json");
}

function setup() {
    //hago algo con lo que precargué
    var lasOpciones = [];
    Object.values(princesas).forEach((p) => {
        if(p.name){
            lasOpciones.push(p.img)
        }
    });


    console.log(lasOpciones);
    var descarga = select("#descarga");
    descarga.mousePressed(artemania);  
    var descarga = select("#borra");
    descarga.mousePressed(borrador);
    createElement("h1", "¿Podrías dibujar a esta Princesa?").parent(elEncabezado).id("title");
    createImg(random(lasOpciones),'...').addClass('chiqui');
    createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);
    background("#ffffff");
    elColor = createColorPicker("#555555").parent("controles");
    elSlider = createSlider(1, 5, 3).parent("controles");
}

function draw() {
    stroke(elColor.color());
    strokeWeight(elSlider.value());
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function artemania() {
    saveCanvas("mi_princesa_artistica", "jpg");
}

function borrador() {
    background("#eceff1");
}