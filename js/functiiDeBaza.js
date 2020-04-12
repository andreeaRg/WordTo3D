
function radToDeg(radians) {
    return radians * rad2deg;
}

function addPoint(pct) {
    // console.log("Punct:"+scene+", "+pct+", "+scene.getObjectByName(pct));
    // if (!scene.getObjectByName(pct.name))
    //     return;

    const geometry1 = new THREE.SphereGeometry(16, 16, 16);
    const point = new THREE.Mesh(geometry1, matPoint);
    let scala = 0.1;
    let scalaBig = 0.3;

    point.scale.set(scala, scala, scala);
    point.position.x = pct.getComponent(0);
    point.position.y = pct.getComponent(1);
    point.position.z = pct.getComponent(2);
    point.name = "Sfera:" + pct.name;

    scene.add(point);

    domEvents.addEventListener(point, 'mouseover', event => {
        point.scale.set(scalaBig, scalaBig, scalaBig);
    });
    domEvents.addEventListener(point, 'mouseout', event => {
        point.scale.set(scala, scala, scala);
    });
    domEvents.addEventListener(point, 'click', event => {
        clickSfera(point);
        clickP(pct)
    });
}

function nameLine(line) {
    line.name = line.start.name + line.end.name;
}

function toLine(line3) {
    var geometry = new THREE.Geometry();
    geometry.vertices.push(line3.start);
    geometry.vertices.push(line3.end);

    return new THREE.Line(
        geometry,
        matLinie
    );

}

function addLinieBaza(line3) {
    nameLine(line3);
    let l = toLine(line3);
    linesMap.set(l, line3);
    addPoint(line3.end);
    scene.add(l);
    domEvents.addEventListener(l, 'click', event => { clickL(l); });
    domEvents.addEventListener(l, 'mouseover', event => {
        l.material = new THREE.LineBasicMaterial({ color: 0x550055 });
    });
    domEvents.addEventListener(l, 'mouseout', event => {
        l.material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    });
}

function addLinie(line3) {
    let l = toLine(line3);
    linesMap.set(l, line3);
    addPoint(line3.start);
    addPoint(line3.end);
    scene.add(l);

    domEvents.addEventListener(l, 'click', event => { clickL(l); });
}

function sterge() {
    scene = new THREE.Scene();
}

function undo() {
    scene.remove(scene.children[scene.children.length - 1]);
}

function refresP() {
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 40;
}
