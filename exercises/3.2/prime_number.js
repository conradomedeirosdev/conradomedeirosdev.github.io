let n = 82;
let primo;
for (i = 2; i <= n; i++){
    if(n == 2){
        primo = true;
        break;
    }
    else if (n % i == 0){
        primo = false;
        break;
    }else{
        primo = true;
        break;
    }
}
console.log(primo);