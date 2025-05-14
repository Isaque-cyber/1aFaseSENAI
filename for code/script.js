/*
let cont = 0
while(cont<10){
    console.log(cont);
    
    cont++
}

for(let cont = 0; cont<10; cont++){
    console.log(cont);
}*/

let idade = 0
let temcnh = false
while (idade < 18 || !temcnh) {
    idade = Number = (prompt("Digite a sua idade: "))
    temcnh = prompt = ("Tem CNH? (Sim/Não)") == "Sim" ? true : false

}
alert("Você pode Dirigir")







/*1. Peça ao usuário sua idade e se ele tem carteira de motorista. Exiba "Pode
dirigir" se for maior de 18 e tiver carteira.*/
function dirigir() {
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
function posiEpar() {
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
function identificação() {
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
function valores() {
    let numero1 = Number(prompt("Digite um número: "))
    let numero2 = Number(prompt("Digite outro número: "))


    if (numero1 > 0 && numero2 < 0 || numero1 < 0 && numero2 > 0) {
        
        alert("O número " + numero1 + " é positivo e o número" + numero2 + "é negativo")
    } else {
        alert("O número " + numero1 + " é negativo e o número" + numero2 + "é positivo")
    }


}