
const materialOn = new THREE.LineBasicMaterial({ color: 0x550055 });
const materialOff = new THREE.LineBasicMaterial({ color: 0x0000ff });

//adugarea de text in canvas
// var loader = new THREE.FontLoader();
// loader.load( './js/jsDoc/helvetiker_regular.typeface.json', function ( font ) {

// 	var geometry = new THREE.TextBufferGeometry( 'Hello three.js!', {
// 		font: font,
// 		size: 80,
// 		height: 5,
// 		curveSegments: 12,
// 		bevelEnabled: true,
// 		bevelThickness: 10,
// 		bevelSize: 8,
// 		bevelOffset: 0,
// 		bevelSegments: 5
// 	} );
// } );

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
    return new THREE.Line(geometry, matLinie);
}

// function line3To2(line3) {
//     var l2geom = new LineGeometry();
//     let pos = []
//     pos.push(line3.start.x, line3.start.y, line3.start.z);
//     pos.push(line3.end.x, line3.end.y, line3.end.z);
//     l2geom.setPositions(pos);

//     var line2 = new Line2(l2geom, fatLineMaterial);
//     line2.computeLineDistances();
//     line2.scale.set(1, 1, 1);
//     return line2;
// }

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
        // l.material = fatLineMaterialOn;
    });
    domEvents.addEventListener(l, 'mouseout', event => {
        l.material = materialOff;
        // l.material = fatLineMaterialOff;
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
    scene.background = new THREE.Color(0xf0f0f0);
    scene.add( axesHelper );      
    scene.add(planZoY);
}

function undo() {
    scene.remove(scene.children[scene.children.length - 1]);
}

function refresP() {
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 40;
}
