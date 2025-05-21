let peso = Number(document.getElementById("Peso").value);
let altura = Number(document.getElementById("Altura").value);
let imc 

imc = peso / (altura * altura) 

alert("seu imc é " + imc.toFixed);

