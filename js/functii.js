const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
controls = new THREE.OrbitControls(camera, renderer.domElement);

let domEvents = new THREEx.DomEvents(camera, renderer.domElement);
// var scene3d = document.getElementById("scene3d");
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;
//TRINGHI OARECARE
var p1 = new THREE.Vector3(-15, 0, 0); p1.name = "p1";
var p2 = new THREE.Vector3(0, 30, 0); p2.name = "p2";
var p3 = new THREE.Vector3(40, 0, 0); p3.name = "p3";

//TRIUNGHI ISOSCEL
var p4 = new THREE.Vector3(-20, 0, 0); p4.name = "p4";
var p5 = new THREE.Vector3(0, 20, 0); p5.name = "p5";
var p6 = new THREE.Vector3(20, 0, 0); p6.name = "p6";

//TRIUNGHI DREPTUNGHIC
var p7 = new THREE.Vector3(0, 0, 0); p7.name = "p7";
var p8 = new THREE.Vector3(0, 20, 0); p8.name = "p8";
var p9 = new THREE.Vector3(35, 0, 0); p9.name = "p9";

//TRIUNGHI ECHIATERL
var p10 = new THREE.Vector3(-20, 0, 0); p10.name = "p10";
var p11 = new THREE.Vector3(0, 20, 0); p11.name = "p11";
var p12 = new THREE.Vector3(20, 0, 0); p12.name = "p12";

//LINII
function nameLine(line){
    line.name = line.start.name + line.end.name;
}


var linie1 = new THREE.Line3(p1, p2);
var d1 = linie1.distance();
var linie2 = new THREE.Line3(p2, p3);
var d2 = linie2.distance();
var linie3 = new THREE.Line3(p3, p1);
var d3 = linie3.distance();
var rap = d1 / d3;
var vv = new THREE.Vector3();
vv = linie3.at(rap);
var unghiR = Math.acos((Math.pow(d1, 2) + Math.pow(d3, 2) - Math.pow(d2, 2)) / (2 * d1 * d3));
var unghiD = radToDeg(unghiR);


// console.log("unghiul=",unghiD);
// console.log("rap =",rap);
// console.log("x1=", vv.getComponent(0));
// console.log("y1=", vv.getComponent(1));
// console.log("z1=", vv.getComponent(2));

var linie4 = new THREE.Line3(p4, p5); 
var linie5 = new THREE.Line3(p5, p6); 
var linie6 = new THREE.Line3(p6, p4); 

var linie7 = new THREE.Line3(p7, p8); 
var linie8 = new THREE.Line3(p8, p9); 
var linie9 = new THREE.Line3(p9, p7); 

var linie10 = new THREE.Line3(p10, p11); 
var linie11 = new THREE.Line3(p11, p12);
var linie12 = new THREE.Line3(p12, p10);

var geometry2 = new THREE.Geometry();
geometry2.vertices.push(new THREE.Vector3(-20, 0, 0));
geometry2.vertices.push(new THREE.Vector3(20, 0, 0));

const matLinie = new THREE.LineBasicMaterial({ color: 0x0000ff });
const matPoint = new THREE.MeshNormalMaterial({ wireframe: true });
var line2 = new THREE.Line(geometry2, matLinie);

var linesMap = new Map();

var clickLine = '';
var clickPoint = '';
var selectedPoint;
var selectedLine;

function init() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    window.addEventListener('resize', function () {
        var width = window.innerWidth;
        var height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });
    camera.position.z = 40;
    controls.minDistance = 1;
    controls.maxDistance = 1000;
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.setSize(600, 400);
    renderer.render(scene, camera);
}


function radToDeg(radians) {

    return radians * rad2deg;

}

function addPoint(pct) {
    // console.log("Punct:"+scene+", "+pct+", "+scene.getObjectByName(pct));
    // if (!scene.getObjectByName(pct.name))
    //     return;

    const geometry1 = new THREE.SphereGeometry(1, 1, 1);
    const point = new THREE.Mesh(geometry1, matPoint);
    point.position.x = pct.getComponent(0);
    point.position.y = pct.getComponent(1);
    point.position.z = pct.getComponent(2);
    point.name = "Sfera:"+pct.name;

    scene.add(point);

    domEvents.addEventListener(point, 'mouseover', event => {
        point.scale.set(3, 3, 3);
    });
    domEvents.addEventListener(point, 'mouseout', event => {
        point.scale.set(1, 1, 1);
    });
    domEvents.addEventListener(point, 'click', event => { clickP(pct); });
}

function linie(x1, y1, z1, x2, y2, z2) {
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(x1, y1, z1));//-20,0,0
    geometry.vertices.push(new THREE.Vector3(x2, y2, z2));// 0, 20, 0

    var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    var line = new THREE.Line(geometry, material);
    return line;
}

function linie3d(x1, y1, z1, x2, y2, z2) {
    var vect1 = new THREE.Vector3(x1, y1, z1);
    var vect2 = new THREE.Vector3(x2, y2, z2);
    var linee = new THREE.Line3(vect1, vect2);
    return linee;
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
    // if (clickLine != 'mediana')
    //     clickLine = 'mediana';
    // else if (clickLine == 'mediana')
    //     clickLine = '';
    if(selectedPoint == null || selectedLine ==null)
        return;

    addLinieBaza(getMediana(selectedPoint, selectedLine));
}

function getBisectoare(pct, linie3) {
    var A  = pct;
    var B = linie3.start;
    var C = linie3.end;
    var AB = new THREE.Line3(pct, B).distance();
    var AC = new THREE.Line3(pct, C).distance();
    var D = linie3.at(AB / (AB+AC));

    return new THREE.Line3(A, D);
}

function drawBisectoare() {
    if(selectedPoint == null || selectedLine ==null)
        return;

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
    // addPoint(line1.start);
    // addPoint(line2.start);
    // addPoint(line3.start);
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

function del() {
    if (clickLine != 'del')
        clickLine = 'del';
    else if (clickLine == 'del')
        clickLine = '';
}
function bisectoare() {
    if (clickLine != 'bisectoare')
        clickLine = 'bisectoare';        
    else if (clickLine == 'bisectoare')
        clickLine = '';
}

function selectP(){
    console.log(clickPoint);
    if (clickPoint != 'select'){
        clickPoint = 'select';
        document.getElementById("clkP").style.borderStyle = "inset";
    }
        
    else if (clickPoint == 'select'){
        clickPoint = '';
        document.getElementById("clkP").style.borderStyle = "outset";
    }
        
}

function selectL(){
    console.log(clickLine);
    if (clickLine != 'select'){
        clickLine = 'select';
        document.getElementById("clkL").style.borderStyle = "inset";
    }
    else if (clickLine == 'select'){
        clickLine = '';
        document.getElementById("clkL").style.borderStyle = "outset";
    }

}

function clickL(line2D) {
    console.log(clickLine);

    if (clickLine == "select"){
        selectedLine = linesMap.get(line2D);       
        document.getElementById("selL").textContent = selectedLine.name;
    }
    if (clickLine == 'del')
        scene.remove(line2D);
}

function clickP(pct) {
    console.log(clickPoint);
    if (clickPoint == 'select'){
        selectedPoint = pct;
        document.getElementById("selP").textContent = pct.name;
    }
}

init();
animate();