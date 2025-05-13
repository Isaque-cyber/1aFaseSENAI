
function inscrição(){
for(let contador = 0; contador <=100; contador++){
    if(contador % 2 == 0 || contador % 3 == 0 || contador == 25){
        alert("Número atende a regra" + contador)
    }
    else alert("Não atende a regra")
}
}



function senha(){
let tentativa = 1 
let senha = "isaque123"
let senhaDigitada = " "

while(senhaDigitada !== senha && tentativa <= 3){
    senhaDigitada = prompt("Digite a sua senha: ")
    tentativa++
}

if(senhaDigitada !== senha){
    alert("conta bloqueada")
}else{
    alert("Logado")
}

}