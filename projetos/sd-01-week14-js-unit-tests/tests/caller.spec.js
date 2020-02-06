const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

const some = jest.fn((a, b) => a + b);

describe('#caller', () => {
  expect(caller(some, 1, 2)).toBe(3);
  it('the first parameter must be a function', () => {
    expect(typeof (some)).toBe('function');
  });

  it('expect the function passed to be called with the others parameters', () => {
    expect(some).toBeCalledWith(1, 2);
    expect(some).toHaveBeenCalledTimes(1);
  });

  it('the second and thirty parameter can be of any type', () => {
    expect(caller(some, '1', '2')).toBe('12');
  });
});
