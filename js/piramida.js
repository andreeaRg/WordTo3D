
//Tetraedru
let pctTetraedru_1 = new THREE.Vector3(-15, -15, -15); pctTetraedru_1.name = "B";
let pctTetraedru_2 = new THREE.Vector3(-5, -15, 5); pctTetraedru_2.name = "A";
let pctTetraedru_3 = new THREE.Vector3(20, -15, -15); pctTetraedru_3.name = "C";
let pctTetraedru_vf = new THREE.Vector3(0, 5, 10); pctTetraedru_vf.name = "V";

let tetraedru_baza_1_2 = new THREE.Line3(pctTetraedru_1, pctTetraedru_2);
let tetraedru_baza_2_3 = new THREE.Line3(pctTetraedru_2, pctTetraedru_3);
let tetraedru_baza_3_1 = new THREE.Line3(pctTetraedru_3, pctTetraedru_1);

let tetraedru_latLaterala_1_v = new THREE.Line3(pctTetraedru_1, pctTetraedru_vf);
let tetraedru_latLaterala_2_v = new THREE.Line3(pctTetraedru_2, pctTetraedru_vf);
let tetraedru_latLaterala_3_v = new THREE.Line3(pctTetraedru_3, pctTetraedru_vf);

function tetraedru() {
    sterge();
    perspectivaXoY(17, -5, 40);
    addLinieBaza(tetraedru_baza_1_2);
    addLinieBaza(tetraedru_baza_2_3);
    addLinieBaza(tetraedru_baza_3_1);

    addLinieBaza(tetraedru_latLaterala_1_v);
    addLinie(tetraedru_latLaterala_2_v);
    addLinie(tetraedru_latLaterala_3_v);

    let loaderTetraedru = new THREE.FontLoader();
    loaderTetraedru.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        let color = new THREE.Color(0x006699);

        let matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        let messageA = pctTetraedru_2.name;
        let shapesA = font.generateShapes(messageA, 3);
        let geometryA = new THREE.ShapeBufferGeometry(shapesA);
        let textA = new THREE.Mesh(geometryA, matLite);
        textA.position.x = pctTetraedru_2.getComponent(0) - 4;
        textA.position.y = pctTetraedru_2.getComponent(1);
        textA.position.z = pctTetraedru_2.getComponent(2);
        scene.add(textA);

        let messageB = pctTetraedru_1.name;
        let shapesB = font.generateShapes(messageB, 3);
        let geometryB = new THREE.ShapeBufferGeometry(shapesB);
        let textB = new THREE.Mesh(geometryB, matLite);
        textB.position.x = pctTetraedru_1.getComponent(0) + 2;
        textB.position.y = pctTetraedru_1.getComponent(1);
        textB.position.z = pctTetraedru_1.getComponent(2);
        scene.add(textB);

        let messageC = pctTetraedru_3.name;
        let shapesC = font.generateShapes(messageC, 3);
        let geometryC = new THREE.ShapeBufferGeometry(shapesC);
        let textC = new THREE.Mesh(geometryC, matLite);
        textC.position.x = pctTetraedru_3.getComponent(0) + 2;
        textC.position.y = pctTetraedru_3.getComponent(1);
        textC.position.z = pctTetraedru_3.getComponent(2);
        scene.add(textC);

        let messageV = pctTetraedru_vf.name;
        let shapesV = font.generateShapes(messageV, 3);
        let geometryV = new THREE.ShapeBufferGeometry(shapesV);
        let textV = new THREE.Mesh(geometryV, matLite);
        textV.position.x = pctTetraedru_vf.getComponent(0);
        textV.position.y = pctTetraedru_vf.getComponent(1) + 1;
        textV.position.z = pctTetraedru_vf.getComponent(2);
        scene.add(textV);
    });
}

//TETRAEDRU REGULAT
let pctTetraReg_1 = new THREE.Vector3(10, -15, 0); pctTetraReg_1.name = "B";
let pctTetraReg_2 = new THREE.Vector3(10, -15, 20); pctTetraReg_2.name = "A";
let pctTetraReg_3 = new THREE.Vector3(-10, -15, 20); pctTetraReg_3.name = "C";
let pctTetraReg_vf = new THREE.Vector3(10, 5, 20); pctTetraReg_vf.name = "V";

let tetraReg_muchie_1_2 = new THREE.Line3(pctTetraReg_1, pctTetraReg_2);
let tetraReg_muchie_2_3 = new THREE.Line3(pctTetraReg_2, pctTetraReg_3);
let tetraReg_muchie_3_1 = new THREE.Line3(pctTetraReg_3, pctTetraReg_1);

let tetraReg_muchie_1_v = new THREE.Line3(pctTetraReg_1, pctTetraReg_vf);
let tetraReg_muchie_2_v = new THREE.Line3(pctTetraReg_2, pctTetraReg_vf);
let tetraReg_muchie_3_v = new THREE.Line3(pctTetraReg_3, pctTetraReg_vf);

function tetraedruRegulat() {
    sterge();
    perspectivaXoY(17, -5, 40);
    addLinieBaza(tetraReg_muchie_1_2);
    addLinieBaza(tetraReg_muchie_2_3);
    addLinieBaza(tetraReg_muchie_3_1);

    addLinieBaza(tetraReg_muchie_1_v);
    addLinie(tetraReg_muchie_2_v);
    addLinie(tetraReg_muchie_3_v);

    let loaderTetraReg = new THREE.FontLoader();
    loaderTetraReg.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        let color = new THREE.Color(0x006699);

        let matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        let messageA = pctTetraReg_2.name;
        let shapesA = font.generateShapes(messageA, 3);
        let geometryA = new THREE.ShapeBufferGeometry(shapesA);
        let textA = new THREE.Mesh(geometryA, matLite);
        textA.position.x = pctTetraReg_2.getComponent(0) - 4;
        textA.position.y = pctTetraReg_2.getComponent(1);
        textA.position.z = pctTetraReg_2.getComponent(2);
        scene.add(textA);

        let messageB = pctTetraReg_1.name;
        let shapesB = font.generateShapes(messageB, 3);
        let geometryB = new THREE.ShapeBufferGeometry(shapesB);
        let textB = new THREE.Mesh(geometryB, matLite);
        textB.position.x = pctTetraReg_1.getComponent(0) + 2;
        textB.position.y = pctTetraReg_1.getComponent(1);
        textB.position.z = pctTetraReg_1.getComponent(2);
        scene.add(textB);

        let messageC = pctTetraReg_3.name;
        let shapesC = font.generateShapes(messageC, 3);
        let geometryC = new THREE.ShapeBufferGeometry(shapesC);
        let textC = new THREE.Mesh(geometryC, matLite);
        textC.position.x = pctTetraReg_3.getComponent(0) + 2;
        textC.position.y = pctTetraReg_3.getComponent(1);
        textC.position.z = pctTetraReg_3.getComponent(2);
        scene.add(textC);

        let messageV = pctTetraReg_vf.name;
        let shapesV = font.generateShapes(messageV, 3);
        let geometryV = new THREE.ShapeBufferGeometry(shapesV);
        let textV = new THREE.Mesh(geometryV, matLite);
        textV.position.x = pctTetraReg_vf.getComponent(0);
        textV.position.y = pctTetraReg_vf.getComponent(1) + 1;
        textV.position.z = pctTetraReg_vf.getComponent(2);
        scene.add(textV);
    });
}

//PIRAMIDA TRIUNGHIULARA REGULATA
let pctPirTri_1 = new THREE.Vector3(-15, -15, 0); pctPirTri_1.name = "A";
let pctPirTri_2 = new THREE.Vector3(15, -15, 0); pctPirTri_2.name = "B";
let pctPirTri_3 = new THREE.Vector3(0, -15, generareTriEchilateral(pctPirTri_1, pctPirTri_2)); pctPirTri_3.name = "C";

let pirTri_baza_1_2 = new THREE.Line3(pctPirTri_1, pctPirTri_2);
let pirTri_baza_2_3 = new THREE.Line3(pctPirTri_2, pctPirTri_3);
let pirTri_baza_3_1 = new THREE.Line3(pctPirTri_3, pctPirTri_1);

let medianaAM = new THREE.Line3(pirTri_baza_2_3.getCenter(),pctPirTri_1);
let pctPirTri_vf = new THREE.Vector3(medianaAM.at(2/3).getComponent(0), 5, medianaAM.at(2/3).getComponent(2)); pctPirTri_vf.name = "V";

let pirTri_latLateral_1_v = new THREE.Line3(pctPirTri_1, pctPirTri_vf);
let pirTri_latLateral_2_v = new THREE.Line3(pctPirTri_2, pctPirTri_vf);
let pirTri_latLateral_3_v = new THREE.Line3(pctPirTri_3, pctPirTri_vf);

function piramidaTriunghiulara() {
    sterge();
    perspectivaXoY(17, -5, 40);
    addLinieBaza(pirTri_baza_1_2);
    addLinieBaza(pirTri_baza_2_3);
    addLinieBaza(pirTri_baza_3_1);

    addLinieBaza(pirTri_latLateral_1_v);
    addLinie(pirTri_latLateral_2_v);
    addLinie(pirTri_latLateral_3_v);

    let loaderTetraReg = new THREE.FontLoader();
    loaderTetraReg.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        let color = new THREE.Color(0x006699);

        let matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        let messageA = pctPirTri_2.name;
        let shapesA = font.generateShapes(messageA, 3);
        let geometryA = new THREE.ShapeBufferGeometry(shapesA);
        let textA = new THREE.Mesh(geometryA, matLite);
        textA.position.x = pctPirTri_2.getComponent(0) - 4;
        textA.position.y = pctPirTri_2.getComponent(1);
        textA.position.z = pctPirTri_2.getComponent(2);
        scene.add(textA);

        let messageB = pctPirTri_1.name;
        let shapesB = font.generateShapes(messageB, 3);
        let geometryB = new THREE.ShapeBufferGeometry(shapesB);
        let textB = new THREE.Mesh(geometryB, matLite);
        textB.position.x = pctPirTri_1.getComponent(0) + 2;
        textB.position.y = pctPirTri_1.getComponent(1);
        textB.position.z = pctPirTri_1.getComponent(2);
        scene.add(textB);

        let messageC = pctPirTri_3.name;
        let shapesC = font.generateShapes(messageC, 3);
        let geometryC = new THREE.ShapeBufferGeometry(shapesC);
        let textC = new THREE.Mesh(geometryC, matLite);
        textC.position.x = pctPirTri_3.getComponent(0) + 2;
        textC.position.y = pctPirTri_3.getComponent(1);
        textC.position.z = pctPirTri_3.getComponent(2);
        scene.add(textC);

        let messageV = pctPirTri_vf.name;
        let shapesV = font.generateShapes(messageV, 3);
        let geometryV = new THREE.ShapeBufferGeometry(shapesV);
        let textV = new THREE.Mesh(geometryV, matLite);
        textV.position.x = pctPirTri_vf.getComponent(0);
        textV.position.y = pctPirTri_vf.getComponent(1) + 1;
        textV.position.z = pctPirTri_vf.getComponent(2);
        scene.add(textV);
    });
}
//Piramida Patrulatera Regulata
let pctPirPatr_1 = new THREE.Vector3(10, -15, 20); pctPirPatr_1.name = "B";
let pctPirPatr_2 = new THREE.Vector3(-10, -15, 20); pctPirPatr_2.name = "A";
let pctPirPatr_3 = new THREE.Vector3(-10, -15, 0); pctPirPatr_3.name = "D";
let pctPirPatr_4 = new THREE.Vector3(10, -15, 0); pctPirPatr_4.name = "C";
let pctPirPatr_vf = new THREE.Vector3(0, 5, 10); pctPirPatr_vf.name = "V"; //0, 5, 10
let centru_PirPatr = new THREE.Vector3(0, -15, 10); centru_PirPatr.name = "O";


let pirPatr_baza_1_2 = new THREE.Line3(pctPirPatr_1, pctPirPatr_2);
let pirPatr_baza_2_3 = new THREE.Line3(pctPirPatr_2, pctPirPatr_3);
let pirPatr_baza_3_4 = new THREE.Line3(pctPirPatr_3, pctPirPatr_4);
let pirPatr_baza_4_1 = new THREE.Line3(pctPirPatr_4, pctPirPatr_1);

let pirPatr_latLaterala_1_v = new THREE.Line3(pctPirPatr_1, pctPirPatr_vf);
let pirPatr_latLaterala_2_v = new THREE.Line3(pctPirPatr_2, pctPirPatr_vf);
let pirPatr_latLaterala_3_v = new THREE.Line3(pctPirPatr_3, pctPirPatr_vf);
let pirPatr_latLaterala_4_v = new THREE.Line3(pctPirPatr_4, pctPirPatr_vf);

function piramidaPatrulatera() {
    sterge();
    perspectivaXoY(17, -5, 40);
    addLinieBaza(pirPatr_baza_1_2);
    addLinieBaza(pirPatr_baza_2_3);
    addLinieBaza(pirPatr_baza_3_4);
    addLinieBaza(pirPatr_baza_4_1);

    addLinieBaza(pirPatr_latLaterala_1_v);
    addLinie(pirPatr_latLaterala_2_v);
    addLinie(pirPatr_latLaterala_3_v);
    addLinie(pirPatr_latLaterala_4_v);

    let loaderPirPatr = new THREE.FontLoader();
    loaderPirPatr.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        let color = new THREE.Color(0x006699);

        let matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        let messageA = pctPirPatr_2.name;
        let shapesA = font.generateShapes(messageA, 3);
        let geometryA = new THREE.ShapeBufferGeometry(shapesA);
        let textA = new THREE.Mesh(geometryA, matLite);
        textA.position.x = pctPirPatr_2.getComponent(0) - 4;
        textA.position.y = pctPirPatr_2.getComponent(1);
        textA.position.z = pctPirPatr_2.getComponent(2);
        scene.add(textA);

        let messageB = pctPirPatr_1.name;
        let shapesB = font.generateShapes(messageB, 3);
        let geometryB = new THREE.ShapeBufferGeometry(shapesB);
        let textB = new THREE.Mesh(geometryB, matLite);
        textB.position.x = pctPirPatr_1.getComponent(0) + 2;
        textB.position.y = pctPirPatr_1.getComponent(1);
        textB.position.z = pctPirPatr_1.getComponent(2);
        scene.add(textB);

        let messageC = pctPirPatr_4.name;
        let shapesC = font.generateShapes(messageC, 3);
        let geometryC = new THREE.ShapeBufferGeometry(shapesC);
        let textC = new THREE.Mesh(geometryC, matLite);
        textC.position.x = pctPirPatr_4.getComponent(0) + 2;
        textC.position.y = pctPirPatr_4.getComponent(1);
        textC.position.z = pctPirPatr_4.getComponent(2);
        scene.add(textC);

        let messageD = pctPirPatr_3.name;
        let shapesD = font.generateShapes(messageD, 3);
        let geometryD = new THREE.ShapeBufferGeometry(shapesD);
        let textD = new THREE.Mesh(geometryD, matLite);
        textD.position.x = pctPirPatr_3.getComponent(0) - 4;
        textD.position.y = pctPirPatr_3.getComponent(1);
        textD.position.z = pctPirPatr_3.getComponent(2);
        scene.add(textD);

        let messageV = pctPirPatr_vf.name;
        let shapesV = font.generateShapes(messageV, 3);
        let geometryV = new THREE.ShapeBufferGeometry(shapesV);
        let textV = new THREE.Mesh(geometryV, matLite);
        textV.position.x = pctPirPatr_vf.getComponent(0);
        textV.position.y = pctPirPatr_vf.getComponent(1) + 1;
        textV.position.z = pctPirPatr_vf.getComponent(2);
        scene.add(textV);
    });
}

//Piramida HEXAGONALA Regulata
var bazaPrismaHex = [];

for (i = 0; i < 6; i++) {
    bazaPrismaHex.push( r * Math.cos(2 * Math.PI * i / 6) );
    bazaPrismaHex.push( r * Math.sin(2 * Math.PI * i / 6) +15) ;
  }
let pctPirHex_1 = new THREE.Vector3(bazaPrismaHex[0], -15, bazaPrismaHex[1]); pctPirHex_1.name = "A";
let pctPirHex_2 = new THREE.Vector3(bazaPrismaHex[2], -15, bazaPrismaHex[3]); pctPirHex_2.name = "B";
let pctPirHex_3 = new THREE.Vector3(bazaPrismaHex[4], -15, bazaPrismaHex[5]); pctPirHex_3.name = "C";
let pctPirHex_4 = new THREE.Vector3(bazaPrismaHex[6], -15, bazaPrismaHex[7]); pctPirHex_4.name = "D";
let pctPirHex_5 = new THREE.Vector3(bazaPrismaHex[8], -15, bazaPrismaHex[9]); pctPirHex_5.name = "E";
let pctPirHex_6 = new THREE.Vector3(bazaPrismaHex[10], -15, bazaPrismaHex[11]); pctPirHex_6.name = "F";
let pctPirHex_vf = new THREE.Vector3(0, 5, 0); pctPirHex_vf.name = "V";
let centru_PirHex = new THREE.Vector3(0, -15, 0); centru_PirPatr.name = "O";

let pctPirHex_baza_1_2 = new THREE.Line3(pctPirHex_1, pctPirHex_2);
let pctPirHex_baza_2_3 = new THREE.Line3(pctPirHex_2, pctPirHex_3);
let pctPirHex_baza_3_4 = new THREE.Line3(pctPirHex_3, pctPirHex_4);
let pctPirHex_baza_4_5 = new THREE.Line3(pctPirHex_4, pctPirHex_5);
let pctPirHex_baza_5_6 = new THREE.Line3(pctPirHex_5, pctPirHex_6);
let pctPirHex_baza_6_1 = new THREE.Line3(pctPirHex_6, pctPirHex_1);

let pirHex_latLaterala_1_v = new THREE.Line3(pctPirHex_1, pctPirHex_vf);
let pirHex_latLaterala_2_v = new THREE.Line3(pctPirHex_2, pctPirHex_vf);
let pirHex_latLaterala_3_v = new THREE.Line3(pctPirHex_3, pctPirHex_vf);
let pirHex_latLaterala_4_v = new THREE.Line3(pctPirHex_4, pctPirHex_vf);
let pirHex_latLaterala_5_v = new THREE.Line3(pctPirHex_5, pctPirHex_vf);
let pirHex_latLaterala_6_v = new THREE.Line3(pctPirHex_6, pctPirHex_vf);

function piramidaHexagonala() {
    sterge();
    perspectivaXoY(17, -5, 40);
    addLinieBaza(pctPirHex_baza_1_2);
    addLinieBaza(pctPirHex_baza_2_3);
    addLinieBaza(pctPirHex_baza_3_4);
    addLinieBaza(pctPirHex_baza_4_5);
    addLinieBaza(pctPirHex_baza_5_6);
    addLinieBaza(pctPirHex_baza_6_1);

    addLinieBaza(pirHex_latLaterala_1_v);
    addLinie(pirHex_latLaterala_2_v);
    addLinie(pirHex_latLaterala_3_v);
    addLinie(pirHex_latLaterala_4_v);
    addLinie(pirHex_latLaterala_5_v);
    addLinie(pirHex_latLaterala_6_v);

    let loaderPirHex = new THREE.FontLoader();
    loaderPirHex.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        let color = new THREE.Color(0x006699);

        let matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        let messageA = pctPirHex_1.name;
        let shapesA = font.generateShapes(messageA, 3);
        let geometryA = new THREE.ShapeBufferGeometry(shapesA);
        let textA = new THREE.Mesh(geometryA, matLite);
        textA.position.x = pctPirHex_1.getComponent(0) - 4;
        textA.position.y = pctPirHex_1.getComponent(1);
        textA.position.z = pctPirHex_1.getComponent(2);
        scene.add(textA);

        let messageB = pctPirHex_2.name;
        let shapesB = font.generateShapes(messageB, 3);
        let geometryB = new THREE.ShapeBufferGeometry(shapesB);
        let textB = new THREE.Mesh(geometryB, matLite);
        textB.position.x = pctPirHex_2.getComponent(0) + 2;
        textB.position.y = pctPirHex_2.getComponent(1);
        textB.position.z = pctPirHex_2.getComponent(2);
        scene.add(textB);

        let messageC = pctPirHex_3.name;
        let shapesC = font.generateShapes(messageC, 3);
        let geometryC = new THREE.ShapeBufferGeometry(shapesC);
        let textC = new THREE.Mesh(geometryC, matLite);
        textC.position.x = pctPirHex_3.getComponent(0) + 2;
        textC.position.y = pctPirHex_3.getComponent(1);
        textC.position.z = pctPirHex_3.getComponent(2);
        scene.add(textC);

        let messageD = pctPirHex_4.name;
        let shapesD = font.generateShapes(messageD, 3);
        let geometryD = new THREE.ShapeBufferGeometry(shapesD);
        let textD = new THREE.Mesh(geometryD, matLite);
        textD.position.x = pctPirHex_4.getComponent(0) - 4;
        textD.position.y = pctPirHex_4.getComponent(1);
        textD.position.z = pctPirHex_4.getComponent(2);
        scene.add(textD);

        let messageE = pctPirHex_5.name;
        let shapesE = font.generateShapes(messageE, 3);
        let geometryE = new THREE.ShapeBufferGeometry(shapesE);
        let textE = new THREE.Mesh(geometryE, matLite);
        textE.position.x = pctPirHex_5.getComponent(0) - 4;
        textE.position.y = pctPirHex_5.getComponent(1);
        textE.position.z = pctPirHex_5.getComponent(2);
        scene.add(textE);
        
        let messageF = pctPirHex_6.name;
        let shapesF = font.generateShapes(messageF, 3);
        let geometryF = new THREE.ShapeBufferGeometry(shapesF);
        let textF = new THREE.Mesh(geometryF, matLite);
        textF.position.x = pctPirHex_6.getComponent(0) - 4;
        textF.position.y = pctPirHex_6.getComponent(1);
        textF.position.z = pctPirHex_6.getComponent(2);
        scene.add(textF);

        let messageV = pctPirHex_vf.name;
        let shapesV = font.generateShapes(messageV, 3);
        let geometryV = new THREE.ShapeBufferGeometry(shapesV);
        let textV = new THREE.Mesh(geometryV, matLite);
        textV.position.x = pctPirHex_vf.getComponent(0);
        textV.position.y = pctPirHex_vf.getComponent(1) + 1;
        textV.position.z = pctPirHex_vf.getComponent(2);
        scene.add(textV);
    });
}
