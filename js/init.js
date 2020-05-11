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
    opacity: 0.3,
    transparent: true
});
var planZoY = new THREE.Mesh(planGeo, planMat);
scene.add(planZoY);
//axe xOyOz manuale
sistemCartezian(50, 20, 50);
scene.background = new THREE.Color(0xFFFFFF);

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
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.setSize(width, height);
    renderer.render(scene, camera);
}
var width; var height;
function startCanvas(w, h) {
    width = w;
    height = h;
    init();
    animate();
}