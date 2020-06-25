var unghi90radians = 1.5707963268;

var o = centru_PirPatr;

function apotemaBazaPiramida() {
    piramidaPatrulateraRegulata();
    perspectivaXoYoZ(10, -5, 45);
    addLinie2Puncte(getMediana(o, pirPatr_baza_4_1));
    var loaderApotemaBazaPPatrulatera = new THREE.FontLoader();
    loaderApotemaBazaPPatrulatera.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        var color = new THREE.Color(0x006699);

        var matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        var messageM = "M";
        var shapesM = font.generateShapes(messageM, 3);
        var geometryM = new THREE.ShapeBufferGeometry(shapesM);
        var textM = new THREE.Mesh(geometryM, matLite);
        textM.position.x = pirPatr_baza_4_1.getCenter().getComponent(0) + 1;
        textM.position.y = pirPatr_baza_4_1.getCenter().getComponent(1);
        textM.position.z = pirPatr_baza_4_1.getCenter().getComponent(2);
        scene.add(textM);

        var messageO = "O";
        var shapesO = font.generateShapes(messageO, 3);
        var geometryO = new THREE.ShapeBufferGeometry(shapesO);
        var textO = new THREE.Mesh(geometryO, matLite);
        textO.position.x = o.getComponent(0) + 1;
        textO.position.y = o.getComponent(1);
        textO.position.z = o.getComponent(2);
        scene.add(textO);
    });
}

function apotemaPiramida() {
    piramidaPatrulateraRegulata();
    perspectivaXoYoZ(21, -5, 45);
    addLinieBaza(getMediana(pctPirPatr_vf, pirPatr_baza_4_1));
    var rotireX = calcUnghiRadian(o, pirPatr_baza_4_1.getCenter(), pctPirPatr_vf);
    addUnghiDrept(pirPatr_baza_4_1.getCenter(), -unghi90radians + rotireX, unghi90radians, 0, -0.8, 1.3, 1.5);

    var loaderApotemaPPatrulatera = new THREE.FontLoader();
    loaderApotemaPPatrulatera.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        var color = new THREE.Color(0x006699);

        var matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        var messageM = "M";
        var shapesM = font.generateShapes(messageM, 3);
        var geometryM = new THREE.ShapeBufferGeometry(shapesM);
        var textM = new THREE.Mesh(geometryM, matLite);
        textM.position.x = pirPatr_baza_4_1.getCenter().getComponent(0) + 1;
        textM.position.y = pirPatr_baza_4_1.getCenter().getComponent(1);
        textM.position.z = pirPatr_baza_4_1.getCenter().getComponent(2);
        scene.add(textM);


    });
}

function inaltimePiramida() {
    piramidaPatrulateraRegulata();
    var inaltimePPatrulatera = new THREE.Line3(pctPirPatr_vf, o);
    var diagonala1PPatrulatera = new THREE.Line3(pctPirPatr_1, pctPirPatr_3);
    var diagonala2PPatrulatera = new THREE.Line3(pctPirPatr_2, pctPirPatr_4);
    addLinieBaza(inaltimePPatrulatera);
    addLinie(diagonala1PPatrulatera);
    addLinie(diagonala2PPatrulatera);

    var loaderApotemaPPatrulatera = new THREE.FontLoader();
    loaderApotemaPPatrulatera.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        var color = new THREE.Color(0x006699);

        var matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        var messageO = "O";
        var shapesO = font.generateShapes(messageO, 3);
        var geometryO = new THREE.ShapeBufferGeometry(shapesO);
        var textO = new THREE.Mesh(geometryO, matLite);
        textO.position.x = o.getComponent(0) + 1;
        textO.position.y = o.getComponent(1);
        textO.position.z = o.getComponent(2);
        scene.add(textO);


    });
}