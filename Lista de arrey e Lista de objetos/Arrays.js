// 💡 Exercícios com numeros
// 1. Filtrar números maiores que 10.
const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];
const NumerosMaioresQ10 = numeros.filter(numero => numero > 10);
console.log(NumerosMaioresQ10);

// 2. Dobrar todos os números do array.
const numeross = [5, 12, 8, 130, 44, 7, 3, 19, 22];
const numeroEmDobro = numeros.map(numero => numero * 2);
console.log(numeroEmDobro);

// 3. Somar todos os números do array.
const numerosss = [5, 12, 8, 130, 44, 7, 3, 19, 22];
const totalSoma = numeros.reduce((total, numero) => total + numero, 0);
console.log(totalSoma); 

// 4. Encontrar o maior número.
const numero4 = [5, 12, 8, 130, 44, 7, 3, 19, 22];
const numeroMaior = Math.max(...numero4);
console.log(numeroMaior);


// 5. Encontrar o menor número.
const numero5 = [5, 12, 8, 130, 44, 7, 3, 19, 22];
const menorNumero = Math.min(...numero5);
console.log(menorNumero);


// 6. Ordenar os números em ordem crescente.
const numeros6 = [5, 12, 8, 130, 44, 7, 3, 19, 22];
const numOrdemCrescente = [...numeros6].sort((a, b) => a - b);
console.log(numOrdemCrescente);

// 7. Criar um novo array com apenas os números ímpares.
const numeros7 = [5, 12, 8, 130, 44, 7, 3, 19, 22];
const numerosImpar = numeros7.filter(numero => numero % 2 !== 0);
console.log(numerosImpar);

// 8. Verificar se todos os números são maiores que  3.
const numeros8 = [5, 12, 8, 130, 44, 7, 3, 19, 22];
const numerosMaioresQ3 = numeros8.every(numero => numero > 3);
console.log(numerosMaioresQ3);

// 9. Verificar se existe algum número maior que 100.
const numeros9 = [5, 12, 8, 130, 44, 7, 3, 19, 22];
const existeNumMaiorQ100 = numeros.some(numero => numero > 100);
console.log(existeNumMaiorQ100)

// 10. Retornar a média dos números.
const numeros10 = [5, 12, 8, 130, 44, 7, 3, 19, 22];
const somaNumeros = numeros10.reduce((total, numero) => total + numero, 0);
const media = somaNumeros / numeros10.length;
console.log(media.toFixed(3));


// 💡 Exercícios com nomes
// 1. Ordenar os nomes em ordem alfabética.
const nomes = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];
const nommesEmOrdemAlfabetica = nomes.sort();
console.log(nommesEmOrdemAlfabetica);


// 2. Filtrar os nomes com mais de 5 letras.
const nomes2 = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];
const nomesMaisD5letras = nomes.filter(nome => nome.length > 5);
console.log(nomesMaisD5letras);



// 3. Transformar todos os nomes em letras minúsculas.
const nomes3 = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];
const nomesCletrasMinusculas = nomes3.map(nome => nome.toLowerCase()); 
console.log(nomesCletrasMinusculas);


// 4. Verificar se algum nome começa com a letra “B”.
const nomes4 = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"]
const nomeInicialLetraB = nomes.some(nome => nome.startsWith("B"));
console.log(nomeInicialLetraB);

// 5. Encontrar o nome “Daniel” no array.
const nomes5 = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];
const nomeEncontrado = nomes5.find(nome => nome === "Daniel");
console.log(nomeEncontrado);

// 6. Criar um array com a quantidade de letras de cada nome.
const nomes6 = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];
const quantidadeLetras = nomes6.map(nome => nome.length);
console.log(quantidadeLetras);

// 7. Juntar todos os nomes em uma string separada por vírgula
const nomes7 = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];
const nomesJuntos = nomes7.join(", ");
console.log(nomesJuntos);



// 💡 Exercícios com produtos
// 1. Filtrar os produtos da categoria “Eletrônicos”.
const produtos = [
  { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
  { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
  { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
  { nome: "Meias", preco: 9.9, categoria: "Roupas" },
  { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];
const eletronicos = produtos.filter(produto => produto.categoria === "Eletrônicos");

console.log(eletronicos);
// 2. Criar um array apenas com os nomes dos produtos.
const produtos2 = [
  { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
  { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
  { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
  { nome: "Meias", preco: 9.9, categoria: "Roupas" },
  { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];
const nomesDosProdutos = produtos.map(produto => produto.nome);

console.log(nomesDosProdutos);
// 3. Criar um array com os preços com desconto de 10%.
const produtos3 = [
  { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
  { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
  { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
  { nome: "Meias", preco: 9.9, categoria: "Roupas" },
  { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];
const precosComDesconto = produtos.map(produto => {
  return (produto.preco * 0.9).toFixed(2); 
});

console.log(precosComDesconto);
// 4. Calcular o valor total de todos os produtos.
const produtos4 = [
  { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
  { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
  { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
  { nome: "Meias", preco: 9.9, categoria: "Roupas" },
  { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];
const valorTotal = produtos.reduce((total, produto) => total + produto.preco, 0);
console.log(valorTotal.toFixed(3));

// 5. Encontrar o produto mais caro.
const produtos5 = [
  { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
  { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
  { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
  { nome: "Meias", preco: 9.9, categoria: "Roupas" },
  { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];

const produtoMaisCaro = produtos.reduce((maisCaro, produto) => {
  return (produto.preco > maisCaro.preco) ? produto : maisCaro;
});
console.log(produtoMaisCaro);

// 6. Ordenar os produtos do mais barato ao mais caro.
const produtos6 = [
  { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
  { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
  { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
  { nome: "Meias", preco: 9.9, categoria: "Roupas" },
  { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];
const produtosOrdenados = [...produtos].sort((a, b) => a.preco - b.preco);
console.log(produtosOrdenados);

// 7. Agrupar os produtos por categoria (bônus - mais avançado).
const produtos7 = [
  { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
  { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
  { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
  { nome: "Meias", preco: 9.9, categoria: "Roupas" },
  { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];

const produtosAgrupados = produtos.reduce((acc, produto) => {
  if (!acc[produto.categoria]) {
    acc[produto.categoria] = [];
  }
  acc[produto.categoria].push(produto);
  return acc;
}, {});

console.log(produtosAgrupados);

// 8. Criar uma função que receba uma categoria e retorne os produtos dela.
const produtos8 = [
  { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
  { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
  { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
  { nome: "Meias", preco: 9.9, categoria: "Roupas" },
  { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];

function filtrarPorCategoria(categoria) {
  return produtos.filter(produto => produto.categoria === categoria);
}
console.log(filtrarPorCategoria("Eletrônicos"));

// 9. Criar um array com objetos apenas contendo nome e preço.
const produtos9 = [
  { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
  { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
  { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
  { nome: "Meias", preco: 9.9, categoria: "Roupas" },
  { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];

const nomePreco = produtos.map(produto => ({
  nome: produto.nome,
  preco: produto.preco
}));

console.log(nomePreco);

// 10. Verificar se todos os produtos custam mais de R$ 5.
const produtos10 = [
  { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
  { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
  { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
  { nome: "Meias", preco: 9.9, categoria: "Roupas" },
  { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];

const todosMaisDcinco = produtos.every(produto => produto.preco > 5);

console.log(todosMaisDcinco);



// 🎯 Bônus (Desafios com Lógica)
// 1. Dado o array numeros , crie um array apenas com os quadrados dos números pares.
const numero01 = [5, 12, 8, 130, 44, 7, 3, 19, 22];
const quadradosNPares = numeros .filter(numero => numero % 2 === 0).map(numero => numero * numero); 
console.log(quadradosNPares);

// 2. A partir de nomes , retorne o nome com maior quantidade de letras.
const nomes01 = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];

const nomeMaior = nomes.reduce((maior, nomeAtual) => {
  return nomeAtual.length > maior.length ? nomeAtual : maior;
});

console.log(nomeMaior);

// 3. Verifique se todos os nomes terminam com uma vogal.
const nomes02 = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];

const vogais = ['a', 'e', 'i', 'o', 'u'];

const todosTerminamComVogal = nomes.every(nome => {
  const ultimaLetra = nome.slice(-1).toLowerCase(); // pega a última letra em minúscula
  return vogais.includes(ultimaLetra);
});

console.log(todosTerminamComVogal);

// 4. Junte os arrays numeros e nomes em um único array.
const numeros02 = [5, 12, 8, 130, 44, 7, 3, 19, 22];
const nomes03 = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];

const combinados = numeros.concat(nomes);

console.log(combinados);

// 5. Crie um array com os nomes dos produtos que custam menos de R$100 e pertencem a “Roupas”.
const produtos01 = [
  { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
  { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
  { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
  { nome: "Meias", preco: 9.9, categoria: "Roupas" },
  { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];

const roupasBaratas = produtos.filter(produto => produto.categoria === "Roupas" && produto.preco < 100).map(produto => produto.nome);

console.log(roupasBaratas);
// 6. Crie uma função que calcule o valor médio dos produtos da categoria “Eletrônicos”.
const produtos0 = [
  { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
  { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
  { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
  { nome: "Meias", preco: 9.9, categoria: "Roupas" },
  { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];

function mediaEletronicos(produtos) {
  const eletronicos = produtos.filter(p => p.categoria === "Eletrônicos");
  const soma = eletronicos.reduce((acc, p) => acc + p.preco, 0);
  return eletronicos.length ? soma / eletronicos.length : 0;
}

console.log(mediaEletronicos(produtos));
