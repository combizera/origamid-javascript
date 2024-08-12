const person = {
  name: 'ygor',
  age: 25,
  haveCollege: true,
}

console.log(person);


var quadrado = {
  lados: 4,
  area: function(lado){
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));