let atribute = ['triunghi', 'patrat', 'oarecare', 'isoscel', 'dreptunghic', 'echilateral', 'inaltimea', 'mediana', 'bisectoarea', 'mediatoarea'];
let radacini = ['triunghi', 'patrat', 'oarecare', 'isoscel', 'dreptunghic', 'echilateral', 'inaltim', 'median', 'bisecto', 'mediato'];
let listaMetodeFig = ['drawMediana','linMij','triunghiOarecare','triunghiIsoscel','triunghiEchilateral','triunghiDreptunghic','triunghiDreptunghicIsoscel',
                      'patrat','dreptunghi','paralelogram','romb','trapez','trapezDrept','trapezIsoscel','inaltimeTeorie','','','','']
// let enunt = "Fie un triunghi isoscel ABC , cu laturile de lungime 4, 4, 5 si inaltimea AH perpendiculara pe latura BC. Determinati lungimea inaltimii.";

function afiseazaRezultat( enuntOriginal, mapFigIdentificate ){
  let enuntFinal = enuntOriginal;
  mapFigIdentificate.forEach( ( fig, cuv ) => {
    enuntFinal = enuntFinal.replace(cuv, construiesteButon( cuv, fig ))
  } );
  document.getElementById('rezultatContainer').innerHTML = enuntFinal;
}

function construiesteButon(cuvant, figura){
  console.log("Cuvant:"+cuvant)
  console.log("Figura identificata:"+figura)
  console.log(figura)
  let numeMetoda = [];
  for(let caracteristica of figura ){
    console.log(caracteristica)
      numeMetoda = listaMetodeFig.filter( (metoda) => metoda.includes(caracteristica));
  }
  console.log(numeMetoda)
  //daca nu avem atribute si figura nu este specifica(gen patrat)
  if(figura.length == 1 && numeMetoda.length > 1){
      //aplicam default
      numeMetoda = listaMetodeFig.filter( (metoda) => metoda.toLocaleLowerCase().includes("oarecare") );
  }
  console.log(numeMetoda)

  // if( numeMetoda.length > 1 || numeMetoda.length == 0)
  //     alert("Metoda constructie buton trebuie regandita!");

  console.log("Metoda "+numeMetoda+" pt " + cuvant)
 
  return '<button class="enunt-btn" onclick="'+ numeMetoda +'()">'+cuvant+'</button>';// de  creat o clasa pt butoane enunt
}

function interpreteazaEnunt(enunt){
 let atrb = [];
 let mapFigIdentificate = new Map();
 let cuvinte = enunt.replace(/(?:\r\n|\r|\n)/g, ' ').split(' ').join(',')
                                                    .split('.').join(',')
                                                    .split('!').join(',')
                                                    .split('?').join(',')
                                                    .split(',')

 for (let idxCuv = 0; idxCuv < cuvinte.length; idxCuv++) {
   for (let idxRad = 0; idxRad < radacini.length; idxRad++) {
    //  if (cuvinte[i].localeCompare(atribute[k], undefined, { sensitivity: 'base' }) === 0) {
     if (cuvinte[idxCuv].toLowerCase().includes(radacini[idxRad])) {
       atrb.push(cuvinte[idxCuv]);
       mapFigIdentificate.set(cuvinte[idxCuv], [radacini[idxRad]] );
     }
   }
 }
//  document.getElementById('rezultatContainer').innerText =  atrb.join('\n');
afiseazaRezultat( enunt, mapFigIdentificate);
}

function interpreteaza(id){
interpreteazaEnunt(document.getElementById(id).value)
} 