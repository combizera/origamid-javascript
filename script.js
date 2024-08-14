// Retorne no console todas as imagens do site
const $imgs = document.querySelectorAll('img');
console.log($imgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const $imgsText = document.querySelectorAll('[src^="img/imagem"]')
console.log($imgsText);

// Selecione todos os links internos (onde o href começa com #)
const $links = document.querySelectorAll('[href^="#"]')
console.log($links);

// Selecione o primeiro h2 dentro de .animais-descricao
const $h2 = document.querySelector('.animais-descricao h2')
console.log($h2.innerText);
console.log('===');

// Selecione o último p do site
const $lastP = document.querySelectorAll('p');
$lastP.forEach(function(item, index){
  if($lastP.length - 1 === index){
    console.log(item.innerText)
  }
})

