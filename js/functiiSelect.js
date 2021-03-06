

var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;

var linesMap = new Map();
var linesMap3To2 = new Map();

var clickLine = '';
var clickPoint = '';
var selectedPoint;       // puncte nu sfere
var selectedLine;
var selectedLines = [];     // line 2d
var selectedPoints = []; // puncte nu sfere
var selectedSphere;

var nrLines = 0;
var nrPoints = 0;


function clearSelected() {
    selectedPoint = null;
    selectedLine = null;
    selectedPoints = [];
}

function writeSelected() {

    let selPname = selectedPoint == null ? '' : selectedPoint.name;
    let selLname = selectedLine == null ? '' : selectedLine.name;

    document.getElementById("selL").textContent = selLname;
    document.getElementById("selL2").textContent = selLname;

    document.getElementById("selP").textContent = selPname
    document.getElementById("selP2").textContent = selPname;

    document.getElementById("selPext").textContent = selPname;
    document.getElementById("selLext").textContent = selLname;
    let pcts = '';
    if (selectedPoints.length > 0) {
        for (let p of selectedPoints) {
            pcts += p.name + ',';
        }
    }
    document.getElementById("selPointsExt").textContent = pcts;
}

function linMij(id){
    toggleContainer(id);
    selectL(2, true);
    showDetails(id);
}

function mediana(id){
    toggleContainer(id);
    selectL(1, false);
    selectP(1, false);
    showDetails(id);
}

function selectP(nP, withoutLines) {
    nrPoints = nP;
    if (clickPoint != 'select') {
        clickPoint = 'select';
    }

    else if (clickPoint == 'select')
        clearSelectPoint();

    if(withoutLines)
        clearSelectL
}

function selectL(nL, withoutPoints) {
    nrLines = nL;
    if (clickLine != 'select') {
        clickLine = 'select';
    }
    else if (clickLine == 'select')
        clearSelectL()

    if(withoutPoints)
        clearSelectPoint();
}

function clearSelectPoint() {
    if(selectedSphere)
        selectedSphere.material = matPointOff;
    selectedSphere = null;
    selectedPoint = null;
    selectedPoints = [];
    clickPoint = '';
}

function clearSelectL() {
    if(selectedLine)
        linesMap.forEach( (v,k) => {if(v == selectedLine ) k.material = materialOff ;})
    selectedLine = null;
    selectedLines = [];
    clickLine = '';
}

function clickP(pct) {
    if (clickPoint == 'select') {
        //for single > to be removed
        selectedPoint = pct;

        //for multiple points
       // daca sunt mai multe decat trebuuie, scoantem pe ultimul
        while(selectedPoints.length >= nrPoints)   
            selectedPoints.pop()
        if (selectedPoints.indexOf(pct) == -1) // daca pct nu exista deja in  lista, il adaugam
            selectedPoints.unshift(pct);
    }
}

function clickL(line2D) {
    if (clickLine == "select") {
        if(selectedLine)
            linesMap.forEach( (valueIs3D,keyIs2D) => {if(valueIs3D == selectedLine ) keyIs2D.material = materialOff ;})
        selectedLine = linesMap.get(line2D);

        // pt mai multelinii
        while (selectedLines.length >= nrLines) // daca sunt mai multe decat trebuuie, scoantem pe ultimul
            selectedLines.pop()
        if (selectedLines.indexOf(line2D) == -1) // daca pct nu exista deja in  lista, il adaugam
            selectedLines.unshift(line2D);        
    }

    else if (clickLine == 'del')
        scene.remove(line2D);
}

function clickSfera(point) {
    if (clickPoint == 'select'){
        if(selectedSphere)
            selectedSphere.material = matPointOff;
        selectedSphere = point;
    }
}

function delL() {
    if (clickLine != 'del') {
        clickLine = 'del';
        document.getElementById("delL").style.borderStyle = "inset";
    }
    else if (clickLine == 'del') {
        clickLine = '';
        document.getElementById("delL").style.borderStyle = "outset";
    }
}

function delP() {
    if (clickPoint != 'del') {
        clickPoint = 'del';
        document.getElementById("delP").style.borderStyle = "inset";
    }
    else if (clickPoint == 'del') {
        clickPoint = '';
        document.getElementById("delP").style.borderStyle = "outset";
    }
}