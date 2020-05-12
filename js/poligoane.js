var r=12;

// pentagon
var pentagon = [];

for (i = 0; i < 5; i++) {
   pentagon.push( r * Math.cos(2 * Math.PI * i / 5) );
   pentagon.push( r * Math.sin(2 * Math.PI * i / 5) +15 );
  }
var penta1 = new THREE.Vector3(pentagon[0], pentagon[1], 0); penta1.name = "A";
var penta2 = new THREE.Vector3(pentagon[2], pentagon[3], 0); penta2.name = "B";
var penta3 = new THREE.Vector3(pentagon[4], pentagon[5], 0); penta3.name = "C";
var penta4 = new THREE.Vector3(pentagon[6], pentagon[7], 0); penta4.name = "D";
var penta5 = new THREE.Vector3(pentagon[8], pentagon[9], 0); penta5.name = "E";

var penta_linie1_2 = new THREE.Line3(penta1, penta2);
var penta_linie2_3 = new THREE.Line3(penta2, penta3);
var penta_linie3_4 = new THREE.Line3(penta3, penta4);
var penta_linie4_5 = new THREE.Line3(penta4, penta5);
var penta_linie5_1 = new THREE.Line3(penta5, penta1);

function pentagonf() {
    sterge();
    addLinieBaza(penta_linie1_2);
    addLinieBaza(penta_linie2_3);
    addLinieBaza(penta_linie3_4);
    addLinieBaza(penta_linie4_5);
    addLinieBaza(penta_linie5_1);
}

// hexagon
var hexagon = [];

for (i = 0; i < 6; i++) {
    hexagon.push( r * Math.cos(2 * Math.PI * i / 6) );
    hexagon.push( r * Math.sin(2 * Math.PI * i / 6) +15) ;
  }
var hexa1 = new THREE.Vector3(hexagon[0], hexagon[1], 0); hexa1.name = "A";
var hexa2 = new THREE.Vector3(hexagon[2], hexagon[3], 0); hexa2.name = "B";
var hexa3 = new THREE.Vector3(hexagon[4], hexagon[5], 0); hexa3.name = "C";
var hexa4 = new THREE.Vector3(hexagon[6], hexagon[7], 0); hexa4.name = "D";
var hexa5 = new THREE.Vector3(hexagon[8], hexagon[9], 0); hexa5.name = "E";
var hexa6 = new THREE.Vector3(hexagon[10], hexagon[11], 0); hexa6.name = "F";

var hexa_linie1_2 = new THREE.Line3(hexa1, hexa2);
var hexa_linie2_3 = new THREE.Line3(hexa2, hexa3);
var hexa_linie3_4 = new THREE.Line3(hexa3, hexa4);
var hexa_linie4_5 = new THREE.Line3(hexa4, hexa5);
var hexa_linie5_6 = new THREE.Line3(hexa5, hexa6);
var hexa_linie6_1 = new THREE.Line3(hexa6, hexa1);

function hexagonf() {
    sterge();
    addLinieBaza(hexa_linie1_2);
    addLinieBaza(hexa_linie2_3);
    addLinieBaza(hexa_linie3_4);
    addLinieBaza(hexa_linie4_5);
    addLinieBaza(hexa_linie5_6);
    addLinieBaza(hexa_linie6_1);
}

// heptagon
var heptagon = [];

for (i = 0; i < 7; i++) {
    heptagon.push( r * Math.cos(2 * Math.PI * i / 7) );
    heptagon.push( r * Math.sin(2 * Math.PI * i / 7) +15) ;
  }
var hepta1 = new THREE.Vector3(heptagon[0], heptagon[1], 0); hepta1.name = "A";
var hepta2 = new THREE.Vector3(heptagon[2], heptagon[3], 0); hepta2.name = "B";
var hepta3 = new THREE.Vector3(heptagon[4], heptagon[5], 0); hepta3.name = "C";
var hepta4 = new THREE.Vector3(heptagon[6], heptagon[7], 0); hepta4.name = "D";
var hepta5 = new THREE.Vector3(heptagon[8], heptagon[9], 0); hepta5.name = "E";
var hepta6 = new THREE.Vector3(heptagon[10], heptagon[11], 0); hepta6.name = "F";
var hepta7 = new THREE.Vector3(heptagon[12], heptagon[13], 0); hepta7.name = "P";

var hepta_linie1_2 = new THREE.Line3(hepta1, hepta2);
var hepta_linie2_3 = new THREE.Line3(hepta2, hepta3);
var hepta_linie3_4 = new THREE.Line3(hepta3, hepta4);
var hepta_linie4_5 = new THREE.Line3(hepta4, hepta5);
var hepta_linie5_6 = new THREE.Line3(hepta5, hepta6);
var hepta_linie6_7 = new THREE.Line3(hepta6, hepta7);
var hepta_linie7_1 = new THREE.Line3(hepta7, hepta1);

function heptagonf() {
    sterge();
    addLinieBaza(hepta_linie1_2);
    addLinieBaza(hepta_linie2_3);
    addLinieBaza(hepta_linie3_4);
    addLinieBaza(hepta_linie4_5);
    addLinieBaza(hepta_linie5_6);
    addLinieBaza(hepta_linie6_7);
    addLinieBaza(hepta_linie7_1);
}
// octagon
var octagon = [];

for (i = 0; i < 8; i++) {
    octagon.push( r * Math.cos(2 * Math.PI * i / 8) );
    octagon.push( r * Math.sin(2 * Math.PI * i / 8) +15) ;
  }
var octa1 = new THREE.Vector3(octagon[0], octagon[1], 0); octa1.name = "A";
var octa2 = new THREE.Vector3(octagon[2], octagon[3], 0); octa2.name = "B";
var octa3 = new THREE.Vector3(octagon[4], octagon[5], 0); octa3.name = "C";
var octa4 = new THREE.Vector3(octagon[6], octagon[7], 0); octa4.name = "D";
var octa5 = new THREE.Vector3(octagon[8], octagon[9], 0); octa5.name = "E";
var octa6 = new THREE.Vector3(octagon[10], octagon[11], 0); octa6.name = "F";
var octa7 = new THREE.Vector3(octagon[12], octagon[13], 0); octa7.name = "P";
var octa8 = new THREE.Vector3(octagon[14], octagon[15], 0); octa8.name = "Q";

var octa_linie1_2 = new THREE.Line3(octa1, octa2);
var octa_linie2_3 = new THREE.Line3(octa2, octa3);
var octa_linie3_4 = new THREE.Line3(octa3, octa4);
var octa_linie4_5 = new THREE.Line3(octa4, octa5);
var octa_linie5_6 = new THREE.Line3(octa5, octa6);
var octa_linie6_7 = new THREE.Line3(octa6, octa7);
var octa_linie7_8 = new THREE.Line3(octa7, octa8);
var octa_linie8_1 = new THREE.Line3(octa8, octa1);

function octogonf() {
    sterge();
    addLinieBaza(octa_linie1_2);
    addLinieBaza(octa_linie2_3);
    addLinieBaza(octa_linie3_4);
    addLinieBaza(octa_linie4_5);
    addLinieBaza(octa_linie5_6);
    addLinieBaza(octa_linie6_7);
    addLinieBaza(octa_linie7_8);
    addLinieBaza(octa_linie8_1);
}