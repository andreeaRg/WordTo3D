
function init(){
  const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', function () {
        var width = window.innerWidth;
        var height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.minDistance = 1;
    controls.maxDistance = 1000;
    
    const animate = () => {
    
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    
    };
    
    animate();
}

function linie(x1, y1, z1, x2, y2, z2) {
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(x1, y1, z1));//-20,0,0
    geometry.vertices.push(new THREE.Vector3(x2, y2, z2));// 0, 20, 0

    var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    var line = new THREE.Line(geometry, material);
    scene.add(line);
}