// Retorne no console todas as imagens do site
const $imgs = document.querySelectorAll('img');
console.log($imgs);

$imgs.forEach(function(item, index, array){
  console.log(index, item);
  console.log(array);
});

console.log('===')
$imgs.forEach((item, index) => {
  console.log(index, item);
});

// jeito resumido
console.log('===')
$imgs.forEach((item, index) => console.log(index, item));

// Mostre no console cada parágrado do site
const $p = document.querySelectorAll('p');
$p.forEach((item, index) => console.log(index, item));

// Mostre o texto dos parágrafos no console
$p.forEach((item, index) => console.log(index, item.innerText));

// Como corrigir os erros abaixo:
$imgs.forEach((item, index) => {
  console.log(item, index);
});

console.log('===')
let i = 0;
$imgs.forEach(() => {
  console.log(i++)
});

console.log('===')
$imgs.forEach(() => i++);
