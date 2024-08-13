// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

const years = [1959, 1962, 1970, 1994, 2002];
console.log(years);

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
years.forEach(function(year){
  console.log(`O brasil ganhou a copa de ${year}`)
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(i = 0; i < frutas.length;){
  console.log(i, frutas[i]);
  if(frutas[i] === 'Pera'){
    break;
  }
  i++;
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
const lastItem = frutas.length - 1;
console.log(frutas[lastItem]);