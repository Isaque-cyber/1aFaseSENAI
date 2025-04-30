function gerarCaracterAleatorio(){
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789"
    const numeroaleatorio = Math.floor(Math.random() * caracteres.length);

    return caracteres.charAt(numeroaleatorio)

}

function mostrar(){
    let quantidade = Number(prompt("informe quantos caracteres sua senha deve ter - de 1 a 100"))
    let senha = ""
    while(quantidade > 0){
        senha = senha + gerarCaracterAleatorio()
        quantidade = quantidade -1
    }
    alert("A sua senha é: "+ senha)
}   