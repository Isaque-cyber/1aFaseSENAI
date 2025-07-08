// Filtrar apenas os produtos que estão em estoque.
// Criar um novo array com nome em letras maiúsculas e preço com desconto de 10% se o preço for maior que R$100 (use operador ternário).
// Calcular o total em reais dos produtos em estoque após os descontos.
// Tarefas (faça com .map, .filter, .reduce e ternário):
// Mostrar uma lista assim:
// "Produto: NOTEBOOK - Preço com desconto: R$3150"
//01
const produtos = [
  { nome: "Notebook", categoria: "Informática", preco: 3500, emEstoque: true },
  { nome: "Mouse", categoria: "Periféricos", preco: 80, emEstoque: true },
  { nome: "Monitor", categoria: "Informática", preco: 1200, emEstoque: false },
  { nome: "Teclado", categoria: "Periféricos", preco: 150, emEstoque: true },
  { nome: "Cabo HDMI", categoria: "Acessórios", preco: 30, emEstoque: false }
];

// 1. Filtrar apenas os que estão em estoque
const emEstoque = produtos.filter(produto => produto.emEstoque);

// 2. Criar novo array com nome em maiúsculo e preço com desconto (se necessário)
const comDesconto = emEstoque.map(produto => {
  const precoFinal = produto.preco > 100
    ? produto.preco * 0.9   // aplica 10% de desconto
    : produto.preco;        // mantém o preço

  return {
    nome: produto.nome.toUpperCase(),
    precoComDesconto: precoFinal
  };
});

// 3. Calcular o total final dos preços com desconto
const total = comDesconto.reduce((soma, produto) => soma + produto.precoComDesconto, 0);

// 4. Criar lista formatada
const listaFormatada = comDesconto.map(produto =>
  `Produto: ${produto.nome} - Preço com desconto: R$${produto.precoComDesconto.toFixed(2)}`
);

// Mostrar resultados
console.log("🛒 Lista de produtos com desconto:");
console.log(listaFormatada);

console.log("\n💰 Total final com desconto: R$" + total.toFixed(2));


//02