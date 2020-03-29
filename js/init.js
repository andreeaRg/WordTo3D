const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
controls = new THREE.OrbitControls(camera, renderer.domElement);
let domEvents = new THREEx.DomEvents(camera, renderer.domElement);
// var scene3d = document.getElementById("scene3d");

function init() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    window.addEventListener('resize', function () {
        var width = window.innerWidth;
        var height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });
    camera.position.z = 40;
    controls.minDistance = 1;
    controls.maxDistance = 1000;
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.setSize(600, 400);
    renderer.render(scene, camera);
}

init();
animate();