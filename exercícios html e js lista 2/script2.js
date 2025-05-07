let numero = Number(prompt("Digite um número: "))
let contador = 1
let fatorial = numero

while(contador < numero){
    fatorial = fatorial * (numero - contador)
    contador++
}

alert("O fatorial de "+ numero+ " é:"+fatorial)