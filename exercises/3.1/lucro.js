let vendaDoProduto = 10;
let custoDoProduto = 5;
let lucro = (vendaDoProduto - ((custoDoProduto * 0.20) + custoDoProduto));
if (vendaDoProduto && custoDoProduto <= 0){
    console.log("Vc deve colocar um valor acima que 0");
}else {
    console.log("seu lucro é " + (lucro * 1000));
}