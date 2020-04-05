function calcUnghi(B, A, C) {
    var c = new THREE.Line3(A, B).distance();
    var a = new THREE.Line3(B, C).distance();
    var b = new THREE.Line3(C, A).distance();
    var aUnghiRad = Math.acos((Math.pow(c, 2) + Math.pow(b, 2) - Math.pow(a, 2)) / (2 * c * b));
    var aUnghiDeg = radToDeg(aUnghiRad);
    return aUnghiDeg;
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
    console.log('E1= '+selectedPoints[2].name+' coor= ('+selectedPoints[2].getComponent(0)+','+selectedPoints[2].getComponent(1)+','+selectedPoints[2].getComponent(2)+')');
    console.log('INT= '+selectedPoints[1].name+' coor= ('+selectedPoints[1].getComponent(0)+','+selectedPoints[1].getComponent(1)+','+selectedPoints[1].getComponent(2)+')');
    console.log('E2= '+selectedPoints[0].name+' coor= ('+selectedPoints[0].getComponent(0)+','+selectedPoints[0].getComponent(1)+','+selectedPoints[0].getComponent(2)+')');
    var A = selectedPoints[1];
    var B = selectedPoints[0];
    var C = selectedPoints[2];
    var AB = new THREE.Line3(A, B).distance();
    var AC = new THREE.Line3(A, C).distance();
    var D = linie3.at(AB / (AB + AC));

    return new THREE.Line3(A, D);
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
    // if (selectedPoint == null || selectedLine == null)
    //     return;

    //Pentru desenarea unghiului
    // var geometry = new THREE.CircleGeometry(5, 32,0,);
    // var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    // var circle = new THREE.Mesh(geometry, material);
    // scene.add(circle);

    // addLinieBaza(getBisectoare(selectedPoint, selectedLine));
    addLinieBaza(getBisectoarePct());

}

function getInaltime(pct, linie3) {
    var x = linie3.start.getComponent(0);
    var y = linie3.start.getComponent(1);
    for (i = linie3.start.getComponent(0); i < linie3.end.getComponent(0); i) {

    }
    return new THREE.Line3(pct, linie3.getCenter());
}
