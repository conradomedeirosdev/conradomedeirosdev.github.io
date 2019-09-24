var piece = "Peão";
var res = piece.toLowerCase();
switch (res){
    case 'torre':
    console.log("A torre se movimenta para frente e para trás, para a direita e para a esquerda, quantas casas quiser, mas não pode pular nenhuma outra peça")
    break;
    case 'bispo':
    console.log("O bispo se movimenta na diagonal mantendo-se sempre nas casas de mesma cor que se encontrava no início do jogo, podendo ir para frente e para trás, quantas casas quiser, mas não pode pular nenhuma outra peça.")
    break;
    case 'cavalo':
    console.log("O cavalo tem um movimento especial que parece a letra L. O cavalo se movimenta 2 casas para frente ou para trás e em seguida 1 casa para a direita ou para a esquerda, ou 2 casas para a direita ou para a esquerda e em seguida 1 casa para frente ou para trás. O cavalo é a única peça do xadrez que pode pular outras peças.")
    break;
    case 'rainha':
    console.log(" A Rainha, também conhecida como Dama, é a peça mais poderosa do xadrez, ela pode ir para frente ou para trás, para direita ou para a esquerda, ou na diagonal, quantas casas quiser, mas não pode pular nenhuma outra peça.")
    break;
    case 'peão':
    console.log("O peão se move apenas para frente somente uma casa por vez, a não ser que seja o primeiro movimento dele")
    break;
    case 'rei':
    console.log("O Rei movimenta-se apenas 1 casa em qualquer direção.")
    break;
    default :
    console.log("esta peça não existe no xadrez")
}