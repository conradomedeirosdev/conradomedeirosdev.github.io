const assert = require('assert');

class Simulado {
    constructor(arr = []) {
        this.questions = arr
        this.tri = 0
    }

    avaliaSimulado(nota) {
        this.tri = nota
    } 
    
}

class Question {
    constructor(id, content) {
        this.id = id 
        this.content = content
    }
}

let question1 = new Question(5, "string")
let question2 = new Question(10, "semusaromesmocontent")
const arrQuestion = [question1, question2]
let simulado1 = new Simulado(arrQuestion)
const nota = 42
simulado1.avaliaSimulado(nota)

console.log(simulado1.tri)
//teste automatizados

assert.equal(simulado1.questions, arrQuestion)



