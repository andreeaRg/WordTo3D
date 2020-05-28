//  test citire enunt
    let radFiguri2D = ['triunghi', 'patrat','romb','dreptunghi','paralelogram','trapez','pentagon','hexagon','heptagon','octagon','cerc'];
    let radAtribute2D = ['oarecare', 'isoscel', 'dreptunghic', 'echilateral', 'inaltim', 'median', 'bisecto', 'mediato'];
    let radFiguri3D = ['piramid','tetraedru','paralelipiped','prism','cilindru','con','sfer'];
    let radAtribute3D = ['varf','diagonal','fete','fata?','lateral','inaltim','muchi','baz','triunghiulara','patrulatera','hexagonala','regulata','dreptunghic',''];
    
   
    // let enunt = "Fie un triunghi isoscel ABC , cu laturile de lungime 4, 4, 5 si inaltimea AH perpendiculara pe latura BC. Determinati lungimea inaltimii.";
   function interpreteazaEnunt(enunt){
     let atrb = [];
     let cuvinte = enunt.replace(/(?:\r\n|\r|\n)/g, ' ').split(' ').join(',')
                                                        .split('.').join(',')
                                                        .split('!').join(',')
                                                        .split('?').join(',')
                                                        .split(',')
     console.log("Test method")
 
     for (let i = 0; i < cuvinte.length; i++) {
       for (let k = 0; k < atribute.length; k++) {
        //  if (cuvinte[i].localeCompare(atribute[k], undefined, { sensitivity: 'base' }) === 0) {
         if (cuvinte[i].toLowerCase().includes(radacini[k])) {
           atrb.push(cuvinte[i]);
         }
       }
     }
     document.getElementById('rezultatContainer').innerText =  atrb.join('\n');
   }

   function interpreteaza(id){
    interpreteazaEnunt(document.getElementById(id).value)
   }