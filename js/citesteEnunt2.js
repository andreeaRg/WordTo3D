let elementeDinEnunt = [];
let figuraCentrala = [];
let cuvinte = [];
let enuntOriginal;
var mapFigIdentificate = new Map();
var contentFormule;
var definitiiElemente = [];
var mapDefinitii = new Map();
var k=0;

//  test citire enunt
let radFiguri2D = ['triunghi', 'patrat', 'patrulater', 'romb', 'dreptunghi', 'paralelogram', 'trapez', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'cerc', 'disc'];
let radAtribute2D = ['oarecare', 'isoscel', 'dreptunghic', 'echilateral']; //convex

let radFiguri3D = ['piramid', 'tetraedru', 'paralelipiped', 'cub', 'prism', 'cilindru', 'con', 'sfer'];
let radAtribute3D = ['varf', 'fete', 'lateral', 'muchi', 'baz', 'triunghiulara', 'patrulatera', 'hexagonala', 'regulata', 'dreptunghic', 'dreapta'];

let radLiniImportante = ['inaltim', 'median', 'bisecto', 'mediato', 'diagonal', 'ipotenuza', 'catet', 'apotem', 'apotenuza', 'mijloci', 'mica', 'mare', 'coard', 'raz', 'diametru', 'arc'];
//ari ; liniei mijlocii | linia mijlocie ; baza mica | mare la trapez ; centrul cercului inscris / circumscris / de greutate 
//tangente | tangenta la cerc ; 
let formule = ['ari', 'volum']; // masa , densitate

let listaMetodeFig = [];

// let enunt = "Fie un triunghi isoscel ABC , cu laturile de lungime 4, 4, 5 si inaltimea AH perpendiculara pe latura BC. Determinati lungimea inaltimii.";
function interpreteazaEnunt(enunt) {
    enuntOriginal = enunt;
    elementeDinEnunt = [];
    figuraCentrala = [];
    mapFigIdentificate = new Map();
    cuvinte = enunt.toLowerCase().replace(/(?:\r\n|\r|\n)/g, ' ').split(' ').join(',')
        .split('.').join(',')
        .split('!').join(',')
        .split('?').join(',')
        .split(',');

    for (let i = 0; i < cuvinte.length; i++) {
        for (let j = 0; j < radFiguri3D.length; j++) {
            if (cuvinte[i].includes(radFiguri3D[j])) {

                mapFigIdentificate.set(i, [radFiguri3D[j]] );
                // figuraCentrala.push(radFiguri3D[j]);

                //verifica si adauga atribute
                adaugaAtr3D(i + 1); 
                adaugaAtr3D(i + 2);
            }
        }// am terminat o figura 3D

        for (let k = 0; k < radFiguri2D.length; k++) {
            if (cuvinte[i].includes(radFiguri2D[k])) {
                mapFigIdentificate.set(i, [radFiguri2D[k]] );
                // figuraCentrala.push(radFiguri2D[k]);
                
                //verifica si adauga atribute
                adaugaAtr2D(i + 1);
                adaugaAtr2D(i + 2)
            }
        }// am terminat o figura 2D

        gasesteLiniiImportanteDinEnunt(i);

    }

    afiseazaDefFigCentrala(figuraCentrala[0]);
    afiseazaFormuleleFiguriiCentrale();
    // document.getElementById('rezultatContainer').innerText = afiseazaDefFigCentrala(figuraCentrala[0]);
    document.getElementById('rezultatContainer').innerText = afiseazaDefFigCentrala(figuraCentrala[0]);
    document.getElementById('rezultatContainer').innerText += afiseazaFormuleleFiguriiCentrale();;
}

function afiseazaRezultat(){
    let enuntFinal = enuntOriginal;
    mapFigIdentificate.forEach( (iCuv, fig) => {
        enuntFinal.replace(cuvinte[iCuv], construiesteButon( cuvinte[i], fig ))
    } );
    document.getElementById('rezultatContainer').innerHTML = enuntFinal;
}

function construiesteButon(cuv, figura){
    let numeMetoda = [];
    for(let caracteristica in figura ){
        numeMetoda = listaMetodeFig.filter( (metoda) =>{metoda.includes(caracteristica)} );
    }
    //daca nu avem atribute si figura nu este specifica(gen patrat)
    if(figura.length == 1 && numeMetoda.length > 1){
        //aplicam default
        numeMetoda = listaMetodeFig.filter( (metoda) =>{metoda.includes("oarecare")} );
    }

    if( numeMetoda.length == 1)
        alert("Metoda constructie bunont trebuie regandita!");
   
    let btn = '<button class="dropdown-btn" onclick="'+ numeMetoda +'()">'+cuv+'</button>';// de  creat o clasa pt butoane enunt
}

function afiseazaDefFigCentrala(cuv) {
    var contentFigura = "";
    switch (cuv) {

        case "triunghi":
            switch (cuvinte[1]) {
                case "oarecare":
                    contentFigura = "";
                    break;
                case "isoscel":
                    contentFigura = "";
                    break;
                case "dreptunghic":
                    contentFigura = "";
                    break;
                case "echilateral":
                    contentFigura = "";
                    break;
            }
            break;

        case "patrat":
            contentFigura = "";
            break;
        case "romb":
            contentFigura = "";
            break;
        case "dreptunghi":
            contentFigura = "";
            break;
        case "paralelogram":
            contentFigura = "";
            break;
        case "trapez":
            switch (cuvinte[1]) {
                case "isoscel":
                    contentFigura = "";
                    break;
                case "dreptunghic":
                    contentFigura = "";
                    break;
                default:
                    contentFigura = "";
                    break;
            }
            break;
        case "pentagon":
            contentFigura = "";
            break;
        case "hexagon":
            contentFigura = "";
            break;
        case "heptagon":
            contentFigura = "";
            break;
        case "octagon":
            contentFigura = "";
            break;
        case "cerc":
            contentFigura = "";
            break;
        case "disc":
            contentFigura = "";
            break;
        //3D
        case "piramid":
            contentFigura = "";
            break;
        case "tetraedru":
            contentFigura = "";
            break;
        case "paralelipiped":
            contentFigura = "";
            break;
        case "cub":
            contentFigura = "";
            break;
        case "prism":
            contentFigura = "";
            break;
        case "cilindru":
            contentFigura = "";
            break;
        case "con":
            contentFigura = "";
            break;
        case "sfer":
            contentFigura = "";
            break;
        default:
            break;
    }
    return contentFigura;
}

function adaugaAtr2D(indexCuvUrmator) {
    for (let iRad2d = 0; iRad2d < radAtribute2D.length; iRad2d++) {
        if (cuvinte[indexCuvUrmator].includes(radAtribute2D[iRad2d])) {
            mapFigIdentificate.get(indexCuvUrmator).push(radAtribute3D[iRad2d]);
            // figuraCentrala.push(radAtribute2D[iRad2d]);
            // indexCuvUrmator++;
            return true;
        }
    }
    return false;
}

function adaugaAtr3D(indexCuvUrmator) {
    for (let iRad3d = 0; iRad3d < radAtribute3D.length; iRad3d++) {
        if (cuvinte[indexCuvUrmator].includes(radAtribute3D[iRad3d])) {
            mapFigIdentificate.get(indexCuvUrmator).push(radAtribute3D[iRad3d]);
            // figuraCentrala.push(radAtribute3D[iRad3d]);
            // indexCuvUrmator++;
            return true;
        }
    }
    return false;
}

function afiseazaFormuleleFiguriiCentrale() {
    switch (figuraCentrala[0]) {

        case "triunghi":
            switch (cuvinte[1]) {
                case "oarecare":
                    contentFormule = "";
                    break;
                case "isoscel":
                    contentFormule = "";
                    break;
                case "dreptunghic":
                    contentFormule = "";
                    break;
                case "echilateral":
                    contentFormule = "";
                    break;
                default:
                    break;
            }
            break;

        case "patrat":
            contentFormule = "";
            break;
        case "romb":
            contentFormule = "";
            break;
        case "dreptunghi":
            contentFormule = "";
            break;
        case "paralelogram":
            contentFormule = "";
            break;
        case "trapez":
            contentFormule = "";
            break;
        case "pentagon":
            contentFormule = "";
            break;
        case "hexagon":
            contentFormule = "";
            break;
        case "heptagon":
            contentFormule = "";
            break;
        case "octagon":
            contentFormule = "";
            break;
        case "cerc":
            contentFormule = "";
            break;
        case "disc":
            contentFormule = "";
            break;
        // s-a terminat figuriile cu arii
        //incep figurile cu volum si arii
        case "piramid":
            contentFormule = "";
            break;
        case "tetraedru":
            contentFormule = "";
            break;
        case "paralelipiped":
            contentFormule = "";
            break;
        case "cub":
            contentFormule = "";
            break;
        case "prism":
            contentFormule = "";
            break;
        case "cilindru":
            contentFormule = "";
            break;
        case "con":
            contentFormule = "";
            break;
        case "sfer":
            contentFormule = "";
            break;
        default:
            break;
    }
    return contentFormule;
}

function gasesteLiniiImportanteDinEnunt(d) {
    for (let e = 0; e < radLiniImportante.length; e++) {
        if (cuvinte[d].includes(radLiniImportante[e])) {
            mapFigIdentificate.set(d, radLiniImportante[e]);
            elementeDinEnunt.push(radLiniImportante[e]);

            switch (elementeDinEnunt[0]) {
                case "inaltim":
                    switch (figuraCentrala[0]) {
                        case "triunghi":
                            definitiiElemente.push("");
                            break;
                        case "trapez":
                            definitiiElemente.push("");
                            break;
                        case "prism":
                            definitiiElemente.push("");
                            break;
                        case "piramid":
                            definitiiElemente.push("");
                            break;
                        case "tetraedru":
                            definitiiElemente.push("");
                            break;
                        default:
                            break;
                    }
                    break;
                case "median":
                    definitiiElemente.push("");
                    break;
                case "bisecto":
                    definitiiElemente.push("");
                    break;
                case "mediato":
                    definitiiElemente.push("");
                    break;
                case "diagonal":
                    definitiiElemente.push("");
                    break;
                case "ipotenuza":
                    definitiiElemente.push("");
                    break;
                case "catet":
                    definitiiElemente.push("");
                    break;
                case "apotem":
                    definitiiElemente.push("");
                    break;
                case "apotenuza":
                    definitiiElemente.push("");
                    break;
                case "mijloci":
                    definitiiElemente.push("");
                    break;
                case "coard":
                    definitiiElemente.push("");
                    break;
                case "raz":
                    definitiiElemente.push("");
                    break;
                case "diametru":
                    definitiiElemente.push("");
                    break;
                case "arc":
                    definitiiElemente.push("");
                    break;
                case "baza":
                    switch (figuraCentrala[0]) {
                        case "trapez":
                            definitiiElemente.push("");
                            break;
                        case "prism":
                            definitiiElemente.push("");
                            break;
                        case "piramid":
                            definitiiElemente.push("");
                            break;
                        case "tetraedru":
                            definitiiElemente.push("");
                            break;
                    }
                    break;
                default:
                    break;
            }
            mapDefinitii.set(radLiniImportante[e], definitiiElemente[k]);
            k++;
        }
    }//am selectat restul liniilor din enunt
}

function interpreteaza(id) {
    if (id == 'inputP')
        interpreteazaEnunt(document.getElementById(id).value)
    else if (id = 'rezultatCitire')
        interpreteazaEnunt(document.getElementById(id).innerText)
    else
        return;
}

function viewImg(event) {
    var image = document.getElementById('viz');
    image.style.display = 'block';
    image.src = URL.createObjectURL(event.target.files[0]);
}