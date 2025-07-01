// =========================================
// 50 Exercícios com .map, .filter e .reduce
// Manipulando arrays que contêm objetos
// =========================================

console.log("======= EXERCÍCIOS COM .map() =======");

// 1. Extrair os nomes
const pessoas1 = [
  { nome: "Ana", idade: 20 },
  { nome: "Carlos", idade: 30 }
];
const nomes1 = pessoas1.map(p => p.nome);
console.log("1:", nomes1); // ['Ana', 'Carlos']

// 2. Idade + 10
const idadesFuturas = pessoas1.map(p => p.idade + 10);
console.log("2:", idadesFuturas); // [30, 40]

// 3. Retornar string formatada
const frases = pessoas1.map(p => `${p.nome} tem ${p.idade} anos`);
console.log("3:", frases);

// 4. Novo array com apenas nomes em maiúsculo
const nomesUpper = pessoas1.map(p => p.nome.toUpperCase());
console.log("4:", nomesUpper);

// 5. Duplicar as idades
const idadesDobro = pessoas1.map(p => p.idade * 2);
console.log("5:", idadesDobro);

// 6. Retornar novo array com objetos contendo só nome e idade em string
const infoTextual = pessoas1.map(p => ({ nome: p.nome, idade: `${p.idade} anos` }));
console.log("6:", infoTextual);

// 7. Marcar todos como ativos
const marcadosAtivos = pessoas1.map(p => ({ ...p, ativo: true }));
console.log("7:", marcadosAtivos);

// 8. Nome com índice
const nomesIndexados = pessoas1.map((p, i) => `${i + 1} - ${p.nome}`);
console.log("8:", nomesIndexados);

// 9. Criar objetos com campo "nomeCompleto"
const nomesCompletos = pessoas1.map(p => ({ nomeCompleto: `${p.nome} da Silva` }));
console.log("9:", nomesCompletos);

// 10. Verificar se idade é par
const idadePar = pessoas1.map(p => ({ nome: p.nome, idadePar: p.idade % 2 === 0 }));
console.log("10:", idadePar);

console.log("======= EXERCÍCIOS COM .filter() =======");

const pessoas2 = [
  { nome: "João", idade: 17 },
  { nome: "Lucas", idade: 25 },
  { nome: "Maria", idade: 15 },
  { nome: "Laura", idade: 30 }
];

// 11. Filtrar maiores de idade
const maiores = pessoas2.filter(p => p.idade >= 18);
console.log("11:", maiores);

// 12. Filtrar menores de idade
const menores = pessoas2.filter(p => p.idade < 18);
console.log("12:", menores);

// 13. Apenas quem se chama Lucas
const apenasLucas = pessoas2.filter(p => p.nome === "Lucas");
console.log("13:", apenasLucas);

// 14. Pessoas com nome que começa com L
const comL = pessoas2.filter(p => p.nome.startsWith("L"));
console.log("14:", comL);

// 15. Pessoas com idade entre 18 e 30
const idadeValida = pessoas2.filter(p => p.idade >= 18 && p.idade <= 30);
console.log("15:", idadeValida);

// 16. Pessoas com nome maior que 4 letras
const nomeLongo = pessoas2.filter(p => p.nome.length > 4);
console.log("16:", nomeLongo);

// 17. Idade ímpar
const idadeImpar = pessoas2.filter(p => p.idade % 2 !== 0);
console.log("17:", idadeImpar);

// 18. Excluir pessoas com idade 17
const sem17 = pessoas2.filter(p => p.idade !== 17);
console.log("18:", sem17);

// 19. Apenas quem tem idade múltipla de 5
const mult5 = pessoas2.filter(p => p.idade % 5 === 0);
console.log("19:", mult5);

// 20. Pessoas com nomes diferentes de Maria
const semMaria = pessoas2.filter(p => p.nome !== "Maria");
console.log("20:", semMaria);

console.log("======= EXERCÍCIOS COM .reduce() =======");

const produtos = [
  { nome: "Caneta", preco: 2.5 },
  { nome: "Lápis", preco: 1.0 },
  { nome: "Borracha", preco: 1.5 }
];

// 21. Somar todos os preços
const total = produtos.reduce((acc, p) => acc + p.preco, 0);
console.log("21:", total); // 5.0

// 22. Produto mais caro
const maisCaro = produtos.reduce((acc, p) => p.preco > acc.preco ? p : acc);
console.log("22:", maisCaro);

// 23. Produto mais barato
const maisBarato = produtos.reduce((acc, p) => p.preco < acc.preco ? p : acc);
console.log("23:", maisBarato);

// 24. Somar preços acima de R$1,00
const somaAcima1 = produtos
  .filter(p => p.preco > 1)
  .reduce((acc, p) => acc + p.preco, 0);
console.log("24:", somaAcima1);

// 25. Juntar nomes dos produtos
const nomesProdutos = produtos.reduce((acc, p) => acc + p.nome + ", ", "");
console.log("25:", nomesProdutos);

// 26. Criar lista formatada
const listaFormatada = produtos.reduce((acc, p) => {
  acc.push(`${p.nome}: R$${p.preco.toFixed(2)}`);
  return acc;
}, []);
console.log("26:", listaFormatada);

// 27. Contar quantos produtos custam menos de 2
const contaBaratos = produtos.reduce((acc, p) => p.preco < 2 ? acc + 1 : acc, 0);
console.log("27:", contaBaratos);

// 28. Média dos preços
const media = total / produtos.length;
console.log("28:", media);

// 29. Array com apenas os preços
const somentePrecos = produtos.reduce((acc, p) => {
  acc.push(p.preco);
  return acc;
}, []);
console.log("29:", somentePrecos);

// 30. Array com nome e status (caro/barato)
const nomeStatus = produtos.reduce((acc, p) => {
  acc.push({
    nome: p.nome,
    status: p.preco > 2 ? "caro" : "barato"
  });
  return acc;
}, []);
console.log("30:", nomeStatus);

console.log("======= COMBINANDO map + filter + reduce =======");

const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Bia", nota: 5 },
  { nome: "Carlos", nota: 9 },
  { nome: "Daniel", nota: 3 }
];

// 31. Alunos aprovados (nota >= 6)
const aprovados = alunos.filter(a => a.nota >= 6);
console.log("31:", aprovados);

// 32. Nomes dos aprovados
const nomesAprovados = aprovados.map(a => a.nome);
console.log("32:", nomesAprovados);

// 33. Média das notas
const mediaNotas = alunos.reduce((acc, a) => acc + a.nota, 0) / alunos.length;
console.log("33:", mediaNotas);

// 34. Soma das notas dos aprovados
const somaAprovados = aprovados.reduce((acc, a) => acc + a.nota, 0);
console.log("34:", somaAprovados);

// 35. Lista de nomes com status
const statusAlunos = alunos.map(a => ({
  nome: a.nome,
  status: a.nota >= 6 ? "Aprovado" : "Reprovado"
}));
console.log("35:", statusAlunos);

// 36. Alunos com nome começando com A e nota >= 6
const filtroA = alunos.filter(a => a.nome.startsWith("A") && a.nota >= 6);
console.log("36:", filtroA);

// 37. Maior nota
const maiorNota = alunos.reduce((acc, a) => a.nota > acc ? a.nota : acc, 0);
console.log("37:", maiorNota);

// 38. Aluno com maior nota
const topAluno = alunos.reduce((acc, a) => a.nota > acc.nota ? a : acc);
console.log("38:", topAluno);

// 39. Nomes em maiúsculo dos reprovados
const nomesReprovados = alunos.filter(a => a.nota < 6).map(a => a.nome.toUpperCase());
console.log("39:", nomesReprovados);

// 40. Número de aprovados
const qtdAprovados = alunos.filter(a => a.nota >= 6).length;
console.log("40:", qtdAprovados);

console.log("======= Mais 10 desafios extras =======");

const carrinho = [
  { produto: "Arroz", quantidade: 2, preco: 5 },
  { produto: "Feijão", quantidade: 1, preco: 6 },
  { produto: "Macarrão", quantidade: 3, preco: 4 }
];

// 41. Total gasto no carrinho
const totalCarrinho = carrinho.reduce((acc, item) => acc + item.quantidade * item.preco, 0);
console.log("41:", totalCarrinho);

// 42. Produtos com mais de 1 unidade
const maisDeUm = carrinho.filter(i => i.quantidade > 1);
console.log("42:", maisDeUm);

// 43. Lista de nomes dos produtos
const nomesCarrinho = carrinho.map(i => i.produto);
console.log("43:", nomesCarrinho);

// 44. Preço total por item
const precosTotais = carrinho.map(i => ({
  produto: i.produto,
  total: i.quantidade * i.preco
}));
console.log("44:", precosTotais);

// 45. Item mais caro (total)
const itemMaisCaro = carrinho.reduce((acc, i) => {
  const totalItem = i.quantidade * i.preco;
  return totalItem > acc.total ? { ...i, total: totalItem } : acc;
}, { total: 0 });
console.log("45:", itemMaisCaro);

// 46. Média de preço unitário
const mediaPrecoUnitario = carrinho.reduce((acc, i) => acc + i.preco, 0) / carrinho.length;
console.log("46:", mediaPrecoUnitario);

// 47. Filtrar produtos com preço unitário < 5
const baratos = carrinho.filter(i => i.preco < 5);
console.log("47:", baratos);

// 48. Somar todas as quantidades
const somaQuantidades = carrinho.reduce((acc, i) => acc + i.quantidade, 0);
console.log("48:", somaQuantidades);

// 49. Criar array com produto e quantidade ex: "Arroz x2"
const descricoes = carrinho.map(i => `${i.produto} x${i.quantidade}`);
console.log("49:", descricoes);

// 50. Verificar se há algum item com preço acima de 10
const temCaro = carrinho.some(i => i.preco > 10);
console.log("50:", temCaro); // false
