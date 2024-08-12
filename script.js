function velhice(idade) {
  if (typeof idade !== 'number'){
    return 'Por favor, informe um número';
  }
  else if (idade >= 60){
    return 'Você é idoso';
  } else {
    return 'Ainda não é idoso';
  }
}

console.log(velhice('oi'))