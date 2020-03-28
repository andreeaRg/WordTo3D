//TRINGHI OARECARE
var p1 = new THREE.Vector3(-15, 0, 0); p1.name = "p1";
var p2 =  new THREE.Vector3(0, 30, 0); p1.name = "p2";
var p3 = new THREE.Vector3(40, 0, 0); p1.name = "p3";

//TRIUNGHI ISOSCEL
var p4 = new THREE.Vector3(-20, 0, 0); p1.name = "p4";
var p5 =  new THREE.Vector3(0, 20, 0); p1.nsame = "p5";
var p6 = new THREE.Vector3(20, 0, 0); p1.name = "p6";

//TRIUNGHI DREPTUNGHIC
var p7 = new THREE.Vector3(0, 0, 0); p1.name = "p7";
var p8 =  new THREE.Vector3(0, 20, 0); p1.name = "p8";
var p9 = new THREE.Vector3(35, 0, 0); p1.name = "p9";

//TRIUNGHI ECHIATERL
var p10 = new THREE.Vector3(-20, 0, 0); p1.name = "p10";
var p11 =  new THREE.Vector3(0, 20, 0); p1.name = "p11";
var p12 = new THREE.Vector3(20, 0, 0); p1.name = "p12";

function addPoint(pct) {
    console.log(scene.getObjectByName(pct.name));
    if (!scene.getObjectByName(pct.name))
        return;
    const geometry1 = new THREE.SphereGeometry(10, 10, 10);
    const point = new THREE.Mesh(geometry1, matPoint);
    point.position.x = pct.getComponent (0);
    point.position.y = pct.getComponent (1);
    point.position.z = pct.getComponent (2);
    scene.add(point);
    domEvents.addEventListener(point, 'mouseover', event => {
        point.scale.set(5, 5, 5);
    });
    domEvents.addEventListener(point, 'click', event => { clickP(pct); });
}