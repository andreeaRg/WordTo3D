let radFiguri2D = ['triunghi', 'patrat', 'patrulater', 'romb', 'dreptunghi', 'paralelogram', 'trapez', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'cerc', 'disc'];
let radAtribute2D = ['oarecare', 'isoscel', 'dreptunghic', 'echilateral']; //convex

let radFiguri3D = ['piramid', 'tetraedru', 'paralelipiped', 'cub', 'prism', 'cilindru', 'con', 'sfer'];
let radAtribute3D = ['triunghiulara', 'patrulatera', 'hexagonala', 'regulata', 'dreptunghic', 'dreapta'];

let radLiniImportante = ['varf', 'fat', 'lateral', 'muchi', 'baz', 'inaltim', 'median', 'bisecto', 'mediato', 'diagonal', 'ipotenuza', 'catet', 'apotem', 'apotenuza', 'mijloci', 'mica', 'mare', 'coard', 'raz', 'diametru', 'arc'];

let formule = ['ari', 'volum']; // masa , densitate

let radacini = ['triunghi', 'patrat', 'oarecare', 'isoscel', 'dreptunghic', 'echilateral', 'inaltim', 'median', 'bisecto', 'mediato'];
let listaMetodeFig = ['drawMediana', 'linMij', 'triunghiOarecare', 'triunghiIsoscel', 'triunghiEchilateral', 'triunghiDreptunghic', 'triunghiDreptunghicIsoscel',
  'patrat', 'dreptunghi', 'paralelogram', 'romb', 'trapez', 'trapezDrept', 'trapezIsoscel', 'inaltimeTeorie']

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

    for (let radacina of radFiguri3D) {
      if (cuvant.toLowerCase().includes(radacina)) {
        mapFigIdentificate.set(cuvant, [radacina]);

        //cautam si adaugam atributele in urmatoarele 2 cuvinte ce preced figura identifiacta
        atribut = gasesteAtr3D(cuvinte[cuvinte.indexOf(cuvant) + 1]);
        if (atribut) {
          mapFigIdentificate.get(cuvant).push(atribut);// [radacina, atribut]
          atribut = gasesteAtr3D(cuvinte[cuvinte.indexOf(cuvant) + 2])
          if (atribut)
            mapFigIdentificate.get(cuvant).push(atribut);// [radacina, atribut1, atribut2]
        }
      }
    }

    for (let radacina of radFiguri2D) {
      if (cuvant.toLowerCase().includes(radacina)) {
        mapFigIdentificate.set(cuvant, [radacina]);

        //cautam si adaugam atributele in urmatoarele 2 cuvinte ce preced figura identifiacta
        atribut = gasesteAtr2D(cuvinte[cuvinte.indexOf(cuvant) + 1]);
        if (atribut) {
          mapFigIdentificate.get(cuvant).push(atribut); // [radacina, atribut]
          atribut = gasesteAtr2D(cuvinte[cuvinte.indexOf(cuvant) + 2])
          if (atribut)
            mapFigIdentificate.get(cuvant).push(atribut);// [radacina, atribut1, atribut2]
        }
      }
    }

    for (let radacina of radLiniImportante) {
      if (cuvant.toLowerCase().includes(radacina)) {
        mapFigIdentificate.set(cuvant, [radacina]);
      }
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
  // console.log("Cuvant:" + cuvant)
  // console.log("Figura identificata:" + figura)
  // console.log(figura)
  let numeMetoda = "";
  for (let caracteristica of figura) { // figura = [radacina, atribut1, atribut2]
    // console.log(caracteristica)
    numeMetoda += caracteristica; 
  }
  // console.log(numeMetoda)
  numeMetoda = listaMetodeFig.filter((metoda) => metoda.toLocaleLowerCase().indexOf(numeMetoda) > -1 );
  // console.log(numeMetoda)

  //daca nu avem atribute si figura nu este specifica(gen patrat) inseamna ca e oarecare
  if (figura.length == 1 && numeMetoda.length > 1) {
    numeMetoda = listaMetodeFig.filter((metoda) => metoda.toLocaleLowerCase().includes("oarecare"));
  }
  // console.log(numeMetoda)

  if (numeMetoda.length > 1 || numeMetoda.length == 0)
    alert("Metoda constructie buton trebuie regandita!");

  // console.log("Metoda " + numeMetoda + " pt " + cuvant)

  let portiuneText = figura.length > 1 ? gasestePortiunea(cuvant, figura[figura.length - 1], enuntOriginal) : cuvant;
  return '<button class="enunt-btn" onclick="' + numeMetoda[0] + '()">' + portiuneText + '</button>';
}

function interpreteazaInput(id) {
  interpreteazaEnunt(document.getElementById(id).value)
}

function interpreteazaText(id) {
  interpreteazaEnunt(document.getElementById(id).innerText)
} 

function viewImg(event) {
    var image = document.getElementById('viz');

    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.display = 'block';

    document.getElementById('rezultatCitire').innerText = "Apasati butonul Citeste Poaza";
}