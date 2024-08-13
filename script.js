const consoles = ['switch', 'ps', 'xbox']

for (item = 0; item < consoles.length; item++){
  if(consoles[item] === 'ps'){
    break;
  }
  console.log(consoles[item]);
}

const frutas = ["Banana", "Maça", "Pera", "Uva"];
frutas.forEach(function (fruta, index) {
  console.log(index, fruta);
});