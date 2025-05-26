function calculo() {
    let notaUm = Number(document.getElementById("nota1").value)
    let notaDois = Number(document.getElementById("nota2").value)
    let notaTres = Number(document.getElementById("nota3").value)
    let notaQuatro = Number(document.getElementById("nota4").value)
    let pesoUm = Number(document.getElementById("peso1").value)
    let pesoDois = Number(document.getElementById("peso2").value)
    let pesoTres = Number(document.getElementById("peso3").value)
    let pesoQuatro = Number(document.getElementById("peso4").value)
    let somaPesos
    let somaNotas
    let media
    let tagresultado = document.getElementById("resultado")

    somaPesos = (pesoUm + pesoDois + pesoTres + pesoQuatro)
    somaNotas = ((notaUm * pesoUm) + (notaDois * pesoDois) + (notaTres * pesoTres) + (notaQuatro * pesoQuatro))
    media = somaNotas / somaPesos
    
    tagresultado.innerText = "A média ponderada é: " + media

}