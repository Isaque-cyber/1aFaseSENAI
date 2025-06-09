/*Leia 2 valores de ponto flutuante de dupla precisão A e B, que correspondem a 2 notas de um aluno.
 A seguir, calcule a média do aluno, sabendo que a nota A tem peso 3.5 e a nota B tem peso 7.5 (A soma dos pesos portanto é 11). 
Assuma que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal*/
function media() {
    let nota1 = Number(prompt("Digite a primeira nota: "))

    let nota2 = Number(prompt("Digite a segunda nota: "))

    let peso1 = 3.5

    let peso2 = 7.5

    let media = (nota1 * peso1 + nota2 * peso2) / (peso1 + peso2)
    alert("MÉDIA = " + media)
}



function media2() {
    let nota1 = Number(prompt("Digite a primeira nota: "))
    let nota2 = Number(prompt("Digite a segunda nota: "))
    let nota3 = Number(prompt("Digite a terceira nota: "))
    let peso1 = 2.0
    let peso2 = 3.0
    let peso3 = 5.0

    let media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3)
    alert("MÉDIA = " + media.toFixed(1))
}



function salario() {
    let numeroFuncionario = Number(prompt("Número do funcionário: "))
    let horasTrabalhadas = Number(prompt("Número de horas trabalhadas: "))
    let salarioHoras = Number(prompt("Salario por hora: "))

    let salarioTotal = horasTrabalhadas * salarioHoras

    alert("O salário do funcionário " + numeroFuncionario + " é " + salarioTotal.toFixed(2) + " reais.")
}

function salarioComBonus() {
    let nomeFuncionario = prompt("Digite o nome do funcionário: ")
    let salarioFixo = Number(prompt("Digite o salário fixo do funcionário: "))
    let vendas = Number(prompt("Digite o total de vendas do funcionário: "))
    let comissao = vendas * 0.15
    let salarioTotal = salarioFixo + comissao

    alert("O salário total do funcionário " + nomeFuncionario + " é " + salarioTotal.toFixed(2) + " reais.")
}