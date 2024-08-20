// Verifique a distância da primeira imagem
// em relação ao topo da página
const $img = document.querySelector('img');
console.log($img.offsetTop);
console.log('===');

// Retorne a soma da largura de todas as imagens
function somaImg(){
  const $allImgs = document.querySelectorAll('img');

  let soma = 0;

  $allImgs.forEach(function(item){
    soma += item.offsetWidth;
  });
  console.log(soma);
}

window.onload = function(){
  somaImg();
}
console.log('===');


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const $links = document.querySelectorAll('a');
$links.forEach(function(item){
  // if(item)
  itemWidth = item.offsetWidth;
  itemHeight = item.offsetHeight;
  if (itemWidth && itemHeight >= 48){
    console.log(`O ${item} está dentro dos padrões`)
  } else {
    console.log(`O ${item} está fora dos padrões, é necessário pelo menos 48px de altura e largura e o item atual tem. Altura - ${itemHeight}. Largura - ${itemWidth}.`)
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const mobile = window.matchMedia('(max-width: 720px').matches;
if(mobile){
  console.log(mobile);
  const $menu = document.querySelector('.menu');
  $menu.classList.add('menu-mobile');
  console.log($menu);
}
console.log('===');
