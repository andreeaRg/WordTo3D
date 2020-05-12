// cerc

function cerc(){
    var geometry = new THREE.CircleGeometry( 13, 32 ); //(radius, nrSegments)
    var material = new THREE.MeshBasicMaterial( { color: 0xFFDEAD , side: THREE.DoubleSide } );
    var circle = new THREE.Mesh( geometry, material );
    circle.position.x = 0;
    circle.position.y = 13;
    circle.position.z = 0;
    scene.add( circle );
}
function cercDeVariabile(radius){
    var geometry = new THREE.CircleGeometry( radius, 32 ); //(radius, nrSegments)
    var material = new THREE.MeshBasicMaterial( { color: 0xFFDEAD, side: THREE.DoubleSide } );
    var circle = new THREE.Mesh( geometry, material );
    circle.position.x = 0;
    circle.position.y = 0;
    circle.position.z = 0;
    scene.add( circle );
}