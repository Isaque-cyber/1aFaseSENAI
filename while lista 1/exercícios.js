function exercicio1() {
    let numero = 0
    
    while (numero <= 20) {
        alert ("O número é: " + numero)
        numero += 2
    }
}

function exercicio2() {
    let numero = 1

    while (numero <= 20) {
        alert ("O número é: " + numero)
        numero += 2
    }
}

function exercicio3() {
    let quantidade = 0
    let mensagem = "Olá mundo!!!"

    while (quantidade <= 5){
        alert (mensagem)
        quantidade++
    }
}

function exercicio4() {
    let numero = 0
    
    while (numero <= 50){
        alert ("O número é: " + numero)
        numero += 5
    }
}

function exercicio5(){
    let numero = 100

    while (numero >= 0){
        alert ("O número é: " + numero)
        numero -= 10
    }
}

function exercicio6(){
    let numero = 0

    while (numero <= 30){
        alert ("O número é: " + numero)
        numero += 3
    }
}

function exercicio7(){
    let numero = 1
    let quadradoNum 

    while (numero <= 10){
        quadradoNum = numero * numero
        alert ("O número é: " + numero + " e ao quadrado é: " + quadradoNum)
        numero++
    }
}

function exercicio8(){
    let numero = 1
    let cuboNum

    while (numero <= 10){
        cuboNum = numero * numero * numero
        alert ("O número é: " + numero + " e ao cubo é: " + cuboNum)
        numero++
    }
}

function exercicio9(){
    let numero = 1

    while (numero <= 15){
        if (numero % 2 == 0){
            alert ("O número " + numero + " é par.")
        }else{
            alert ("O número " + numero + " é ímpar.")
        }
        numero++
    }
}

function exercicio10(){
    let numero = 0

    while (numero <= 100){
        alert ("O número é: " + numero)
        numero += 4
    }
}

function exercicio11(){
    let numero = 0 
    let frase = "Número: X"

    while (numero <= 10){
        alert (numero + " " + frase)
        numero++
    }
}

function exercicio12(){
    let numero = 1

    while (numero <= 20){
        if (numero % 3 == 0){
            alert ("O número é: " + numero + " Fizz")
        }else{
            alert ("O número é: " + numero)
    }
        numero++
    }
}

function exercicio13(){
    let numero = 1

    while (numero <= 20){
        if (numero % 5 == 0){
            alert ("O número é: " + numero + " Buzz")
        }else{
            alert ("O número é: " + numero)
    }
        numero++
    }
}

function exercicio14(){
    let numero = 1
    let soma

    while (numero <= 10){
        soma = numero + numero
        alert ("O número é: " + numero + " e a soma é: " + soma)
        numero++
    }
}

function exercicio15(){
    let numero = 5
    let resultado
    let contador = 0

    while (contador <= numero){
        alert ("O fatorial de " + numero + " é: " + resultado)
        resultado = numero * contador
        contador++
    }
}

function exercicio16(){
    let numero = 0
    let numPares = 0

    while (numero <= 50){
        alert ("O número é: " + numero + " e os números que pares até 50 são: " + numPares)
        if (numero % 2 == 0){
            numPares++
        }
        numero++
    }
}

function exercicio17(){
    let num = 0
    let multiploDeSeis = 0

    while (num <= 100){
        alert ("O número é: " + num + " e os números múltiplos de 6 são: " + multiploDeSeis)
        if (num % 6 == 0){
            multiploDeSeis++
        }
        num++
    }
}

function exercicio18(){
    let num = 1

    while (num <= 30){
        if (num % 4 == 0){
            alert ("Pula")
        }else{
            alert ("O número é: " + num)
        }
        num++
    }
}

function exercicio19(){
    let num = 1
    let soma = 0

    while (num <= 100){
        soma += num
        alert ("A soma dos números de 1 a 100 é: " + soma)
        num++

        if (soma >= 400){
            alert ("A soma ultrapassou 400, o loop será encerrado.")
            break
        }
    }
}

function exercicio20(){
    let senha = "12345"
    let senhaDigitada = ""
    let tentativas = 0
    let maxTentativas = 3

    while (senhaDigitada != senha && tentativas < maxTentativas){
        senhaDigitada = prompt("Digite a senha: ")
        tentativas++

        if (senhaDigitada == senha){
            alert ("Senha correta!")
        }else{
            alert ("Senha incorreta! Você tem " + (maxTentativas - tentativas) + " tentativas restantes.")
        }
    }
}

function exercicio21(){
    let numero = 1
    while (numero <= 50){
        alert ("O número é: " + numero)
        numero++
        if (numero === 30){
            alert ("O número 30 foi encontrado, o loop será encerrado.")
            break
        }
    }
}

function exercicio22(){
    let numero = 1

    while (numero <= 100){
        alert ("O número é: " + numero)
        numero++
        if (numero === 50){
            alert ( "O numero é: " + numero +"Tamo contando, tamo contando")
        }
    }
}

function exercicio23(){
    let contagem = 10

    while (contagem >= 1){
        alert ("Contagem regressiva: " + contagem)
        contagem--
        if (contagem === 0){
            alert ("Lançamento!")
        }
    }
}

function exercicio24(){
    let numero = 1

    while (numero <= 30){
        if (numero % 7 == 0){
            alert ("O número " + numero + " Pulando!")
        }else{
            alert ("O número é: " + numero)
        }
        numero++
    }
}

function exercicio25(){
    let numero = 1

    while (numero <= 20){
        if (numero % 2 == 0 && numero % 3 == 0){
            alert ("O número " + numero + " Especial!")
        }else{
            alert ("O número é: " + numero)
        }
        numero++
    }
}

function exercicio26(){
    let numero = 1

    while (numero <= 10){
        if (numero >= 5){
            alert ("O número " + numero + " é maior ou igual a 5")
    }else{
            alert ("O número " + numero + " é menor que 5")
        }
       numero++
    }
}

function exercicio27(){
    let numero = 1
    let limite = Math.floor(Math.random() * 10) + 1

    while (numero <= limite){
        alert ("O número é: " + numero)
        numero++
    }
}

function exercicio28(){
    let numeroDiv = Number(prompt("Digite um número para ver os divisores: "))
    let divisor = 1

    while (divisor <= numeroDiv){
        if (numeroDiv % divisor == 0){
            alert ("O número " + divisor + " é divisor de " + numeroDiv)
        }
        divisor++
    }
}

function exercicio29(){
    let numero = 1

    while (numero <= 20){
        alert ("O número é: " + numero)
        numero += 2
    }
}

function exercicio30(){
    let numero = 1
    let numerosDivPorNove = 0

    while (numero <= 100){
        if (numero % 9 == 0){
            alert ("O número é: " + numero + " é divisível por 9")
            numerosDivPorNove++
        }else{
            alert ("O número é: " + numero)
        }
        numero++
    }
}

function exercicio31(){
    let numero = 50

    while (numero >= 0){
        if (numero % 5 == 0){
            alert ("Pula! Multiplo de 5")
    }else{
            alert ("O número é: " + numero)
    }
    numero--
    }
}

function exercicio32(){
    let contador = 1
    let soma = 0

    while (contador <= 100){
        if  (contador % 2 == 0){
            soma += contador
            alert ("A soma dos números pares de 1 a 100 é: " + soma)
        }else{
            alert ("O número " + contador + " é ímpar.")
        }
        contador++
    }
}

function exercicio33(){
    let sinaleira = ["Verde", "Amarelo", "Vermelho"]
    let contador = 0
    let tempo = 0

    while (contador < 10){
        alert ("Sinal: " + sinaleira[contador % 3])
        contador++
        tempo += 5
        alert ("Tempo: " + tempo + " segundos")
    }
}

function exercicio34(){
    let bateria = 0

    while (bateria < 100){
        alert ("A bateria está em: " + bateria + "%")
        bateria += 10
        if (bateria == 100){
            alert ("Bateria cheia!")
        }
    }
}

function exercicio35(){
    let bateria = 100

    while (bateria > 0){
        alert ("A bateria está em: " + bateria + "%")
        bateria -= 10
        if (bateria == 0){
            alert ("Bateria descarregada!")
        }
    }
}

function exercicio36(){
    let tempo = 0

    while (tempo <= 60){
        alert ("O tempo é: " + tempo + " segundos")
        tempo++
        if (tempo == 60){
            alert ("O tempo acabou!")
        }
    }
}

function exercicio37(){
    let senha = Number(prompt("Digite a senha: "))
    let senhaCorreta = 1234
    let tentativas = 0
    let maxTentativas = 5

    while (senha != senhaCorreta && tentativas < maxTentativas){
        alert ("Senha incorreta! Você tem " + (maxTentativas - tentativas) + " tentativas restantes.")
        senha = Number(prompt("Digite a senha: "))
        tentativas++
        if (senha == senhaCorreta){
            alert ("Senha correta!")
        }
    }
}

function exercicio38(){
    let passos = 0
    let distancia = 10

    while (passos >= distancia){
        console.log ("Você andou " + passos + " passos.")
        passos++
    }
}

function exercicio39(){
    let carregamento = "█"
    let porcentagem = 0
    let totalCarregamento = 10
    let totalCarregado = 0

    while (totalCarregado < totalCarregamento){
        alert ("Carregando: " + carregamento.repeat(totalCarregado) + " " + porcentagem + "%")
        porcentagem += 10
        totalCarregado++
        if (totalCarregado == totalCarregamento){
            alert ("Carregamento completo!")
        }
    }
}

function exercicio40(){
    let gasolina = 100
    let consumo = 10
    let distancia = 0

    while (gasolina > 0){
        alert ("Você tem " + gasolina + " litros de gasolina.")
        distancia += consumo
        gasolina -= consumo
        alert ("Você andou " + distancia + " km.")
        if (gasolina <= 0){
            alert ("Você ficou sem gasolina!")
        }
    }
}

function exercicio41(){
    let numero = 1

    while (numero <= 100){
        if (numero % 8 == 0){
            alert ("Pula! Multiplo de 8")
        }else{
            alert ("O número é: " + numero)
        }
        numero++
    }
}

function exercicio42(){
    let numero = 6
    let numeroDeSorte = Math.floor(Math.random() * 6) + 1
    let tentativas = 0

    while (numeroDeSorte == numero){
        if (numero != numeroDeSorte){
            alert ("Role o dado novamente!")
        }else{
            alert ("Você acertou o número 6: " + numeroDeSorte)
        }
        tentativas++
        break
    }
}

function exercicio43(){
    let numero = 1

    while (numero <= 100){
        if (numero % numero == 0 && numero % 1 == 0 && numero != 1 && numero % 2 != 0 && numero % 3 != 0){
            alert ("O número " + numero + " é primo.")
        }else{
            alert ("O número " + numero + " não é primo.")
        }
        numero++
    }
}

function exercicio44(){
    let numero = 1
    let soma = 0
    let somaMaxima = 1000
    let quantidade = 0

    while (soma <= somaMaxima){
        alert ("A soma é: " + soma + " e a quantidade de vezes que o número 1 foi somado é: " + quantidade)
        soma += numero
        quantidade++
        if (soma > somaMaxima){
            alert ("A soma ultrapassou 1000, o loop será encerrado.")
            break
        }
    }
}

function exercicio45(){
    let dowload = 0

    while (dowload < 100){
        dowload += 10
        alert ("Download em progresso: " + dowload + "%")
        if (dowload == 100){
            alert ("Download completo!")
        }
    }
}

function exercicio46(){
    let tempo = 1
    let tempoMaximo = 5

    while (tempo <= tempoMaximo){
        alert ("O tempo é: " + tempo + " segundos")
        tempo++
        if (tempo == tempoMaximo){
            alert ("O tempo acabou!")
        }
    }
}

function exercicio47(){
    let senhaDigitada = ""
    let tentativas = 0
    let maxTentativas = 4

    while (tentativas < maxTentativas){
        senhaDigitada = prompt("Digite a senha: ")
        tentativas++
        if (tentativas == maxTentativas){
            alert ("Senha correta!")
        }else{
            alert ("Senha incorreta! Você tem " + (maxTentativas - tentativas) + " tentativas restantes.")
        }
    }
}

function exercicio48(){
    let numero = 1

    while (numero <= 100){
        if (numero % 3 == 0 && numero % 5 == 0){
            alert ("O número é: " + numero + " FizzBuzz")
        }else if (numero % 3 == 0){
            alert ("O número é: " + numero + " Multiplo de 3")
        }else if (numero % 5 == 0){
            alert ("O número é: " + numero + " Multiplo de 5")
        }else{
            alert ("O número é: " + numero)
        }
        numero++
    }
}



















































































































































    function L2exercício6(){
        let soma = 0
        
        let cont= 1
        while(cont <= 100){ 
            soma = soma + cont 
            cont++  // atualização da contagem
        }
        console.log (" Soma: "+ soma)
    } 