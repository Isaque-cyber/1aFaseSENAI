//Lista de Exercícios – Operações com Arrays


const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];
const nomes = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];
const produtos = [
 { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
 { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
 { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
 { nome: "Meias", preco: 9.9, categoria: "Roupas" },
 { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];

//Exercícios com numeros
// 1. Filtrar números maiores que 10.

let numerosMaiores10 = numeros.filter (numeros => numeros > 10)
console.log (numerosMaiores10)


// 2. Dobrar todos os números do array.

let numerosDobrados = numeros.map (numeros => numeros * 2)
console.log (numerosDobrados)

// 3. Somar todos os números do array.

let somaNumeros = numeros.reduce ((acumulador , atual) => acumulador + atual, 0)
console.log (somaNumeros) 

// 4. Encontrar o maior número.

let maiorNumero = Math.max (...numeros)
console.log (maiorNumero)

// 5. Encontrar o menor número.

let menorNumero = Math.min (...numeros)
console.log (menorNumero)

// 6. Ordenar os números em ordem crescente.

let numCrescente = [numeros.sort ((a,b) => a - b)]
console.log (numCrescente)

// 7. Criar um novo array com apenas os números ímpares.

let numImpares = numeros.filter (numeros => numeros % 2 !== 0)
console.log (numImpares)

// 8. Verificar se todos os números são maiores que 3.

let numMaiorQue3 = numeros.every (numeros => numeros > 3)
console.log (numMaiorQue3)

// 9. Verificar se existe algum número maior que 100.

let numMaiorQue100 = numeros.some (numeros => numeros > 100)
console.log (numMaiorQue100)

// 10. Retornar a média dos números.

function CalcularMedia(array){
let soma = array.reduce ((acumulador, atual) => acumulador += atual, 0)
return soma/array.length
}
console.log (CalcularMedia(numeros))


// 💡 Exercícios com nomes
// 1. Ordenar os nomes em ordem alfabética.

let nomesOrdemAlfabetica = nomes.sort()
console.log (nomesOrdemAlfabetica)

// 2. Filtrar os nomes com mais de 5 letras.

let nomesMais5Letras = nomes.filter (nomes => nomes.length > 5)
console.log (nomesMais5Letras)

// 3. Transformar todos os nomes em letras minúsculas.

let nomesEmMinusculo = nomes.map (nomes => nomes.toLowerCase())
console.log (nomesEmMinusculo)

// 4. Verificar se algum nome começa com a letra “B”.

let nomesComB = nomes.filter (nomes => nomes[0] === 'B')
console.log (nomesComB)

// 5. Encontrar o nome “Daniel” no array.

let acharDaniel = nomes.find (nomes => nomes === 'Daniel')
console.log (acharDaniel)

// 6. Criar um array com a quantidade de letras de cada nome.

let qtndLetraDosNomes = nomes.map (nomes => nomes.length)
console.log (qtndLetraDosNomes)

// 7. Juntar todos os nomes em uma string separada por vírgula.

console.log (nomes.join (', '))

// 💡 Exercícios com produtos
// 1. Filtrar os produtos da categoria “Eletrônicos”.

let mostrarEletronicos = produtos.filter (a => a.categoria === 'Eletrônicos')
console.log (mostrarEletronicos)

// 2. Criar um array apenas com os nomes dos produtos.

let nomeProdutos = produtos.map (produtos => produtos.nome)
console.log (nomeProdutos)

// 3. Criar um array com os preços com desconto de 10%.

let produtosComDesconto = produtos.map (produtos => ({
    ...produtos,
    preco: produtos.preco - (produtos.preco * 0.10).toFixed(2)
}))
console.log (produtosComDesconto)

// 4. Calcular o valor total de todos os produtos.

let valorTotal = produtos.reduce ((soma, produto) => soma + produto.preco, 0)
console.log (valorTotal)

// 5. Encontrar o produto mais caro.

let produtoMaisCaro = produtos.reduce ((maisCaro, produtoAtual) => {
    return produtoAtual.preco > maisCaro.preco ? produtoAtual:maisCaro 
})

console.log (produtoMaisCaro)

// 6. Ordenar os produtos do mais barato ao mais caro.

let produtosCrescente = [produtos.sort((a, b) => a.preco - b.preco)]
console.log (produtosCrescente)

// 7. Agrupar os produtos por categoria (bônus - mais avançado).

let produtosCategoria = [produtos.sort((a, b) => a.categoria - b.categoria)]
console.log (produtosCategoria)

// 8. Criar uma função que receba uma categoria e retorne os produtos dela.

function buscarCategoria(categoria){
    return produtos.filter (produtos => produtos.categoria === categoria)
}
let mostrarCategoria = buscarCategoria('Eletrônicos');//digite no parenteses a categoria q deseja
console.log (mostrarCategoria)

// 9. Criar um array com objetos apenas contendo nome e preço.

let produtosSemCategoria = produtos.map (produtos => {
    return {
        nome: produtos.nome,
        preco: produtos.preco
    }
})
console.log (produtosSemCategoria)

// 10. Verificar se todos os produtos custam mais de R$ 5.

let produtosMaiorQue5 = produtos.every (produtos => produtos.preco > 5)
console.log(produtosMaiorQue5)

// 🎯 Bônus (Desafios com Lógica)
// 1. Dado o array numeros , crie um array apenas com os quadrados dos números
// pares.

let numQuadradoPar = numeros.filter (numeros => numeros % 2 === 0).map (numeros => numeros ** 2)
console.log (numQuadradoPar)

// 2. A partir de nomes , retorne o nome com maior quantidade de letras.

let tamanhoMaxNome = Math.max (...nomes.map(nome => nome.length))
let maioresNomes = nomes.filter (nome => nome.length === tamanhoMaxNome)
console.log (maioresNomes)

// 3. Verifique se todos os nomes terminam com uma vogal.

let nomesFimVogal = nomes.every (nome => {
    let ultimaLetra = nome[nome.length - 1].toLowerCase()
    return ['a', 'e', 'i', 'o', 'u'].includes(ultimaLetra)
})
console.log (nomesFimVogal)

// 4. Junte os arrays numeros e nomes em um único array.

let arrayNomeNumero = [...nomes, ...numeros]
console.log (arrayNomeNumero)

// 5. Crie um array com os nomes dos produtos que custam menos de R$100 e
// pertencem a “Roupas”.

let roupasMenorQue100 = produtos.filter (a => a.categoria === 'Roupas').map (produtos => {
    if (produtos.preco < 100 ){
        return{
        nome: produtos.nome,
        preco: produtos.preco
    }
    }else{

    }
})
console.log (roupasMenorQue100)

// 6. Crie uma função que calcule o valor médio dos produtos da categoria
// “Eletrônicos”.
function calcularMediaEletro(){
let eletros = produtos.filter (a => a.categoria === 'Eletrônicos')
let soma = eletros.reduce ((total, produtos) => total + produtos.preco, 0)
let media = soma/eletros.length 
return media
}
console.log ("Média do valor dos eletros: ", calcularMediaEletro())