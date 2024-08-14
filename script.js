const $h1 = document.querySelector('h1')
console.log($h1)
console.log($h1.classList)

$h1.addEventListener('click', function(){
  console.log(`Clicou em ${$h1.innerText}`)
});
console.log('===')

// Retorne o url da página atual utilizando o objeto window
const url = window.location.href;
console.log(url);
console.log('===');

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const $classActive = document.querySelector('.active');
console.log($classActive);
console.log('===');

// Retorne a linguagem do navegador
const browserLang = window.navigator.language;
console.log(browserLang);
console.log('===');

// Retorne a largura da janela 
const windowWidth = window.innerWidth;
console.log(windowWidth);
