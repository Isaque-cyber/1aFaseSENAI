// let nomes = ["joão", "Clara","isaque", "jonas", "Pedro", "tiago", "barnabe", "Paulo"]
// console.log(nomes[10])
// console.log(nomes.length)
// nomes.forEach((element, index) => {
//     console.log(element + "@globmail.com")
// }
// );


// nomesComSobrenome = nomes.map((nome) => {
//     return nome + "da Silva"
// })



// let nomesComSobrenome = nomes.filter((nome) => nome.length > 5) 
// let findNome = nomes.find((nome) => nome.length > 5)
// console.log(findNome) 


//12
// let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]



// let numerosDois = numeros.map(element => elementoDois * 2)
// console.log(numeros)
// console.log(numerosDois)

//14

soma = numeros.reduce(acumulado, valoratual => acumulado+valoratual, 0)
console.log(soma)

let nomes2 = ["joão", "Clara","isaque", "jonas", "Pedro", "tiago", "barnabe", "Paulo"]
let nomesVirgula = nomes2.reduce((acumulado, valoratual) => acumulado +","+ valoratual, "" )

 console.log(nomesVirgula);
//


let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let numerosInvertidos = numeros.map((element, index, array) => {
    const len = array.length - 6
    return array[len - index]
}
)

console.log(numeros)
console.log(numerosInvertidos)












// nomes[4] = "isaque"

// console.log(nomes)

// for(let contador = 1; contador < nomes.length; contador++){
//     console.log(nomes[contador])
// }

