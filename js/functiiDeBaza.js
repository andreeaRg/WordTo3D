
const matPointOff = new THREE.MeshBasicMaterial({color: 0x0000ff });
const matPointOn = new THREE.MeshBasicMaterial({ color: 0xff0033 });
const materialOn = new THREE.LineBasicMaterial({ color: 0xff0033 });
const materialOff = new THREE.LineBasicMaterial({ color: 0x0000ff });
const matLinie = new THREE.LineBasicMaterial({ color: 0x0000ff, linewidth: 10 });

function radToDeg(radians) {
    return radians * rad2deg;
}

function degToRad(degree) {
    return degree * deg2rad;
}

function nameLine(line) {
    line.name = line.start.name + line.end.name;
}

function toLine(line3) {
    var geometry = new THREE.Geometry();
    geometry.vertices.push(line3.start);
    geometry.vertices.push(line3.end);
    return new THREE.Line(geometry, matLinie);
}

function sistemCartezian(x, y, z) {
    var lungimeSageata = 2;
    var pO = new THREE.Vector3(0, 0, 0);

    // in colt stanga spate
    var p1 = new THREE.Vector3(-25, -15, -25);
    var pX = new THREE.Vector3(x - 25, -15, -25);
    var pY = new THREE.Vector3(-25, y - 15, -25);
    var pZ = new THREE.Vector3(-25, -15, z - 25);
    var linieOX = new THREE.Line3(p1, pX); var axaOX = toLine(linieOX);
    var linieOY = new THREE.Line3(p1, pY); var axaOY = toLine(linieOY);
    var linieOZ = new THREE.Line3(p1, pZ); var axaOZ = toLine(linieOZ);

    //  in mijlocul planului
    var pX_ = new THREE.Vector3(x, 0, 0);
    var pY_ = new THREE.Vector3(0, y, 0);
    var pZ_ = new THREE.Vector3(0, 0, z);
    var pXneg = new THREE.Vector3(-x, 0, 0);
    var pYneg = new THREE.Vector3(0, -y, 0);
    var pZneg = new THREE.Vector3(0, 0, -z);
    // var linieOX = new THREE.Line3(pXneg, pX_);  var axaOX = toLine(linieOX);    
    // var linieOY = new THREE.Line3(pYneg, pY_);  var axaOY = toLine(linieOY);
    // var linieOZ = new THREE.Line3(pZneg, pZ_);  var axaOZ = toLine(linieOZ);

    axaOX.material = new THREE.LineBasicMaterial({ color: 0xF80014 });
    axaOY.material = new THREE.LineBasicMaterial({ color: 0x3f00ff });
    axaOZ.material = new THREE.LineBasicMaterial({ color: 0x21fc0d });

    var sageataOXsus = new THREE.Line3(pX, new THREE.Vector3(x - lungimeSageata - 25, lungimeSageata - 15, 0 - 25));
    var sageataOXjos = new THREE.Line3(pX, new THREE.Vector3(x - lungimeSageata - 25, -lungimeSageata - 15, 0 - 25));
    var sageataOXs = toLine(sageataOXsus);
    sageataOXs.material = new THREE.LineBasicMaterial({ color: 0xF80014 });
    var sageataOXj = toLine(sageataOXjos);
    sageataOXj.material = new THREE.LineBasicMaterial({ color: 0xF80014 });

    var sageataOYsus = new THREE.Line3(pY, new THREE.Vector3(lungimeSageata - 25, y - lungimeSageata - 15, 0 - 25));
    var sageataOYjos = new THREE.Line3(pY, new THREE.Vector3(-lungimeSageata - 25, y - lungimeSageata - 15, 0 - 25));
    var sageataOYs = toLine(sageataOYsus);
    sageataOYs.material = new THREE.LineBasicMaterial({ color: 0x3f00ff });
    var sageataOYj = toLine(sageataOYjos);
    sageataOYj.material = new THREE.LineBasicMaterial({ color: 0x3f00ff });

    var sageataOZsus = new THREE.Line3(pZ, new THREE.Vector3(-lungimeSageata - 25, 0 - 15, z - lungimeSageata - 25));
    var sageataOZjos = new THREE.Line3(pZ, new THREE.Vector3(lungimeSageata - 25, 0 - 15, z - lungimeSageata - 25));


    var sageataOZs = toLine(sageataOZsus);
    sageataOZs.material = new THREE.LineBasicMaterial({ color: 0x21fc0d });
    var sageataOZj = toLine(sageataOZjos);
    sageataOZj.material = new THREE.LineBasicMaterial({ color: 0x21fc0d });

    scene.add(axaOX);
    scene.add(axaOY);
    scene.add(axaOZ);

    scene.add(sageataOXs);
    scene.add(sageataOXj);

    scene.add(sageataOYs);
    scene.add(sageataOYj);

    scene.add(sageataOZs);
    scene.add(sageataOZj);
}

function addPoint(pct) {
    var geomSfera = new THREE.SphereGeometry(16, 16, 16);

    var point = new THREE.Mesh(geomSfera, matPointOff);
    let scala = 0.05;
    let scalaBig = 0.08;

    point.scale.set(scala, scala, scala);
    point.position.x = pct.getComponent(0);
    point.position.y = pct.getComponent(1);
    point.position.z = pct.getComponent(2);
    point.name = "Sfera:" + pct.name;

    scene.add(point);

    domEvents.addEventListener(point, 'click', event => {
        clickSfera(point);
        clickP(pct)
    });

    domEvents.addEventListener(point, 'mouseover', event => {
        point.material = matPointOn;
        point.scale.set(scalaBig, scalaBig, scalaBig);
    });

    domEvents.addEventListener(point, 'mouseout', event => {
        var condition = selectedSphere ? selectedSphere.name != point.name : true
        if(condition)
            point.material = matPointOff;
        point.scale.set(scala, scala, scala);
    });
}

function addLinieBaza(line3) {
    nameLine(line3);
    let l = toLine(line3);
    linesMap.set(l, line3);
    // let l = line3To2(line3);
    // linesMap3To2.set(l, line3);
    addPoint(line3.end);
    scene.add(l);
    domEvents.addEventListener(l, 'click', event => { clickL(l); });
    domEvents.addEventListener(l, 'mouseover', event => {
        l.material = materialOn;
    });
    domEvents.addEventListener(l, 'mouseout', event => {
        if(selectedLines.indexOf(l) == -1 )
            l.material = materialOff;
    });
}

function addLinie2Puncte(line3) {
    let l = toLine(line3);
    linesMap.set(l, line3);
    addPoint(line3.start);
    addPoint(line3.end);
    scene.add(l);

    domEvents.addEventListener(l, 'click', event => { clickL(l); });
    domEvents.addEventListener(l, 'mouseover', event => {
        l.material = materialOn;
    });
    domEvents.addEventListener(l, 'mouseout', event => {
        if(selectedLines.indexOf(l) == -1 )
            l.material = materialOff;
    });
     
}

function addLinie(line3) {
    let l = toLine(line3);
    linesMap.set(l, line3);
    scene.add(l);

    domEvents.addEventListener(l, 'click', event => { clickL(l); });
    domEvents.addEventListener(l, 'mouseover', event => {
        l.material = materialOn;
    });
    domEvents.addEventListener(l, 'mouseout', event => {
        if(selectedLines.indexOf(l) == -1 )
            l.material = materialOff;
    });
}

function stergeAtelier() {
    scene = new THREE.Scene();
    scene.add(planZoX);
    //axe xOyOz manuale
    sistemCartezian(50, 50, 50);
    scene.background = new THREE.Color(0xFFFFFF);
}

function sterge() {
    scene = new THREE.Scene();
    scene.add(planZoX);
    // //axe xOyOz manuale
    // sistemCartezian(50, 20, 50);
    scene.background = new THREE.Color(0xFFFFFF);
}

function undo() {
    scene.remove(scene.children[scene.children.length - 1]);
}

function refreshP() {
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 40;
}

function rotateCamH(step) {
    if(camera.position.x + step > 50 || camera.position.x + step < -50)
        return;
    camera.position.x += step;
}

function rotateCamV(step) {
    if(camera.position.y + step > 50 || camera.position.y + step < -50)
        return;
    camera.position.y += step;
}

function perspectivaXoY(x, y,z) {
    camera.position.x = x;
    camera.position.y = y;
    camera.position.z = z;

}