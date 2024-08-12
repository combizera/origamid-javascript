function imc(peso, altura) // parâmetros
{
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.73)) // argumentos