const scene = new THREE.Scene();
			
			const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
			
			const renderer = new THREE.WebGLRenderer();
			renderer.setSize(window.innerWidth, window.innerHeight);
			document.body.appendChild(renderer.domElement);
			
			window.addEventListener( 'resize', function( ){
				var width =window.innerWidth;
				var height = window.innerHeight;
				renderer.setSize(width,height);
				camera.aspect = width/height;
				camera.updateProjectionMatrix();
			});
			
			//var geomTriunghi = new THREE.Triangle( new THREE.Vector3( -10, 0, 0), new THREE.Vector3( 0, 10, 0), new THREE.Vector3( 10, 0, 0) ) ;
			
			var matTriunghi = new THREE.MeshBasicMaterial({color: 0x0000ff});
			//var triunghi = new THREE.()
							//linia 1
				var geometry1 = new THREE.Geometry();
				geometry1.vertices.push(new THREE.Vector3( -20, 0, 0) );
				geometry1.vertices.push(new THREE.Vector3( 0, 20, 0) );
				
				var material1 = new THREE.LineBasicMaterial( { color: 0x0000ff } );
				var line1 = new THREE.Line( geometry1, material1 );
				scene.add( line1 );
				
							//linia 2
				var geometry2 = new THREE.Geometry();
				geometry2.vertices.push(new THREE.Vector3( -20, 0, 0) );
				geometry2.vertices.push(new THREE.Vector3( 20, 0, 0) );

				var material2 = new THREE.LineBasicMaterial( { color: 0x0000ff } );
				var line2 = new THREE.Line( geometry2, material2 );
				scene.add( line2 );
				
							//linia 3
				var geometry3 = new THREE.Geometry();
				geometry3.vertices.push(new THREE.Vector3( 20, 0, 0) );
				geometry3.vertices.push(new THREE.Vector3( 0, 20, 0) );

				var material3 = new THREE.LineBasicMaterial( { color: 0x0000ff } );
				var line3 = new THREE.Line( geometry3, material3 );
				scene.add( line3 );
				
		
			camera.position.z= 40;
			
			const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
			let line1Clicked = false;
			let line2Clicked = false;
			let line3Clicked = false;
			
			domEvents.addEventListener(line1, 'mouseover', event => {
				if(!line1Clicked){
					line1.material = new THREE.LineBasicMaterial( { color: 0x0888ff } );
					line1Clicked = true;
				}
				else {
					line1.material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
					line1Clicked = false;
				};
			});
			
			//domEvents.addEventListener(line1, 'click', event => {
				
			//})
			
			domEvents.addEventListener(line2, 'mouseover', event => {
				if(!line2Clicked){
					line2.material = new THREE.LineBasicMaterial( { color: 0x8888ff } );
					line2Clicked = true;
				}
				else {
					line2.material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
					line2Clicked = false;
				};
			});
			
			domEvents.addEventListener(line3, 'mouseover', event => {
				if(!line3Clicked){
					line3.material = new THREE.LineBasicMaterial( { color: 0x4444ff } );
					line3Clicked = true;
				}
				else {
					line3.material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
					line3Clicked = false;
				};
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