var fullName = 'ygor';

let $btn = document.querySelector('.btn');

$btn.classList.add('ativo');

console.log($btn)

// nomeie 3 propriedades ou métodos de strings
// Para deixar a string em maisculo
const maisculo = fullName.toUpperCase();
console.log(maisculo);

// Para concatenar algo
const concat = fullName.concat('.');
console.log(concat);

// valida qual o caracter final da string
const finish = fullName.endsWith('a');
console.log(finish)

// nomeie 5 propriedades ou métodos de elementos do DOM
// mostra o cookie da sessao
let $html = document.cookie;
console.log($html)

// pega o primeiro seletor que respeita as regras pedidas
$html = document.querySelector('.btn');
console.log($html)

// pega todos seletores que respeitarem as regras pedidas
$html = document.querySelectorAll('.btn');
console.log($html)

// mostra o tipo de conteudo que temos na página
$html = document.contentType;
console.log($html)

// mostra o tipo de documento que temos
$html = document.doctype;
console.log($html)

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
