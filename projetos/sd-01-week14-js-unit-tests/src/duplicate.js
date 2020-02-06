/*
  A função duplicate recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se existe algum elemento duplicado e `false` caso contrário
 */

function duplicate(...params) {
  const set = new Set(params);
  const set1 = set.size;
  if (set1 === params.length) return false;
  return true;
}

module.exports = duplicate;
