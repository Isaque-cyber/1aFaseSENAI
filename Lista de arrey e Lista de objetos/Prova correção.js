
// 1. Filtro e transformação com ordenação (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Crie um novo array com as disciplinas que possuem mais de 7 caracteres, convertidas para letras
// maiúsculas e ordenadas.
const palavras = ['javascript', 'desenvolvimento', 'turma']
const palavrasNovo = palavras.filter(palavra => palavra.length > 7).map(palavra => palavra.toUpperCase()).sort()

console.log(palavrasNovo)

// 2. Média dos alunos (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Crie um array com objetos contendo nome e notas. Retorne a um novo array com nome e a média.
const alunos = [
    { nome: "Ana",  notas: [8, 9, 10] },
    { nome: "Carlos", notas: [6, 7, 5]}
]

const alunosMedia = alunos.map(aluno => {
    const nome = aluno.nome // Ana
    const media = aluno.notas.reduce((acumulador, valoratual) => acumulador + valoratual, 0) / aluno.notas.length
    return {
        nome: nome,
        media: media }
})

console.log(alunosMedia)

//     3. Cálculo de estoque (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● A partir do array abaixo, calcule o saldo final do estoque:

const transacoes = [
    { tipo: "entrada", valor: 100 },
    { tipo: "saida", valor: 60 },
    { tipo: "entrada", valor: 50 },
    { tipo: "saida", valor: 30 },
]

const transacoesFinal = transacoes.reduce((acumulador, valoratual) => {
    if (valoratual.tipo === 'entrada') {
        acumulador += valoratual.valor
    } else {
        acumulador -= valoratual.valor
    }
    return acumulador
}, 0)

console.log(transacoesFinal)


// 4. Aplicar desconto em produtos (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Crie uma função que aplica 10% de desconto em produtos com valor > R$100.
const produtos = [
    {nome: "Cadeira", valor: 150},
    {nome: "Lapis", valor: 5}
]
const produtosFinal = produtos.map(produto => {
    let valor
    if (produto.valor > 100) {
        valor = produto.valor * 0.9
    } else {
        valor = produto.valor
    }
    return {
        nome: produto.nome,
        valor: valor
    }
})

console.log(produtosFinal)

// 5. Verificações de dados (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Verifique se algum usuário está logado e se todos estão logados:
const usuarios = [
  { nome: "Ana", logado: true },
  { nome: "Carlos", logado: false },
  { nome: "Beatriz", logado: true }
];

// Verifica se ALGUM usuário está logado
const algumLogado = usuarios.some(usuario => usuario.logado);

// Verifica se TODOS os usuários estão logados
const todosLogados = usuarios.every(usuario => usuario.logado);

// Mostrar os resultados
console.log("Algum usuário está logado? ", algumLogado); // true
console.log("Todos os usuários estão logados? ", todosLogados); // false


// 6. Função buscar produto (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Crie uma função que busca um produto pelo nome:

const produtos2 = [
    {nome: "Cadeira",valor: 150},
    {nome: "Lapis", valor: 5}
]

function buscarNome(nome, array) {
    return array.find(produto => produto.nome === nome)
}

console.log(buscarNome("Lapis", produtos2))

// 7. Listar tarefas pendentes (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Filtre as tarefas não concluídas e liste com prefixo "Pendente: ...":

const tarefas = [
    {descricao: "Prova", concluida: false},
    {descricao: "Exercicios", concluida: false},
    {descricao: "Atividade", concluida: true}
]

console.log(tarefas.map((tarefa) => {
    if (tarefa.concluida === false) {
        return "Pendende: " + tarefa.descricao
    } else return null
}).filter(tarefa => tarefa !== null))