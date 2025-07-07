// 3. Conversor de Temperatura
const temperatura = {
  celsiusParaFahrenheit: celsius => celsius * 9/5 + 32,
  fahrenheitParaCelsius: fahrenheit => (fahrenheit - 32) * 5/9
};

// 4. Agenda de Contatos
const agendaContatos = {
  contatos: [],
  adicionarContato(contato) { this.contatos.push(contato); },
  removerContato(nome) { this.contatos = this.contatos.filter(contato => contato.nome !== nome); },
  listarContatos() { this.contatos.forEach(contato => console.log(contato)); }
};

// 5. Relatório de Notas
const aluno = {
  notas: [7, 8, 6, 9],
  calcularMedia() { return this.notas.reduce((acumulador, nota) => acumulador + nota, 0) / this.notas.length; }
};

// 6. Carrinho de Compras
const carrinhoDeCompras = {
  itens: [],
  adicionarItem(item) { this.itens.push(item); },
  removerItem(nomeItem) { this.itens = this.itens.filter(item => item.nome !== nomeItem); },
  calcularTotal() { return this.itens.reduce((soma, item) => soma + item.quantidade * item.valor, 0); }
};

// 7. Filtrar Alunos Aprovados
const alunos = [
  { nome: "Ana", media: 7 },
  { nome: "Carlos", media: 5 },
  { nome: "Maria", media: 8 }
];
const nomesAprovados = alunos.filter(aluno => aluno.media > 6).map(aluno => aluno.nome);

// 8. Conversor de Moedas com Objeto
const conversorMoedas = {
  taxasDeCambio: { USD: 5.3, EUR: 6.2 },
  converter(valor, deMoeda, paraMoeda) {
    return valor / this.taxasDeCambio[deMoeda] * this.taxasDeCambio[paraMoeda];
  }
};

// 1. Banco com Múltiplas Contas
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

// 2. Sistema de Votação
const sistemaVotacao = {
  votosPorCandidato: {},
  votar(candidato) { this.votosPorCandidato[candidato] = (this.votosPorCandidato[candidato] || 0) + 1; },
  candidatoMaisVotado() {
    return Object.entries(this.votosPorCandidato).reduce((maisVotado, atual) => atual[1] > maisVotado[1] ? atual : maisVotado, ["",0])[0];
  }
};

// 3. Agenda Semanal de Compromissos
const agendaSemanal = {
  compromissosPorDia: { seg: [], ter: [], qua: [], qui: [], sex: [], sab: [], dom: [] },
  adicionarCompromisso(dia, compromisso) { this.compromissosPorDia[dia].push(compromisso); },
  removerCompromisso(dia, compromisso) { this.compromissosPorDia[dia] = this.compromissosPorDia[dia].filter(c => c !== compromisso); },
  listarCompromissos(dia) { this.compromissosPorDia[dia].forEach(compromisso => console.log(compromisso)); }
};

// 4. Gerador de Fichas de RPG
const gerarPersonagem = () => ({
  forca: Math.ceil(Math.random() * 10),
  destreza: Math.ceil(Math.random() * 10),
  vida: Math.ceil(Math.random() * 10)
});
const personagensCriados = [gerarPersonagem(), gerarPersonagem()];

// 5. Validador de Formulário com Objeto
function validarFormulario(formulario) {
  const mensagensErro = {};
  if(!formulario.nome) mensagensErro.nome = "Nome obrigatório";
  if(!formulario.email?.includes("@")) mensagensErro.email = "Email inválido";
  if(!(formulario.idade > 0)) mensagensErro.idade = "Idade inválida";
  return mensagensErro;
}

// 6. Sistema de Gestão de Projetos
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

// 7. Simulador de Jogo de Dados
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
