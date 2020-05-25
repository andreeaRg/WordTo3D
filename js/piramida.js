
//Piramida Regulata
var b1 = new THREE.Vector3(10, -15, 20); b1.name = "B";
var b2 = new THREE.Vector3(-10, -15, 20); b2.name = "A";
var b3 = new THREE.Vector3(-10, -15, 0); b3.name = "D";
var b4 = new THREE.Vector3(10, -15, 0); b4.name = "C";
var v = new THREE.Vector3(0, 5, 10); v.name = "V";
var o = new THREE.Vector3(0, -15, 10); o.name = "O";


var piramidaPatr_baza_1_2 = new THREE.Line3(b1, b2);
var piramidaPatr_baza_2_3 = new THREE.Line3(b2, b3);
var piramidaPatr_baza_3_4 = new THREE.Line3(b3, b4);
var piramidaPatr_baza_4_1 = new THREE.Line3(b4, b1);

var piramidaPatr_latLaterala_1_v = new THREE.Line3(b1, v);
var piramidaPatr_latLaterala_2_v = new THREE.Line3(b2, v);
var piramidaPatr_latLaterala_3_v = new THREE.Line3(b3, v);
var piramidaPatr_latLaterala_4_v = new THREE.Line3(b4, v);

function piramidaPatrulatera() {
    sterge();
    perspectivaXoY(0, 25,45);
    addLinieBaza(piramidaPatr_baza_1_2);
    addLinieBaza(piramidaPatr_baza_2_3);
    addLinieBaza(piramidaPatr_baza_3_4);
    addLinieBaza(piramidaPatr_baza_4_1);

    addLinieBaza(piramidaPatr_latLaterala_1_v);
    addLinie(piramidaPatr_latLaterala_2_v);
    addLinie(piramidaPatr_latLaterala_3_v);
    addLinie(piramidaPatr_latLaterala_4_v);

    var loaderTriOarecare = new THREE.FontLoader();
    loaderTriOarecare.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        var color = new THREE.Color(0x006699);

        var matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        var messageA = b2.name;
        var shapesA = font.generateShapes(messageA, 3);
        var geometryA = new THREE.ShapeBufferGeometry(shapesA);
        var textA = new THREE.Mesh(geometryA, matLite);
        textA.position.x = b2.getComponent(0) - 4;
        textA.position.y = b2.getComponent(1);
        textA.position.z = b2.getComponent(2);
        scene.add(textA);

        var messageB = b1.name;
        var shapesB = font.generateShapes(messageB, 3);
        var geometryB = new THREE.ShapeBufferGeometry(shapesB);
        var textB = new THREE.Mesh(geometryB, matLite);
        textB.position.x = b1.getComponent(0) + 2;
        textB.position.y = b1.getComponent(1);
        textB.position.z = b1.getComponent(2);
        scene.add(textB);

        var messageC = b4.name;
        var shapesC = font.generateShapes(messageC, 3);
        var geometryC = new THREE.ShapeBufferGeometry(shapesC);
        var textC = new THREE.Mesh(geometryC, matLite);
        textC.position.x = b4.getComponent(0) + 2;
        textC.position.y = b4.getComponent(1);
        textC.position.z = b4.getComponent(2);
        scene.add(textC);

        var messageD = b3.name;
        var shapesD = font.generateShapes(messageD, 3);
        var geometryD = new THREE.ShapeBufferGeometry(shapesD);
        var textD = new THREE.Mesh(geometryD, matLite);
        textD.position.x = b3.getComponent(0) - 4;
        textD.position.y = b3.getComponent(1);
        textD.position.z = b3.getComponent(2);
        scene.add(textD);

        var messageV = v.name;
        var shapesV = font.generateShapes(messageV, 3);
        var geometryV = new THREE.ShapeBufferGeometry(shapesV);
        var textV = new THREE.Mesh(geometryV, matLite);
        textV.position.x = v.getComponent(0);
        textV.position.y = v.getComponent(1) + 1;
        textV.position.z = v.getComponent(2);
        scene.add(textV);

    });


}