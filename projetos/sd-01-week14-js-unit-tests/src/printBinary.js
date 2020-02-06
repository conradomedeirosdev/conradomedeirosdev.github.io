/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

function printBinary(number) {
  if (typeof number !== 'number' || number === 0) {
    return [];
  }
  const arrayBinary = [];
  for (let index = 0; index < number; index += 1) {
    arrayBinary.splice(index, 0, '0'.repeat(number - index) + '1'.repeat(index));
    arrayBinary.splice(arrayBinary.length - (index), 0, '1'.repeat(number - index) + '0'.repeat(index));
  }
  return arrayBinary;
}

module.exports = printBinary;
