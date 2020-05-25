
var loaderTriOarecare = new THREE.FontLoader();
var loaderTriIsoscel = new THREE.FontLoader();
var loaderTriDreptunghic = new THREE.FontLoader();
var loaderTriDreptIsoscel = new THREE.FontLoader();
var loaderTriEchilateral = new THREE.FontLoader();
var loaderTriAscutitunghic = new THREE.FontLoader();
var loaderTriObtuz = new THREE.FontLoader();
var loaderTriOarecareUnghiExt = new THREE.FontLoader();

//TRINGHI OARECARE 
var t1 = new THREE.Vector3(-15, -15, 0); t1.name = "B";
var t2 = new THREE.Vector3(-5, 5, 0); t2.name = "A";
var t3 = new THREE.Vector3(20, -15, 0); t3.name = "C";

var t_linie1_2 = new THREE.Line3(t1, t2);
var t_linie2_3 = new THREE.Line3(t2, t3);
var t_linie3_1 = new THREE.Line3(t3, t1);

function triunghiOarecare() {
    sterge();
    perspectivaXoY(0, 0, 40);
    addLinieBaza(t_linie1_2);
    // desenUnghiSus(t_linie1_2.start,t_linie1_2.end,t_linie2_3.end);
    addLinieBaza(t_linie2_3);
    // desenUnghiDreaptaJos(t_linie2_3.start,t_linie2_3.end,t_linie3_1.end);
    addLinieBaza(t_linie3_1);
    // desenUnghiStangaJos(t_linie3_1.start,t_linie3_1.end,t_linie1_2.end);

    loaderTriOarecare.load('./js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        var color = new THREE.Color(0x006699);

        var matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        var messageA = "A";
        var shapesA = font.generateShapes(messageA, 3);
        var geometryA = new THREE.ShapeBufferGeometry(shapesA);
        var textA = new THREE.Mesh(geometryA, matLite);
        textA.position.x = t2.getComponent(0) - 1;
        textA.position.y = t2.getComponent(1) + 1;
        textA.position.z = t2.getComponent(2);
        scene.add(textA);

        var messageB = "B";
        var shapesB = font.generateShapes(messageB, 3);
        var geometryB = new THREE.ShapeBufferGeometry(shapesB);
        var textB = new THREE.Mesh(geometryB, matLite);
        textB.position.x = t1.getComponent(0) - 5;
        textB.position.y = t1.getComponent(1);
        textB.position.z = t1.getComponent(2);
        scene.add(textB);

        var messageC = "C";
        var shapesC = font.generateShapes(messageC, 3);
        var geometryC = new THREE.ShapeBufferGeometry(shapesC);
        var textC = new THREE.Mesh(geometryC, matLite);
        textC.position.x = t3.getComponent(0) + 3;
        textC.position.y = t3.getComponent(1);
        textC.position.z = t3.getComponent(2);
        scene.add(textC);

    });


}

//TRINGHI OARECARE UnghiExt

function triunghiOarecareUnghiExt() {
    sterge();
    perspectivaXoY(0, 0, 40);
    addLinieBaza(t_linie1_2);
    addLinieBaza(t_linie2_3);
    addLinieBaza(t_linie3_1);

    loaderTriOarecareUnghiExt.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        var color = new THREE.Color(0x006699);

        var matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        var messageA = "A";
        var shapesA = font.generateShapes(messageA, 3);
        var geometryA = new THREE.ShapeBufferGeometry(shapesA);
        var textA = new THREE.Mesh(geometryA, matLite);
        textA.position.x = t2.getComponent(0) - 1;
        textA.position.y = t2.getComponent(1) + 1;
        textA.position.z = t2.getComponent(2);
        scene.add(textA);

        var messageB = "B";
        var shapesB = font.generateShapes(messageB, 3);
        var geometryB = new THREE.ShapeBufferGeometry(shapesB);
        var textB = new THREE.Mesh(geometryB, matLite);
        textB.position.x = t1.getComponent(0) - 5;
        textB.position.y = t1.getComponent(1);
        textB.position.z = t1.getComponent(2);
        scene.add(textB);

        var messageC = "C";
        var shapesC = font.generateShapes(messageC, 3);
        var geometryC = new THREE.ShapeBufferGeometry(shapesC);
        var textC = new THREE.Mesh(geometryC, matLite);
        textC.position.x = t3.getComponent(0) + 3;
        textC.position.y = t3.getComponent(1) - 2;
        textC.position.z = t3.getComponent(2);
        scene.add(textC);

    });


}


//TRIUNGHI ISOSCEL
var t4 = new THREE.Vector3(-20, -15, 0); t4.name = "B";
var t5 = new THREE.Vector3(20, -15, 0); t5.name = "C";
var t6 = new THREE.Vector3(0, 5, 0); t6.name = "A";

var t_linie4_5 = new THREE.Line3(t4, t5);
var t_linie5_6 = new THREE.Line3(t5, t6);
var t_linie6_4 = new THREE.Line3(t6, t4);

function triunghiIsoscel() {
    sterge();
    perspectivaXoY(0, 0, 40);
    addLinieBaza(t_linie4_5);
    // desenUnghiSus(t_linie4_5.start,t_linie4_5.end,t_linie5_6.end);
    addLinieBaza(t_linie5_6);
    // desenUnghiDreaptaJos(t_linie5_6.start,t_linie5_6.end,t_linie6_4.end,4);
    // desenUnghiDreaptaJos(t_linie4_5.start, t_linie4_5.end, t_linie5_6.end, 4);
    addLinieBaza(t_linie6_4);
    // desenUnghiStangaJos(t_linie6_4.start, t_linie6_4.end, t_linie4_5.end, 4);
    loaderTriIsoscel.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        var color = new THREE.Color(0x006699);

        var matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        var messageA = "A";
        var shapesA = font.generateShapes(messageA, 3);
        var geometryA = new THREE.ShapeBufferGeometry(shapesA);
        var textA = new THREE.Mesh(geometryA, matLite);
        textA.position.x = t6.getComponent(0) - 1;
        textA.position.y = t6.getComponent(1) + 1;
        textA.position.z = t6.getComponent(2);
        scene.add(textA);

        var messageB = "B";
        var shapesB = font.generateShapes(messageB, 3);
        var geometryB = new THREE.ShapeBufferGeometry(shapesB);
        var textB = new THREE.Mesh(geometryB, matLite);
        textB.position.x = t4.getComponent(0) - 5;
        textB.position.y = t4.getComponent(1);
        textB.position.z = t4.getComponent(2);
        scene.add(textB);

        var messageC = "C";
        var shapesC = font.generateShapes(messageC, 3);
        var geometryC = new THREE.ShapeBufferGeometry(shapesC);
        var textC = new THREE.Mesh(geometryC, matLite);
        textC.position.x = t5.getComponent(0) + 3;
        textC.position.y = t5.getComponent(1);
        textC.position.z = t5.getComponent(2);
        scene.add(textC);

    });
}


//TRIUNGHI DREPTUNGHIC
var t7 = new THREE.Vector3(-10, -15, 0); t7.name = "B";
var t8 = new THREE.Vector3(-10, 5, 0); t8.name = "A";
var t9 = new THREE.Vector3(20, -15, 0); t9.name = "C";

var t_linie7_8 = new THREE.Line3(t7, t8);
var t_linie8_9 = new THREE.Line3(t8, t9);
var t_linie9_7 = new THREE.Line3(t9, t7);

function triunghiDreptunghic() {
    sterge();
    perspectivaXoY(0, 0, 40);
    addLinieBaza(t_linie7_8);
    addLinieBaza(t_linie8_9);
    addLinieBaza(t_linie9_7);
    addUnghiDrept(t7, 0, -1.5, 1.5);
    loaderTriDreptunghic.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        var color = new THREE.Color(0x006699);

        var matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        var messageA = "A";
        var shapesA = font.generateShapes(messageA, 3);
        var geometryA = new THREE.ShapeBufferGeometry(shapesA);
        var textA = new THREE.Mesh(geometryA, matLite);
        textA.position.x = t8.getComponent(0) - 1;
        textA.position.y = t8.getComponent(1) + 1;
        textA.position.z = t8.getComponent(2);
        scene.add(textA);

        var messageB = "B";
        var shapesB = font.generateShapes(messageB, 3);
        var geometryB = new THREE.ShapeBufferGeometry(shapesB);
        var textB = new THREE.Mesh(geometryB, matLite);
        textB.position.x = t7.getComponent(0) - 5;
        textB.position.y = t7.getComponent(1);
        textB.position.z = t7.getComponent(2);
        scene.add(textB);

        var messageC = "C";
        var shapesC = font.generateShapes(messageC, 3);
        var geometryC = new THREE.ShapeBufferGeometry(shapesC);
        var textC = new THREE.Mesh(geometryC, matLite);
        textC.position.x = t9.getComponent(0) + 3;
        textC.position.y = t9.getComponent(1);
        textC.position.z = t9.getComponent(2);
        scene.add(textC);

    });
}

//TRIUNGHI ECHIATERL
var t10 = new THREE.Vector3(-15, -15, 0); t10.name = "B";
var t11 = new THREE.Vector3(15, -15, 0); t11.name = "C";

var t_linie10_11 = new THREE.Line3(t10, t11);

var latura = t_linie10_11.distance();
var rad = 0.86;
var h = latura * rad;
var t12 = new THREE.Vector3(0, h - 15, 0); t12.name = "A";
var t_linie11_12 = new THREE.Line3(t11, t12);
var t_linie12_10 = new THREE.Line3(t12, t10);

function triunghiEchilateral() {
    sterge();
    perspectivaXoY(0, 0, 40);
    addLinieBaza(t_linie10_11);
    // desenUnghiSus(t_linie10_11.start,t_linie10_11.end,t_linie11_12.end);
    addLinieBaza(t_linie11_12);
    // desenUnghiDreaptaJos(t_linie11_12.start,t_linie11_12.end,t_linie12_10.end);
    addLinieBaza(t_linie12_10);
    // desenUnghiStangaJos(t_linie12_10.start,t_linie12_10.end,t_linie10_11.end);
    loaderTriEchilateral.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        var color = new THREE.Color(0x006699);

        var matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        var messageA = "A";
        var shapesA = font.generateShapes(messageA, 3);
        var geometryA = new THREE.ShapeBufferGeometry(shapesA);
        var textA = new THREE.Mesh(geometryA, matLite);
        textA.position.x = t12.getComponent(0) - 1;
        textA.position.y = t12.getComponent(1) + 1;
        textA.position.z = t12.getComponent(2);
        scene.add(textA);

        var messageB = "B";
        var shapesB = font.generateShapes(messageB, 3);
        var geometryB = new THREE.ShapeBufferGeometry(shapesB);
        var textB = new THREE.Mesh(geometryB, matLite);
        textB.position.x = t10.getComponent(0) - 5;
        textB.position.y = t10.getComponent(1);
        textB.position.z = t10.getComponent(2);
        scene.add(textB);

        var messageC = "C";
        var shapesC = font.generateShapes(messageC, 3);
        var geometryC = new THREE.ShapeBufferGeometry(shapesC);
        var textC = new THREE.Mesh(geometryC, matLite);
        textC.position.x = t11.getComponent(0) + 3;
        textC.position.y = t11.getComponent(1);
        textC.position.z = t11.getComponent(2);
        scene.add(textC);

    });
}

//TRIUNGHI DREPTUNGHIC ISOSCEL
var t13 = new THREE.Vector3(0, -15, 0); t13.name = "B";
var t14 = new THREE.Vector3(20, -15, 0); t14.name = "C";
var t15 = new THREE.Vector3(0, 5, 0); t15.name = "A";

var t_linie13_14 = new THREE.Line3(t13, t14);
var t_linie14_15 = new THREE.Line3(t14, t15);
var t_linie15_13 = new THREE.Line3(t15, t13);

function triunghiDreptunghicIsoscel() {
    sterge();
    perspectivaXoY(0, 0, 40);
    addLinieBaza(t_linie13_14);
    // desenUnghiSus(t_linie13_14.start,t_linie13_14.end,t_linie14_15.end);
    addLinieBaza(t_linie14_15);
    // desenUnghiDreaptaJos(t_linie14_15.start,t_linie14_15.end,t_linie15_13.end);
    addLinieBaza(t_linie15_13);
    // desenUnghiStangaJos(t_linie15_13.start,t_linie15_13.end,t_linie13_14.end);\
    loaderTriDreptIsoscel.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        var color = new THREE.Color(0x006699);

        var matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        var messageA = "A";
        var shapesA = font.generateShapes(messageA, 3);
        var geometryA = new THREE.ShapeBufferGeometry(shapesA);
        var textA = new THREE.Mesh(geometryA, matLite);
        textA.position.x = t15.getComponent(0) - 1;
        textA.position.y = t15.getComponent(1) + 1;
        textA.position.z = t15.getComponent(2);
        scene.add(textA);

        var messageB = "B";
        var shapesB = font.generateShapes(messageB, 3);
        var geometryB = new THREE.ShapeBufferGeometry(shapesB);
        var textB = new THREE.Mesh(geometryB, matLite);
        textB.position.x = t13.getComponent(0) - 5;
        textB.position.y = t13.getComponent(1);
        textB.position.z = t13.getComponent(2);
        scene.add(textB);

        var messageC = "C";
        var shapesC = font.generateShapes(messageC, 3);
        var geometryC = new THREE.ShapeBufferGeometry(shapesC);
        var textC = new THREE.Mesh(geometryC, matLite);
        textC.position.x = t14.getComponent(0) + 3;
        textC.position.y = t14.getComponent(1);
        textC.position.z = t14.getComponent(2);
        scene.add(textC);

    });
}

//TRIUNGHI Obtuzunghic
var t16 = new THREE.Vector3(0, -15, 0); t16.name = "B";
var t17 = new THREE.Vector3(20, -15, 0); t17.name = "C";
var t18 = new THREE.Vector3(-10, 20, 0); t18.name = "A";

var t_linie16_17 = new THREE.Line3(t16, t17);
var t_linie17_18 = new THREE.Line3(t17, t18);
var t_linie18_16 = new THREE.Line3(t18, t16);

function triunghiObtuzunghic() {
    sterge();
    perspectivaXoY(0, 0, 40);
    addLinieBaza(t_linie16_17);
    addLinieBaza(t_linie17_18);
    addLinieBaza(t_linie18_16);
    desenUnghiStangaJos(t17, t16, t18, 4);
    loaderTriObtuz.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        var color = new THREE.Color(0x006699);

        var matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        var messageA = "A";
        var shapesA = font.generateShapes(messageA, 3);
        var geometryA = new THREE.ShapeBufferGeometry(shapesA);
        var textA = new THREE.Mesh(geometryA, matLite);
        textA.position.x = t18.getComponent(0) - 1;
        textA.position.y = t18.getComponent(1) + 1;
        textA.position.z = t18.getComponent(2);
        scene.add(textA);

        var messageB = "B";
        var shapesB = font.generateShapes(messageB, 3);
        var geometryB = new THREE.ShapeBufferGeometry(shapesB);
        var textB = new THREE.Mesh(geometryB, matLite);
        textB.position.x = t16.getComponent(0) - 5;
        textB.position.y = t16.getComponent(1);
        textB.position.z = t16.getComponent(2);
        scene.add(textB);

        var messageC = "C";
        var shapesC = font.generateShapes(messageC, 3);
        var geometryC = new THREE.ShapeBufferGeometry(shapesC);
        var textC = new THREE.Mesh(geometryC, matLite);
        textC.position.x = t17.getComponent(0) + 3;
        textC.position.y = t17.getComponent(1);
        textC.position.z = t17.getComponent(2);
        scene.add(textC);

    });
}

//TRIUNGHI Ascutitunghic
var t19 = new THREE.Vector3(-10, -15, 0); t19.name = "B";
var t20 = new THREE.Vector3(15, -15, 0); t20.name = "C";
var t21 = new THREE.Vector3(0, 5, 0); t21.name = "A";

var t_linie19_20 = new THREE.Line3(t19, t20);
var t_linie20_21 = new THREE.Line3(t20, t21);
var t_linie21_19 = new THREE.Line3(t21, t19);

function triunghiAscutitunghic() {
    sterge();
    perspectivaXoY(0, 0, 40);
    addLinieBaza(t_linie19_20);
    addLinieBaza(t_linie20_21);
    addLinieBaza(t_linie21_19);
    loaderTriAscutitunghic.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        var color = new THREE.Color(0x006699);

        var matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        var messageA = "A";
        var shapesA = font.generateShapes(messageA, 3);
        var geometryA = new THREE.ShapeBufferGeometry(shapesA);
        var textA = new THREE.Mesh(geometryA, matLite);
        textA.position.x = t21.getComponent(0) - 1;
        textA.position.y = t21.getComponent(1) + 1;
        textA.position.z = t21.getComponent(2);
        scene.add(textA);

        var messageB = "B";
        var shapesB = font.generateShapes(messageB, 3);
        var geometryB = new THREE.ShapeBufferGeometry(shapesB);
        var textB = new THREE.Mesh(geometryB, matLite);
        textB.position.x = t19.getComponent(0) - 5;
        textB.position.y = t19.getComponent(1);
        textB.position.z = t19.getComponent(2);
        scene.add(textB);

        var messageC = "C";
        var shapesC = font.generateShapes(messageC, 3);
        var geometryC = new THREE.ShapeBufferGeometry(shapesC);
        var textC = new THREE.Mesh(geometryC, matLite);
        textC.position.x = t20.getComponent(0) + 3;
        textC.position.y = t20.getComponent(1);
        textC.position.z = t20.getComponent(2);
        scene.add(textC);

    });
}