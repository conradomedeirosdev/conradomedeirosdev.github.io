const greeting = require('../src/greeting');

// A função deve receber uma string ${param} e retornar a mensagem 'Hello ${param}!'
// Se nenhum parâmetro for passado um erro deve ser lançado
// A mensagem do erro deve ser 'You must send something to greet!'

describe('#greeting', () => {
  it('expect return last element of passed parameter', () => {
    expect(greeting('Conrado')).toBe('Hello Conrado!');
  });
  it('If no parameter is passed an error should be thrown', () => {
    expect(greeting).toThrow('You must send something to greet!');
  });
});
