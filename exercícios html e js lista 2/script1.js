let contador = 1
let somando = 0
while(contador <= 20){
    let resto = contador % 2
    if(resto == 0){
        somatorio = somatorio + contador
        alert("O número "+ contador +" é par e o somatorio é "+ somatorio)

    }
    contador++
}
alert("A soma dos pares de 1 a 20 é :"+ somatorio)