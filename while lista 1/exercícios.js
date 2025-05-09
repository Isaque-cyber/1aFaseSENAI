// 1. Mostre apenas os números pares de 1 a 20
function exercício1(){
let contador = 1
while(contador <= 20){
    let resto = contador % 2
    if(resto === 0) alert("Número: " + contador + " é Par")
        
    contador++
}
}
// 2. Mostre apenas os números ímpares de 1 a 20
    function exercício2(){
        let contador = 1
        while(contador <= 20){
        let resto = contador % 2
        if(resto !== 0) alert("Número: " + contador + " é impar")
        contador++
    }
    }

    // 3. Imprima “Olá, mundo!” 5 vezes.
    function exercício3(){
        quantidade = 0
        let mensagem = "Óla mundo"
        while(quantidade <=5){
        quantidade++
        
        
        alert(mensagem)}
    
    }

    // 4. Conte de 0 a 50 pulando de 5 em 5.
    function exercício4(){
        let numero = 0
        while(numero <= 50){
        alert("O número é "+ numero)
        numero +=5
        }

    }

    // 5. Conte de 100 até 0 diminuindo de 10 em 10.
    function exercício5(){
        let numero = 100
        while(numero > 0){
        alert("O número é "+ numero)
        numero -=10
        }
    }        


    // 6. Conte de 0 até 30 e mostre apenas os múltiplos de 3.
    




























































































































































    function exercício6(){
        let soma = 0
        
        let cont= 1
        while(cont <= 100){ 
            soma = soma + cont 
            cont++  // atualização da contagem
        }
        console.log (" Soma: "+ soma)
    } 