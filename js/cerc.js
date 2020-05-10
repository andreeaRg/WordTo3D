// cerc

function cerc(radius){
    var geometry = new THREE.CircleGeometry( radius, 32 ); //(radius, nrSegments)
    var material = new THREE.MeshBasicMaterial( { color: 0xFFDEAD } );
    var circle = new THREE.Mesh( geometry, material );
    circle.position.x = 0;
    circle.position.y = 0;
    circle.position.z = 0;
    scene.add( circle );
}