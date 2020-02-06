const last = require('../src/last');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar o último elemento do parâmetro passado
// Se a função receber uma lista, deve retornar o último elemento
// Se a função receber uma string, deve retornar o último caractere
// Se a função receber vários parâmetros, deve retornar o último parâmetro

describe('#last', () => {
  it('expect any number of parameters', () => {
    expect(last.length).toEqual(expect.any(Number));
  });

  it('expect return last element of passed parameter', () => {
    expect(last([0, 1, 2, 3])).toBe(3);
  });

  it('function string lats caractere', () => {
    expect(last('wilson')).toBe('n');
    expect(last('wilson')).toBe('n');
  });

  it('fucntion last params', () => {
    expect(last(['ola', 'wilson'], 'bobo', true, 4, false)).toBe(false);
    expect(last(false)).toBe(false);
  });
});
