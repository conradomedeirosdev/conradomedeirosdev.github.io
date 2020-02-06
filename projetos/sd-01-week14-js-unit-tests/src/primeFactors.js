/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

function primeFactors(number) {
  let num = number;
  if (!Number.isInteger(number)) throw new Error('pass integer number');
  const arr = [];
  for (let cont = 2; num !== 1;) {
    if (num % cont === 0) {
      arr.push(cont);
      num /= cont;
    } else {
      cont += 1;
    }
  }
  return arr;
}

module.exports = primeFactors;
