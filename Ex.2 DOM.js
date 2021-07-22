const button = document.getElementById("add");
const paragrafN = document.getElementById("parN");
const paragrafC = document.getElementById("parC");

const citat = [{name: 'Grigore Vieru', citat: 'Mama este începutul tuturor începuturilor.'},
    {name: 'Mihai Eminescu', citat: 'Umanitatea începe în noi odată cu dezinteresul.'},
    {name: 'Nicolae Dabija', citat: 'Durerea e unica bucurie a vieţii mele.'},
    {name: 'Miron Costin', citat: 'Numele vechiu şi mai dreptu este român, adică râmlean, de la Roma.'}
    ];


 function addHandler() {
  var cititRandom = Math.floor(Math.random() * citat.length);
  console.log( citat[cititRandom].name)
  paragrafN.innerHTML = citat[cititRandom].name;
  paragrafC.innerHTML = citat[cititRandom].citat;
}

button.addEventListener('click', addHandler);