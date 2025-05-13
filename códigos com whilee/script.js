let idademinima = 0
let aceitouTermo = false

while((aceitouTermo == false) || (idademinima < 18)) {
    idademinima = Number(prompt("Qual a sua idade: "))
    let resposta = prompt("Aceitou o termo? Sim ou Não")
    if(resposta === "Sim")
     aceitouTermo = true
    else aceitouTermo = false
    
}



alert("Você está inscrito")


/*if(aceitouTermo === true && idademinima >=18){
    alert("Entrou no código")}*/