function calculo() {
    let notaUm = Number(document.getElementById("nota1").value)
    let notaDois = Number(document.getElementById("nota2").value)
    let notaTres = Number(document.getElementById("nota3").value)
    let notaQuatro = Number(document.getElementById("nota4").value)
    let media
    let tagresultado = document.getElementById("resultado")

    media = (notaUm + notaDois + notaTres + notaQuatro) / 4

    tagresultado.innerText = "A média é: " + media
}