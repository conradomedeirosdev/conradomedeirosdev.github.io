let str = "anna";
let n = str.length;
for (let i = 0; i < str.length; i++) {
    if (str[i] == str[n]){
    n--;
    console.log(true);
    }else {
    console.log(false);
    }
}

