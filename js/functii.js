var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;

const matLinie = new THREE.LineBasicMaterial({ color: 0x0000ff, linewidth: 10 });
const matPoint = new THREE.MeshNormalMaterial({ wireframe: true });

var linesMap = new Map();

var clickLine = '';
var clickPoint = '';
var selectedPoint;
var selectedLine;
var selectedPoints = [];


// When the user scrolls down 20px from the top of the document, 
// slide down the navbar
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}

function clearSelected() {
    selectedPoint = null;
    selectedLine = null;
    selectedPoints = [];
}

//FUNCTIA BUTON
function medDropDown() {
    clearSelected();
    writeSelected();
    document.getElementById("medDropdown").classList.toggle("showMed");
}
function bisDropDown() {
    clearSelected();
    writeSelected();
    document.getElementById("bisDropdown").classList.toggle("showBis");
}

// Close the dropdown if the user clicks outside of it fct1
window.onclick = function (event) {
    if (!event.target.matches('.dropbtnMed')) {
        var dropdowns = document.getElementsByClassName("dropdown-contentMed");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('showMed')) {
                if (i % 2) {
                    openDropdown.classList.remove('showMed');
                }
            }
        }
    }
}
// // Close the dropdown if the user clicks outside of it fct2
window.onclick = function (event) {
    if (!event.target.matches('.dropbtnBis')) {
        var dropdowns = document.getElementsByClassName("dropdown-contentBis");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('showBis')) {
                if (i % 2) {
                    openDropdown.classList.remove('showBis');
                }
            }
        }
    }
}
function radToDeg(radians) {
    return radians * rad2deg;
}

function calcUnghi(B, A, C) {
    var c = new THREE.Line3(A, B).distance();
    var a = new THREE.Line3(B, C).distance();
    var b = new THREE.Line3(C, A).distance();
    var aUnghiRad = Math.acos((Math.pow(c, 2) + Math.pow(b, 2) - Math.pow(a, 2)) / (2 * c * b));
    var aUnghiDeg = radToDeg(aUnghiRad);
    return aUnghiDeg;
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

function selectL() {
    if (clickLine != 'select') {
        clickLine = 'select';
        document.getElementById("clkL").style.borderStyle = "inset";
        document.getElementById("clkL2").style.borderStyle = "inset";
        clearSelectPoint()
    }
    else if (clickLine == 'select')
        clearSelectL()

}

function clearSelectL() {
    clickLine = '';
    document.getElementById("clkL").style.borderStyle = "outset";
    document.getElementById("clkL2").style.borderStyle = "outset";
}

function clickL(line2D) {

    if (clickLine == "select") {
        selectedLine = linesMap.get(line2D);
        writeSelected();
    }
    else if (clickLine == 'del')
        scene.remove(line2D);
}

function clickSfera(point) {

    if (clickPoint == 'del') {
        // selectedPoint = point;
        scene.remove(point);
    }
}
function selectP() {
    if (clickPoint != 'select') {
        clickPoint = 'select';
        document.getElementById("clkP").style.borderStyle = "inset";
        document.getElementById("clkP2").style.borderStyle = "inset";
        clearSelectL()
        console.log(matLinie)
    }

    else if (clickPoint == 'select')
        clearSelectPoint();
}

function clearSelectPoint() {
    clickPoint = '';
    document.getElementById("clkP").style.borderStyle = "outset";
    document.getElementById("clkP2").style.borderStyle = "outset";
}

function clickP(pct) {
    if (clickPoint == 'select') {
        selectedPoint = pct;
        if (selectedPoints.length == 3)
            selectedPoints.pop()
        if (selectedPoints.indexOf(pct) == -1)
            selectedPoints.unshift(pct);

        writeSelected();
    }
    // else if (clickPoint == 'del'){
    //     selectedPoint = pct;
    //     scene.remove(pct);
    // }
}

function addPoint(pct) {
    // console.log("Punct:"+scene+", "+pct+", "+scene.getObjectByName(pct));
    // if (!scene.getObjectByName(pct.name))
    //     return;

    const geometry1 = new THREE.SphereGeometry(16, 16, 16);
    const point = new THREE.Mesh(geometry1, matPoint);
    let scala = 0.1;
    let scalaBig = 0.3;

    point.scale.set(scala, scala, scala);
    point.position.x = pct.getComponent(0);
    point.position.y = pct.getComponent(1);
    point.position.z = pct.getComponent(2);
    point.name = "Sfera:" + pct.name;

    scene.add(point);

    domEvents.addEventListener(point, 'mouseover', event => {
        point.scale.set(scalaBig, scalaBig, scalaBig);
    });
    domEvents.addEventListener(point, 'mouseout', event => {
        point.scale.set(scala, scala, scala);
    });
    domEvents.addEventListener(point, 'click', event => {
        clickSfera(point);
        clickP(pct)
    });
}

function nameLine(line) {
    line.name = line.start.name + line.end.name;
}

function toLine(line3) {
    var geometry = new THREE.Geometry();
    geometry.vertices.push(line3.start);
    geometry.vertices.push(line3.end);

    return new THREE.Line(
        geometry,
        matLinie
    );
}

function addLinieBaza(line3) {
    nameLine(line3);
    let l = toLine(line3);
    linesMap.set(l, line3);
    addPoint(line3.end);
    scene.add(l);
    domEvents.addEventListener(l, 'click', event => { clickL(l); });
    domEvents.addEventListener(l, 'mouseover', event => {
        l.material = new THREE.LineBasicMaterial({ color: 0x550055 });
    });
    domEvents.addEventListener(l, 'mouseout', event => {
        l.material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    });

}

function addLinie(line3) {
    let l = toLine(line3);
    linesMap.set(l, line3);
    addPoint(line3.start);
    addPoint(line3.end);
    scene.add(l);

    domEvents.addEventListener(l, 'click', event => { clickL(l); });
}

function getMediana(pct, linie3) {
    return new THREE.Line3(pct, linie3.getCenter());
}

function drawMediana() {
    if (selectedPoint == null || selectedLine == null)
        return;

    addLinieBaza(getMediana(selectedPoint, selectedLine));
}

function getBisectoare(pct, linie3) {
    var A = pct;
    var B = linie3.start;
    var C = linie3.end;
    var AB = new THREE.Line3(pct, B).distance();
    var AC = new THREE.Line3(pct, C).distance();
    var D = linie3.at(AB / (AB + AC));

    return new THREE.Line3(A, D);
}

function drawBisectoare() {
    if (selectedPoint == null || selectedLine == null)
        return;
    //Pentru desenarea unghiului
    // var geometry = new THREE.CircleGeometry(5, 32,0,);
    // var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    // var circle = new THREE.Mesh(geometry, material);
    // scene.add(circle);

    addLinieBaza(getBisectoare(selectedPoint, selectedLine));
}

function getInaltime(pct, linie3) {
    var x = linie3.start.getComponent(0);
    var y = linie3.start.getComponent(1);
    for (i = linie3.start.getComponent(0); i < linie3.end.getComponent(0); i) {

    }
    return new THREE.Line3(pct, linie3.getCenter());
}

function triunghiOarecare() {
    sterge();
    addLinieBaza(linie1);
    addLinieBaza(linie2);
    addLinieBaza(linie3);
}

function triunghiEchilateral() {
    sterge();
    addLinieBaza(linie4);
    addLinieBaza(linie5);
    addLinieBaza(linie6);
}

function triunghiDreptunghic() {
    sterge();
    addLinieBaza(linie7);
    addLinieBaza(linie8);
    addLinieBaza(linie9);
}

function triunghiIsoscel() {
    sterge();
    addLinieBaza(linie10);
    addLinieBaza(linie11);
    addLinieBaza(linie12);
}

function sterge() {
    scene = new THREE.Scene();
}

function undo() {
    scene.remove(scene.children[scene.children.length - 1]);
}

function refresP() {
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 40;
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