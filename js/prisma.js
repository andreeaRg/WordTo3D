//CUBUL
let pctCub_1 = new THREE.Vector3(-10, -15, 0); pctCub_1.name = "A";
let pctCub_2 = new THREE.Vector3(10, -15, 0); pctCub_2.name = "B";
let pctCub_3 = new THREE.Vector3(10, -15, 20); pctCub_3.name = "C";
let pctCub_4 = new THREE.Vector3(-10, -15, 20); pctCub_4.name = "D";
let pctCub_5 = new THREE.Vector3(-10, 5, 0); pctCub_5.name = "A'";
let pctCub_6 = new THREE.Vector3(10, 5, 0); pctCub_6.name = "B'";
let pctCub_7 = new THREE.Vector3(10, 5, 20); pctCub_7.name = "C'";
let pctCub_8 = new THREE.Vector3(-10, 5, 20); pctCub_8.name = "D'";

let cub_muchie_1_2 = new THREE.Line3(pctCub_1, pctCub_2);
let cub_muchie_2_3 = new THREE.Line3(pctCub_2, pctCub_3);
let cub_muchie_3_4 = new THREE.Line3(pctCub_3, pctCub_4);
let cub_muchie_4_1 = new THREE.Line3(pctCub_4, pctCub_1);

let cub_muchie_5_6 = new THREE.Line3(pctCub_5, pctCub_6);
let cub_muchie_6_7 = new THREE.Line3(pctCub_6, pctCub_7);
let cub_muchie_7_8 = new THREE.Line3(pctCub_7, pctCub_8);
let cub_muchie_8_5 = new THREE.Line3(pctCub_8, pctCub_5);

let cub_muchie_1_5 = new THREE.Line3(pctCub_1, pctCub_5);
let cub_muchie_2_6 = new THREE.Line3(pctCub_2, pctCub_6);
let cub_muchie_3_7 = new THREE.Line3(pctCub_3, pctCub_7);
let cub_muchie_4_8 = new THREE.Line3(pctCub_4, pctCub_8);

function cub() {
    sterge();
    perspectivaXoY(17, -5, 40);
    addLinieBaza(cub_muchie_1_2);
    addLinieBaza(cub_muchie_2_3);
    addLinieBaza(cub_muchie_3_4);
    addLinieBaza(cub_muchie_4_1);
    
    addLinieBaza(cub_muchie_5_6);
    addLinieBaza(cub_muchie_6_7);
    addLinieBaza(cub_muchie_7_8);
    addLinieBaza(cub_muchie_8_5);
    
    addLinie(cub_muchie_1_5);
    addLinie(cub_muchie_2_6);
    addLinie(cub_muchie_3_7);
    addLinie(cub_muchie_4_8);

    let loaderCub = new THREE.FontLoader();
    loaderCub.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        let color = new THREE.Color(0x006699);

        let matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        let messageA = pctCub_1.name;
        let shapesA = font.generateShapes(messageA, 3);
        let geometryA = new THREE.ShapeBufferGeometry(shapesA);
        let textA = new THREE.Mesh(geometryA, matLite);
        textA.position.x = pctCub_1.getComponent(0) - 4;
        textA.position.y = pctCub_1.getComponent(1);
        textA.position.z = pctCub_1.getComponent(2);
        scene.add(textA);

        let messageB = pctCub_2.name;
        let shapesB = font.generateShapes(messageB, 3);
        let geometryB = new THREE.ShapeBufferGeometry(shapesB);
        let textB = new THREE.Mesh(geometryB, matLite);
        textB.position.x = pctCub_2.getComponent(0) + 2;
        textB.position.y = pctCub_2.getComponent(1);
        textB.position.z = pctCub_2.getComponent(2);
        scene.add(textB);

        let messageC = pctCub_3.name;
        let shapesC = font.generateShapes(messageC, 3);
        let geometryC = new THREE.ShapeBufferGeometry(shapesC);
        let textC = new THREE.Mesh(geometryC, matLite);
        textC.position.x = pctCub_3.getComponent(0) + 2;
        textC.position.y = pctCub_3.getComponent(1);
        textC.position.z = pctCub_3.getComponent(2);
        scene.add(textC);

        let messageD = pctCub_4.name;
        let shapesD = font.generateShapes(messageD, 3);
        let geometryD = new THREE.ShapeBufferGeometry(shapesD);
        let textD = new THREE.Mesh(geometryD, matLite);
        textD.position.x = pctCub_4.getComponent(0) - 4;
        textD.position.y = pctCub_4.getComponent(1);
        textD.position.z = pctCub_4.getComponent(2);
        scene.add(textD);
        
        let messageAprim = pctCub_5.name;
        let shapesAprim = font.generateShapes(messageAprim, 3);
        let geometryAprim = new THREE.ShapeBufferGeometry(shapesAprim);
        let textAprim = new THREE.Mesh(geometryAprim, matLite);
        textAprim.position.x = pctCub_5.getComponent(0) - 4;
        textAprim.position.y = pctCub_5.getComponent(1);
        textAprim.position.z = pctCub_5.getComponent(2);
        scene.add(textAprim);

        let messageBprim = pctCub_6.name;
        let shapesBprim = font.generateShapes(messageBprim, 3);
        let geometryBprim = new THREE.ShapeBufferGeometry(shapesBprim);
        let textBprim = new THREE.Mesh(geometryBprim, matLite);
        textBprim.position.x = pctCub_6.getComponent(0) + 2;
        textBprim.position.y = pctCub_6.getComponent(1);
        textBprim.position.z = pctCub_6.getComponent(2);
        scene.add(textBprim);

        let messageCprim = pctCub_7.name;
        let shapesCprim = font.generateShapes(messageCprim, 3);
        let geometryCprim = new THREE.ShapeBufferGeometry(shapesCprim);
        let textCprim = new THREE.Mesh(geometryCprim, matLite);
        textCprim.position.x = pctCub_7.getComponent(0) + 2;
        textCprim.position.y = pctCub_7.getComponent(1);
        textCprim.position.z = pctCub_7.getComponent(2);
        scene.add(textCprim);

        let messageDprim = pctCub_8.name;
        let shapesDprim = font.generateShapes(messageDprim, 3);
        let geometryDprim = new THREE.ShapeBufferGeometry(shapesDprim);
        let textDprim = new THREE.Mesh(geometryDprim, matLite);
        textDprim.position.x = pctCub_8.getComponent(0) - 4;
        textDprim.position.y = pctCub_8.getComponent(1);
        textDprim.position.z = pctCub_8.getComponent(2);
        scene.add(textDprim);
    });
}
//PARALIPIPEDUL DREPTUNGHIC
let pctParaDreptunghic_1 = new THREE.Vector3(-20, -15, 0); pctParaDreptunghic_1.name = "A";
let pctParaDreptunghic_2 = new THREE.Vector3(10, -15, 0); pctParaDreptunghic_2.name = "B";
let pctParaDreptunghic_3 = new THREE.Vector3(15, -15, 10); pctParaDreptunghic_3.name = "C";
let pctParaDreptunghic_4 = new THREE.Vector3(-15, -15, 10); pctParaDreptunghic_4.name = "D";
let pctParaDreptunghic_5 = new THREE.Vector3(-20, -5, 0); pctParaDreptunghic_5.name = "A'";
let pctParaDreptunghic_6 = new THREE.Vector3(10, -5, 0); pctParaDreptunghic_6.name = "B'";
let pctParaDreptunghic_7 = new THREE.Vector3(15, -5, 10); pctParaDreptunghic_7.name = "C'";
let pctParaDreptunghic_8 = new THREE.Vector3(-15, -5, 10); pctParaDreptunghic_8.name = "D'";

let para_muchie_1_2 = new THREE.Line3(pctParaDreptunghic_1, pctParaDreptunghic_2);
let para_muchie_2_3 = new THREE.Line3(pctParaDreptunghic_2, pctParaDreptunghic_3);
let para_muchie_3_4 = new THREE.Line3(pctParaDreptunghic_3, pctParaDreptunghic_4);
let para_muchie_4_1 = new THREE.Line3(pctParaDreptunghic_4, pctParaDreptunghic_1);

let para_muchie_5_6 = new THREE.Line3(pctParaDreptunghic_5, pctParaDreptunghic_6);
let para_muchie_6_7 = new THREE.Line3(pctParaDreptunghic_6, pctParaDreptunghic_7);
let para_muchie_7_8 = new THREE.Line3(pctParaDreptunghic_7, pctParaDreptunghic_8);
let para_muchie_8_5 = new THREE.Line3(pctParaDreptunghic_8, pctParaDreptunghic_5);

let para_muchie_1_5 = new THREE.Line3(pctParaDreptunghic_1, pctParaDreptunghic_5);
let para_muchie_2_6 = new THREE.Line3(pctParaDreptunghic_2, pctParaDreptunghic_6);
let para_muchie_3_7 = new THREE.Line3(pctParaDreptunghic_3, pctParaDreptunghic_7);
let para_muchie_4_8 = new THREE.Line3(pctParaDreptunghic_4, pctParaDreptunghic_8);


function paralelipipedDreptunghic() {
    sterge();
    perspectivaXoY(17, -5, 40);
    addLinieBaza(para_muchie_1_2);
    addLinieBaza(para_muchie_2_3);
    addLinieBaza(para_muchie_3_4);
    addLinieBaza(para_muchie_4_1);
    
    addLinieBaza(para_muchie_5_6);
    addLinieBaza(para_muchie_6_7);
    addLinieBaza(para_muchie_7_8);
    addLinieBaza(para_muchie_8_5);
    
    addLinie(para_muchie_1_5);
    addLinie(para_muchie_2_6);
    addLinie(para_muchie_3_7);
    addLinie(para_muchie_4_8);

    let loaderParalelipiped = new THREE.FontLoader();
    loaderParalelipiped.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        let color = new THREE.Color(0x006699);

        let matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        let messageA = pctParaDreptunghic_1.name;
        let shapesA = font.generateShapes(messageA, 3);
        let geometryA = new THREE.ShapeBufferGeometry(shapesA);
        let textA = new THREE.Mesh(geometryA, matLite);
        textA.position.x = pctParaDreptunghic_1.getComponent(0) - 4;
        textA.position.y = pctParaDreptunghic_1.getComponent(1);
        textA.position.z = pctParaDreptunghic_1.getComponent(2);
        scene.add(textA);

        let messageB = pctParaDreptunghic_2.name;
        let shapesB = font.generateShapes(messageB, 3);
        let geometryB = new THREE.ShapeBufferGeometry(shapesB);
        let textB = new THREE.Mesh(geometryB, matLite);
        textB.position.x = pctParaDreptunghic_2.getComponent(0) + 2;
        textB.position.y = pctParaDreptunghic_2.getComponent(1);
        textB.position.z = pctParaDreptunghic_2.getComponent(2);
        scene.add(textB);

        let messageC = pctParaDreptunghic_3.name;
        let shapesC = font.generateShapes(messageC, 3);
        let geometryC = new THREE.ShapeBufferGeometry(shapesC);
        let textC = new THREE.Mesh(geometryC, matLite);
        textC.position.x = pctParaDreptunghic_3.getComponent(0) + 2;
        textC.position.y = pctParaDreptunghic_3.getComponent(1);
        textC.position.z = pctParaDreptunghic_3.getComponent(2);
        scene.add(textC);

        let messageD = pctParaDreptunghic_4.name;
        let shapesD = font.generateShapes(messageD, 3);
        let geometryD = new THREE.ShapeBufferGeometry(shapesD);
        let textD = new THREE.Mesh(geometryD, matLite);
        textD.position.x = pctParaDreptunghic_4.getComponent(0) - 4;
        textD.position.y = pctParaDreptunghic_4.getComponent(1);
        textD.position.z = pctParaDreptunghic_4.getComponent(2);
        scene.add(textD);
        
        let messageAprim = pctParaDreptunghic_5.name;
        let shapesAprim = font.generateShapes(messageAprim, 3);
        let geometryAprim = new THREE.ShapeBufferGeometry(shapesAprim);
        let textAprim = new THREE.Mesh(geometryAprim, matLite);
        textAprim.position.x = pctParaDreptunghic_5.getComponent(0) - 4;
        textAprim.position.y = pctParaDreptunghic_5.getComponent(1);
        textAprim.position.z = pctParaDreptunghic_5.getComponent(2);
        scene.add(textAprim);

        let messageBprim = pctParaDreptunghic_6.name;
        let shapesBprim = font.generateShapes(messageBprim, 3);
        let geometryBprim = new THREE.ShapeBufferGeometry(shapesBprim);
        let textBprim = new THREE.Mesh(geometryBprim, matLite);
        textBprim.position.x = pctParaDreptunghic_6.getComponent(0) + 2;
        textBprim.position.y = pctParaDreptunghic_6.getComponent(1);
        textBprim.position.z = pctParaDreptunghic_6.getComponent(2);
        scene.add(textBprim);

        let messageCprim = pctParaDreptunghic_7.name;
        let shapesCprim = font.generateShapes(messageCprim, 3);
        let geometryCprim = new THREE.ShapeBufferGeometry(shapesCprim);
        let textCprim = new THREE.Mesh(geometryCprim, matLite);
        textCprim.position.x = pctParaDreptunghic_7.getComponent(0) + 2;
        textCprim.position.y = pctParaDreptunghic_7.getComponent(1);
        textCprim.position.z = pctParaDreptunghic_7.getComponent(2);
        scene.add(textCprim);

        let messageDprim = pctParaDreptunghic_8.name;
        let shapesDprim = font.generateShapes(messageDprim, 3);
        let geometryDprim = new THREE.ShapeBufferGeometry(shapesDprim);
        let textDprim = new THREE.Mesh(geometryDprim, matLite);
        textDprim.position.x = pctParaDreptunghic_8.getComponent(0) - 4;
        textDprim.position.y = pctParaDreptunghic_8.getComponent(1);
        textDprim.position.z = pctParaDreptunghic_8.getComponent(2);
        scene.add(textDprim);
    });
}

//PRISMA TRIUNGHILARA REGULATA
let pctPrismaTri_1 = new THREE.Vector3(-15, -15, 0); pctPrismaTri_1.name = "A";
let pctPrismaTri_2 = new THREE.Vector3(15, -15, 0); pctPrismaTri_2.name = "B";
let pctPrismaTri_3 = new THREE.Vector3(0, -15, generareTriEchilateral(pctPrismaTri_1, pctPrismaTri_2)); pctPrismaTri_3.name = "C";
let pctPrismaTri_4 = new THREE.Vector3(-15, 10, 0); pctPrismaTri_4.name = "A'";
let pctPrismaTri_5 = new THREE.Vector3(15, 10, 0); pctPrismaTri_5.name = "B'";
let pctPrismaTri_6 = new THREE.Vector3(0, 10, generareTriEchilateral(pctPrismaTri_1, pctPrismaTri_2)); pctPrismaTri_6.name = "C'";

let prismaTri_muchie_1_2 = new THREE.Line3(pctPrismaTri_1, pctPrismaTri_2);
let prismaTri_muchie_2_3 = new THREE.Line3(pctPrismaTri_2, pctPrismaTri_3);
let prismaTri_muchie_3_1 = new THREE.Line3(pctPrismaTri_3, pctPrismaTri_1);

let prismaTri_muchie_4_5 = new THREE.Line3(pctPrismaTri_4, pctPrismaTri_5);
let prismaTri_muchie_5_6 = new THREE.Line3(pctPrismaTri_5, pctPrismaTri_6);
let prismaTri_muchie_6_4 = new THREE.Line3(pctPrismaTri_6, pctPrismaTri_4);

let prismaTri_muchie_1_4 = new THREE.Line3(pctPrismaTri_1, pctPrismaTri_4);
let prismaTri_muchie_2_5 = new THREE.Line3(pctPrismaTri_2, pctPrismaTri_5);
let prismaTri_muchie_3_6 = new THREE.Line3(pctPrismaTri_3, pctPrismaTri_6);

function prismaTriunghilaraRegulata() {
    sterge();
    perspectivaXoY(17, -5, 40);
    addLinieBaza(prismaTri_muchie_1_2);
    addLinieBaza(prismaTri_muchie_2_3);
    addLinieBaza(prismaTri_muchie_3_1);
    
    addLinieBaza(prismaTri_muchie_4_5);
    addLinieBaza(prismaTri_muchie_5_6);
    addLinieBaza(prismaTri_muchie_6_4);
    
    addLinie(prismaTri_muchie_1_4);
    addLinie(prismaTri_muchie_2_5);
    addLinie(prismaTri_muchie_3_6);

    let loaderPrismaTri = new THREE.FontLoader();
    loaderPrismaTri.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        let color = new THREE.Color(0x006699);

        let matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        let messageA = pctPrismaTri_1.name;
        let shapesA = font.generateShapes(messageA, 3);
        let geometryA = new THREE.ShapeBufferGeometry(shapesA);
        let textA = new THREE.Mesh(geometryA, matLite);
        textA.position.x = pctPrismaTri_1.getComponent(0) - 4;
        textA.position.y = pctPrismaTri_1.getComponent(1);
        textA.position.z = pctPrismaTri_1.getComponent(2);
        scene.add(textA);

        let messageB = pctPrismaTri_2.name;
        let shapesB = font.generateShapes(messageB, 3);
        let geometryB = new THREE.ShapeBufferGeometry(shapesB);
        let textB = new THREE.Mesh(geometryB, matLite);
        textB.position.x = pctPrismaTri_2.getComponent(0) + 2;
        textB.position.y = pctPrismaTri_2.getComponent(1);
        textB.position.z = pctPrismaTri_2.getComponent(2);
        scene.add(textB);

        let messageC = pctPrismaTri_3.name;
        let shapesC = font.generateShapes(messageC, 3);
        let geometryC = new THREE.ShapeBufferGeometry(shapesC);
        let textC = new THREE.Mesh(geometryC, matLite);
        textC.position.x = pctPrismaTri_3.getComponent(0) + 2;
        textC.position.y = pctPrismaTri_3.getComponent(1);
        textC.position.z = pctPrismaTri_3.getComponent(2);
        scene.add(textC);

        let messageAprim = pctPrismaTri_4.name;
        let shapesAprim = font.generateShapes(messageAprim, 3);
        let geometryAprim = new THREE.ShapeBufferGeometry(shapesAprim);
        let textAprim = new THREE.Mesh(geometryAprim, matLite);
        textAprim.position.x = pctPrismaTri_4.getComponent(0) - 4;
        textAprim.position.y = pctPrismaTri_4.getComponent(1);
        textAprim.position.z = pctPrismaTri_4.getComponent(2);
        scene.add(textAprim);

        let messageBprim = pctPrismaTri_5.name;
        let shapesBprim = font.generateShapes(messageBprim, 3);
        let geometryBprim = new THREE.ShapeBufferGeometry(shapesBprim);
        let textBprim = new THREE.Mesh(geometryBprim, matLite);
        textBprim.position.x = pctPrismaTri_5.getComponent(0) + 2;
        textBprim.position.y = pctPrismaTri_5.getComponent(1);
        textBprim.position.z = pctPrismaTri_5.getComponent(2);
        scene.add(textBprim);

        let messageCprim = pctPrismaTri_6.name;
        let shapesCprim = font.generateShapes(messageCprim, 3);
        let geometryCprim = new THREE.ShapeBufferGeometry(shapesCprim);
        let textCprim = new THREE.Mesh(geometryCprim, matLite);
        textCprim.position.x = pctPrismaTri_6.getComponent(0) + 2;
        textCprim.position.y = pctPrismaTri_6.getComponent(1);
        textCprim.position.z = pctPrismaTri_6.getComponent(2);
        scene.add(textCprim);
    });
}

//PRISMA PATRULATERA REGULATA

let pctPrismaPatr_1 = new THREE.Vector3(-10, -15, 0); pctPrismaPatr_1.name = "A";
let pctPrismaPatr_2 = new THREE.Vector3(10, -15, 0); pctPrismaPatr_2.name = "B";
let pctPrismaPatr_3 = new THREE.Vector3(10, -15, 20); pctPrismaPatr_3.name = "C";
let pctPrismaPatr_4 = new THREE.Vector3(-10, -15, 20); pctPrismaPatr_4.name = "D";
let pctPrismaPatr_5 = new THREE.Vector3(-10, 15, 0); pctPrismaPatr_5.name = "A'";
let pctPrismaPatr_6 = new THREE.Vector3(10, 15, 0); pctPrismaPatr_6.name = "B'";
let pctPrismaPatr_7 = new THREE.Vector3(10, 15, 20); pctPrismaPatr_7.name = "C'";
let pctPrismaPatr_8 = new THREE.Vector3(-10, 15, 20); pctPrismaPatr_8.name = "D'";

let prismaPatr_muchie_1_2 = new THREE.Line3(pctPrismaPatr_1, pctPrismaPatr_2);
let prismaPatr_muchie_2_3 = new THREE.Line3(pctPrismaPatr_2, pctPrismaPatr_3);
let prismaPatr_muchie_3_4 = new THREE.Line3(pctPrismaPatr_3, pctPrismaPatr_4);
let prismaPatr_muchie_4_1 = new THREE.Line3(pctPrismaPatr_4, pctPrismaPatr_1);

let prismaPatr_muchie_5_6 = new THREE.Line3(pctPrismaPatr_5, pctPrismaPatr_6);
let prismaPatr_muchie_6_7 = new THREE.Line3(pctPrismaPatr_6, pctPrismaPatr_7);
let prismaPatr_muchie_7_8 = new THREE.Line3(pctPrismaPatr_7, pctPrismaPatr_8);
let prismaPatr_muchie_8_5 = new THREE.Line3(pctPrismaPatr_8, pctPrismaPatr_5);

let prismaPatr_muchie_1_5 = new THREE.Line3(pctPrismaPatr_1, pctPrismaPatr_5);
let prismaPatr_muchie_2_6 = new THREE.Line3(pctPrismaPatr_2, pctPrismaPatr_6);
let prismaPatr_muchie_3_7 = new THREE.Line3(pctPrismaPatr_3, pctPrismaPatr_7);
let prismaPatr_muchie_4_8 = new THREE.Line3(pctPrismaPatr_4, pctPrismaPatr_8);

function prismaPatrulateraRegulata() {
    sterge();
    perspectivaXoY(17, -5, 40);
    addLinieBaza(prismaPatr_muchie_1_2);
    addLinieBaza(prismaPatr_muchie_2_3);
    addLinieBaza(prismaPatr_muchie_3_4);
    addLinieBaza(prismaPatr_muchie_4_1);
    
    addLinieBaza(prismaPatr_muchie_5_6);
    addLinieBaza(prismaPatr_muchie_6_7);
    addLinieBaza(prismaPatr_muchie_7_8);
    addLinieBaza(prismaPatr_muchie_8_5);
    
    addLinie(prismaPatr_muchie_1_5);
    addLinie(prismaPatr_muchie_2_6);
    addLinie(prismaPatr_muchie_3_7);
    addLinie(prismaPatr_muchie_4_8);

    let loaderPrismaPatr = new THREE.FontLoader();
    loaderPrismaPatr.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        let color = new THREE.Color(0x006699);

        let matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        let messageA = pctPrismaPatr_1.name;
        let shapesA = font.generateShapes(messageA, 3);
        let geometryA = new THREE.ShapeBufferGeometry(shapesA);
        let textA = new THREE.Mesh(geometryA, matLite);
        textA.position.x = pctPrismaPatr_1.getComponent(0) - 4;
        textA.position.y = pctPrismaPatr_1.getComponent(1);
        textA.position.z = pctPrismaPatr_1.getComponent(2);
        scene.add(textA);

        let messageB = pctPrismaPatr_2.name;
        let shapesB = font.generateShapes(messageB, 3);
        let geometryB = new THREE.ShapeBufferGeometry(shapesB);
        let textB = new THREE.Mesh(geometryB, matLite);
        textB.position.x = pctPrismaPatr_2.getComponent(0) + 2;
        textB.position.y = pctPrismaPatr_2.getComponent(1);
        textB.position.z = pctPrismaPatr_2.getComponent(2);
        scene.add(textB);

        let messageC = pctPrismaPatr_3.name;
        let shapesC = font.generateShapes(messageC, 3);
        let geometryC = new THREE.ShapeBufferGeometry(shapesC);
        let textC = new THREE.Mesh(geometryC, matLite);
        textC.position.x = pctPrismaPatr_3.getComponent(0) + 2;
        textC.position.y = pctPrismaPatr_3.getComponent(1);
        textC.position.z = pctPrismaPatr_3.getComponent(2);
        scene.add(textC);

        let messageD = pctPrismaPatr_4.name;
        let shapesD = font.generateShapes(messageD, 3);
        let geometryD = new THREE.ShapeBufferGeometry(shapesD);
        let textD = new THREE.Mesh(geometryD, matLite);
        textD.position.x = pctPrismaPatr_4.getComponent(0) - 4;
        textD.position.y = pctPrismaPatr_4.getComponent(1);
        textD.position.z = pctPrismaPatr_4.getComponent(2);
        scene.add(textD);
        
        let messageAprim = pctPrismaPatr_5.name;
        let shapesAprim = font.generateShapes(messageAprim, 3);
        let geometryAprim = new THREE.ShapeBufferGeometry(shapesAprim);
        let textAprim = new THREE.Mesh(geometryAprim, matLite);
        textAprim.position.x = pctPrismaPatr_5.getComponent(0) - 4;
        textAprim.position.y = pctPrismaPatr_5.getComponent(1);
        textAprim.position.z = pctPrismaPatr_5.getComponent(2);
        scene.add(textAprim);

        let messageBprim = pctPrismaPatr_6.name;
        let shapesBprim = font.generateShapes(messageBprim, 3);
        let geometryBprim = new THREE.ShapeBufferGeometry(shapesBprim);
        let textBprim = new THREE.Mesh(geometryBprim, matLite);
        textBprim.position.x = pctPrismaPatr_6.getComponent(0) + 2;
        textBprim.position.y = pctPrismaPatr_6.getComponent(1);
        textBprim.position.z = pctPrismaPatr_6.getComponent(2);
        scene.add(textBprim);

        let messageCprim = pctPrismaPatr_7.name;
        let shapesCprim = font.generateShapes(messageCprim, 3);
        let geometryCprim = new THREE.ShapeBufferGeometry(shapesCprim);
        let textCprim = new THREE.Mesh(geometryCprim, matLite);
        textCprim.position.x = pctPrismaPatr_7.getComponent(0) + 2;
        textCprim.position.y = pctPrismaPatr_7.getComponent(1);
        textCprim.position.z = pctPrismaPatr_7.getComponent(2);
        scene.add(textCprim);

        let messageDprim = pctPrismaPatr_8.name;
        let shapesDprim = font.generateShapes(messageDprim, 3);
        let geometryDprim = new THREE.ShapeBufferGeometry(shapesDprim);
        let textDprim = new THREE.Mesh(geometryDprim, matLite);
        textDprim.position.x = pctPrismaPatr_8.getComponent(0) - 4;
        textDprim.position.y = pctPrismaPatr_8.getComponent(1);
        textDprim.position.z = pctPrismaPatr_8.getComponent(2);
        scene.add(textDprim);
    });
}

//PRISMA HEXAGONALA REGULATA
var bazaPrismaHex = [];

for (i = 0; i < 6; i++) {
    bazaPrismaHex.push( r * Math.cos(2 * Math.PI * i / 6) );
    bazaPrismaHex.push( r * Math.sin(2 * Math.PI * i / 6) +15) ;
  }
let pctPrismaHex_1 = new THREE.Vector3(bazaPrismaHex[0], -15, bazaPrismaHex[1]); pctPrismaHex_1.name = "A";
let pctPrismaHex_2 = new THREE.Vector3(bazaPrismaHex[2], -15, bazaPrismaHex[3]); pctPrismaHex_2.name = "B";
let pctPrismaHex_3 = new THREE.Vector3(bazaPrismaHex[4], -15, bazaPrismaHex[5]); pctPrismaHex_3.name = "C";
let pctPrismaHex_4 = new THREE.Vector3(bazaPrismaHex[6], -15, bazaPrismaHex[7]); pctPrismaHex_4.name = "D";
let pctPrismaHex_5 = new THREE.Vector3(bazaPrismaHex[8], -15, bazaPrismaHex[9]); pctPrismaHex_5.name = "E";
let pctPrismaHex_6 = new THREE.Vector3(bazaPrismaHex[10], -15, bazaPrismaHex[11]); pctPrismaHex_6.name = "F";

let pctPrismaHex_7 = new THREE.Vector3(bazaPrismaHex[0], 15, bazaPrismaHex[1]); pctPrismaHex_7.name = "A'";
let pctPrismaHex_8 = new THREE.Vector3(bazaPrismaHex[2], 15, bazaPrismaHex[3]); pctPrismaHex_8.name = "B'";
let pctPrismaHex_9 = new THREE.Vector3(bazaPrismaHex[4], 15, bazaPrismaHex[5]); pctPrismaHex_9.name = "C'";
let pctPrismaHex_10 = new THREE.Vector3(bazaPrismaHex[6], 15, bazaPrismaHex[7]); pctPrismaHex_10.name = "D'";
let pctPrismaHex_11 = new THREE.Vector3(bazaPrismaHex[8], 15, bazaPrismaHex[9]); pctPrismaHex_11.name = "E'";
let pctPrismaHex_12 = new THREE.Vector3(bazaPrismaHex[10], 15, bazaPrismaHex[11]); pctPrismaHex_12.name = "F'";

let prismaHex_muchie_1_2 = new THREE.Line3(pctPrismaHex_1, pctPrismaHex_2);
let prismaHex_muchie_2_3 = new THREE.Line3(pctPrismaHex_2, pctPrismaHex_3);
let prismaHex_muchie_3_4 = new THREE.Line3(pctPrismaHex_3, pctPrismaHex_4);
let prismaHex_muchie_4_5 = new THREE.Line3(pctPrismaHex_4, pctPrismaHex_5);
let prismaHex_muchie_5_6 = new THREE.Line3(pctPrismaHex_5, pctPrismaHex_6);
let prismaHex_muchie_6_1 = new THREE.Line3(pctPrismaHex_6, pctPrismaHex_1);

let prismaHex_muchie_7_8 = new THREE.Line3(pctPrismaHex_7, pctPrismaHex_8);
let prismaHex_muchie_8_9 = new THREE.Line3(pctPrismaHex_8, pctPrismaHex_9);
let prismaHex_muchie_9_10 = new THREE.Line3(pctPrismaHex_9, pctPrismaHex_10);
let prismaHex_muchie_10_11 = new THREE.Line3(pctPrismaHex_10, pctPrismaHex_11);
let prismaHex_muchie_11_12 = new THREE.Line3(pctPrismaHex_11, pctPrismaHex_12);
let prismaHex_muchie_12_7 = new THREE.Line3(pctPrismaHex_12, pctPrismaHex_7);

let prismaHex_muchie_1_7 = new THREE.Line3(pctPrismaHex_1, pctPrismaHex_7);
let prismaHex_muchie_2_8 = new THREE.Line3(pctPrismaHex_2, pctPrismaHex_8);
let prismaHex_muchie_3_9 = new THREE.Line3(pctPrismaHex_3, pctPrismaHex_9);
let prismaHex_muchie_4_10 = new THREE.Line3(pctPrismaHex_4, pctPrismaHex_10);
let prismaHex_muchie_5_11 = new THREE.Line3(pctPrismaHex_5, pctPrismaHex_11);
let prismaHex_muchie_6_12 = new THREE.Line3(pctPrismaHex_6, pctPrismaHex_12);

function prismaHexagonala() {
    sterge();
    perspectivaXoY(17, -5, 40);
    addLinieBaza(prismaHex_muchie_1_2);
    addLinieBaza(prismaHex_muchie_2_3);
    addLinieBaza(prismaHex_muchie_3_4);
    addLinieBaza(prismaHex_muchie_4_5);
    addLinieBaza(prismaHex_muchie_5_6);
    addLinieBaza(prismaHex_muchie_6_1);
    
    addLinieBaza(prismaHex_muchie_7_8);
    addLinieBaza(prismaHex_muchie_8_9);
    addLinieBaza(prismaHex_muchie_9_10);
    addLinieBaza(prismaHex_muchie_10_11);
    addLinieBaza(prismaHex_muchie_11_12);
    addLinieBaza(prismaHex_muchie_12_7);
    
    addLinie(prismaHex_muchie_1_7);
    addLinie(prismaHex_muchie_2_8);
    addLinie(prismaHex_muchie_3_9);
    addLinie(prismaHex_muchie_4_10);
    addLinie(prismaHex_muchie_5_11);
    addLinie(prismaHex_muchie_6_12);

    let loaderPrismaHex = new THREE.FontLoader();
    loaderPrismaHex.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        let color = new THREE.Color(0x006699);

        let matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        let messageA = pctPrismaHex_1.name;
        let shapesA = font.generateShapes(messageA, 3);
        let geometryA = new THREE.ShapeBufferGeometry(shapesA);
        let textA = new THREE.Mesh(geometryA, matLite);
        textA.position.x = pctPrismaHex_1.getComponent(0) - 4;
        textA.position.y = pctPrismaHex_1.getComponent(1);
        textA.position.z = pctPrismaHex_1.getComponent(2);
        scene.add(textA);

        let messageB = pctPrismaHex_2.name;
        let shapesB = font.generateShapes(messageB, 3);
        let geometryB = new THREE.ShapeBufferGeometry(shapesB);
        let textB = new THREE.Mesh(geometryB, matLite);
        textB.position.x = pctPrismaHex_2.getComponent(0) + 2;
        textB.position.y = pctPrismaHex_2.getComponent(1);
        textB.position.z = pctPrismaHex_2.getComponent(2);
        scene.add(textB);

        let messageC = pctPrismaHex_3.name;
        let shapesC = font.generateShapes(messageC, 3);
        let geometryC = new THREE.ShapeBufferGeometry(shapesC);
        let textC = new THREE.Mesh(geometryC, matLite);
        textC.position.x = pctPrismaHex_3.getComponent(0) + 2;
        textC.position.y = pctPrismaHex_3.getComponent(1);
        textC.position.z = pctPrismaHex_3.getComponent(2);
        scene.add(textC);

        let messageD = pctPrismaHex_4.name;
        let shapesD = font.generateShapes(messageD, 3);
        let geometryD = new THREE.ShapeBufferGeometry(shapesD);
        let textD = new THREE.Mesh(geometryD, matLite);
        textD.position.x = pctPrismaHex_4.getComponent(0) - 4;
        textD.position.y = pctPrismaHex_4.getComponent(1);
        textD.position.z = pctPrismaHex_4.getComponent(2);
        scene.add(textD);

        let messageE = pctPrismaHex_5.name;
        let shapesE = font.generateShapes(messageE, 3);
        let geometryE = new THREE.ShapeBufferGeometry(shapesE);
        let textE = new THREE.Mesh(geometryE, matLite);
        textE.position.x = pctPrismaHex_5.getComponent(0) - 4;
        textE.position.y = pctPrismaHex_5.getComponent(1);
        textE.position.z = pctPrismaHex_5.getComponent(2);
        scene.add(textE);
        
        let messageF = pctPrismaHex_6.name;
        let shapesF = font.generateShapes(messageF, 3);
        let geometryF = new THREE.ShapeBufferGeometry(shapesF);
        let textF = new THREE.Mesh(geometryF, matLite);
        textF.position.x = pctPrismaHex_6.getComponent(0) - 4;
        textF.position.y = pctPrismaHex_6.getComponent(1);
        textF.position.z = pctPrismaHex_6.getComponent(2);
        scene.add(textF);
        
        let messageAprim = pctPrismaHex_7.name;
        let shapesAprim = font.generateShapes(messageAprim, 3);
        let geometryAprim = new THREE.ShapeBufferGeometry(shapesAprim);
        let textAprim = new THREE.Mesh(geometryAprim, matLite);
        textAprim.position.x = pctPrismaHex_7.getComponent(0) - 4;
        textAprim.position.y = pctPrismaHex_7.getComponent(1);
        textAprim.position.z = pctPrismaHex_7.getComponent(2);
        scene.add(textAprim);

        let messageBprim = pctPrismaHex_8.name;
        let shapesBprim = font.generateShapes(messageBprim, 3);
        let geometryBprim = new THREE.ShapeBufferGeometry(shapesBprim);
        let textBprim = new THREE.Mesh(geometryBprim, matLite);
        textBprim.position.x = pctPrismaHex_8.getComponent(0) + 2;
        textBprim.position.y = pctPrismaHex_8.getComponent(1);
        textBprim.position.z = pctPrismaHex_8.getComponent(2);
        scene.add(textBprim);

        let messageCprim = pctPrismaHex_9.name;
        let shapesCprim = font.generateShapes(messageCprim, 3);
        let geometryCprim = new THREE.ShapeBufferGeometry(shapesCprim);
        let textCprim = new THREE.Mesh(geometryCprim, matLite);
        textCprim.position.x = pctPrismaHex_9.getComponent(0) + 2;
        textCprim.position.y = pctPrismaHex_9.getComponent(1);
        textCprim.position.z = pctPrismaHex_9.getComponent(2);
        scene.add(textCprim);

        let messageDprim = pctPrismaHex_10.name;
        let shapesDprim = font.generateShapes(messageDprim, 3);
        let geometryDprim = new THREE.ShapeBufferGeometry(shapesDprim);
        let textDprim = new THREE.Mesh(geometryDprim, matLite);
        textDprim.position.x = pctPrismaHex_10.getComponent(0) - 4;
        textDprim.position.y = pctPrismaHex_10.getComponent(1);
        textDprim.position.z = pctPrismaHex_10.getComponent(2);
        scene.add(textDprim);

        let messageEprim = pctPrismaHex_11.name;
        let shapesEprim = font.generateShapes(messageEprim, 3);
        let geometryEprim = new THREE.ShapeBufferGeometry(shapesEprim);
        let textEprim = new THREE.Mesh(geometryEprim, matLite);
        textEprim.position.x = pctPrismaHex_11.getComponent(0) - 4;
        textEprim.position.y = pctPrismaHex_11.getComponent(1);
        textEprim.position.z = pctPrismaHex_11.getComponent(2);
        scene.add(textEprim);

        let messageFprim = pctPrismaHex_12.name;
        let shapesFprim = font.generateShapes(messageFprim, 3);
        let geometryFprim = new THREE.ShapeBufferGeometry(shapesFprim);
        let textFprim = new THREE.Mesh(geometryFprim, matLite);
        textFprim.position.x = pctPrismaHex_12.getComponent(0) - 4;
        textFprim.position.y = pctPrismaHex_12.getComponent(1);
        textFprim.position.z = pctPrismaHex_12.getComponent(2);
        scene.add(textFprim);
    });
}