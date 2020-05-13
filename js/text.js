var loader = new THREE.FontLoader();

loader.load( '../js/jsDoc/helvetiker_regular.typeface.json', function ( font ) {
	
	var xMid, text;

	var color = new THREE.Color( 0x006699 );

	var matDark = new THREE.MeshBasicMaterial( {
		color: color,
		side: THREE.DoubleSide
	} );

	var matLite = new THREE.MeshBasicMaterial( {
		color: color,
		transparent: true,
		opacity: 0.4,
		side: THREE.DoubleSide
	} );

	var messageA = "A";
	var messageB = "B";
	var messageC = "C";


	var shapes2 = font.generateShapes( messageB, 4 );
	var shapes3 = font.generateShapes( messageC, 4 );
	var shapes = font.generateShapes( messageA, 4 );

	var geometry2 = new THREE.ShapeBufferGeometry( shapes2 );
	var geometry3 = new THREE.ShapeBufferGeometry( shapes3 );
	var geometry = new THREE.ShapeBufferGeometry( shapes );

	// geometry.computeBoundingBox();

	// xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );

	// geometry.translate( xMid, 0, 0 );

	// make shape ( N.B. edge view not visible )

	text2 = new THREE.Mesh( geometry2, matLite );
	text2.position.x = 10;
	scene.add( text2 );
	text3 = new THREE.Mesh( geometry3, matLite );
	text3.position.x = -10;
	scene.add( text3 );
	text = new THREE.Mesh( geometry, matLite );
	text.position.x = 0;
	scene.add( text );

} );

