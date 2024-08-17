const $listAnimals = document.querySelector('.animais-lista');

console.log($listAnimals.scrollHeight);

const animalsTop = $listAnimals.offsetTop;

console.log(animalsTop);

const $h2 = document.querySelector('h2');

const rect = $h2.getBoundingClientRect();

console.log(rect);

console.log(
  window.innerWidth,
  window.outerWidth,
  window.scrollX,
  window.scrollY,
);

const small = window.matchMedia('(max-width: 600px)').matches;

if(small) {
  console.log('Usuário mobile');
} else {
  console.log('Desktop')
}

console.log(small);