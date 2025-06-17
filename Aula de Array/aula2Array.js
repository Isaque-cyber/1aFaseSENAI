//13
let numeros = [23,3,5,6,4,2,55,90,45,40,30,20,10]
let numerosPares = numeros.filter(numero => numero % 2 === 0)
console.log(numerosPares)


//15. Encontre o maior numero de array.
let numeros2 = [23,3,5,6,4,2,55,90,45,40,30,20,10]
let maiorNumero = Math.max(23,3,5,6,4,2,55,90,45,40,30,20,10)
console.log(maiorNumero)

//16
let menorNumero = Math.min(...numeros2)
console.log(menorNumero)

//18
let array1 = ["teste", "teste2"]
let array2 = ['teste3',"teste4"]
let arrayJuntao = []. concat(...array1).concat(array2)
console.log(arrayJuntao)

// let array1 = ["teste", "teste2"]
// let array2 = ['teste3',"teste4"]
// let arrayJuntao = [...array1, ...array2]

//19
let palavras =["casa","banana","abacate"];
palavras.sort();

console.log(palavras);


//20
let numeros3 = [10, 20, 30, 40,50,60]
numeros3.sort((a,b)=> a-b)
console.log(numeros3)


// let numeros3 = [10, 20, 30, 40,50,60]
// let numeros3Desc = []
// for(let i = 0; i< (numeros3.length * numeros3.length); i++){
// numeros3.sort((a,b)=> a-b)
// console.log(numeros3)



//21
let valores =['Alex','Alex','João','João',"Maria",'Claudia']
let removerDuplicados = new Set([...valores])
let novoArray = [...removerDuplicados]
console.log(removerDuplicados)


let arraySemDuplicados = []
for(let i = 0; i< valores.length; i++){
    if(!arraySemDuplicados.includes(valores[i])){
        arraySemDuplicados.push
    }
}


//22
let  valores2 =['Alex','Alex','João','João',"Maria",'Claudia']
let arrayreferencia = []
let contador = 0
for (let i = 0; i< valores.length; i++){
    if(valores2[i] == 'Alex'){
        contador++
    }
}
let quantasVezesApareceAlex = valores2.filter(valor=> valor === 'Alex').length
console.log(contador, quantasVezesApareceAlex)

//23
let usuarios =['Alex','Alex','João','João',"Maria",'Claudia']
console.log(usuarios.join(', '))


//24
let frutas = ["Abacaxi","Laranja","Kiwi","Banana","Maçã"]
let frutasNovo = frutas.map(fruta => fruta === "Banana" ? "Maçã" : fruta)
console.log(frutasNovo)

//25
let frutas2 = ["Abacaxi","Laranja","Kiwi","Banana","Maçã"]
console.log(frutas.indexOf("Kiwi"))

//26
let mistos = ["Abacaxi","Laranja","Kiwi","Banana","Maçã"]

//27
let palavras2 = ['teste','seila','qualquer','coisa']
let palavrasMaiusculo = palavras2.map((palavra) => {
    let [primeira, ...restante] = palavra
    console.log(primeira, restante)
    let novaletra = primeira.toUpperCase()
    return novaletra + restante.join('')

})

console.log(palavrasMaiusculo)

//28. Verifique se todos os elementos são números com .every().
let elementos = [3,4,5,6,7,8]
let saonumeros = elementos.every(elemento => typeof elemento === "number")
console.log(saonumeros)

//29. Verifique se ao menos um número é maior que 100 usando  .some()
let elementos2 = [33,45,500,6,7,8]
let teste = elementos2.some(elemento => elemento > 100)
console.log(teste)


//30
let arraydearray = [34,434,[342,3,656,4], [2,[45,34,[344,343,]]]]
let arrays = arraydearray.flat(3)
console.log(arrays)

//31



//32
let notas = [5,6,7,8]
function calcularMedia(array){
    let soma = array.reduce((acumulador, atual) => acumulador +=atual, 0)
    return soma/array.length
}
console.log(calcularMedia(notas))

//33



//34
function rotacionar(array){
    console.log('pop', array.pop())
    array.unshift(array.pop());
    return array;
}
console.log(rotacionar(notas))

//35



//36



//37. Conte as vogais em cada string de um array.
function contarVogais(palavra){
    return (palavra.match(/[aeiou]/gi ||[])).length
}
let meuarray = ['palavra','teste','oi']
console.log(meuarray.map(palavra => {
    return{
        palavra: palavra,
        vogais: contarVogais(palavra)
    }
}))

//38
