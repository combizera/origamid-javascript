# Origamid Javascript

Reestudando o curso de JS com o curso da [Origamid](https://www.origamid.com/slide/javascript-completo-es6/).

## Índice

1. [Funções](#funções)
2. [Objetos](#objetos)

## Funções

Bloco de código que pode ser executado e reutilizado, Valores podem ser passador por uma função e a mesma retorna outro valor.

### Parâmetro e Argumento

Ao `criar` uma função, você pode definir os `parâmetros`.
Ao `executar` uma função, você pode definir os `argumento`.

### Escopo

Variáveis e funções definidas dentro de um bloco `{}`, não são visíveis fora dele.

## Objetos

Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

### Tudo é Objeto

Strings, Números, Booleanos, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

## Array e Loops

### Array

Um grupo de valores geralmente relacionados. Servem para guardarmos diferente valores em uma única variável.

### Loops

Fazem algo repetidamente até que uma condição seja atingida

#### Break

O loop irá parar caso encontro e palavra `break`.

#### forEach

forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

```js
const fruits = ["Banana", "Apple", "Stranberry", "Pineapple"];
fruits.forEach(function (fruit, index) {
  console.log(index, fruit);
});
```

## Ternário

Abreviação de condicionais com `if` e `else`

```js
const age = 19;
const canDrink = idade >= 18 ? "Can drink" : "Cannot Drink";
console.log(canDrink); // Can drink

// condition ? true : false
```

## DOM

Document Object Model

É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

### Node

Toda tag html é representada pelo objeto `Element` e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

### forEach

Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.

````js
const imgs = document.querySelectorAll('img');

imgs.forEach(function(item){
  console.log(item);
});
```
````

### Arrow Function

Sintaxe curta em relação a `function expression`. Basta remover a palavra chave function e adicionar a fat arrow `=>` após os argumentos.

````js
const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
  console.log(item);
});```
````

### Dimensões e Distâncias

Estas são propriedades e métodos dos objetos `Element` e `HTMLElement`, a maioria delas são Read Only.
