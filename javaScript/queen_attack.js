// Quadrantes bacanudos
// 2 | 1
// 3 | 4

//posicao da rainha para teste
peca_a = {
    x: 3,
    y: 3
  };
  
  //posicao da outra peça para teste
  peca_b = {
    x: 2,
    y: 5
  };
  
  var result = null;
  
  // Verifica se a peça está na mesma linha
  if (peca_a.x == peca_b.x) {
    console.log("na mesma coluna");
    return true;
  }
  // Verifica se a peça está na mesma coluna
  if (peca_a.y == peca_b.y) {
    console.log("na mesma linha");
    return true;
  }
  // Diagonal inferior esquerda
  for (var i = 0; i < 8; i++) {
    var x_position = peca_a.x - i;
    var y_position = peca_a.y - i;
  
    // Se o tabuleiro terminou, sai do loop
    if ((x_position < 0) || (y_position < 0)) {
      break;
    }
  
    // Se a posicao da peca atacada bater com a diagonal que estamos
    // verificando, ela pode ser atacada
    if (peca_b.x == x_position && peca_b.y == y_position) {
      console.log("na diagonal esquerda inferior, vulgo 3º quadrante");
      return true;
    }
  }
  // Diagonal superior direita
  for (var i = 0; i < 8; i++) {
    var x_position = peca_a.x + i;
    var y_position = peca_a.y + i;
  
    // Se o tabuleiro terminou, sai do loop
    if (x_position > 8 && y_position > 8) {
      break;
    }
  
    // Se a posicao da peca atacada bater com a diagonal que estamos
    // verificando, ela pode ser atacada
    if (peca_b.x == x_position && peca_b.y == y_position) {
      console.log("na diagonal direita superior, vulgo 1º quadrante");
      return true;
    }
  }
  // Diagonal superior esquerda
  for (var i = 0; i < 8; i++) {
    var x_position = peca_a.x - i;
    var y_position = peca_a.y + i;
  
    // Se o tabuleiro terminou, sai do loop
    if (x_position < 0 && y_position > 8) {
      break;
    }
  
    // Se a posicao da peca atacada bater com a diagonal que estamos
    // verificando, ela pode ser atacada
    if (peca_b.x == x_position && peca_b.y == y_position) {
      console.log("na diagonal esquerda superior, vulgo 2º quadrante");
      return true;
    }
  }
  // Diagonal inferior direita
  for (var i = 0; i < 8; i++) {
    var x_position = peca_a.x + i;
    var y_position = peca_a.y - i;
  
    // Se o tabuleiro terminou, sai do loop
    if (x_position > 8 && y_position < 0) {
      break;
    }
  
    // Se a posicao da peca atacada bater com a diagonal que estamos
    // verificando, ela pode ser atacada
    if (peca_b.x == x_position && peca_b.y == y_position) {
      console.log("na diagonal direita inferior, vulgo 4º quadrante");
      return true;
    }
  }
  console.log("a peça não pode ser atacada pela rainha. Se safou dessa vez =) ");
  return false;
  
  
  console.log(result);