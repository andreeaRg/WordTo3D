var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;

const matLinie = new THREE.LineBasicMaterial({ color: 0x0000ff });
const matPoint = new THREE.MeshNormalMaterial({ wireframe: true });

var linesMap = new Map();

var clickLine = '';
var clickPoint = '';
var selectedPoint;
var selectedLine;

// When the user scrolls down 20px from the top of the document, 
// slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

//FUNCTIA BUTON
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
  }
  
  // Close the dropdown if the user clicks outside of it fct1
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            if(i%2){
                openDropdown.classList.remove('show');
            }
        }
      }
    }
  }
  // // Close the dropdown if the user clicks outside of it fct2
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn2')) {
      var dropdowns = document.getElementsByClassName("dropdown-content2");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show2')) {
            if(i%2){
                openDropdown.classList.remove('show2');
            }
        }
      }
    }
  }
function radToDeg(radians) {
    return radians * rad2deg;
}

function calcUnghi(B, A, C) {
    var c = new THREE.Line3(A, B).distance();
    var a = new THREE.Line3(B, C).distance();
    var b = new THREE.Line3(C, A).distance();
    var aUnghiRad = Math.acos((Math.pow(c, 2) + Math.pow(b, 2) - Math.pow(a, 2)) / (2 * c * b));
    var aUnghiDeg = radToDeg(aUnghiRad);
    return aUnghiDeg;
}

function selectL() {
    console.log(clickLine);
    if (clickLine != 'select') {
        clickLine = 'select';
        if (!event.target.matches( document.getElementById("clkL")))
             document.getElementById("clkL").style.borderStyle = "inset";
        
        // if (!event.target.matches("clkL2"))
        else if(!event.target.matches( document.getElementById("clkL2")))
            document.getElementById("clkL2").style.borderStyle = "inset";
        
    }
    else if (clickLine == 'select') {
        clickLine = '';
        if (!event.target.matches( document.getElementById("clkL")))
             document.getElementById("clkL").style.borderStyle = "outset";
        else if(!event.target.matches( document.getElementById("clkL2")))
             document.getElementById("clkL2").style.borderStyle = "outset";
    }

}

function clickL(line2D) {
    console.log(clickLine);

    if (clickLine == "select") {
        selectedLine = linesMap.get(line2D);
        if (!event.target.matches( document.getElementById("selL")))
            document.getElementById("selL").textContent = selectedLine.name;
        else if(!event.target.matches( document.getElementById("selL2")))
            document.getElementById("selL2").textContent = selectedLine.name;
    }
    else if (clickLine == 'del')
        scene.remove(line2D);
}

function clickSfera(point) {
    console.log(clickPoint);

    if (clickPoint == 'del') {
        // selectedPoint = point;
        scene.remove(point);
    }
}
function selectP() {
    console.log(clickPoint);
    if (clickPoint != 'select') {
        clickPoint = 'select';
        if (!event.target.matches( document.getElementById("clkP")))
            document.getElementById("clkP").style.borderStyle = "inset";
        else if (!event.target.matches( document.getElementById("clkP2")))
            document.getElementById("clkP2").style.borderStyle = "inset";
    }

    else if (clickPoint == 'select') {
        clickPoint = '';
        if (!event.target.matches( document.getElementById("clkP")))
            document.getElementById("clkP").style.borderStyle = "outset";
        else if (!event.target.matches( document.getElementById("clkP2")))
            document.getElementById("clkP2").style.borderStyle = "outset";
    }

}
function  clickP(pct) {
    console.log(clickPoint);
    if (clickPoint == 'select') {
        selectedPoint = pct;
        if (!event.target.matches( document.getElementById("selP")))
            document.getElementById("selP").textContent = pct.name;
        else if (!event.target.matches( document.getElementById("selP2")))
            document.getElementById("selP2").textContent = pct.name;
    }
    // else if (clickPoint == 'del'){
    //     selectedPoint = pct;
    //     scene.remove(pct);
    // }
}

function addPoint(pct) {
    // console.log("Punct:"+scene+", "+pct+", "+scene.getObjectByName(pct));
    // if (!scene.getObjectByName(pct.name))
    //     return;

    const geometry1 = new THREE.SphereGeometry(1, 1, 1);
    const point = new THREE.Mesh(geometry1, matPoint);
    point.position.x = pct.getComponent(0);
    point.position.y = pct.getComponent(1);
    point.position.z = pct.getComponent(2);
    point.name = "Sfera:" + pct.name;

    scene.add(point);

    domEvents.addEventListener(point, 'mouseover', event => {
        point.scale.set(3, 3, 3);
    });
    domEvents.addEventListener(point, 'mouseout', event => {
        point.scale.set(1, 1, 1);
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

function getMediana(pct, linie3) {
    return new THREE.Line3(pct, linie3.getCenter());
}

function drawMediana() {
    if (selectedPoint == null || selectedLine == null)
        return;

    addLinieBaza(getMediana(selectedPoint, selectedLine));
}

function getBisectoare(pct, linie3) {
    var A = pct;
    var B = linie3.start;
    var C = linie3.end;
    var AB = new THREE.Line3(pct, B).distance();
    var AC = new THREE.Line3(pct, C).distance();
    var D = linie3.at(AB / (AB + AC));

    return new THREE.Line3(A, D);
}

function drawBisectoare() {
    if (selectedPoint == null || selectedLine == null)
        return;
//Pentru desenarea unghiului
    // var geometry = new THREE.CircleGeometry(5, 32,0,);
    // var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    // var circle = new THREE.Mesh(geometry, material);
    // scene.add(circle);

    addLinieBaza(getBisectoare(selectedPoint, selectedLine));
}

function getInaltime(pct, linie3) {
    var x = linie3.start.getComponent(0);
    var y = linie3.start.getComponent(1);
    for (i = linie3.start.getComponent(0); i < linie3.end.getComponent(0); i) {

    }
    return new THREE.Line3(pct, linie3.getCenter());
}

function triunghiOarecare() {
    sterge();
    addLinieBaza(linie1);
    addLinieBaza(linie2);
    addLinieBaza(linie3);
}

function triunghiEchilateral() {
    sterge();
    addLinieBaza(linie4);
    addLinieBaza(linie5);
    addLinieBaza(linie6);
}

function triunghiDreptunghic() {
    sterge();
    addLinieBaza(linie7);
    addLinieBaza(linie8);
    addLinieBaza(linie9);
}

function triunghiIsoscel() {
    sterge();
    addLinieBaza(linie10);
    addLinieBaza(linie11);
    addLinieBaza(linie12);
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

function delL() {
    if (clickLine != 'del') {
        clickLine = 'del';
        document.getElementById("delL").style.borderStyle = "inset";
    }
    else if (clickLine == 'del') {
        clickLine = '';
        document.getElementById("delL").style.borderStyle = "outset";
    }
}

function delP() {
    if (clickPoint != 'del') {
        clickPoint = 'del';
        document.getElementById("delP").style.borderStyle = "inset";
    }
    else if (clickPoint == 'del') {
        clickPoint = '';
        document.getElementById("delP").style.borderStyle = "outset";
    }
}