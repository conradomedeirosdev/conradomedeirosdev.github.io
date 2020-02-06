const printBinary = require('../src/printBinary');

// A função recebe um inteiro e retorna uma lista contendo todos os números em formato binário
// que podem ser representados com a quantidade de dígitos recebidos por parâmetro
// Se a função receber algum valor não numérico um array vazio deve ser retornado
// Se a função receber o valor 0 (zero) um array vazio deve ser retornado

describe('#printBinary', () => {
  it('number 0, array empty', () => {
    expect(printBinary(0)).toStrictEqual([]);
  });

  it('!number, array empty', () => {
    expect(printBinary('1')).toStrictEqual([]);
  });

  it('should print binary numbers until 1', () => {
    expect(printBinary(1)).toStrictEqual(['0', '1']);
  });

  it('should print binary numbers until 2', () => {
    expect(printBinary(2)).toEqual(['00', '01', '10', '11']);
  });
});
