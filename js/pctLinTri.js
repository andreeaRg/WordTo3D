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
 
var linie1 = new THREE.Line3(p1, p2);
var linie2 = new THREE.Line3(p2, p3);
var linie3 = new THREE.Line3(p3, p1);

var linie4 = new THREE.Line3(p4, p5);
var linie5 = new THREE.Line3(p5, p6);
var linie6 = new THREE.Line3(p6, p4);

var linie7 = new THREE.Line3(p7, p8);
var linie8 = new THREE.Line3(p8, p9);
var linie9 = new THREE.Line3(p9, p7);

var linie10 = new THREE.Line3(p10, p11);
var linie11 = new THREE.Line3(p11, p12);
var linie12 = new THREE.Line3(p12, p10);