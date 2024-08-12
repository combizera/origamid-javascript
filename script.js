// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

const person = {
  name: 'ygor',
  age: 25, 
  haveHouse: false
}

console.log(person);

// Crie um método no objeto anterior, que mostre o seu nome completo
person.showInfos = function(){
  return (`Nome: ${person.name}. Idade: ${person.age}. Casa: ${person.haveHouse}`)
} 

console.log(person.showInfos())

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const dog = {
  raca: 'Labrador',
  color: 'preto',
  age: 10,
  late: function(vendo){
    if (vendo === 'homem') {
      return 'Au au';
    }
    return 'Não late (=';
  }
}

console.log(dog);
console.log(dog.late('homem'));

