/*Leia 2 valores de ponto flutuante de dupla precisão A e B, que correspondem a 2 notas de um aluno.
 A seguir, calcule a média do aluno, sabendo que a nota A tem peso 3.5 e a nota B tem peso 7.5 (A soma dos pesos portanto é 11). 
Assuma que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal*/

let nota1 = n-Number(prompt("Digite a primeira nota: "))

let nota2 = Number(prompt("Digite a segunda nota: "))

let peso1 = 3.5

let peso2 = 7.5

let media = (nota1 * peso1 + nota2 * peso2) / (peso1 + peso2)
console.log("MEDIA = " + media.toFixed(5))
