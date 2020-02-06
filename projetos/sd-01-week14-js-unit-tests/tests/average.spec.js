const average = require('../src/average');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar a média dos números que receber
// Caso a função receba algum valor não número, o valor undefined deve ser retornado

describe('#average', () => {
  it('expect average of 3, 4, 5 should be 4', () => {
    expect(average(3, 4, 5)).toBe(4);
  });
  it('expect average of 1, 1, 1, 1 should be 1', () => {
    expect(average(1, 1, 1, 1)).toBe(1);
  });
  it('if the parameter is not a number', () => {
    expect(average('string')).toBe(undefined);
  });
});
