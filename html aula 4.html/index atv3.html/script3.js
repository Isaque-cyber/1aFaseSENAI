function exercício3lista2(){
    let nome = prompt ("Escreva o seu nome: ")
    let min = 1
    let max = 3
    let numeroaleatorio = Math.floor(Math.random() * (max - min)+ min)

    let frase1 = " capitão américa"
    let frase2 = " homem de ferro"
    let frase3 = " homem formiga"

    if(numeroaleatorio === 1) {
        alert (nome + frase1)
    }
    else if(numeroaleatorio === 2) {
        alert(nome + frase2)
    }
    else if(numeroaleatorio === 3) {
        alert(nome + frase3)
    }

}