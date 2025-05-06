function mostrarImpar(){
let contador = 1
while(contador <= 20){
    let resto = contador % 2
    if(resto !== 0) alert("Número: " + contador + " é impar")
    contador++
}
}