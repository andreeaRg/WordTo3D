let radFiguri2D = ['triunghi', 'patrat', 'patrulater', 'romb', 'dreptunghi', 'paralelogram',
  'trapez', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'cerc', 'disc'];
let radFiguri3D = ['piramid', 'tetraedru', 'paralelipiped', 'cub', 'prism', 'cilindru', 'sfer'];

let radAtribute2D = ['oarecare', 'isoscel', 'dreptunghic', 'echilateral'];
let radAtribute3D = ['triunghiular', 'patrulater', 'hexagonal', 'regulat', 'dreptunghic', 'dreapta'];

let radLiniImportante = ['varf', 'fat', 'lateral', 'muchi', 'baz', 'inaltim', 'median', 'bisecto', 'mediato',
  'diagonal', 'ipotenuza', 'catet', 'apotem', 'apotenuza', 'mijloci', 'mica', 'mare', 'coard', 'raz', 'diametru', 'arc'];

let formule = ['ari', 'volum']; // masa , densitate

let radacini = ['triunghi', 'patrat', 'oarecare', 'isoscel', 'dreptunghic', 'echilateral', 'inaltim', 'median', 'bisecto', 'mediato'];

let listaMetodeFig = ['drawMediana', 'linMij', 'triunghiOarecare', 'triunghiIsoscel', 'triunghiEchilateral',
  'triunghiDreptunghic', 'triunghiDreptunghicIsoscel', 'patrat', 'dreptunghi', 'paralelogram', 'romb', 'trapezOarecare',
  'trapezDrept', 'trapezIsoscel', 'pentagonf', 'hexagonf', 'heptagonf', 'octogonf', 'cerc',
  'tetraedruOarecare', 'piramidaOarecare', 'piramidaTriunghiularaRegulata', 'piramidaPatrulateraRegulata',
  'piramidaHexagonalaRegulata', 'prismaTriunghilaraRegulata', 'paralelipipedDreptunghic', 'prismaPatrulateraRegulata',
  'cub', 'prismaHexagonala', 'inaltimeTeorie'];

function gasesteAtr2D(cuvUrmator) {
  for (let atrib2d of radAtribute2D) {
    if (cuvUrmator.includes(atrib2d)) {
      return atrib2d;
    }
  }
  return null;
}

function gasesteAtr3D(cuvUrmator) {
  for (let atrib3d of radAtribute3D) {
    if (cuvUrmator.includes(atrib3d)) {
      return atrib3d;
    }
  }
  return null;
}

function interpreteazaEnunt(enunt) {
  let mapFigIdentificate = new Map();
  let atribut;

  let cuvinte = enunt.replace(/(?:\r\n|\r|\n)/g, ' ')
    .toLocaleLowerCase()
    .replace('ţ', "t")
    .replace('ș', "s")
    .replace('ă', "a")
    .replace('î', "i")
    .replace('â', "a")
    .split(' ').join(',')
    .split('.').join(',')
    .split('!').join(',')
    .split('?').join(',')
    .split(',');

  for (let idxCuv = 0; idxCuv < cuvinte.length; idxCuv++) {
    for (let radacina of radFiguri3D) {
      if (cuvinte[idxCuv].includes(radacina)) {

        mapFigIdentificate.set(cuvinte[idxCuv], [radacina]);

        if (idxCuv + 1 < cuvinte.length)
          atribut = gasesteAtr3D(cuvinte[idxCuv + 1]);
        else
          break;
        if (atribut) {

          mapFigIdentificate.get(cuvinte[idxCuv]).push(atribut);
          idxCuv++;

          if (idxCuv + 1 < cuvinte.length)
            atribut = gasesteAtr3D(cuvinte[idxCuv + 1]);
          else
            break;
          if (atribut) {
            mapFigIdentificate.get(cuvinte[idxCuv - 1]).push(atribut);
            idxCuv++;
          }
        }
        break;
      }
    }

    for (let radacina of radFiguri2D) {
      if (cuvinte[idxCuv].toLowerCase().includes(radacina)) {

        mapFigIdentificate.set(cuvinte[idxCuv], [radacina]);

        if (idxCuv + 1 < cuvinte.length)
          atribut = gasesteAtr2D(cuvinte[idxCuv + 1]);
        else
          break;
        if (atribut) {

          mapFigIdentificate.get(cuvinte[idxCuv]).push(atribut);
          idxCuv++;

          if (idxCuv + 1 < cuvinte.length)
            atribut = gasesteAtr2D(cuvinte[idxCuv + 1]);
          else
            break;
          if (atribut) {
            mapFigIdentificate.get(cuvinte[idxCuv - 1]).push(atribut);
            idxCuv++;
          }
        }
      }
      break;
    }
  }
  afiseazaRezultat(enunt, mapFigIdentificate);
}


function afiseazaRezultat(enuntOriginal, mapFigIdentificate) {
  let enuntFinal = enuntOriginal;
  let portiuneText;
  mapFigIdentificate.forEach((fig, cuv) => {
    portiuneText = fig.length > 1 ? gasestePortiunea(cuv, fig[fig.length - 1], enuntOriginal) : cuv;
    enuntFinal = enuntFinal.replace(portiuneText, construiesteButon(cuv, fig, enuntOriginal))
  });
  document.getElementById('rezultatContainer').innerHTML = enuntFinal;
}

function gasestePortiunea(primul, ultimul, string) {
  return ultimul ? string.slice(string.indexOf(primul), string.indexOf(ultimul) + ultimul.length + 1) : primul;
}

// de simplificat( nu ar trebui sa existe punctuatie, doar spatiu)
//de verificat pt cazul in care exista doua referinte la acelas cuvant

function construiesteButon(cuvant, figura, enuntOriginal) {
  let numeMetoda = listaMetodeFig;
  for (let caracteristica of figura) {
    numeMetoda = numeMetoda.filter((metoda) => metoda.toLocaleLowerCase().indexOf(caracteristica) > -1);;
  }

  if (figura.length == 1 && numeMetoda.length > 1) {
    numeMetoda = numeMetoda.filter((metoda) => metoda.toLocaleLowerCase().includes("oarecare"));
  }

  let portiuneText = figura.length > 1 ? gasestePortiunea(cuvant, figura[figura.length - 1], enuntOriginal) : cuvant;

  for (let radacina of radLiniImportante) {
    if (cuvant.toLowerCase().includes(radacina)) {
      mapFigIdentificate.set(cuvant, [radacina]);
    }
  }

  if (numeMetoda.length == 0) {
    return '<button class="enunt-btn">' + portiuneText + '</button>';
  }

  return '<button class="enunt-btn" onclick="' + numeMetoda[0] + '()">' + portiuneText + '</button>';
}

// if (numeMetoda.length > 1 || numeMetoda.length == 0) {
//   console.log("Metoda constructie buton trebuie regandita!");
//   console.log(portiuneText)
//   console.log(figura)
//   console.log(numeMetoda)
// }

function interpreteazaInput(id) {
  interpreteazaEnunt(document.getElementById(id).value)
}

function interpreteazaText(id) {
  interpreteazaEnunt(document.getElementById(id).innerText)
}

function viewImg(event) {
  document.getElementById('ocrBtn').style.display = "block";
  var image = document.getElementById('viz');

  image.src = URL.createObjectURL(event.target.files[0]);
  image.style.display = 'block';

  document.getElementById('rezultatCitire').innerText = "Apasati butonul Citeste Poza";
}

//    OCR
function ocrImg() {
  document.getElementById('rezultatCitire').innerText = "Se încarcă... Vă rugăm așteptați !"
  let img = document.getElementById('viz').src;

  Tesseract.recognize(
    img,
    'ron',
    { logger: m => console.log(m.status) }
  ).then(({ data: { text } }) => {
    document.getElementById('rezultatCitire').innerText = text;
  });
}

// [radacina, atribut]
// [radacina, atribut1, atribut2]
