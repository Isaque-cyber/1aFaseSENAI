// 1. Filtro e transformação com ordenação (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Crie um novo array com as disciplinas que possuem mais de 7 caracteres, convertidas para letras
// maiúsculas e ordenadas.
const disciplinas = ["ciências", "história", "matemática", "geografia", "espanhol", "português", "biologia", "robótica", "filosofia", "sociologia"];
const letrasMaiuscula = disciplinas.map(disciplina => disciplina.toUpperCase());
console.log(letrasMaiuscula)

// 2. Média dos alunos (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Crie um array com objetos contendo nome e notas. Retorne a um novo array com nome e a média.
    const alunos = [
        { nome: "Ana", notas: [3, 9, 10]},
        { nome: "Luana", notas: [4, 5, 10]},
        { nome: "Alana", notas: [6, 7, 10]},
        { nome: "Alice", notas: [4, 9, 10]}
    ];
    const boletim = alunos.map(aluno => {
        const soma = aluno.notas.reduce((total, nota) => total + nota, 0);
        const media = soma / aluno.notas.length;
        return {
            nome: aluno.nome, media: media
        };
    });
    
    console.log(boletim);


//     3. Cálculo de estoque (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● A partir do array abaixo, calcule o saldo final do estoque:
  const transacoes = [
    {tipo: "entrada", valor: 50},
    {tipo: "saída", valor: 20},
    {tipo: "entrada",  valor: 70},
    {tipo: "entrada", valor: 35},
    {tipo: "saida", valor: 15}
  ];
  let saldoFinal = 0; transacoes.forEach(transacao => {
    if (transacao.tipo == "entrada") {
      saldoFinal += transacao.valor;
    } else {
      saldoFinal -= transacao.valor;
    }
  });
  console.log(saldoFinal); 

// 4. Aplicar desconto em produtos (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Crie uma função que aplica 10% de desconto em produtos com valor > R$100.
const produtos = [
    {nome:"caderno", valor: 150},
    {nome:"celular", valor: 300},
    {nome:"carregador", valor: 50}
]
const desconto = produtos.reduce




// 5. Verificações de dados (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Verifique se algum usuário está logado e se todos estão logados:



// 6. Função buscar produto (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Crie uma função que busca um produto pelo nome:


// 7. Listar tarefas pendentes (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Filtre as tarefas não concluídas e liste com prefixo "Pendente: ...":