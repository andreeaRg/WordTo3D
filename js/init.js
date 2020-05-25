const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
controls = new THREE.OrbitControls(camera, renderer.domElement);
let domEvents = new THREEx.DomEvents(camera, renderer.domElement);
// var scene3d = document.getElementById("scene3d");



//planul zOy
var planGeo = new THREE.PlaneGeometry(50, 50);
planGeo.rotateX(1.5707963268);
var planMat = new THREE.MeshBasicMaterial({
    color: 0xC0C0C0,
    side: THREE.DoubleSide,
    opacity: 0.1715,
    transparent: true
});
var planZoX = new THREE.Mesh(planGeo, planMat);
planZoX.position.y = -15;
scene.add(planZoX);
//axe xOyOz manuale
sistemCartezian(50, 50, 50);
scene.background = new THREE.Color(0xFFFFFF);

function addDatGui(){
    var gui = new dat.GUI();

    gui.add(camera.position, 'x', -70,70).step(5);
    gui.add(camera.position, 'y', -70,70).step(5);
    gui.add(camera.position, 'z', 10,250).step(5);

    // gui.position.y= 500;
    
    
}

function init() {
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild(renderer.domElement);
    document.getElementById("myScene").appendChild(renderer.domElement);
    // document.getElementsByClassName("myScene").appendChild( renderer.domElement );
    // window.addEventListener('resize', function () {
    //     var width = window.innerWidth;
    //     var height = window.innerHeight;
    //     camera.aspect = width / height;
    //     camera.updateProjectionMatrix();
    // });
    camera.position.x = 20;
    camera.position.y = 10;
    camera.position.z = 40;
    controls.minDistance = 1;
    controls.maxDistance = 1000;
    addDatGui();

}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.setSize(width, height);
    renderer.render(scene, camera);
}

var width; var height;
function startCanvas(scale) {
    let r =  window.innerWidth / window.innerHeight;
    width = scale * window.innerWidth ;
    height = scale * r * window.innerHeight > 0.8 * window.innerHeight? 0.8 * window.innerHeight :scale * r * window.innerHeight;
    // width = w;
    // height = h;
    init();
    animate();
}