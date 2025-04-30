/*Solicite ao usuário que insira um número.
Verifique se o número é par ou ímpar e exiba uma mensagem
correspondente usando alert .*/


let numero = Number(prompt("escreva um número: "))
let par = numero % 2=== 0


if( numero % 2 === 0){
    alert("O número "+ numero+ " é par.")
}else {
    alert("O número "+ numero+ " é impar.")
}