let prAntigo = Number(prompt("Qual era o seu PR antigo no supino? "))
let prAtual = Number(prompt("qual foi o seu PR no treino de hoje no supino? "))
let AvançoNoPr  = prAtual - prAntigo
let regressoNoPr = prAtual < prAntigo
let NoAvanço = prAtual = prAntigo


if(prAtual > prAntigo ){
alert("O seu avanço no PR foi de "+AvançoNoPr+" Kg 😁")

}else if (prAtual < prAntigo){

alert("O seu regresso no PR foi de "+regressoNoPr+" Kg 😭")

}else if (prAtual === prAntigo ){
alert("Seu peso Pr não teve avanço hoje😢")
}
