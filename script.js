// Crie uma função para verificar se um valor é Truthy
function isTruthy(value){
  return !!value;
}

console.log('===')
console.log('Verificar se um valor é Truthy')
console.log(isTruthy('10'));
console.log('===')

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado){
  return lado * 4;
}

console.log('Verificar perímetro')
console.log(perimetro(5));
console.log('===')

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function fullName(firstName, lastName){
  return `Seu nome é: ${firstName} ${lastName} `
}

console.log('Informar nome completo')
console.log(fullName('Ygor', 'Combi'));
console.log('===')

// Crie uma função que verifica se um número é par
function isEven(number){
  if (!( number % 2 ) == 0) {
    return 'ímpar';
  } 
  return 'par';
}

console.log('Verificar se é um número Par')
console.log(isEven(30));
console.log('===')

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function showType(value){
  return typeof value;
}
console.log('Verificar o tipo do parâmetro')
console.log(showType(true));
console.log('===')

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(){
  return console.log(fullName('Ygor', 'Combi'));
});


// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));

