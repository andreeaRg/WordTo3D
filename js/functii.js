

var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;

const matLinie = new THREE.LineBasicMaterial({ color: 0x0000ff, linewidth: 10 });
const matPoint = new THREE.MeshNormalMaterial({ wireframe: true });

var linesMap = new Map();
var linesMap3To2 = new Map();

var clickLine = '';
var clickPoint = '';
var selectedPoint;
var selectedLine;
var selectedPoints = [];

var createFatLineGeometry = function (opt) {
 
    opt = opt || {};
    opt.forPoint = opt.forPoint || function (i, per) {
        return {
            x: i * 5,
            y: 0,
            z: 0
        }
    };
    opt.ptCount = opt.ptCount === undefined ? 20 : opt.ptCount;
    opt.colorSolid = opt.colorSolid === undefined ? false : opt.colorSolid;
    opt.color = opt.color === undefined ? new THREE.Color(0xffffff) : opt.color;
 
    // Position and Color Data
    var positions = [],
    colors = [],
    i = 0,
    point,
    geo;
 
    // for each point
    while (i < opt.ptCount) {
 
        // push point
        point = opt.forPoint(i, i / opt.ptCount);
        positions.push(point.x, point.y, point.z);
 
        // push color
        if (!opt.colorSolid) {
            opt.color.setHSL(i / opt.ptCount, 1.0, 0.5);
        }
        colors.push(opt.color.r, opt.color.g, opt.color.b);
 
        i += 1;
    }
 
    // return geo
    geo = new THREE.LineGeometry();
    geo.setPositions(positions);
    geo.setColors(colors);
    return geo;
 
};

var createFatLine = function (opt) {
 
    opt = opt || {};
    opt.width = opt.width || 5;
 
    // LINE MATERIAL
    var matLine = new THREE.LineMaterial({
            linewidth: opt.width, // in pixels
            vertexColors: THREE.VertexColors
        });
    matLine.resolution.set(320, 240);
 
    var line = new THREE.Line2(opt.geo, matLine);
 
    return line;
 
};


// When the user scrolls down 20px from the top of the document, 
// slide down the navbar
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}

function clearSelected() {
    selectedPoint = null;
    selectedLine = null;
    selectedPoints = [];
}

//FUNCTIA BUTON
function medDropDown() {
    clearSelected();
    writeSelected();
    document.getElementById("medDropdown").classList.toggle("showMed");
}
function bisDropDown() {
    clearSelected();
    writeSelected();
    document.getElementById("bisDropdown").classList.toggle("showBis");
}

// Close the dropdown if the user clicks outside of it fct1
window.onclick = function (event) {
    if (!event.target.matches('.dropbtnMed')) {
        var dropdowns = document.getElementsByClassName("dropdown-contentMed");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('showMed')) {
                if (i % 2) {
                    openDropdown.classList.remove('showMed');
                }
            }
        }
    }
}
// // Close the dropdown if the user clicks outside of it fct2
window.onclick = function (event) {
    if (!event.target.matches('.dropbtnBis')) {
        var dropdowns = document.getElementsByClassName("dropdown-contentBis");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('showBis')) {
                if (i % 2) {
                    openDropdown.classList.remove('showBis');
                }
            }
        }
    }
}

function writeSelected() {

    let selPname = selectedPoint == null ? '' : selectedPoint.name;
    let selLname = selectedLine == null ? '' : selectedLine.name;

    document.getElementById("selL").textContent = selLname;
    document.getElementById("selL2").textContent = selLname;

    document.getElementById("selP").textContent = selPname
    document.getElementById("selP2").textContent = selPname;

    document.getElementById("selPext").textContent = selPname;
    document.getElementById("selLext").textContent = selLname;
    let pcts = '';
    if (selectedPoints.length > 0) {
        for (let p of selectedPoints) {
            pcts += p.name + ',';
        }
    }
    document.getElementById("selPointsExt").textContent = pcts;
}

function selectL() {
    if (clickLine != 'select') {
        clickLine = 'select';
        document.getElementById("clkL").style.borderStyle = "inset";
        document.getElementById("clkL2").style.borderStyle = "inset";
        clearSelectPoint()
    }
    else if (clickLine == 'select')
        clearSelectL()

}

function clearSelectL() {
    clickLine = '';
    document.getElementById("clkL").style.borderStyle = "outset";
    document.getElementById("clkL2").style.borderStyle = "outset";
}

function clickL(line2D) {

    if (clickLine == "select") {
        selectedLine = linesMap.get(line2D);
        writeSelected();
    }
    else if (clickLine == 'del')
        scene.remove(line2D);
}

function clickSfera(point) {

    if (clickPoint == 'del') {
        // selectedPoint = point;
        scene.remove(point);
    }
}
function selectP() {
    if (clickPoint != 'select') {
        clickPoint = 'select';
        document.getElementById("clkP").style.borderStyle = "inset";
        document.getElementById("clkP2").style.borderStyle = "inset";
        clearSelectL()
        // console.log(matLinie)
    }

    else if (clickPoint == 'select')
        clearSelectPoint();
}

function clearSelectPoint() {
    clickPoint = '';
    document.getElementById("clkP").style.borderStyle = "outset";
    document.getElementById("clkP2").style.borderStyle = "outset";
}

function clickP(pct) {
    if (clickPoint == 'select') {
        selectedPoint = pct;
        if (selectedPoints.length == 3)
            selectedPoints.pop()
        if (selectedPoints.indexOf(pct) == -1)
            selectedPoints.unshift(pct);

        writeSelected();
    }
    // else if (clickPoint == 'del'){
    //     selectedPoint = pct;
    //     scene.remove(pct);
    // }
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