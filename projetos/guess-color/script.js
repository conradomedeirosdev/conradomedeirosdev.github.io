window.onload = function () {
    function randomColorRGB() {
        var num1 = Math.floor(Math.random() * 256);
        var num2 = Math.floor(Math.random() * 256);
        var num3 = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + num1 + "," + num2 + "," + num3 + ")";
        let rgb = document.getElementById("numbers");
        rgb.innerHTML = bgColor;
        return bgColor;
    }
    
    randomColorRGB();
    function randomColor(){
        let colors;
        for (i = 0; i <= 5; i++){
            colors = document.getElementsByClassName("add")[i];
            colors.style.background = randomColorRGB();
        }
    }
    randomColor();
    
    function radomWinnerColor(){
        colorsWinner = document.getElementsByClassName("add")[Math.floor(Math.random() * 6)];
        colorsWinner.style.background = randomColorRGB();
        return colorsWinner.style.background;
    }
    var win = radomWinnerColor();
    
    function winnerColor(corclikada){
        result = document.getElementById("result");
        if (corclikada == win){
            let vencedor = result.innerHTML = "Win"
        }else{
            result.innerHTML = "Loser"
    
        }
    }
    function colorClick(){
        const squares = document.getElementsByTagName("li");
        for (let oneSquare of squares) {
        oneSquare.addEventListener("click", function(){
            winnerColor(oneSquare.style.background);
        })
    }
    }
    colorClick();
    var btnRefresh = document.getElementById("button");
    btnRefresh.addEventListener("click", function clickMouseLocation() {
        window.location.reload();
    })

}
