// ==========================================
// 40 Exercícios - Funções de Arrays com Objetos
// Métodos: .map(), .filter(), .reduce()
// ==========================================

console.log("=== Exercícios com .map() ===");

// 1. Dado um array de usuários, retorne um array apenas com os nomes
const usuarios1 = [
  { nome: "Carlos", idade: 22 },
  { nome: "Júlia", idade: 28 }
];
const nomesUsuarios1 = usuarios1.map(u => u.nome);
console.log("1:", nomesUsuarios1);

// 2. Crie um novo array com as idades dobradas
const idadesDobro1 = usuarios1.map(u => u.idade * 2);
console.log("2:", idadesDobro1);

// 3. Adicione uma propriedade "status: ativo" a todos os usuários
const usuariosAtivos = usuarios1.map(u => ({ ...u, status: "ativo" }));
console.log("3:", usuariosAtivos);

// 4. Crie um array de strings do tipo: "Nome tem X anos"
const frasesUsuarios = usuarios1.map(u => `${u.nome} tem ${u.idade} anos`);
console.log("4:", frasesUsuarios);

// 5. Retorne um array com a idade + índice
const idadeMaisIndice = usuarios1.map((u, i) => u.idade + i);
console.log("5:", idadeMaisIndice);

// 6. Transforma nomes em minúsculo
const nomesMinusculo = usuarios1.map(u => u.nome.toLowerCase());
console.log("6:", nomesMinusculo);

// 7. Nome e idade concatenados
const nomeIdadeConcat = usuarios1.map(u => `${u.nome}-${u.idade}`);
console.log("7:", nomeIdadeConcat);

// 8. Verifique se cada idade é maior que 25
const maiores25 = usuarios1.map(u => u.idade > 25);
console.log("8:", maiores25);

// 9. Crie objetos apenas com nome
const apenasNomes = usuarios1.map(u => ({ nome: u.nome }));
console.log("9:", apenasNomes);

// 10. Crie um array com a inicial de cada nome
const iniciais = usuarios1.map(u => u.nome[0]);
console.log("10:", iniciais);

console.log("=== Exercícios com .filter() ===");

const funcionarios = [
  { nome: "Bruna", salario: 3000 },
  { nome: "João", salario: 1800 },
  { nome: "Marcos", salario: 2500 }
];

// 11. Filtrar quem ganha mais de 2000
const bemPagos = funcionarios.filter(f => f.salario > 2000);
console.log("11:", bemPagos);

// 12. Filtrar nomes que começam com 'J'
const nomesJ = funcionarios.filter(f => f.nome.startsWith("J"));
console.log("12:", nomesJ);

// 13. Funcionários com salário ímpar
const salarioImpar = funcionarios.filter(f => f.salario % 2 !== 0);
console.log("13:", salarioImpar);

// 14. Excluir salário abaixo de 2000
const acima2000 = funcionarios.filter(f => f.salario >= 2000);
console.log("14:", acima2000);

// 15. Filtrar com nome de 5 letras
const nomeCincoLetras = funcionarios.filter(f => f.nome.length === 5);
console.log("15:", nomeCincoLetras);

// 16. Somente quem tem nome com "o"
const nomeComO = funcionarios.filter(f => f.nome.includes("o"));
console.log("16:", nomeComO);

// 17. Sem o funcionário Marcos
const semMarcos = funcionarios.filter(f => f.nome !== "Marcos");
console.log("17:", semMarcos);

// 18. Filtrar salários múltiplos de 500
const mult500 = funcionarios.filter(f => f.salario % 500 === 0);
console.log("18:", mult500);

// 19. Salário entre 2000 e 3000
const salarioIntervalo = funcionarios.filter(f => f.salario >= 2000 && f.salario <= 3000);
console.log("19:", salarioIntervalo);

// 20. Nome não começa com "B"
const semB = funcionarios.filter(f => !f.nome.startsWith("B"));
console.log("20:", semB);

console.log("=== Exercícios com .reduce() ===");

const vendas = [
  { produto: "TV", valor: 1200 },
  { produto: "Celular", valor: 800 },
  { produto: "Notebook", valor: 2500 }
];

// 21. Somar todas as vendas
const totalVendas = vendas.reduce((acc, v) => acc + v.valor, 0);
console.log("21:", totalVendas);

// 22. Produto mais caro
const maisCaro = vendas.reduce((acc, v) => v.valor > acc.valor ? v : acc);
console.log("22:", maisCaro);

// 23. Produto mais barato
const maisBarato = vendas.reduce((acc, v) => v.valor < acc.valor ? v : acc);
console.log("23:", maisBarato);

// 24. Soma dos produtos acima de 1000
const acima1000 = vendas.filter(v => v.valor > 1000).reduce((acc, v) => acc + v.valor, 0);
console.log("24:", acima1000);

// 25. Concatenar nomes dos produtos
const listaProdutos = vendas.reduce((acc, v) => acc + v.produto + ", ", "");
console.log("25:", listaProdutos);

// 26. Valor médio
const mediaVendas = vendas.reduce((acc, v) => acc + v.valor, 0) / vendas.length;
console.log("26:", mediaVendas);

// 27. Lista de valores
const valores = vendas.reduce((acc, v) => { acc.push(v.valor); return acc; }, []);
console.log("27:", valores);

// 28. Produtos com status caro/barato
const statusValor = vendas.reduce((acc, v) => {
  acc.push({
    produto: v.produto,
    status: v.valor > 1000 ? "caro" : "barato"
  });
  return acc;
}, []);
console.log("28:", statusValor);

// 29. Quantos produtos acima de 1000
const qtdCaro = vendas.reduce((acc, v) => v.valor > 1000 ? acc + 1 : acc, 0);
console.log("29:", qtdCaro);

// 30. Criar string com valores formatados
const formatados = vendas.reduce((acc, v) => {
  acc.push(`${v.produto} R$${v.valor}`);
  return acc;
}, []);
console.log("30:", formatados);

console.log("=== Exercícios combinando map, filter e reduce ===");

const alunos = [
  { nome: "Amanda", nota: 7 },
  { nome: "Bruno", nota: 4 },
  { nome: "Caio", nota: 8 },
  { nome: "Diana", nota: 5 }
];

// 31. Alunos aprovados (nota >= 6)
const aprovados = alunos.filter(a => a.nota >= 6);
console.log("31:", aprovados);

// 32. Nomes dos aprovados
const nomesAprovados = aprovados.map(a => a.nome);
console.log("32:", nomesAprovados);

// 33. Soma das notas dos aprovados
const somaNotas = aprovados.reduce((acc, a) => acc + a.nota, 0);
console.log("33:", somaNotas);

// 34. Média das notas
const mediaNotas = alunos.reduce((acc, a) => acc + a.nota, 0) / alunos.length;
console.log("34:", mediaNotas);

// 35. Nome em caixa alta + status
const statusNotas = alunos.map(a => ({
  nome: a.nome.toUpperCase(),
  status: a.nota >= 6 ? "Aprovado" : "Reprovado"
}));
console.log("35:", statusNotas);

// 36. Apenas reprovados com nome contendo "i"
const reprovadosComI = alunos.filter(a => a.nota < 6 && a.nome.includes("i"));
console.log("36:", reprovadosComI);

// 37. Aluno com maior nota
const topAluno = alunos.reduce((acc, a) => a.nota > acc.nota ? a : acc);
console.log("37:", topAluno);

// 38. Lista de notas elevadas ao quadrado
const notasQuadrado = alunos.map(a => a.nota ** 2);
console.log("38:", notasQuadrado);

// 39. Nomes dos reprovados em minúsculo
const nomesReprovados = alunos.filter(a => a.nota < 6).map(a => a.nome.toLowerCase());
console.log("39:", nomesReprovados);

// 40. Verificar se todos foram aprovados
const todosAprovados = alunos.every(a => a.nota >= 6);
console.log("40:", todosAprovados);
