window.onload = function () {
    if (typeof (Storage) != "undefined") {
        let color = localStorage.color
        if (color) document.body.style.backgroundColor = color
    } else {
        document.write("Sem suporte para Web Storage")
    }
    let selectColorBg = document.getElementById("activitySelector")
    start = () => selectColorBg.addEventListener("change", addActivityItem, false);
    
    let buttons = document.querySelectorAll("button")
    for (let button of buttons) {
        button.addEventListener("click", event => {
            let color = event.target.innerHTML
            localStorage.setItem("color", color)
            document.body.style.backgroundColor = color
        })
    }

}
let selectColorBg = document.getElementById("activitySelector")
start = () => {
    selectColorBg.addEventListener("change", addActivityItem, false);
}