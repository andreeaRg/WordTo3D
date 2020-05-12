
var matUnghi = new THREE.MeshBasicMaterial({ color: 0xb65454,
                                             side: THREE.DoubleSide,
                                             opacity: 0.3,
                                             transparent: true });
var unghiDesen;

function bisectoareTeorie() {
    triunghiOarecare();
    var E1 = t2;
    var INT = t1;
    var E2 = t3;
    var IntE1 = new THREE.Line3(INT, E1).distance();
    var IntE2 = new THREE.Line3(INT, E2).distance();
    var E1E2 = new THREE.Line3(E1, E2);
    var piciorBis = E1E2.at(IntE1 / (IntE1 + IntE2));
    addLinieBaza( new THREE.Line3(INT, piciorBis) ) ;
    console.log(calcUnghi(t2,t3,t1)); //38.659 , 180-(38.659+90)
}
function bisectoareTeorie2(t2,t1,t3) {
    var E1 = t2;
    var INT = t1;
    var E2 = t3;
    var IntE1 = new THREE.Line3(INT, E1).distance();
    var IntE2 = new THREE.Line3(INT, E2).distance();
    var E1E2 = new THREE.Line3(E1, E2);
    var piciorBis = E1E2.at(IntE1 / (IntE1 + IntE2));
    addLinieBaza( new THREE.Line3(INT, piciorBis) ) ;
}
function unghiExterior(){
    triunghiOarecare();
    var pctExt = new THREE.Vector3(30, 0, 0); pctExt.name = "D";
    var t_linieUnghiExt = new THREE.Line3(t3, pctExt);
    addLinieBaza(t_linieUnghiExt);
    desenUnghiStangaJos(t2,t3,pctExt);
}

function bisExterior(){
    triunghiOarecare();
    var pctExt = new THREE.Vector3(30, 0, 0); pctExt.name = "D";
    var t_linieUnghiExt = new THREE.Line3(t3, pctExt);
    addLinieBaza(t_linieUnghiExt);
    bisectoareTeorie2(t2,t3,pctExt);
    // desenUnghiStangaJos(t2,t3,pctExt);
}

function bisectoareleIntExt(){
    var unghiGeo = new THREE.PlaneGeometry(25, 25);
    var unghiExtpe2 = 180-(19.329+90);
    var unghiExtpe2RAD = degToRad(unghiExtpe2);
    unghiGeo.rotateY(unghiExtpe2RAD);
// console.log("mod23");
    var unghiMat = new THREE.MeshBasicMaterial({
        color: 0x000000,
        side: THREE.DoubleSide,
        opacity: 0.3,
        transparent: true
    });
    var unghiDrept = new THREE.Mesh(unghiGeo, unghiMat);
    // unghiDrept.position.x = t3.getComponent(0);
    // unghiDrept.position.y = t3.getComponent(1);
    // unghiDrept.position.z = t3.getComponent(2);
    scene.add(unghiDrept);

    bisExterior();
    bisectoareTeorie2(t2,t3,t1);
}

function centrulCerculuiInscris() {
    triunghiOarecare();
    bisectoareTeorie2(t2,t1,t3);
    bisectoareTeorie2(t1,t2,t3);
    bisectoareTeorie2(t2,t3,t1);
}
function medianaTeorie() {
    triunghiOarecare();
    addLinieBaza( new THREE.Line3( t1, t_linie2_3.getCenter() ) );
}
function centrulDeGreutate() {
    triunghiOarecare();
    addLinieBaza( new THREE.Line3( t1, t_linie2_3.getCenter() ) );
    addLinieBaza( new THREE.Line3( t2, t_linie3_1.getCenter() ) );
    addLinieBaza( new THREE.Line3( t3, t_linie1_2.getCenter() ) );
}

function calcUnghi(B, A, C) {
    var c = new THREE.Line3(A, B).distance();
    var a = new THREE.Line3(B, C).distance();
    var b = new THREE.Line3(C, A).distance();
    var aUnghiRad = Math.acos((Math.pow(c, 2) + Math.pow(b, 2) - Math.pow(a, 2)) / (2 * c * b));
    var aUnghiDeg = radToDeg(aUnghiRad);
    return aUnghiDeg;
}

function calcUnghiRadian(B, A, C) {
    var c = new THREE.Line3(A, B).distance();
    var a = new THREE.Line3(B, C).distance();
    var b = new THREE.Line3(C, A).distance();
    var aUnghiRad = Math.acos((Math.pow(c, 2) + Math.pow(b, 2) - Math.pow(a, 2)) / (2 * c * b));
    return aUnghiRad;
}

function getMediana(pct, linie3) {
    return new THREE.Line3(pct, linie3.getCenter());
}

function drawMediana() {
    if (selectedPoint == null || selectedLine == null)
        return;

    addLinieBaza(getMediana(selectedPoint, selectedLine));
}

function getBisectoarePct() {
    var E1 = selectedPoints[0];
    var INT = selectedPoints[1];
    var E2 = selectedPoints[2];
    var IntE1 = new THREE.Line3(INT, E1).distance();
    var IntE2 = new THREE.Line3(INT, E2).distance();
    var E1E2 = new THREE.Line3(E1, E2);
    var piciorBis = E1E2.at(IntE1 / (IntE1 + IntE2));

    return new THREE.Line3(INT, piciorBis);
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
    if (selectedPoints[0] == null || selectedPoints[1] == null|| selectedPoints[2] == null)
        return;

    addLinieBaza(getBisectoarePct()); // addLinieBaza(getBisectoare(selectedPoint, selectedLine));
}

function desenUnghiDreaptaJos(E1,INT,E2){
    var unghi = calcUnghiRadian(E1,INT,E2);
    var geometry = new THREE.CircleGeometry(5, 32,Math.PI - unghi,unghi);
    unghiDesen = new THREE.Mesh(geometry, matUnghi);
    unghiDesen.position.x = INT.getComponent(0);
    unghiDesen.position.y = INT.getComponent(1);
    unghiDesen.position.z = INT.getComponent(2);
    scene.add(unghiDesen);
}

function desenUnghiStangaJos(E1,INT,E2){
    var unghi = calcUnghiRadian(E1,INT,E2);
    var geometry = new THREE.CircleGeometry(5, 32,0,unghi);
    unghiDesen = new THREE.Mesh(geometry, matUnghi);
    unghiDesen.position.x = INT.getComponent(0);
    unghiDesen.position.y = INT.getComponent(1);
    unghiDesen.position.z = INT.getComponent(2);
    scene.add(unghiDesen);
}

function desenUnghiSus(E1,INT,E2){
    var unghi = calcUnghiRadian(E1,INT,E2);
    var unghiJos = calcUnghiRadian(INT,E1,E2);
    var geometryUnghi = new THREE.CircleGeometry(5, 32, Math.PI + unghiJos  ,unghi);

    unghiDesen = new THREE.Mesh(geometryUnghi, matUnghi);
    unghiDesen.position.x = INT.getComponent(0);
    unghiDesen.position.y = INT.getComponent(1);
    unghiDesen.position.z = INT.getComponent(2);
    scene.add(unghiDesen);
}

function getInaltime(pct, linie3) {
    var x = linie3.start.getComponent(0);
    var y = linie3.start.getComponent(1);
    for (i = linie3.start.getComponent(0); i < linie3.end.getComponent(0); i) {

    }
    return new THREE.Line3(pct, linie3.getCenter());
}
