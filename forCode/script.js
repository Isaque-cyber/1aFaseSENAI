/*
let cont = 0
while(cont<10){
    console.log(cont);
    
    cont++
}

for(let cont = 0; cont<10; cont++){
    console.log(cont);
}*/
/*
let idade = 0
let temcnh = false
while (idade < 18 || !temcnh) {
    idade = Number = (prompt("Digite a sua idade: "))
    temcnh = prompt = ("Tem CNH? (Sim/Não)") == "Sim" ? true : false

}
alert("Você pode Dirigir")







/*1. Peça ao usuário sua idade e se ele tem carteira de motorista. Exiba "Pode
dirigir" se for maior de 18 e tiver carteira.*/
function L1() {
    let idade = 0
    let cnh = 'Não'
    while (idade < 18 || cnh !== "Sim") {
        idade = Number(prompt("Digite a sua idade: "))
        cnh = prompt("Você tem CNH: (Sim/Não)")
        if (idade >= 18 && cnh === "Sim") {
            alert("Pode dirigir")
        } else {
            alert("Não pode dirigir!!!")
        }
    }
}

// 2. Verifique se um número digitado é positivo e par.
function L1() {
    if (numero > 0 && numero % 2 === 0) {
        console.log("O número é positivo e par.");
    } else if (numero > 0 && numero % 2 !== 0) {
        console.log("O número é positivo, mas não é par.");
    } else if (numero < 0) {
        console.log("O número é negativo.");
    } else {
        console.log("O número é zero, que não é nem positivo nem negativo.");
    }
}

/*3. Solicite um nome de usuário e uma senha. Exiba "Acesso permitido" se o
nome for "admin" ou a senha for "1234".*/
function L1() {
    function identificacao() {
        // Solicita o ID e a senha ao usuário
        const nomeDigitado = prompt("Digite seu ID:");
        const senhaDigitada = prompt("Digite a senha:");

        // ID e senha esperados
        const nome = "isau";
        const senha = "isaque123";

        // Verifica se o ID e a senha estão corretos
        if (senhaDigitada === senha && nomeDigitado === nome) {
            console.log("Acesso permitido");
        } else {
            alert("Acesso negado");
        }
    }
}


/*4. Peça dois números. Exiba "Valores válidos" se um for positivo e o outro for
negativo.*/
function L1() {
    let numero1 = Number(prompt("Digite um número: "))
    let numero2 = Number(prompt("Digite outro número: "))


    if (numero1 > 0 && numero2 < 0 || numero1 < 0 && numero2 > 0) {
        
        alert("O número " + numero1 + " é positivo e o número" + numero2 + "é negativo")
    } else {
        alert("O número " + numero1 + " é negativo e o número" + numero2 + "é positivo")
    }


}

// 5.Peça uma nota. Exiba "Aprovado" se a nota for maior que 6 e menor ou igual a 10.
function L1() {
    let nota = Number(prompt("Digite a sua nota: "))
    if (nota > 6 && nota <= 10) {
        alert("Aprovado")
    } else {
        alert("Reprovado")
    }
}

// 6. Peça um número. Exiba "Número inválido" se ele não estiver entre 1 e 100.
function L1() {
    let numero = Number(prompt("Digite um número entre 1 e 100: "))
    if (numero < 1 || numero > 100) {
        alert("Número inválido")
    } else {
        alert("Número válido")
    }
}

// 7. Peça a idade e se o usuário é estudante. Exiba "Meia entrada" se for menor de 18 ou estudante.
function L1() {
    let idade = Number(prompt("Digite a sua idade: "))
    let estudante = prompt("Você é estudante? (Sim/Não)")
    if (idade < 18 || estudante === "Sim") {
        alert("Meia entrada")
    } else {
        alert("Entrada inteira")
    }
}

// 8. Peça se o usuário aceitou os termos (sim/não) e confirmou o email (sim/não). Exiba "Cadastro completo" se ambos forem "sim".
function L1() {
    let aceitouTermos = prompt("Você aceitou os termos? (Sim/Não)")
    let confirmouEmail = prompt("Você confirmou o email? (Sim/Não)")
    if (aceitouTermos === "Sim" && confirmouEmail === "Sim") {
        alert("Cadastro completo")
    } else {
        alert("Cadastro incompleto")
    }
}


// 9. Peça a altura e o peso. Exiba "Apto para o esporte" se altura > 1.60m e peso entre 50 e 90 kg.
function L1() {
    let altura = Number(prompt("Digite a sua altura em metros: "))
    let peso = Number(prompt("Digite o seu peso em kg: "))
    if (altura > 1.60 && peso >= 50 && peso <= 90) {
        alert("Apto para o esporte")
    } else {
        alert("Não apto para o esporte")
    }
}


// 10. Verifique se uma pessoa não é maior de idade ou não aceitou os termos. Se for verdade, exiba "Acesso negado".
function L1() {
    let idade = Number(prompt("Digite a sua idade: "))
    let aceitouTermos = prompt("Você aceitou os termos? (Sim/Não)")
    if (idade < 18 || aceitouTermos === "Não") {
        alert("Acesso negado")
    } else {
        alert("Acesso permitido")
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 1. Enquanto a senha digitada não for “abc123” e o número de tentativas for menor que 3, peça a senha novamente. Lista while-for complexos 1
function L2() {
    let senhaDigitada = "";
    let tentativas = 0;
    const senhaCorreta = "abc123";

    while (senhaDigitada !== senhaCorreta && tentativas < 3) {
        senhaDigitada = prompt("Digite a senha: ");
        tentativas++;
    }

    if (senhaDigitada === senhaCorreta) {
        alert("Senha correta!");
    } else {
        alert("Número máximo de tentativas atingido.");
    }
}


// 2. Enquanto o usuário não aceitar os termos ou tiver menos de 18 anos, continue perguntando.
function L2() {
    let aceitouTermos = false;
    let idade = 0;

    while (!aceitouTermos || idade < 18) {
        aceitouTermos = prompt("Você aceita os termos? (Sim/Não)") === "Sim";
        idade = Number(prompt("Digite sua idade: "));
    }

    alert("Cadastro completo!");
}


// 3. Solicite dois números até que ambos sejam pares.
function L2() {
    let numero1 = 0;
    let numero2 = 0;

    while (numero1 % 2 !== 0 || numero2 % 2 !== 0) {
        numero1 = Number(prompt("Digite o primeiro número: "));
        numero2 = Number(prompt("Digite o segundo número: "));
    }

    alert("Ambos os números são pares!");
}

// 4. Peça uma letra até que ela não seja “a” e não seja “b”.
function L2() {
    let letraDigitada = "";

    while (letraDigitada === "a" || letraDigitada === "b") {
        letraDigitada = prompt("Digite uma letra: ");
    }

    alert("Você digitou uma letra diferente de 'a' ou 'b'!");
}
// 5. Solicite um número até que ele esteja entre 10 e 20 ou seja igual a 50.
function L2() {
    let numero = 0;

    while (numero < 10 || numero > 20 && numero !== 50) {
        numero = Number(prompt("Digite um número entre 10 e 20 ou igual a 50: "));
    }

    alert("Número válido!");
}
// 6. Peça login e senha até que ambos estejam corretos.
function L2() {
    let usuario = "";
    let senha = "";

    while (usuario !== "admin" || senha !== "1234") {
        usuario = prompt("Digite o usuário: ");
        senha = prompt("Digite a senha: ");
    }

    alert("Login bem-sucedido!");
}
// 7. Pergunte se o usuário deseja continuar (“sim” ou “não”) enquanto a resposta não for “não”.
function L2() {
    let resposta = "sim";

    while (resposta !== "não") {
        resposta = prompt("Deseja continuar? (sim/não)");
    }

    alert("Você escolheu não continuar.");
}
// 8. Solicite dois valores. Continue pedindo até que um seja múltiplo de 3 e o outro maior que 10.
function L2() {
    let numero1 = 0;
    let numero2 = 0;

    while (numero1 % 3 !== 0 || numero2 <= 10) {
        numero1 = Number(prompt("Digite o primeiro número: "));
        numero2 = Number(prompt("Digite o segundo número: "));
    }

    alert("Um número é múltiplo de 3 e o outro é maior que 10!");
}
// 9. Enquanto o nome digitado não for "admin" ou a senha não for "321", continue pedindo login.
function L2() {
    let nome = "";
    let senha = "";

    while (nome !== "admin" || senha !== "321") {
        nome = prompt("Digite o nome de usuário: ");
        senha = prompt("Digite a senha: ");
    }

    alert("Login bem-sucedido!");
}
// 10. Enquanto não forem preenchidos nome e idade, continue solicitando.
function L2() {
    let nome = "";
    let idade = 0;

    while (nome === "" || idade === 0) {
        nome = prompt("Digite seu nome: ");
        idade = Number(prompt("Digite sua idade: "));
    }

    alert("Cadastro completo!");
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 1. Imprima todos os números de 1 a 100 que são pares e múltiplos de 3.
function L3() {
    for (let numero = 1; numero <= 100; numero++) {
        if (numero % 2 === 0 && numero % 3 === 0) {
            console.log(numero);
        }
    }
}
// 2. Imprima os números de 1 a 50 que são ímpares ou múltiplos de 7.
function L3() {
    for (let numero = 1; numero <= 50; numero++) {
        if (numero % 2 !== 0 || numero % 7 === 0) {
            console.log(numero);
        }
    }
}
// 3. Mostre todos os números entre 1 e 30 que não são divisíveis por 2 e por 3.
function L3() {
    for (let numero = 1; numero <= 30; numero++) { 
        if (numero % 2 !== 0 && numero % 3 !== 0) {
            console.log(numero);
        }       
    }
}    
// 4. De 1 a 100, exiba apenas os que estão entre 10 e 20 ou entre 90 e 100.

function L3() {
    for (let numero = 1; numero <= 100; numero++) {
        if ((numero >= 10 && numero <= 20) || (numero >= 90 && numero <= 100)) {
            console.log(numero);
        }
    }
}
// 5. De 0 a 20, imprima apenas os números múltiplos de 4 e não múltiplos de 8.
function L3() {
    for (let numero = 0; numero <= 20; numero++) {
        if (numero % 4 === 0 && numero % 8 !== 0) {
            console.log(numero);
        }
    }
}
// 6. Percorra de 0 a 50 e exiba os números onde (número > 30 e número < 40) ou (número % 10 === 0).
function L3() {
    for (let numero = 0; numero <= 50; numero++) {
        if ((numero > 30 && numero < 40) || (numero % 10 === 0)) {
            console.log(numero);
        }
    }
}
// 7. Imprima de 1 a 20 os números pares ou divisíveis por 5.
function L3() {
    for (let numero = 1; numero <= 20; numero++) {
        if (numero % 2 === 0 || numero % 5 === 0) {
            console.log(numero);
        }
    }
}
// 8. Mostre todos os números entre 0 e 100 que sejam múltiplos de 6 e não múltiplos de 9.
function L3() {      
    for (let numero = 0; numero <=
        100; numero++) {
        if (numero % 6 === 0 && numero % 9 !== 0) {
            console.log(numero);
        }
    }   

}
// 9. De 1 a 50, imprima apenas os números menores que 10 ou maiores que 40.
function L3() {
    for (let numero = 1; numero <= 50; numero++) {
        if (numero < 10 || numero > 40) {
            console.log(numero);
        }
    }
}

// 10. Percorra os números de 1 a 30. Para cada número, imprima "Especial" se ele for múltiplo de 3 e estiver entre 10 e 25.
function L3() {
    for (let numero = 1; numero <= 30; numero++) {
        if (numero % 3 === 0 && numero >= 10 && numero <= 25) {
            console.log("Especial");
        } else {
            console.log(numero);
        }
    }
}