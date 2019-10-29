window.onload = function () {
    let nimbus = document.getElementsByClassName("nimbus-click")[0];
    function clickNimbus() {
        nimbus.addEventListener("click", function () {
            nimbus.classList.add("scale-up");
        })
    }
    clickNimbus();
    let article = document.getElementsByClassName("article1");
    function clickArticle() {
        for (let i = 0; i < article.length; i++) {
            article[i].addEventListener("click", function () {
                article[i].classList.add("style-animation");
            })
        }
    }
    clickArticle();
    // let animationScale = ;
    // function animationScaleStyle() {
    //     for (let i = 0; i < length; i++) {
    //         text.children[i].style['animation-delay'] = animationDelay;
    //     }
    // }
    // animationScaleStyle();
}