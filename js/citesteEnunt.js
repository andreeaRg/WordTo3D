let elementeDinEnunt = [];
let figuraCentrala = [];
let cuvinte = [];
var mapCuvinteEnunt = new Map();


//  test citire enunt
let radFiguri2D = ['triunghi', 'patrat', 'patrulater', 'romb', 'dreptunghi', 'paralelogram', 'trapez', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'cerc', 'disc'];
let radAtribute2D = ['oarecare', 'isoscel', 'dreptunghic', 'echilateral']; //convex

let radFiguri3D = ['piramid', 'tetraedru', 'paralelipiped', 'cub', 'prism', 'cilindru', 'con', 'sfer'];
let radAtribute3D = ['varf', 'fete', 'lateral', 'muchi', 'baz', 'triunghiulara', 'patrulatera', 'hexagonala', 'regulata', 'dreptunghic', 'dreapta'];

let radLiniImportante = ['inaltim', 'median', 'bisecto', 'mediato', 'diagonal', 'ipotenuza', 'catet', 'apotem', 'apotenuza', 'mijloci', 'mica', 'mare', 'coard', 'raz', 'diametru', 'arc'];
//ari ; liniei mijlocii | linia mijlocie ; baza mica | mare la trapez ; centrul cercului inscris / circumscris / de greutate 
//tangente | tangenta la cerc ; 
let formule = ['ari', 'volum']; // masa , densitate

function isAtribut2D(i){
  for (let l = 0; l < radAtribute2D.length; l++) {

    if (cuvinte[i + 1].includes(radAtribute2D[l])) {

      mapCuvinteEnunt.set(cuvinte[i + 1], radAtribute2D[l]);
      figuraCentrala.push(radAtribute2D[l]);
      i++;}
    }
}

// let enunt = "Fie un triunghi isoscel ABC , cu laturile de lungime 4, 4, 5 si inaltimea AH perpendiculara pe latura BC. Determinati lungimea inaltimii.";
function interpreteazaEnunt(enunt) {
  elementeDinEnunt = [];
  figuraCentrala = [];
  mapCuvinteEnunt = new Map();
  cuvinte = enunt.toLowerCase().replace(/(?:\r\n|\r|\n)/g, ' ').split(' ').join(',')
    .split('.').join(',')
    .split('!').join(',')
    .split('?').join(',')
    .split(',');

  for (let i = 0; i < cuvinte.length; i++) {
    for (let k = 0; k < radFiguri2D.length; k++) {
      //  if (cuvinte[i].localeCompare(atribute[k], undefined, { sensitivity: 'base' }) === 0) {
      // if (cuvinte[i].toLowerCase().includes(radFiguri2D[k])) {
      if (cuvinte[i].includes(radFiguri2D[k])) {

        mapCuvinteEnunt.set(cuvinte[i], radFiguri2D[k]);
        figuraCentrala.push(radFiguri2D[k]);
        for (let l = 0; l < radAtribute2D.length; l++) {

          if (cuvinte[i + 1].includes(radAtribute2D[l])) {

            mapCuvinteEnunt.set(cuvinte[i + 1], radAtribute2D[l]);
            figuraCentrala.push(radAtribute2D[l]);
            i++;

          }

        }

      }

    }// am terminat figura centrala

    for (let j = 0; j < radFiguri3D.length; j++) {
      if (cuvinte[i].includes(radFiguri3D[j])) {

        mapCuvinteEnunt.set(cuvinte[i], radFiguri2D[j]);
        figuraCentrala.push(radFiguri2D[k]);
        for (let t = 0; t < radAtribute3D.length; t++) {

          if (cuvinte[i + 1].includes(radAtribute3D[t])) {

            mapCuvinteEnunt.set(cuvinte[i + 1], radAtribute3D[t]);
            figuraCentrala.push(radAtribute3D[t]);
            i++;

          }
        }
      }
    }// am terminat figura centrala

    for (let e = 0; e < radLiniImportante.length; e++) {
      if (cuvinte[i].includes(radLiniImportante[e])) {
        mapCuvinteEnunt.set(cuvinte[i], radLiniImportante[e]);
        elementeDinEnunt.push(radLiniImportante[e]);
        switch (elementeDinEnunt[0]) {
          case "inaltim":
            switch (figuraCentrala[0]) {
              case "triunghi":
                content = "";
                break;
              case "trapez":
                content = "";
                break;
              case "prism":
                content = "";
                break;
              case "piramid":
                content = "";
                break;
              case "tetraedru":
                content = "";
                break;
            }
            break;
          case "median":
            content = "";
            break;
          case "bisecto":
            content = "";
            break;
          case "mediato":
            content = "";
            break;
          case "diagonal":
            content = "";
            break;
          case "ipotenuza":
            content = "";
            break;
          case "catet":
            content = "";
            break;
          case "apotem":
            content = "";
            break;
          case "apotenuza":
            content = "";
            break;
          case "mijloci":
            content = "";
            break;
          case "coard":
            content = "";
            break;
          case "raz":
            content = "";
            break;
          case "diametru":
            content = "";
            break;
          case "arc":
            content = "";
            break;
          case "baza":
            switch (figuraCentrala[0]) {
              case "trapez":
                content = "";
                break;
              case "prism":
                content = "";
                break;
              case "piramid":
                content = "";
                break;
              case "tetraedru":
                content = "";
                break;
            }
            break;
        }
      }
    }//am selectat restul liniilor din enunt

    for (let f = 0; f < formule.length; f++) {
      if (cuvinte[i].includes(formule[f])) { //pt arii si volume
        mapCuvinteEnunt.set(cuvinte[i], formule[f]);
        elementeDinEnunt.push(formule[f]);
        switch (figuraCentrala[0]) {

          case "triunghi":
            switch (cuvinte[1]) {
              case "oarecare":
                content = "";
                break;
              case "isoscel":
                content = "";
                break;
              case "dreptunghic":
                content = "";
                break;
              case "echilateral":
                content = "";
                break;
            }
            break;

          case "patrat":
            content = "";
            break;
          case "romb":
            content = "";
            break;
          case "dreptunghi":
            content = "";
            break;
          case "paralelogram":
            content = "";
            break;
          case "trapez":
            content = "";
            break;
          case "pentagon":
            content = "";
            break;
          case "hexagon":
            content = "";
            break;
          case "heptagon":
            content = "";
            break;
          case "octagon":
            content = "";
            break;
          case "cerc":
            content = "";
            break;
          case "disc":
            content = "";
            break;
          // s-a terminat figuriile cu arii
          //incep figurile cu volum si arii
          case "piramid":
            content = "";
            break;
          case "tetraedru":
            content = "";
            break;
          case "paralelipiped":
            content = "";
            break;
          case "cub":
            content = "";
            break;
          case "prism":
            content = "";
            break;
          case "cilindru":
            content = "";
            break;
          case "con":
            content = "";
            break;
          case "sfer":
            content = "";
            break;
        }
      }
    }// am selectat cuv arii si volum

  }// 1 for cuvinte
  document.getElementById('rezultatContainer').innerText = atrb.join('\n');
}// function

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
