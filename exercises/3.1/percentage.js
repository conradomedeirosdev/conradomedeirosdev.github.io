var grade = 70
if (grade >= 90 && grade <= 100){
    console.log("Você tirou A");
}else if (grade >= 80 && grade <= 90){
    console.log("Você tirou B");
}else if (grade >= 70 && grade <= 80){
    console.log("Você tirou C");
}else if (grade >= 60 && grade <= 70){
    console.log("Você tirou D");
}else if (grade >= 40 && grade <= 60){
    console.log("Você tirou E");
}else if (grade < 40 && grade > 0){
    console.log("Você tirou F")
}else {
    console.log("A nota não está dentro do padrão, tente uma nota de 0 a 100")
}