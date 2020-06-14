let radFiguri2D = ['triunghi', 'patrat', 'patrulater', 'romb', 'dreptunghi', 'paralelogram',
  'trapez', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'cerc', 'disc'];
let radFiguri3D = ['piramid', 'tetraedru', 'paralelipiped', 'cub', 'prism', 'cilindru', 'con', 'sfer'];

let radAtribute2D = ['oarecare', 'isoscel', 'dreptunghic', 'echilateral'];
let radAtribute3D = ['triunghiulara', 'patrulatera', 'hexagonala', 'regulata', 'dreptunghic', 'dreapta'];

let radLiniImportante = ['varf', 'fat', 'lateral', 'muchi', 'baz', 'inaltim', 'median', 'bisecto', 'mediato',
  'diagonal', 'ipotenuza', 'catet', 'apotem', 'apotenuza', 'mijloci', 'mica', 'mare', 'coard', 'raz', 'diametru', 'arc'];

let formule = ['ari', 'volum']; // masa , densitate

let radacini = ['triunghi', 'patrat', 'oarecare', 'isoscel', 'dreptunghic', 'echilateral', 'inaltim', 'median', 'bisecto', 'mediato'];
<<<<<<< HEAD
let listaMetodeFig = ['drawMediana', 'linMij', 'triunghiOarecare', 'triunghiIsoscel', 'triunghiEchilateral', 'triunghiDreptunghic', 'triunghiDreptunghicIsoscel',
  'patrat', 'dreptunghi', 'paralelogram', 'romb', 'trapezOarecare', 'trapezDrept', 'trapezIsoscel', 'inaltimeTeorie']
=======

let listaMetodeFig = ['drawMediana', 'linMij', 'triunghiOarecare', 'triunghiIsoscel', 'triunghiEchilateral', 'triunghiDreptunghic',
  'triunghiDreptunghicIsoscel', 'patrat', 'dreptunghi', 'paralelogram', 'romb', 'trapezOarecare', 'trapezDrept', 'trapezIsoscel', 'inaltimeTeorie'];
>>>>>>> d9c0ee49d858e586d16739e33a0d1167362e351f

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

  let cuvinte = enunt.replace(/(?:\r\n|\r|\n)/g, ' ').split(' ').join(',')
    .split('.').join(',')
    .split('!').join(',')
    .split('?').join(',')
    .split(',');

  for (let cuvant of cuvinte) {
    for (let radacina of radFiguri3D)
      if (cuvant.toLowerCase().includes(radacina)) {
        mapFigIdentificate.set(cuvant, [radacina]);
<<<<<<< HEAD

        //cautam si adaugam atributele in urmatoarele 2 cuvinte ce preced figura identifiacta
=======
>>>>>>> d9c0ee49d858e586d16739e33a0d1167362e351f
        if (cuvinte.indexOf(cuvant) + 1 < cuvinte.length)
          atribut = gasesteAtr3D(cuvinte[cuvinte.indexOf(cuvant) + 1]);
        else
          break;
        if (atribut) {
<<<<<<< HEAD
          mapFigIdentificate.get(cuvant).push(atribut);// [radacina, atribut]
          if (cuvinte.indexOf(cuvant) + 2 < cuvinte.length)
            atribut = gasesteAtr3D(cuvinte[cuvinte.indexOf(cuvant) + 2]);
=======
          mapFigIdentificate.get(cuvant).push(atribut);
          if (cuvinte.indexOf(cuvant) + 2 < cuvinte.length)
            atribut = gasesteAtr3D(cuvinte[cuvinte.indexOf(cuvant) + 2])
>>>>>>> d9c0ee49d858e586d16739e33a0d1167362e351f
          else
            break;
          if (atribut)
            mapFigIdentificate.get(cuvant).push(atribut);
        }
      }

    for (let radacina of radFiguri2D)
      if (cuvant.toLowerCase().includes(radacina)) {
        mapFigIdentificate.set(cuvant, [radacina]);
<<<<<<< HEAD

        //cautam si adaugam atributele in urmatoarele 2 cuvinte ce preced figura identifiacta
        if (cuvinte.indexOf(cuvant) + 1 < cuvinte.length)
          atribut = gasesteAtr2D(cuvinte[cuvinte.indexOf(cuvant) + 1]);
        else
          break;
        if (atribut) {
          mapFigIdentificate.get(cuvant).push(atribut); // [radacina, atribut]

          if (cuvinte.indexOf(cuvant) + 2 < cuvinte.length)
            atribut = gasesteAtr2D(cuvinte[cuvinte.indexOf(cuvant) + 2]);
          else
            break;
=======
        atribut = gasesteAtr2D(cuvinte[cuvinte.indexOf(cuvant) + 1]);
        if (atribut) {
          mapFigIdentificate.get(cuvant).push(atribut);
          atribut = gasesteAtr2D(cuvinte[cuvinte.indexOf(cuvant) + 2])
>>>>>>> d9c0ee49d858e586d16739e33a0d1167362e351f
          if (atribut)
            mapFigIdentificate.get(cuvant).push(atribut);
        }
      }

    for (let radacina of radLiniImportante)
      if (cuvant.toLowerCase().includes(radacina)) {
        mapFigIdentificate.set(cuvant, [radacina]);
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
  // de simplificat( nu ar trebui sa existe punctuatie, doar spatiu)
  //de verificat pt cazul in care exista doua referinte la acelas cuvant
  return ultimul ? string.slice(string.indexOf(primul), string.indexOf(ultimul) + ultimul.length) : primul;
}

function construiesteButon(cuvant, figura, enuntOriginal) {
  let numeMetoda = "";
<<<<<<< HEAD
  for (let caracteristica of figura) { // figura = [radacina, atribut1, atribut2]
    numeMetoda += caracteristica;
  }
  numeMetoda = listaMetodeFig.filter((metoda) => metoda.toLocaleLowerCase().indexOf(numeMetoda) > -1);
  console.log(numeMetoda)
  //daca nu avem atribute si figura nu este specifica(gen patrat) inseamna ca e oarecare
=======
  for (let caracteristica of figura) {
    numeMetoda += caracteristica;
  }
  numeMetoda = listaMetodeFig.filter((metoda) => metoda.toLocaleLowerCase().indexOf(numeMetoda) > -1);

>>>>>>> d9c0ee49d858e586d16739e33a0d1167362e351f
  if (figura.length == 1 && numeMetoda.length > 1) {
    numeMetoda = numeMetoda.filter((metoda) => metoda.toLocaleLowerCase().includes("oarecare"));
  }
<<<<<<< HEAD

  console.log(numeMetoda)

  let portiuneText = figura.length > 1 ? gasestePortiunea(cuvant, figura[figura.length - 1], enuntOriginal) : cuvant;
=======
>>>>>>> d9c0ee49d858e586d16739e33a0d1167362e351f

  if (numeMetoda.length > 1 || numeMetoda.length == 0)
    alert("Metoda constructie buton trebuie regandita!");

<<<<<<< HEAD
=======
  let portiuneText = figura.length > 1 ? gasestePortiunea(cuvant, figura[figura.length - 1], enuntOriginal) : cuvant;
>>>>>>> d9c0ee49d858e586d16739e33a0d1167362e351f
  return '<button class="enunt-btn" onclick="' + numeMetoda[0] + '()">' + portiuneText + '</button>';
}

// console.log("Cuvant:" + cuvant)
// console.log("Figura identificata:" + figura)
// console.log(figura)
// figura = [radacina, atribut1, atribut2]
// console.log(caracteristica)
//daca nu avem atribute si figura nu este specifica(gen patrat) inseamna ca e oarecare

// console.log("Metoda " + numeMetoda + " pt " + cuvant)

function interpreteazaInput(id) {
  interpreteazaEnunt(document.getElementById(id).value)
}

function interpreteazaText(id) {
  interpreteazaEnunt(document.getElementById(id).innerText)
}

function viewImg(event) {
  var image = document.getElementById('viz');
<<<<<<< HEAD

  image.src = URL.createObjectURL(event.target.files[0]);
  image.style.display = 'block';

  document.getElementById('rezultatCitire').innerText = "Apasati butonul Citeste Poaza";
}
=======

  image.src = URL.createObjectURL(event.target.files[0]);
  image.style.display = 'block';

  document.getElementById('rezultatCitire').innerText = "Apasati butonul Citeste Poaza";
}

//    OCR
function ocrImg() {
  document.getElementById('rezultatCitire').innerText = "Se încarcă... Vă rugăm să așteptați !"

  Tesseract.recognize(
    img,
    'eng',
    { logger: m => console.log(m.status) }
  ).then(({ data: { text } }) => {
    document.getElementById('rezultatCitire').innerText = text;
  });

}

// [radacina, atribut]
// [radacina, atribut1, atribut2]
>>>>>>> d9c0ee49d858e586d16739e33a0d1167362e351f
