
var matUnghi = new THREE.MeshBasicMaterial({
    color: 0xb65454,
    side: THREE.DoubleSide,
    opacity: 0.3,
    transparent: true
});
var unghiDesen ;


function calcUnghi(B, A, C) {
    var c = new THREE.Line3(A, B).distance();
    var a = new THREE.Line3(B, C).distance();
    var b = new THREE.Line3(C, A).distance();
    var aUnghiRad = Math.acos((Math.pow(c, 2) + Math.pow(b, 2) - Math.pow(a, 2)) / (2 * c * b));
    var aUnghiDeg = radToDeg(aUnghiRad);
    return aUnghiDeg;
}

function calcUnghiRadian(Y, X, Z) {
    var z = new THREE.Line3(X, Y).distance();
    var x = new THREE.Line3(Y, Z).distance();
    var y = new THREE.Line3(Z, X).distance();
    var xUnghiRad = Math.acos((Math.pow(z, 2) + Math.pow(y, 2) - Math.pow(x, 2)) / (2 * z * y));
    return xUnghiRad;
}
// Desene bisectoare

function getBisectoare(x2, y2, z2) {
    var e1 = x2;
    var int = y2;
    var e2 = z2;
    var intE1 = new THREE.Line3(int, e1).distance();
    var intE2 = new THREE.Line3(int, e2).distance();
    var e1e2 = new THREE.Line3(e1, e2);
    var piciorB = e1e2.at(intE1 / (intE1 + intE2));
    return new THREE.Line3(int, piciorB);
}
function bisectoareTDesen() {
    triunghiOarecare();
    var bisectoareAD = getBisectoare(t2, t3, t1);
    addLinieBaza(bisectoareAD);
    desenUnghiDreaptaJos(t2, t3, t1, 4);
    
    var loaderbisectoareTDesen = new THREE.FontLoader();
    loaderbisectoareTDesen.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        var color = new THREE.Color(0x006699);

        var matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        var messageD = "D";
        var shapesD = font.generateShapes(messageD, 3);
        var geometryD = new THREE.ShapeBufferGeometry(shapesD);
        var textD = new THREE.Mesh(geometryD, matLite);
        textD.position.x = bisectoareAD.end.getComponent(0) -3;
        textD.position.y = bisectoareAD.end.getComponent(1);
        textD.position.z = bisectoareAD.end.getComponent(2);
        scene.add(textD);
    });
    
}
function bisectoareTeorie2(x3, y3, z3) {
    var Ex1 = x3;
    var Int = y3;
    var Ex2 = z3;
    var IntEx1 = new THREE.Line3(Int, Ex1).distance();
    var IntEx2 = new THREE.Line3(Int, Ex2).distance();
    var Ex1Ex2 = new THREE.Line3(Ex1, Ex2);
    var piciorBisectoare = Ex1Ex2.at(IntEx1 / (IntEx1 + IntEx2));

    addLinie(new THREE.Line3(Int, piciorBisectoare));
}
function unghiExterior() {
    triunghiOarecare();
    var pctExt = new THREE.Vector3(30, -15, 0); pctExt.name = "D";
    var t_linieUnghiExt = new THREE.Line3(t3, pctExt);
    addLinie(t_linieUnghiExt);//deseneaza latura sup unghi ext
    desenUnghiStangaJos(t2, t3, pctExt, 4);//deseneaza unghiul mare
}
function bisExterioara() {
    triunghiOarecare();
    var pctExt = new THREE.Vector3(30, -15, 0); pctExt.name = "D";
    var t_linieUnghiExt = new THREE.Line3(t3, pctExt);
    addLinie(t_linieUnghiExt);//linia suport unghi ext
    unghiExterior();
    bisectoareTeorie2(t2, t3, pctExt); //deseneaza bisectoarea
}
function bisectoareInterior_Exterior() {
    triunghiOarecare();
    var pctExt = new THREE.Vector3(30, -15, 0); pctExt.name = "D";
    var t_linieUnghiExt = new THREE.Line3(t3, pctExt);
    var unghirotire = calcUnghiRadian(getBisectoare(t2, t3, pctExt).end, t3, pctExt);
    addUnghiDrept(t3, 0,0,unghirotire, 0.9, 2, 0);//desenul unghiului
    bisectoareTeorie2(t2, t3, pctExt);//bis externa desen
    addLinie(t_linieUnghiExt);//linia suport unghi ext
    bisectoareTeorie2(t2, t3, t1);//bis interna desen
}
function centrulCerculuiInscris() {
    triunghiOarecare();
    bisectoareTeorie2(t2, t1, t3);
    bisectoareTeorie2(t1, t2, t3);
    // bisectoareTeorie2(t2, t3, t1);
    var bisAD = getBisectoare(t2, t3, t1);
    addLinie(bisAD);

    var loaderCentrulCerculuiInscris = new THREE.FontLoader();
    loaderCentrulCerculuiInscris.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        var color = new THREE.Color(0x006699);

        var matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        var messageI = "I";
        var shapesI = font.generateShapes(messageI, 3);
        var geometryI = new THREE.ShapeBufferGeometry(shapesI);
        var textI = new THREE.Mesh(geometryI, matLite);
        textI.position.x = bisAD.at(2 / 3).getComponent(0) - 5;
        textI.position.y = bisAD.at(2 / 3).getComponent(1)+2;
        textI.position.z = bisAD.at(2 / 3).getComponent(2);
        scene.add(textI);

        // var messageD = "D";
        // var shapesD = font.generateShapes(messageD, 3);
        // var geometryD = new THREE.ShapeBufferGeometry(shapesD);
        // var textD = new THREE.Mesh(geometryD, matLite);
        // textD.position.x = t_linie3_1.getCenter().getComponent(0)+2;
        // textD.position.y = t_linie3_1.getCenter().getComponent(1) ;
        // textD.position.z = t_linie3_1.getCenter().getComponent(2);
        // scene.add(textD);

        // var messageE = "E";
        // var shapesE = font.generateShapes(messageE, 3);
        // var geometryE = new THREE.ShapeBufferGeometry(shapesE);
        // var textE = new THREE.Mesh(geometryE, matLite);
        // textE.position.x = t_linie2_3.getCenter().getComponent(0)+2;
        // textE.position.y = t_linie2_3.getCenter().getComponent(1) ;
        // textE.position.z = t_linie2_3.getCenter().getComponent(2);
        // scene.add(textE);

        // var messageF = "F";
        // var shapesF = font.generateShapes(messageF, 3);
        // var geometryF = new THREE.ShapeBufferGeometry(shapesF);
        // var textF = new THREE.Mesh(geometryF, matLite);
        // textF.position.x = t_linie1_2.getCenter().getComponent(0)-2;
        // textF.position.y = t_linie1_2.getCenter().getComponent(1);
        // textF.position.z = t_linie1_2.getCenter().getComponent(2);
        // scene.add(textF);


    });
}
// end Desene bisectoare

function medianaTeorie() {
    triunghiOarecare();
    addLinieBaza(new THREE.Line3(t1, t_linie2_3.getCenter()));

    var loaderMedianaTeorie = new THREE.FontLoader();
    loaderMedianaTeorie.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        var color = new THREE.Color(0x006699);

        var matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        var messageD = "D";
        var shapesD = font.generateShapes(messageD, 3);
        var geometryD = new THREE.ShapeBufferGeometry(shapesD);
        var textD = new THREE.Mesh(geometryD, matLite);
        textD.position.x = t_linie2_3.getCenter().getComponent(0) + 1;
        textD.position.y = t_linie2_3.getCenter().getComponent(1);
        textD.position.z = t_linie2_3.getCenter().getComponent(2);
        scene.add(textD);
    });
}
function centrulDeGreutate() {
    triunghiOarecare();
    var linieAD = new THREE.Line3(t2, t_linie3_1.getCenter());
    addLinie(new THREE.Line3(t1, t_linie2_3.getCenter()));
    addLinie(linieAD);
    addLinie(new THREE.Line3(t3, t_linie1_2.getCenter()));

    var loadercentrulDeGreutate = new THREE.FontLoader();
    loadercentrulDeGreutate.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        var color = new THREE.Color(0x006699);

        var matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        var messageG = "G";
        var shapesG = font.generateShapes(messageG, 3);
        var geometryG = new THREE.ShapeBufferGeometry(shapesG);
        var textG = new THREE.Mesh(geometryG, matLite);
        textG.position.x = linieAD.at(2 / 3).getComponent(0) - 5.5;
        textG.position.y = linieAD.at(2 / 3).getComponent(1)+2;
        textG.position.z = linieAD.at(2 / 3).getComponent(2);
        scene.add(textG);

        // var messageD = "D";
        // var shapesD = font.generateShapes(messageD, 3);
        // var geometryD = new THREE.ShapeBufferGeometry(shapesD);
        // var textD = new THREE.Mesh(geometryD, matLite);
        // textD.position.x = t_linie3_1.getCenter().getComponent(0)+2;
        // textD.position.y = t_linie3_1.getCenter().getComponent(1) ;
        // textD.position.z = t_linie3_1.getCenter().getComponent(2);
        // scene.add(textD);

        // var messageE = "E";
        // var shapesE = font.generateShapes(messageE, 3);
        // var geometryE = new THREE.ShapeBufferGeometry(shapesE);
        // var textE = new THREE.Mesh(geometryE, matLite);
        // textE.position.x = t_linie2_3.getCenter().getComponent(0)+2;
        // textE.position.y = t_linie2_3.getCenter().getComponent(1) ;
        // textE.position.z = t_linie2_3.getCenter().getComponent(2);
        // scene.add(textE);

        // var messageF = "F";
        // var shapesF = font.generateShapes(messageF, 3);
        // var geometryF = new THREE.ShapeBufferGeometry(shapesF);
        // var textF = new THREE.Mesh(geometryF, matLite);
        // textF.position.x = t_linie1_2.getCenter().getComponent(0)-2;
        // textF.position.y = t_linie1_2.getCenter().getComponent(1);
        // textF.position.z = t_linie1_2.getCenter().getComponent(2);
        // scene.add(textF);


    });
}


function linieMijlocieTeorie() {
    triunghiOarecare();
    addLinie2Puncte(new THREE.Line3(t_linie1_2.getCenter(), t_linie2_3.getCenter()));
    var loaderLinieMijlocie = new THREE.FontLoader();
    loaderLinieMijlocie.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
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
        textM.position.x = t_linie2_3.getCenter().getComponent(0)+2;
        textM.position.y = t_linie2_3.getCenter().getComponent(1) ;
        textM.position.z = t_linie2_3.getCenter().getComponent(2);
        scene.add(textM);

        var messageN = "N";
        var shapesN = font.generateShapes(messageN, 3);
        var geometryN = new THREE.ShapeBufferGeometry(shapesN);
        var textN = new THREE.Mesh(geometryN, matLite);
        textN.position.x = t_linie1_2.getCenter().getComponent(0)-4;
        textN.position.y = t_linie1_2.getCenter().getComponent(1);
        textN.position.z = t_linie1_2.getCenter().getComponent(2);
        scene.add(textN);


    });
}
function inaltimeTeorie() {
    triunghiOarecare();
    var piciorInaltime = new THREE.Vector3(t2.getComponent(0), -15, 0);
    addUnghiDrept(piciorInaltime,0,0, 0, 1.5, 1.5, 0);
    addLinieBaza(new THREE.Line3(t2, piciorInaltime));
    var loaderInaltime = new THREE.FontLoader();
    loaderInaltime.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        var color = new THREE.Color(0x006699);

        var matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        var messageD = "D";
        var shapesD = font.generateShapes(messageD, 3);
        var geometryD = new THREE.ShapeBufferGeometry(shapesD);
        var textD = new THREE.Mesh(geometryD, matLite);
        textD.position.x = t2.getComponent(0)+3;
        textD.position.y = t_linie3_1.getCenter().getComponent(1) ;
        textD.position.z = t_linie3_1.getCenter().getComponent(2);
        scene.add(textD);
    });

}
function ortocentrul() {
    triunghiOarecare();
    addLinie(new THREE.Line3(t1, t_linie2_3.at(0.2)));
    addLinie(new THREE.Line3(t2, new THREE.Vector3(t2.getComponent(0), -15, 0)));
    addLinie(new THREE.Line3(t3, t_linie1_2.at(0.61)));
    var piciorInaltime = new THREE.Vector3(t2.getComponent(0), -15, 0);
    var hAD = new THREE.Line3(t2, piciorInaltime);

    var loaderOrtocentrul = new THREE.FontLoader();
    loaderOrtocentrul.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        var color = new THREE.Color(0x006699);

        var matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        var messageH = "H";
        var shapesH = font.generateShapes(messageH, 3);
        var geometryH = new THREE.ShapeBufferGeometry(shapesH);
        var textH = new THREE.Mesh(geometryH, matLite);
        textH.position.x = hAD.at(2 / 3).getComponent(0) + 3.5;
        textH.position.y = hAD.at(2 / 3).getComponent(1)+3;
        textH.position.z = hAD.at(2 / 3).getComponent(2);
        scene.add(textH);
    });
}


function mediatoareTeorie() {
    triunghiOarecare();
    var pct1 = new THREE.Vector3(t_linie3_1.getCenter().getComponent(0), t_linie3_1.getCenter().getComponent(1) + 10, t_linie3_1.getCenter().getComponent(2));
    var pct2 = new THREE.Vector3(t_linie3_1.getCenter().getComponent(0), t_linie3_1.getCenter().getComponent(1) - 10, t_linie3_1.getCenter().getComponent(2));
    addLinie(new THREE.Line3(pct1, pct2));
    addUnghiDrept(pct1, 0,0,0, 1.5, 1.5 - 10, 0);
    addPoint(t_linie3_1.getCenter());

    var loaderMediatoare = new THREE.FontLoader();
    loaderMediatoare.load('../js/jsDoc/helvetiker_regular.typeface.json', function (font) {
        var color = new THREE.Color(0x006699);

        var matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        var messageD = "D";
        var shapesD = font.generateShapes(messageD, 3);
        var geometryD = new THREE.ShapeBufferGeometry(shapesD);
        var textD = new THREE.Mesh(geometryD, matLite);
        textD.position.x = t_linie3_1.getCenter().getComponent(0)+2;
        textD.position.y = t_linie3_1.getCenter().getComponent(1) ;
        textD.position.z = t_linie3_1.getCenter().getComponent(2);
        scene.add(textD);
    });

}

function getMediana(pct, linie3) {
    return new THREE.Line3(pct, linie3.getCenter());
}


function drawMediana() {
    if (selectedPoint == null || selectedLine == null)
        return;

    addLinieBaza(getMediana(selectedPoint, selectedLine));
}

function getLinieMijlocie(line1, line2) {
    return new THREE.Line3(line1.getCenter(), line2.getCenter());
}

function drawLinieMijlocie() { 
    if (selectedLines.length != 2 || selectedLines[0] == null && selectedLines[1] == null)
        return;

    addLinie(getLinieMijlocie(linesMap.get(selectedLines[0]), linesMap.get(selectedLines[1])));
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

function getBisectoareAtelier(pct, linie3) {
    var A = pct;
    var B = linie3.start;
    var C = linie3.end;
    var AB = new THREE.Line3(pct, B).distance();
    var AC = new THREE.Line3(pct, C).distance();
    var D = linie3.at(AB / (AB + AC));

    return new THREE.Line3(A, D);
}

function drawBisectoare() {
    if (selectedPoints[0] == null || selectedPoints[1] == null || selectedPoints[2] == null)
        return;

    addLinieBaza(getBisectoarePct()); // addLinieBaza(getBisectoareAtelier(selectedPoint, selectedLine));
}

function addUnghiDrept(pct1, unghiRotireX,unghiRotireY,unghiRotireZ, x0, y0, z0) {
    var unghiDreptGeom = new THREE.PlaneGeometry(3, 3);
    unghiDreptGeom.rotateX(unghiRotireX);
    unghiDreptGeom.rotateY(unghiRotireY);
    unghiDreptGeom.rotateZ(unghiRotireZ);

    var unghiDrepMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        side: THREE.DoubleSide,
        opacity: 0.3,
        transparent: true
    });
    var unghiDrept = new THREE.Mesh(unghiDreptGeom, unghiDrepMaterial);
    unghiDrept.position.x = pct1.getComponent(0) + x0;
    unghiDrept.position.y = pct1.getComponent(1) + y0;
    unghiDrept.position.z = pct1.getComponent(2) + z0;
    scene.add(unghiDrept);
}

function desenUnghiDreaptaJos(E1, INT, E2, R) {
    var unghi = calcUnghiRadian(E1, INT, E2);
    var geometry = new THREE.CircleGeometry(R, 32, Math.PI - unghi, unghi);
    unghiDesen = new THREE.Mesh(geometry, matUnghi);
    unghiDesen.position.x = INT.getComponent(0);
    unghiDesen.position.y = INT.getComponent(1);
    unghiDesen.position.z = INT.getComponent(2);
    scene.add(unghiDesen);
}

function desenUnghiStangaJos(Ext1, In, Ext2, ra) {
    var unghi = calcUnghiRadian(Ext1, In, Ext2);
    var geometry = new THREE.CircleGeometry(ra, 32, 0, unghi);

    unghiDesen = new THREE.Mesh(geometry, matUnghi);
    unghiDesen.position.x = In.getComponent(0);
    unghiDesen.position.y = In.getComponent(1);
    unghiDesen.position.z = In.getComponent(2);
    scene.add(unghiDesen);
}

function desenUnghiSus(EX1, INTERIOR, EX2, Ra) {
    var unghi = calcUnghiRadian(EX1, INTERIOR, EX2);
    var unghiJos = calcUnghiRadian(INTERIOR, EX1, EX2);
    var geometryUnghi = new THREE.CircleGeometry(Ra, 32, Math.PI + unghiJos, unghi);

    unghiDesen = new THREE.Mesh(geometryUnghi, matUnghi);
    unghiDesen.position.x = INTERIOR.getComponent(0);
    unghiDesen.position.y = INTERIOR.getComponent(1);
    unghiDesen.position.z = INTERIOR.getComponent(2);
    scene.add(unghiDesen);
}

function getInaltime(pct, linie3) {
    var x = linie3.start.getComponent(0);
    var y = linie3.start.getComponent(1);
    for (i = linie3.start.getComponent(0); i < linie3.end.getComponent(0); i) {

    }
    return new THREE.Line3(pct, linie3.getCenter());
}

