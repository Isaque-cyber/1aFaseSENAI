// Lista de exercícios - Objetos
// 1. Catálogo de Produtos
// Crie um array com objetos representando produtos de uma loja. Implemente
// uma função que recebe um nome e retorna o produto correspondente.
// Array com objetos representando produtos de uma loja
const produtos = [
    { nome: "Camisa", preco: 49.99, categoria: "Roupas" },
    { nome: "Notebook", preco: 3299, categoria: "Eletrônicos" },
    { nome: "Caneca", preco: 19.90, categoria: "Utilidades" }
];
function buscarProdutoPorNome(nomeProduto) {
    return produtos.find(produto => produto.nome.toLowerCase() === nomeProduto.toLowerCase());
}
const resultado = buscarProdutoPorNome("Notebook");
console.log(resultado);

// 2. Sistema de Biblioteca
// Crie um objeto livro com título, autor e status de empréstimo. Implemente
// métodos emprestar() e devolver() que atualizam o status.
const biblioteca = {
    livros: [
        { titulo: "Bíblia", status: "disponivel" },
        { titulo: "Dom Quixote", status: "disponivel" },
        { titulo: "1984", status: "indisponivel" }
    ],

    emprestar(titulos) {
        this.livros.map(l => l.titulo === titulos && l.status === "disponivel" ? l.status = "indisponivel" : null);
    },
    
    devolver(titulos) {
        this.livros.map(l => l.titulo === titulos && l.status === "indisponivel" ? l.status = "disponivel" : null);
    },
    
    listar() {
        this.livros.forEach(l => console.log(`${l.titulo} - ${l.status}`));
    }
};
biblioteca.emprestar("Bíblia");
biblioteca.devolver("Dom Quixote");
biblioteca.listar();

// 3. Conversor de Temperatura
// Crie um objeto com métodos celsiusParaFahrenheit e fahrenheitParaCelsius , que retornem os valores convertidos.
const temperatura = {
  celsiusParaFahrenheit: celsius => celsius * 9/5 + 32,
  fahrenheitParaCelsius: fahrenheit => (fahrenheit - 32) * 5/9
};
console.log("Temperatura:", temperatura.celsiusParaFahrenheit(60), temperatura.fahrenheitParaCelsius(20));


// 4. Agenda de Contatos
// Crie um objeto agenda que contenha uma lista de contatos. Implemente funções para adicionar, remover e listar contatos.
const agendaContatos = {
  contatos: [],
  adicionarContato(contato) { this.contatos.push(contato); },
  removerContato(nome) { this.contatos = this.contatos.filter(contato => contato.nome !== nome); },
  listarContatos() { this.contatos.forEach(contato => console.log("Contato:", contato)); }
};
agendaContatos.adicionarContato({ nome: "João", telefone: "1234-8976" });
agendaContatos.adicionarContato({ nome: "Maria", telefone: "5678-34567" });
agendaContatos.removerContato("João");
agendaContatos.listarContatos();


// 5. Relatório de Notas
// Crie um objeto aluno com notas em várias disciplinas. Implemente um método media() que retorna a média geral.
const aluno = {
  notas: [7, 8, 6, 9],
  calcularMedia() {
    return this.notas.reduce((acumulador, nota) => acumulador + nota, 0) / this.notas.length;
  }
};
console.log("Média do aluno:", aluno.calcularMedia());


// 6. Carrinho de Compras 
// Implemente um objeto carrinho com um array de itens. Cada item tem nome, quantidade e valor. Crie métodos para adicionarItem , removerItem e total .
const carrinhoDeCompras = {
  itens: [],
  adicionarItem(item) { this.itens.push(item); },
  removerItem(nomeItem) { this.itens = this.itens.filter(item => item.nome !== nomeItem); },
  calcularTotal() { return this.itens.reduce((soma, item) => soma + item.quantidade * item.valor, 0); }
};
carrinhoDeCompras.adicionarItem({ nome: "Arroz", quantidade: 2, valor: 5 });
carrinhoDeCompras.adicionarItem({ nome: "Feijão", quantidade: 1, valor: 7 });
carrinhoDeCompras.removerItem("Feijão");
console.log("Total do carrinho:", carrinhoDeCompras.calcularTotal());


// 7. Filtrar Alunos Aprovados
// Dado um array de objetos alunos , filtre apenas os que têm média acima de 6 e retorne seus nomes.
const alunos = [
  { nome: "Ana", media: 7 },
  { nome: "Carlos", media: 5 },
  { nome: "Maria", media: 8 }
];
const nomesAprovados = alunos.filter(aluno => aluno.media > 6).map(aluno => aluno.nome);
console.log("Alunos aprovados:", nomesAprovados);


// 8. Conversor de Moedas com Objeto
// Crie um objeto moeda com taxas de conversão e um método converter(valor, de, para) que retorna o valor convertido.
const conversorMoedas = {
  taxasDeCambio: { USD: 5.3, EUR: 6.2 },
  converter(valor, deMoeda, paraMoeda) {
    return valor / this.taxasDeCambio[deMoeda] * this.taxasDeCambio[paraMoeda];
  }
};
console.log("Conversão moeda:", conversorMoedas.converter(10, "USD", "EUR"));


// 1. Banco com Múltiplas Contas
// Crie um objeto banco com várias contas. Cada conta tem nome, saldo e métodos depositar , sacar . Implemente um relatório que mostre saldo total do banco.
const banco = {
  contas: [
    { nome: "João", saldo: 100 },
    { nome: "Maria", saldo: 150 }
  ],
  depositar(nomeCliente, valor) {
    this.contas.find(conta => conta.nome === nomeCliente).saldo += valor;
  },
  sacar(nomeCliente, valor) {
    const conta = this.contas.find(conta => conta.nome === nomeCliente);
    if(conta.saldo >= valor) conta.saldo -= valor;
  },
  saldoTotal() {
    return this.contas.reduce((total, conta) => total + conta.saldo, 0);
  }
};
banco.depositar("Maria", 50);
banco.sacar("João", 30);
console.log("Saldo total do banco:", banco.saldoTotal());


// 2. Sistema de Votação
// Crie um objeto que armazene votos por candidato. Implemente funções para votar e retornar o candidato mais votado.
const sistemaVotacao = {
  votosPorCandidato: {},
  votar(candidato) {
    this.votosPorCandidato[candidato] = (this.votosPorCandidato[candidato] || 0) + 1;
  },
  candidatoMaisVotado() {
    return Object.entries(this.votosPorCandidato).reduce(
      (maisVotado, atual) => atual[1] > maisVotado[1] ? atual : maisVotado, ["",0]
    )[0];
  }
};
sistemaVotacao.votar("Ana");
sistemaVotacao.votar("Carlos");
sistemaVotacao.votar("Ana");
console.log("Mais votado:", sistemaVotacao.candidatoMaisVotado());


// 3. Agenda Semanal de Compromissos
// Crie um objeto com os dias da semana como chaves e arrays de compromissos como valores. Implemente métodos para adicionar, remover e listar compromissos.
const agendaSemanal = {
  compromissosPorDia: { seg: [], ter: [], qua: [], qui: [], sex: [], sab: [], dom: [] },
  adicionarCompromisso(dia, compromisso) {
    this.compromissosPorDia[dia].push(compromisso);
  },
  removerCompromisso(dia, compromisso) {
    this.compromissosPorDia[dia] = this.compromissosPorDia[dia].filter(c => c !== compromisso);
  },
  listarCompromissos(dia) {
    this.compromissosPorDia[dia].forEach(compromisso => console.log(`Compromisso ${dia}:`, compromisso));
  }
};
agendaSemanal.adicionarCompromisso("qua", "Dentista");
agendaSemanal.listarCompromissos("qua");


// 4. Gerador de Fichas de RPG
// Crie uma função que retorna objetos representando personagens com atributos aleatórios (força, destreza, vida). Permita criar múltiplos personagens e armazenar em um array.
const gerarPersonagem = () => ({
  forca: Math.ceil(Math.random() * 10),
  destreza: Math.ceil(Math.random() * 10),
  vida: Math.ceil(Math.random() * 10)
});
const personagensCriados = [gerarPersonagem(), gerarPersonagem()];
console.log("Personagens:", personagensCriados);


// 5. Validador de Formulário com Objeto
// Crie uma função que recebe um objeto com campos ( nome , email , idade ) e valida cada campo com regras diferentes, retornando um objeto com mensagens de erro ou sucesso.


function validarFormulario(formulario) {
  const resultado = {};

  if (!formulario.nome || formulario.nome.trim() === "") {
    resultado.nome = "Nome obrigatório";
  } else {
    resultado.nome = "Nome válido";
  }

  if (!formulario.email || !formulario.email.includes("@")) {
    resultado.email = "Email inválido";
  } else {
    resultado.email = "Email válido";
  }

  if (formulario.idade >= 18) {
    resultado.idade = "Idade válida";
  } else {
    resultado.idade = "Idade inválida (menor de 18)";
  }

  return resultado;
}

console.log("Validação:", validarFormulario({ nome: "isaque", email: "teste@gmail.com", idade: 19 }));

// 6. Sistema de Gestão de Projetos
// Crie uma estrutura com objetos projeto , cada um contendo nome, status e uma lista de tarefas . Cada tarefa tem nome, data e status. Implemente métodos para alterar status e listar tarefas por status.
const projeto = {
  nome: "Projeto A",
  status: "andamento",
  listaTarefas: [
    { nome: "tarefa1", data: "2025-07-01", status: "feito" },
    { nome: "tarefa2", data: "2025-07-02", status: "pendente" }
  ],
  alterarStatusTarefa(nomeTarefa, novoStatus) {
    this.listaTarefas.find(tarefa => tarefa.nome === nomeTarefa).status = novoStatus;
  },
  listarTarefasPorStatus(status) {
    return this.listaTarefas.filter(tarefa => tarefa.status === status);
  }
};
projeto.alterarStatusTarefa("tarefa2", "feito");
console.log("Tarefas feitas:", projeto.listarTarefasPorStatus("feito"));


// 7. Simulador de Jogo de Dados
// Crie um objeto jogoDeDados com métodos para rolar dois dados, registrar histórico e contar quantas vezes saiu um número específico.
const jogoDeDados = {
  historicoRolagens: [],
  rolarDados() {
    const dado1 = Math.ceil(Math.random() * 6);
    const dado2 = Math.ceil(Math.random() * 6);
    this.historicoRolagens.push([dado1, dado2]);
    return [dado1, dado2];
  },
  contarOcorrencias(numero) {
    return this.historicoRolagens.flat().filter(n => n === numero).length;
  }
};
jogoDeDados.rolarDados();
jogoDeDados.rolarDados();
console.log("Ocorrências do número 6:", jogoDeDados.contarOcorrencias(6));
