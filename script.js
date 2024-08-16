const $menu = document.querySelector('.menu');
const $animals = document.querySelector('.animais');

$menu.classList.add('ativo');

console.log($menu.classList, $animals.attributes);

const $img = document.querySelector('img');

console.log($img.getAttribute('alt'));
$imgWithAlt = $img.setAttribute('alt', 'gatooo')
console.log($img.getAttribute('alt'));

// Adicione a classe ativo a todos os itens do menu
const $menuItem = $menu.querySelectorAll('li');

$menuItem.forEach(function(item, index){
  item.classList.add('ativo');
  console.log(index, item);
});
console.log('===')

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
$menuItem.forEach(function(item, index){
  item.classList.remove('ativo');
  console.log(index, item);
  if(index == 0){
    console.log(item.innerText)
    item.classList.add('ativo')
  }
});

// Verifique se as imagens possuem o atributo alt
const $imgs = document.querySelectorAll('img');
$imgs.forEach(function(item, index){
  alt = item.hasAttribute('alt')
  if(alt){
    console.log(item, alt);
  } else {
    console.log(index, item, 'Não tem alt');
  }
});

// Modifique o href do link externo no menu
$menuItem.forEach(function(item, index){
  console.log(index, item)
  $linkExterno = item.querySelector('[href^="https://"]')
  if($linkExterno){
    $linkExterno.setAttribute('href', 'https://combizera.com')
    console.log($linkExterno)
  }
});

