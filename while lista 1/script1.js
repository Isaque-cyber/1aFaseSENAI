// 1. Mostre apenas os números pares de 1 a 20
function mostrarPar(){
let contador = 1
while(contador <= 20){
    let resto = contador % 2
    if(resto === 0) alert("Número: " + contador + " é Par")
        
    contador++
}
}