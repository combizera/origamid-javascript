// Por qual motivo o código abaixo retorna com erros?
// {
//   const marca = 'Fiat';
//   let portas = 4;
//   var cor = 'preto';
// }
// console.log(var, marca, portas);

// const e let respeitam o escopo definido

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));
console.log('===');

// O que fazer para total retornar 500?
var numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}
console.log('===');
console.log(numero);

const total = 10 * numero;
console.log(total);
