/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(...params) {
  if (params.some(param => typeof (param) !== 'number')) return undefined;
  let total = 0;
  for (let i = 0; i < arguments.length; i += 1) {
    total += params[i];
  }
  return total / arguments.length;
}

module.exports = average;
